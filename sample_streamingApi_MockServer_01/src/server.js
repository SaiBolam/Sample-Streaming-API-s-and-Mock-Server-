const express = require('express');
const cors = require('cors');
const contentRoutes = require('./routes/contentRoutes');
const streamRoutes = require('./routes/streamRoutes');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), service: 'Streaming Mock API' });
});

app.use('/api/content', contentRoutes);
app.use('/api/streams', streamRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
