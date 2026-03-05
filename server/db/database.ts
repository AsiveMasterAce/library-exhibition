import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'pathe';

type Attendee = {
  id: number;
  full_name: string;
  email: string;
  phone: string | null;
  reason: string | null;
  comment: string | null;
  created_at: string;
};

type DbShape = {
  attendees: Attendee[];
};

const dbPath = join(process.cwd(), 'database.json');

const readDb = (): DbShape => {
  if (!existsSync(dbPath)) {
    return { attendees: [] };
  }
  try {
    return JSON.parse(readFileSync(dbPath, 'utf-8')) as DbShape;
  } catch {
    return { attendees: [] };
  }
};

const writeDb = (db: DbShape) => {
  writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');
};

const db = {
  prepare(query: string) {
    if (query.startsWith('INSERT INTO attendees')) {
      return {
        run(full_name: string, email: string, phone: string | null, reason: string | null, comment: string | null) {
          const data = readDb();
          const normalizedEmail = email.trim().toLowerCase();
          const duplicate = data.attendees.find((row) => row.email === normalizedEmail);
          if (duplicate) {
            const err = new Error('Email already registered') as Error & { code?: string };
            err.code = 'SQLITE_CONSTRAINT_UNIQUE';
            throw err;
          }

          const nextId = data.attendees.length > 0 ? Math.max(...data.attendees.map((row) => row.id)) + 1 : 1;
          data.attendees.push({
            id: nextId,
            full_name,
            email: normalizedEmail,
            phone,
            reason,
            comment,
            created_at: new Date().toISOString(),
          });
          writeDb(data);
        },
      };
    }

    if (query.startsWith('SELECT * FROM attendees')) {
      return {
        all() {
          const data = readDb();
          return [...data.attendees].sort((a, b) => b.created_at.localeCompare(a.created_at));
        },
      };
    }

    return {
      run() {
        throw new Error('Unsupported query');
      },
      all() {
        throw new Error('Unsupported query');
      },
    };
  },
};

export default db;
