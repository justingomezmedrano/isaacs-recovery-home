import nodemailer from 'nodemailer'

export interface EmailData {
  to: string
  from: string
  subject: string
  html: string
  text: string
  replyTo?: string
}

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

  constructor() {
    this.initializeSMTP()
  }

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

  async sendEmail(emailData: EmailData): Promise<{ success: boolean; messageId?: string; error?: string }> {
    try {
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
    } catch (error) {
      console.error('Email sending failed:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      }
    }
  }

  async verifyConnection(): Promise<boolean> {
    if (this.smtpTransporter) {
      try {
        await this.smtpTransporter.verify()
        return true
      } catch (error) {
        console.error('SMTP connection failed:', error)
        return false
      }
    }
    return false
  }
}
