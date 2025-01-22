import connectDb from "./data";
import Session from "~/models/Session.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const shop = body?.shop;
  
  connectDb(); // MongoDB se connect karte hain
  
  const existingSession = await Session.findOne({ shop });
  return { installed: !!existingSession }; // Agar session hai to installed true
});

