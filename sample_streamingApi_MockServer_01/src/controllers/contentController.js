const { readContentDb, writeContentDb } = require('../utils/fileDb');
const { v4: uuidv4 } = require('uuid');

// Get all content
exports.getAllContent = (req, res) => {
  const content = readContentDb();
  res.json(content);
};

// Get content by ID
exports.getContentById = (req, res) => {
  const content = readContentDb();
  const item = content.find(c => c.id === req.params.id);
  if (!item) return res.status(404).json({ error: 'Content not found' });
  res.json(item);
};

// Create new content
exports.createContent = (req, res) => {
  const content = readContentDb();
  const newContent = {
    id: `content-${uuidv4()}`,
    ...req.body,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  content.push(newContent);
  writeContentDb(content);
  res.status(201).json(newContent);
};

// Update content
exports.updateContent = (req, res) => {
  const content = readContentDb();
  const index = content.findIndex(c => c.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Content not found' });
  const updated = {
    ...content[index],
    ...req.body,
    updatedAt: new Date().toISOString()
  };
  content[index] = updated;
  writeContentDb(content);
  res.json(updated);
};

// Delete content
exports.deleteContent = (req, res) => {
  const content = readContentDb();
  const index = content.findIndex(c => c.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Content not found' });
  const deleted = content.splice(index, 1);
  writeContentDb(content);
  res.json(deleted[0]);
};