import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      "Connected to MONO DB Host:",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("Failed to Connect to Mongo DB", error);
  }
};

export default connectDb;
