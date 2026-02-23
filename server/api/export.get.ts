import type { H3Event } from 'h3';
import db from '../db/database';
import { stringify } from 'csv-stringify/sync';

export default defineEventHandler(async (event: H3Event) => {
  const password = getHeader(event, 'x-admin-password') || event.context.params?.password || '';
  if (password !== process.env.ADMIN_PASSWORD) {
    return sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized' }));
  }
  const attendees = db.prepare('SELECT * FROM attendees ORDER BY created_at DESC').all();
  const csv = stringify(attendees, { header: true });
  setHeader(event, 'Content-Type', 'text/csv');
  setHeader(event, 'Content-Disposition', 'attachment; filename="attendees.csv"');
  return csv;
});
