import '@shopify/shopify-api/adapters/node';
import {shopifyApi, LATEST_API_VERSION} from '@shopify/shopify-api';

  

// Destructure your environment variables


// Convert SCOPES to an array if it's comma-separated


const shopify = shopifyApi({
  apiKey: process.env.CLIENT_ID, // Loaded from .env or runtimeConfig
  apiSecretKey: process.env.CLIENT_SECRET, // Loaded from .env or runtimeConfig
  scopes: process.env.SCOPES.split(','), // Split scopes from the environment variable
  hostName: process.env.HOST.replace(/^https?:\/\//, ''), // Remove protocol from HOST
  apiVersion: LATEST_API_VERSION,
  isEmbeddedApp: true,
  features: {
    lineItemBilling: true,
    customerAddressDefaultFix: true,
    unstable_managedPricingSupport: true,
  },
});


export default shopify;