// server/middleware/cors.js
export default eventHandler((event) => {
    const { req, res } = event;
  
    // Set CORS headers for all incoming requests
    res.setHeader('Access-Control-Allow-Origin', 'https://aeab-2401-4900-1c6e-3e29-b54a-f3c0-dcd2-196f.ngrok-free.app'); // You can replace '*' with specific frontend URL
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    // If it's a preflight request, return a successful response
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    // Continue to the next handler if not preflight
  });
  