const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../data/content-db.json');

function readContentDb() {
  if (!fs.existsSync(dbPath)) return [];
  const data = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(data);
}

function writeContentDb(contentArray) {
  fs.writeFileSync(dbPath, JSON.stringify(contentArray, null, 2), 'utf-8');
}

module.exports = { readContentDb, writeContentDb, dbPath };
