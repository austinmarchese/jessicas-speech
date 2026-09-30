import { NextResponse } from 'next/server'

// Backup delivery for the contact forms. If formsubmit.co hangs, the client posts the
// full submission here and we forward it to Slack so no inquiry is lost.
export async function POST(req: Request) {
  const webhook = process.env.SLACK_WEBHOOK_URL
  if (!webhook) {
    return NextResponse.json({ error: 'SLACK_WEBHOOK_URL not set' }, { status: 500 })
  }

  let fields: Record<string, string>
  try {
    fields = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  // Honeypot filled means a bot.
  if (fields._honey) return NextResponse.json({ ok: true })

  const subject = fields._subject || 'New website form submission'
  const lines = Object.entries(fields)
    .filter(([key, value]) => !key.startsWith('_') && value)
    .map(([key, value]) => `*${key.replace(/_/g, ' ')}:* ${value}`)

  const text = [
    `:rotating_light: *${subject}* (formsubmit.co timed out, sent via backup. Jess may not have this in email.)`,
    ...lines,
  ].join('\n')

  const res = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: 'Slack webhook failed' }, { status: 502 })
  }
  return NextResponse.json({ ok: true })
}
