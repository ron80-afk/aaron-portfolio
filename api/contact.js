import { neon } from '@neondatabase/serverless'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' })
  }

  const { full_name: fullName, email, message } = request.body ?? {}

  if (
    typeof fullName !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    !fullName.trim() ||
    !emailPattern.test(email.trim()) ||
    !message.trim() ||
    fullName.trim().length > 255
  ) {
    return response.status(400).json({ error: 'Please provide valid contact details.' })
  }

  try {
    const sql = neon(process.env.NEON_DB)
    await sql`
      INSERT INTO public.contact_messages (full_name, email, message)
      VALUES (${fullName.trim()}, ${email.trim()}, ${message.trim()})
    `

    return response.status(201).json({ success: true })
  } catch (error) {
    console.error('Contact message insert failed:', error)
    return response.status(500).json({ error: 'Unable to save contact message.' })
  }
}
