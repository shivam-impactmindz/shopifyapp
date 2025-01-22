// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    scopes: process.env.SCOPES,
    host: process.env.HOST, // Replace with your Shopify store's hostname (e.g., your-development-store.myshopify.com)
    public: {
      accessToken: process.env.ACCESS_TOKEN, // Add this for access token
      host: process.env.HOST,
      CLIENT_ID: process.env.CLIENT_ID,
    },
  },
  serverHandlers: [
    // Register CORS middleware
    {
      handler: '~/server/middleware/cors.js', // Path to your CORS middleware
    },
  ],
  
});

