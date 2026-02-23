import type { H3Event } from 'h3';
import db from '../db/database';
import { z } from 'zod';

const schema = z.object({
  full_name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  reason: z.string().max(255).optional(),
  comment: z.string().max(500).optional(),
});

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return sendError(event, createError({ statusCode: 400, statusMessage: 'Invalid input' }));
  }
  const { full_name, email, phone, reason, comment } = parsed.data;
  try {
    const stmt = db.prepare('INSERT INTO attendees (full_name, email, phone, reason, comment) VALUES (?, ?, ?, ?, ?)');
    stmt.run(full_name.trim(), email.trim().toLowerCase(), phone?.trim() || null, reason?.trim() || null, comment?.trim() || null);
    return { success: true };
  } catch (err: any) {
    if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return sendError(event, createError({ statusCode: 409, statusMessage: 'Email already registered' }));
    }
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Registration failed' }));
  }
});
