import { NextRequest, NextResponse } from 'next/server'
import { EmailService } from '@/lib/email-service'
import { sanitize, validateEmail, validateRequired } from '@/lib/form-validation'

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

const emailService = new EmailService()

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Honeypot check
    if (formData.get('_gotcha')) {
      return NextResponse.json({ success: true, message: 'Email sent successfully' })
    }

    const data: ContactFormData = {
      name: sanitize(formData.get('name') as string || ''),
      email: sanitize(formData.get('email') as string || ''),
      phone: sanitize(formData.get('phone') as string || ''),
      message: sanitize(formData.get('message') as string || ''),
    }

    const nameError = validateRequired(data.name, 'Name', 2, 100)
    if (nameError) {
      return NextResponse.json({ error: nameError }, { status: 400 })
    }

    if (!validateEmail(data.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    const messageError = validateRequired(data.message, 'Message', 10, 5000)
    if (messageError) {
      return NextResponse.json({ error: messageError }, { status: 400 })
    }

    /* Verify Resend is configured */
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY')
      return NextResponse.json({ error: 'Email service configuration error' }, { status: 500 })
    }

    const fromEmail = process.env.FROM_EMAIL || 'noreply@isaacsrecoveryhome.com'
    const toEmail = process.env.CONTACT_EMAIL || 'justingomezmedrano7@gmail.com'
    const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Isaac's Recovery Home"

    const notificationHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #ccc; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #e1c5a0, #DA9C14); color: white; padding: 30px 20px; border-radius: 12px 12px 0 0; text-align: center; }
        .content { background: #070503; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #1d170f; }
        .field { margin: 20px 0; }
        .label { font-weight: 600; color: #c8beae; margin-bottom: 8px; display: block; }
        .value { background: black; padding: 12px 16px; border-radius: 8px; border: 1px solid #2e2a24; font-size: 16px; }
        .message { background: black; padding: 20px; border-radius: 8px; border-left: 4px solid #DA9C14; white-space: pre-wrap; line-height: 1.6; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #d1d5db; font-size: 14px; color: #948d7f; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">${companyName}</p>
        </div>
        <div class="content">
            <div class="field">
                <span class="label">Name:</span>
                <div class="value">${data.name}</div>
            </div>
            <div class="field">
                <span class="label">Email:</span>
                <div class="value"><a href="mailto:${data.email}" style="color: #DA9C14;">${data.email}</a></div>
            </div>
            ${data.phone ? `
            <div class="field">
                <span class="label">Phone:</span>
                <div class="value"><a href="tel:${data.phone}" style="color: #DA9C14;">${data.phone}</a></div>
            </div>
            ` : ''}
            <div class="field">
                <span class="label">Message:</span>
                <div class="message">${data.message}</div>
            </div>
            <div class="footer">
                <p><strong>Submission Details:</strong></p>
                <p>Time: ${new Date().toLocaleString()}</p>
                <p>IP: ${request.headers.get('x-forwarded-for') || 'unknown'}</p>
            </div>
        </div>
    </div>
</body>
</html>`

    const notificationText = `New Contact Form Submission - ${companyName}\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'Not provided'}\n\nMessage:\n${data.message}\n\nTimestamp: ${new Date().toISOString()}`

    await emailService.sendEmail({
      from: fromEmail,
      to: toEmail,
      subject: `New Contact: ${data.name}`,
      html: notificationHtml,
      text: notificationText,
      replyTo: data.email,
    })

    const autoReplyHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #ccc; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #e1c5a0, #DA9C14); color: white; padding: 30px 20px; border-radius: 12px 12px 0 0; text-align: center; }
        .content { background: #070503; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #1d170f; }
        .highlight { background: black; padding: 20px; border-radius: 8px; border-left: 4px solid #2B57BC; margin: 20px 0; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #d1d5db; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0; font-size: 28px;">Thank You, ${data.name}</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">${companyName}</p>
        </div>
        <div class="content">
            <p style="font-size: 18px;">Hi ${data.name},</p>
            <p>Thank you for reaching out to ${companyName}. We have received your message and will respond as soon as possible.</p>
            <div class="highlight">
                <h3 style="margin-top: 0; color: #2B57BC;">What happens next?</h3>
                <ul style="margin: 15px 0; padding: 0 0 0 20px;">
                    <li style="margin: 8px 0;">We will review your message within 24 to 48 hours</li>
                    <li style="margin: 8px 0;">Our Program Director will reach out to you</li>
                    <li style="margin: 8px 0;">For immediate assistance, call us at <strong>${process.env.NEXT_PUBLIC_CONTACT_PHONE || '940-232-8252'}</strong></li>
                </ul>
            </div>
            <div class="footer">
                <p><strong>${process.env.NEXT_PUBLIC_DIRECTOR_NAME || 'Justin Gomez Medrano'}</strong><br>
                Program Director<br>
                ${companyName}</p>
                <p style="font-size: 12px; margin-top: 20px; color: #948d7f;">
                    This confirmation was sent automatically. You can reply directly to this email to reach us.
                </p>
            </div>
        </div>
    </div>
</body>
</html>`

    const autoReplyText = `Hi ${data.name},\n\nThank you for reaching out to ${companyName}. We have received your message and will respond within 24 to 48 hours.\n\nFor immediate assistance, call us at ${process.env.NEXT_PUBLIC_CONTACT_PHONE || '940-232-8252'}.\n\n${process.env.NEXT_PUBLIC_DIRECTOR_NAME || 'Justin Gomez Medrano'}\nProgram Director\n${companyName}`

    await emailService.sendEmail({
      from: fromEmail,
      to: data.email,
      subject: `Thank you for contacting ${companyName}`,
      html: autoReplyHtml,
      text: autoReplyText,
    })

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again or call us directly.' },
      { status: 500 }
    )
  }
}
