import mongoose from "mongoose";

const conn = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGOOSE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    });
  } catch (error) {
    console.error(error);
  }
};

export default conn;
