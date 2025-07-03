const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../data/streams-db.json');

function readStreamsDb() {
  if (!fs.existsSync(dbPath)) return [];
  const data = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(data);
}

function writeStreamsDb(streamArray) {
  fs.writeFileSync(dbPath, JSON.stringify(streamArray, null, 2), 'utf-8');
}

module.exports = { readStreamsDb, writeStreamsDb, dbPath };
