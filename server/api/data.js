import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://shivam:shivam@cluster0.lo7se.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// MongoDB connection logic
const connectDb = async () => {
 
  await mongoose.connect(MONGO_URI);
  console.log("successfully connected")
};

export default connectDb; 