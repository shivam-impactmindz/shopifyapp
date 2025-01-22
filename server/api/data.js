import mongoose from 'mongoose';

const MONGO_URI = 'mongodb://localhost:27017/shopifysap';

// MongoDB connection logic
const connectDb = async () => {
 
  await mongoose.connect(MONGO_URI);
  console.log("successfully connected")
};

export default connectDb; 