import Database from 'better-sqlite3';
import { join } from 'pathe';

const dbPath = join(process.cwd(), 'database.db');
const db = new Database(dbPath);

db.exec(`CREATE TABLE IF NOT EXISTS attendees (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  reason TEXT,
  comment TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_attendees_email ON attendees(email);`);

export default db;
