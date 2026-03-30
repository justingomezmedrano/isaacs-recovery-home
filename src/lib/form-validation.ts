export function sanitize(str: string): string {
  return str.trim().replace(/[<>]/g, '')
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email) && email.length <= 254
}

export function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-().+]/g, '')
  return cleaned.length >= 7 && cleaned.length <= 15 && /^\d+$/.test(cleaned)
}

export function validateRequired(value: string, fieldName: string, min = 1, max = 5000): string | null {
  if (!value || value.trim().length === 0) {
    return `${fieldName} is required`
  }
  if (value.trim().length < min) {
    return `${fieldName} must be at least ${min} characters`
  }
  if (value.trim().length > max) {
    return `${fieldName} must be less than ${max} characters`
  }
  return null
}
