/*
 * EMAIL SERVICE - Dual-provider email system (SMTP + Resend)
 *
 * Supports two email providers, controlled by EMAIL_PROVIDER in .env.local:
 *   - "smtp"   : Uses Nodemailer with SMTP (e.g., MXRoute, Gmail SMTP)
 *   - "resend" : Uses Resend API (https://resend.com - free tier: 100 emails/day)
 *
 * The provider is selected at startup. Both use the same EmailData interface,
 * so switching providers requires only changing the EMAIL_PROVIDER env var.
 *
 * SMTP Configuration (.env.local):
 *   EMAIL_PROVIDER=smtp
 *   SMTP_HOST=heracles.mxrouting.net   (or smtp.gmail.com for Gmail)
 *   SMTP_PORT=587
 *   SMTP_SECURE=false                  (true for port 465)
 *   SMTP_USER=your-email@domain.com
 *   SMTP_PASS=your-password
 *
 * Resend Configuration (.env.local):
 *   EMAIL_PROVIDER=resend
 *   RESEND_API_KEY=re_xxxxxxxxxxxx     (from https://resend.com/api-keys)
 *
 * Both providers use these shared variables:
 *   FROM_EMAIL=noreply@yourdomain.com  (sender address)
 *   CONTACT_EMAIL=admin@domain.com     (where contact form emails go)
 *   INTAKE_EMAIL=admin@domain.com      (where intake applications go)
 *
 * Used by:
 *   - src/app/api/contact/route.ts (contact form submissions)
 *   - src/app/api/intake/route.ts  (intake application submissions)
 */
import nodemailer from 'nodemailer'
import { Resend } from 'resend'

/* Email data structure - same for both providers */
export interface EmailData {
  to: string
  from: string
  subject: string
  html: string
  text: string
  replyTo?: string
}

/* SMTP-specific configuration */
export interface SMTPConfig {
  host: string
  port: number
  secure: boolean
  auth: {
    user: string
    pass: string
  }
}

export class EmailService {
  private smtpTransporter?: nodemailer.Transporter
  private resendClient?: Resend
  private useSmtp: boolean

  constructor() {
    /* Determine which provider to use based on EMAIL_PROVIDER env var
     * Defaults to "smtp" if not set */
    this.useSmtp = process.env.EMAIL_PROVIDER !== 'resend'

    if (this.useSmtp) {
      this.initializeSMTP()
    } else {
      this.initializeResend()
    }
  }

  /* Set up Nodemailer SMTP transport
   * Reads SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS from env */
  private initializeSMTP() {
    const smtpConfig: SMTPConfig = {
      host: process.env.SMTP_HOST || '',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
    }

    this.smtpTransporter = nodemailer.createTransport(smtpConfig)
  }

  /* Set up Resend API client
   * Reads RESEND_API_KEY from env */
  private initializeResend() {
    if (process.env.RESEND_API_KEY) {
      this.resendClient = new Resend(process.env.RESEND_API_KEY)
    }
  }

  /* Send an email using whichever provider is configured
   * Returns { success, messageId } on success or { success: false, error } on failure */
  async sendEmail(emailData: EmailData): Promise<{ success: boolean; messageId?: string; error?: string }> {
    try {
      if (this.useSmtp && this.smtpTransporter) {
        return await this.sendViaSMTP(emailData)
      } else if (!this.useSmtp && this.resendClient) {
        return await this.sendViaResend(emailData)
      } else {
        throw new Error(
          this.useSmtp
            ? 'SMTP transporter not initialized - check SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local'
            : 'Resend client not initialized - check RESEND_API_KEY in .env.local'
        )
      }
    } catch (error) {
      console.error('Email sending failed:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      }
    }
  }

  /* Send via SMTP (Nodemailer) */
  private async sendViaSMTP(emailData: EmailData) {
    if (!this.smtpTransporter) {
      throw new Error('SMTP transporter not initialized')
    }

    const mailOptions = {
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
      html: emailData.html,
      text: emailData.text,
      replyTo: emailData.replyTo,
    }

    const info = await this.smtpTransporter.sendMail(mailOptions)

    return {
      success: true,
      messageId: info.messageId,
    }
  }

  /* Send via Resend API */
  private async sendViaResend(emailData: EmailData) {
    if (!this.resendClient) {
      throw new Error('Resend client not initialized')
    }

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
  }

  /* Test the connection (SMTP only - Resend doesn't need verification) */
  async verifyConnection(): Promise<boolean> {
    if (this.useSmtp && this.smtpTransporter) {
      try {
        await this.smtpTransporter.verify()
        return true
      } catch (error) {
        console.error('SMTP connection failed:', error)
        return false
      }
    }

    /* Resend doesn't have a verify method - if API key is set, assume OK */
    return !!this.resendClient
  }
}
