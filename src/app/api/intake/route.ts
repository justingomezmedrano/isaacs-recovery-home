import { NextRequest, NextResponse } from 'next/server'
import { EmailService } from '@/lib/email-service'
import { sanitize, validateEmail, validateRequired } from '@/lib/form-validation'

const emailService = new EmailService()

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const data = {
      fullName: sanitize(formData.get('fullName') as string || ''),
      phone: sanitize(formData.get('phone') as string || ''),
      email: sanitize(formData.get('email') as string || ''),
      emergencyContactName: sanitize(formData.get('emergencyContactName') as string || ''),
      emergencyContactPhone: sanitize(formData.get('emergencyContactPhone') as string || ''),
      moveInDate: sanitize(formData.get('moveInDate') as string || ''),
      drugOfChoice: sanitize(formData.get('drugOfChoice') as string || ''),
      lengthOfUse: sanitize(formData.get('lengthOfUse') as string || ''),
      lastDateOfUse: sanitize(formData.get('lastDateOfUse') as string || ''),
      medicalConditions: sanitize(formData.get('medicalConditions') as string || ''),
      medications: sanitize(formData.get('medications') as string || ''),
      mentalHealth: sanitize(formData.get('mentalHealth') as string || ''),
      allergies: sanitize(formData.get('allergies') as string || ''),
      criminalBackground: sanitize(formData.get('criminalBackground') as string || ''),
      onProbation: sanitize(formData.get('onProbation') as string || 'no'),
      pendingCases: sanitize(formData.get('pendingCases') as string || ''),
      whyJoin: sanitize(formData.get('whyJoin') as string || ''),
      whySobriety: sanitize(formData.get('whySobriety') as string || ''),
    }

    // Validate required fields
    const nameError = validateRequired(data.fullName, 'Full name', 2, 100)
    if (nameError) return NextResponse.json({ error: nameError }, { status: 400 })

    if (!validateEmail(data.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    const phoneError = validateRequired(data.phone, 'Phone number', 7, 20)
    if (phoneError) return NextResponse.json({ error: phoneError }, { status: 400 })

    const drugError = validateRequired(data.drugOfChoice, 'Drug of choice', 1, 500)
    if (drugError) return NextResponse.json({ error: drugError }, { status: 400 })

    const joinError = validateRequired(data.whyJoin, 'Personal statement (why join)', 10, 5000)
    if (joinError) return NextResponse.json({ error: joinError }, { status: 400 })

    const sobrietyError = validateRequired(data.whySobriety, 'Personal statement (why sobriety)', 10, 5000)
    if (sobrietyError) return NextResponse.json({ error: sobrietyError }, { status: 400 })

    /* Verify Resend is configured */
    if (!process.env.RESEND_API_KEY) {
      console.error('Missing RESEND_API_KEY')
      return NextResponse.json({ error: 'Email service configuration error' }, { status: 500 })
    }

    const fromEmail = process.env.FROM_EMAIL || 'noreply@isaacsrecoveryhome.com'
    const intakeEmail = process.env.INTAKE_EMAIL || process.env.CONTACT_EMAIL || 'justingomezmedrano7@gmail.com'
    const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Isaac's Recovery Home"

    const section = (title: string, content: string) =>
      content ? `<div class="section"><h3>${title}</h3><div class="value">${content}</div></div>` : ''

    const notificationHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 700px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1e3a5f, #2563EB); color: white; padding: 30px 20px; border-radius: 12px 12px 0 0; text-align: center; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; }
        .section { margin: 20px 0; }
        .section h3 { color: #1e3a5f; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; border-bottom: 2px solid #DBEAFE; padding-bottom: 4px; }
        .value { background: white; padding: 12px 16px; border-radius: 8px; border: 1px solid #d1d5db; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .field { margin: 8px 0; }
        .label { font-weight: 600; color: #374151; font-size: 13px; }
        .statement { background: white; padding: 16px; border-radius: 8px; border-left: 4px solid #D4A843; white-space: pre-wrap; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #d1d5db; font-size: 13px; color: #6b7280; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0; font-size: 24px;">New Intake Application</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">${companyName}</p>
        </div>
        <div class="content">
            <div class="section">
                <h3>Personal Information</h3>
                <div class="value">
                    <div class="field"><span class="label">Name:</span> ${data.fullName}</div>
                    <div class="field"><span class="label">Phone:</span> <a href="tel:${data.phone}">${data.phone}</a></div>
                    <div class="field"><span class="label">Email:</span> <a href="mailto:${data.email}">${data.email}</a></div>
                    <div class="field"><span class="label">Emergency Contact:</span> ${data.emergencyContactName} (${data.emergencyContactPhone})</div>
                    ${data.moveInDate ? `<div class="field"><span class="label">Desired Move-in:</span> ${data.moveInDate}</div>` : ''}
                </div>
            </div>

            <div class="section">
                <h3>Substance Use History</h3>
                <div class="value">
                    <div class="field"><span class="label">Drug of Choice:</span> ${data.drugOfChoice}</div>
                    <div class="field"><span class="label">Length of Use:</span> ${data.lengthOfUse}</div>
                    <div class="field"><span class="label">Last Date of Use:</span> ${data.lastDateOfUse}</div>
                </div>
            </div>

            ${section('Medical Conditions', data.medicalConditions)}
            ${section('Medications', data.medications)}
            ${section('Mental Health', data.mentalHealth)}
            ${section('Allergies', data.allergies)}

            <div class="section">
                <h3>Legal Background</h3>
                <div class="value">
                    ${data.criminalBackground ? `<div class="field"><span class="label">Criminal Background:</span> ${data.criminalBackground}</div>` : '<div class="field">No criminal background reported</div>'}
                    <div class="field"><span class="label">Probation/Parole:</span> ${data.onProbation === 'no' ? 'No' : data.onProbation}</div>
                    ${data.pendingCases ? `<div class="field"><span class="label">Pending Cases:</span> ${data.pendingCases}</div>` : ''}
                </div>
            </div>

            <div class="section">
                <h3>Why do you want to join?</h3>
                <div class="statement">${data.whyJoin}</div>
            </div>

            <div class="section">
                <h3>Why is sobriety important to you?</h3>
                <div class="statement">${data.whySobriety}</div>
            </div>

            <div class="footer">
                <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>IP:</strong> ${request.headers.get('x-forwarded-for') || 'unknown'}</p>
                <p>The applicant has agreed to house rules, faith-based program requirements, and random drug testing.</p>
            </div>
        </div>
    </div>
</body>
</html>`

    const notificationText = `NEW INTAKE APPLICATION - ${companyName}\n\nName: ${data.fullName}\nPhone: ${data.phone}\nEmail: ${data.email}\nEmergency Contact: ${data.emergencyContactName} (${data.emergencyContactPhone})\nMove-in Date: ${data.moveInDate || 'Not specified'}\n\nSUBSTANCE USE\nDrug of Choice: ${data.drugOfChoice}\nLength of Use: ${data.lengthOfUse}\nLast Use: ${data.lastDateOfUse}\n\nMEDICAL\nConditions: ${data.medicalConditions || 'None reported'}\nMedications: ${data.medications || 'None reported'}\nMental Health: ${data.mentalHealth || 'None reported'}\nAllergies: ${data.allergies || 'None reported'}\n\nLEGAL\nCriminal Background: ${data.criminalBackground || 'None reported'}\nProbation/Parole: ${data.onProbation}\nPending Cases: ${data.pendingCases || 'None reported'}\n\nPERSONAL STATEMENT\nWhy join: ${data.whyJoin}\nWhy sobriety: ${data.whySobriety}\n\nAgreed to: House rules, faith-based program, drug testing\nSubmitted: ${new Date().toISOString()}`

    await emailService.sendEmail({
      from: fromEmail,
      to: intakeEmail,
      subject: `New Intake Application: ${data.fullName}`,
      html: notificationHtml,
      text: notificationText,
      replyTo: data.email,
    })

    // Auto-reply to applicant
    const autoReplyHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1e3a5f, #2563EB); color: white; padding: 30px 20px; border-radius: 12px 12px 0 0; text-align: center; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; }
        .highlight { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #059669; margin: 20px 0; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #d1d5db; text-align: center; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0; font-size: 28px;">Application Received</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.9;">${companyName}</p>
        </div>
        <div class="content">
            <p style="font-size: 18px;">Dear ${data.fullName},</p>
            <p>Thank you for submitting your application to ${companyName}. We have received your intake form and it is now under review.</p>
            <div class="highlight">
                <h3 style="margin-top: 0; color: #059669;">What happens next?</h3>
                <ul style="margin: 15px 0; padding: 0 0 0 20px;">
                    <li style="margin: 8px 0;">Our Program Director will review your application</li>
                    <li style="margin: 8px 0;">You will be contacted to schedule an intake interview</li>
                    <li style="margin: 8px 0;">For questions, call <strong>${process.env.NEXT_PUBLIC_CONTACT_PHONE || '940-232-8252'}</strong></li>
                </ul>
            </div>
            <p>We admire your courage in taking this step toward recovery. We look forward to speaking with you soon.</p>
            <div class="footer">
                <p><strong>${process.env.NEXT_PUBLIC_DIRECTOR_NAME || 'Justin Gomez Medrano'}</strong><br>
                Program Director<br>
                ${companyName}</p>
                <p style="font-size: 12px; margin-top: 20px; color: #6b7280;">
                    This confirmation was sent automatically. You can reply directly to this email.
                </p>
            </div>
        </div>
    </div>
</body>
</html>`

    const autoReplyText = `Dear ${data.fullName},\n\nThank you for submitting your application to ${companyName}. We have received your intake form and it is now under review.\n\nWhat happens next:\n- Our Program Director will review your application\n- You will be contacted to schedule an intake interview\n- For questions, call ${process.env.NEXT_PUBLIC_CONTACT_PHONE || '940-232-8252'}\n\nWe admire your courage in taking this step toward recovery.\n\n${process.env.NEXT_PUBLIC_DIRECTOR_NAME || 'Justin Gomez Medrano'}\nProgram Director\n${companyName}`

    await emailService.sendEmail({
      from: fromEmail,
      to: data.email,
      subject: `Application Received - ${companyName}`,
      html: autoReplyHtml,
      text: autoReplyText,
    })

    return NextResponse.json({ success: true, message: 'Application submitted successfully' })
  } catch (error) {
    console.error('Intake form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again or call us directly at 940-232-8252.' },
      { status: 500 }
    )
  }
}
