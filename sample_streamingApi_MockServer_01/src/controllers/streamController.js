const { readStreamsDb, writeStreamsDb } = require('../utils/streamFileDb');
const { v4: uuidv4 } = require('uuid');

// Get all streams
exports.getAllStreams = (req, res) => {
  const streams = readStreamsDb();
  res.json(streams);
};

// Get stream by ID
exports.getStreamById = (req, res) => {
  const streams = readStreamsDb();
  const stream = streams.find(s => s.id === req.params.id);
  if (!stream) return res.status(404).json({ error: 'Stream not found' });
  res.json(stream);
};

// Start a stream
exports.startStream = (req, res) => {
  const streams = readStreamsDb();
  const stream = streams.find(s => s.id === req.params.id);
  if (!stream) return res.status(404).json({ error: 'Stream not found' });
  stream.status = 'active';
  stream.isLive = true;
  stream.startedAt = new Date().toISOString();
  writeStreamsDb(streams);
  res.json(stream);
};

// Stop a stream
exports.stopStream = (req, res) => {
  const streams = readStreamsDb();
  const stream = streams.find(s => s.id === req.params.id);
  if (!stream) return res.status(404).json({ error: 'Stream not found' });
  stream.status = 'ended';
  stream.isLive = false;
  stream.endedAt = new Date().toISOString();
  writeStreamsDb(streams);
  res.json(stream);
};

// Create a new stream
exports.createStream = (req, res) => {
  const streams = readStreamsDb();
  const now = new Date();
  const createdAt = new Date(now.getTime() - 2 * 60 * 60 * 1000).toISOString(); // now - 2 hours
  const updatedAt = createdAt;
  const startedAt = new Date(now.getTime() - 1 * 60 * 60 * 1000).toISOString(); // now - 1 hour
  const newStream = {
    id: `stream-${uuidv4()}`,
    ...req.body,
    status: req.body.status || 'scheduled',
    isLive: req.body.isLive || false,
    createdAt,
    updatedAt,
    startedAt
  };
  streams.push(newStream);
  writeStreamsDb(streams);
  res.status(201).json(newStream);
};

// Get stream health
exports.getStreamHealth = (req, res) => {
  const streams = readStreamsDb();
  const stream = streams.find(s => s.id === req.params.id);
  if (!stream) return res.status(404).json({ error: 'Stream not found' });
  res.json({
    streamId: stream.id,
    status: stream.status,
    timestamp: new Date().toISOString(),
    viewers: Math.floor(Math.random() * 1000),
    bitrate: stream.variants && stream.variants[0] ? stream.variants[0].bitrate : 3000000,
    latency: Math.floor(Math.random() * 10) + 1,
    health: 'good'
  });
};
