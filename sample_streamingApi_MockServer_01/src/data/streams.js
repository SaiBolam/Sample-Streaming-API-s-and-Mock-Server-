module.exports = [
  {
    id: 'stream-1',
    contentId: 'content-1',
    status: 'active',
    isLive: true,
    startTime: '2025-06-30T19:00:00Z',
    endTime: '2025-06-30T21:00:00Z',
    playbackUrl: 'https://stream.example.com/live/stream-1.m3u8',
    rtmpUrl: 'rtmp://ingest.example.com/live/stream-1',
    streamKey: 'live_1234567890',
    variants: [
      { id: '1080p', bitrate: 6000000, resolution: '1920x1080', codec: 'h264' },
      { id: '720p', bitrate: 3000000, resolution: '1280x720', codec: 'h264' },
      { id: '480p', bitrate: 1500000, resolution: '854x480', codec: 'h264' }
    ]
  }
];
