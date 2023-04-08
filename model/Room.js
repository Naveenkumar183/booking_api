import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true,"name is required"]
  },
  price: {
    type: Number,
    required: [true,"type is required"]
  },
  maxPeople: {
    type: Number,
    required: [true,"city is required"]
  },
  
  desc: {
    type: String,
    required:[true,"desc is required"]
  },
  roomNumber:[{number:Number,unavailableDates:{type:[Date]}}],
  
},{timestamps:true});

export default mongoose.model("Room", RoomSchema)