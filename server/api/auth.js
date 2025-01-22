import shopify from "~/config/shopify.js";
import connectDb from "./data";
import Session from "~/models/Session.js";

export default defineEventHandler(async (event) => {
  // Connect to the database
  await connectDb();
  console.log(event.req.url);
  let myshop  = event.req.url;
  let splitshop = myshop.split('=');
 let shop= splitshop[1];
  // Read the request body


  // Check if shop parameter is provided
  if (!shop) {
    throw createError({ statusCode: 400, message: "Missing shop parameter." });
  }

  // Check if there is an existing session for this shop
  // const existingSession = await Session.findOne({ shop });
  
  // // if (existingSession) {
  // //   // Redirect to home page if app is already installed
  // //   return { redirectUrl: `${process.env.HOST}/?shop=${shop}` };
  // // }

  // Start Shopify OAuth flow if app is not installed
 await shopify.auth.begin({
    rawRequest: event.req,
    rawResponse: event.res,
    shop,
    callbackPath: "/api/auth/callback", // Callback URL after Shopify response
    isOnline: false, // Set to true for online tokens
  });

});
