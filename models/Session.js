import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
    id: {
      type: String,
      required: true, // Add validation (optional)
      unique: true,   // Ensure id is unique
    },
    shop: {
      type: String,
      required: true, // Add validation (optional)
    },
    accessToken: {
      type: String,
      required: true, // Add validation (optional)
    },
    state:{
        type:String
    },
    scope: [
      {
        type: String, // Correct way to define an array of strings
      },
    ],
  });
  
  // Export the model
  const Session = mongoose.models.Session || mongoose.model('Session', SessionSchema);
  
  export default Session;
  