/*
 * EMAIL SERVICE - Resend API email provider
 *
 * Uses Resend (https://resend.com) for transactional email delivery.
 *
 * Required environment variables (.env.local):
 *   RESEND_API_KEY=re_xxxxxxxxxxxx     (from https://resend.com/api-keys)
 *   FROM_EMAIL=noreply@yourdomain.com  (verified sender in Resend)
 *   CONTACT_EMAIL=admin@domain.com     (where contact form emails go)
 *   INTAKE_EMAIL=admin@domain.com      (where intake applications go)
 *
 * Used by:
 *   - src/app/api/contact/route.ts (contact form submissions)
 *   - src/app/api/intake/route.ts  (intake application submissions)
 */
import { Resend } from 'resend'

/* Email data structure */
export interface EmailData {
  to: string
  from: string
  subject: string
  html: string
  text: string
  replyTo?: string
}

export class EmailService {
  private resendClient: Resend

  constructor() {
    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not set in environment variables')
    }
    this.resendClient = new Resend(apiKey)
  }

  /* Send an email via Resend API
   * Returns { success, messageId } on success or { success: false, error } on failure */
  async sendEmail(emailData: EmailData): Promise<{ success: boolean; messageId?: string; error?: string }> {
    try {
      const result = await this.resendClient.emails.send({
        from: emailData.from,
        to: emailData.to,
        subject: emailData.subject,
        html: emailData.html,
        text: emailData.text,
        replyTo: emailData.replyTo,
      })

      return {
        success: true,
        messageId: result.data?.id,
      }
    } catch (error) {
      console.error('Email sending failed:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      }
    }
  }
}
