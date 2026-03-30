# API Routes

## POST /api/contact

**Purpose**: Handle contact form submissions

**Request**: FormData
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| name | string | Yes | 2-100 characters |
| email | string | Yes | Valid email, max 254 chars |
| phone | string | No | Sanitized |
| message | string | Yes | 10-5000 characters |
| _gotcha | string | No | Honeypot (must be empty) |

**Response**: JSON
- Success: `{ success: true, message: "Email sent successfully" }`
- Error: `{ error: "Error description" }` with appropriate status code

**Behavior**:
1. Validates and sanitizes all inputs
2. Sends notification email to CONTACT_EMAIL with formatted HTML
3. Sends auto-reply confirmation to the submitter
4. Returns success/error JSON response

---

## POST /api/intake

**Purpose**: Handle intake application form submissions

**Request**: FormData
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| fullName | string | Yes | 2-100 characters |
| phone | string | Yes | 7-20 characters |
| email | string | Yes | Valid email |
| emergencyContactName | string | Yes | Non-empty |
| emergencyContactPhone | string | Yes | Non-empty |
| moveInDate | string | No | Date string |
| drugOfChoice | string | Yes | 1-500 characters |
| lengthOfUse | string | Yes | Non-empty |
| lastDateOfUse | string | Yes | Date string |
| medicalConditions | string | No | Sanitized |
| medications | string | No | Sanitized |
| mentalHealth | string | No | Sanitized |
| allergies | string | No | Sanitized |
| criminalBackground | string | No | Sanitized |
| onProbation | string | No | "no", "probation", or "parole" |
| pendingCases | string | No | Sanitized |
| whyJoin | string | Yes | 10-5000 characters |
| whySobriety | string | Yes | 10-5000 characters |

**Response**: JSON
- Success: `{ success: true, message: "Application submitted successfully" }`
- Error: `{ error: "Error description" }` with appropriate status code

**Behavior**:
1. Validates and sanitizes all inputs
2. Sends comprehensive intake application email to INTAKE_EMAIL with all sections
3. Sends auto-reply confirmation to the applicant
4. Returns success/error JSON response
