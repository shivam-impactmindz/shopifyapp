import shopify from "~/config/shopify.js";
import Session from "~/models/Session.js";

export default defineEventHandler(async (event) => {
  try {
    const { session } = await shopify.auth.callback({
      rawRequest: event.req,
      rawResponse: event.res,
    });
    console.log(session);

    const { id, shop, state, scope, accessToken } = session;

    // Save session to MongoDB
    const existingSession = await Session.findOne({ shop });
    if (!existingSession) {
      const newSession = new Session({
        id,
        shop,
        state,
        scope,
        accessToken,
      });
      await newSession.save();
    }

    // Redirect to home page after installation
    const host = process.env.HOST;
 

    event.res.writeHead(302, { Location: `${host}/?shop=${shop}` });
    event.res.end();  
  
  } catch (error) {
    console.error("Error in /api/auth/callback:", error);
    event.res.statusCode = 500;
    event.res.end("Error during authentication");
  }
});
