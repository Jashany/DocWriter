import mongoose from "mongoose";

const Connection = async () => {
  const URL = `mongodb+srv://akshita:akshi147@google-docs-clone.xo1p2ow.mongodb.net/docwriter`;
  try{
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch(error){
    console.log("Error while connecting to the database", error);
  }
}

export default Connection;