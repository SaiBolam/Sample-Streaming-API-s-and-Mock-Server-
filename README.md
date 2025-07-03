# Sample Streaming API's and Mock Server 
This is Sample API's anyone can use to simulate the Streaming API testing and I've also added Mock Servers to respond all the endpoints you can use these to simuate the real world sceanrios for streaming apps
# Streaming Mock Server

Mock API for live streaming content management.

## Usage

- Start the server: `npm run dev`
- Use `Bearer admin-token-123` or `Bearer viewer-token-456` for authentication.

## Content & Stream API Endpoints

- `GET    /health`
- `GET    /api/content`
- `POST   /api/content`
- `GET    /api/content/:id`
- `PUT    /api/content/:id`
- `DELETE /api/content/:id`
- `GET    /api/streams`
- `GET    /api/streams/:id`
- `POST   /api/streams/streams`
- `POST   /api/streams/:id/start`
- `POST   /api/streams/:id/stop`
- `GET    /api/streams/:id/health`

## restart server by killing all the sessions using below commnads in your terminal
- Open Command Prompt as Administrator and run:

  netstat -ano | findstr :3000
- you will see out put like this below
TCP    0.0.0.0:3000     0.0.0.0:0     LISTENING     12345

// The last number is the PID (e.g., 12345).

- Kill the Process Using the PID

taskkill /PID <PID_NUMBER> /F

// Example
taskkill /PID 12345 /F


