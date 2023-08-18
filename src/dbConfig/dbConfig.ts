import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.mongo_url!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB Connected Successfully");
    });

    connection.on("error", (err: any) => {
      console.log("MongoDB Error" + err);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
}
