import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authcon from './routes/auth.js'
import roomcon from './routes/room.js'
import hotelcon from './routes/hotel.js'
import usercon from './routes/user.js'

const app = express();
dotenv.config();

const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.");
      } catch (error) {
        console.log(error);
        process.exit(1)
      }
};

  


mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });
  app.use(cookieParser());

  app.use(express.json());

 app.use('/api/auth',authcon);
 app.use('/api/user',usercon);
 app.use('/api/hotel',hotelcon);
 app.use('/api/room',roomcon);

 app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(3000, () => {
   connect();
    console.log("Connected to backend.");
  });