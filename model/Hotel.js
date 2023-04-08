import mongoose from "mongoose";
const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"name is required"]
  },
  type: {
    type: String,
    required: [true,"type is required"]
  },
  city: {
    type: String,
    required: [true,"city is required"]
  },
  address: {
    type: String,
    required: [true,"adress is required"]
  },
  distance: {
    type: String,
    required:[true,"dis is required"]
  },
  photos: {
    type: [String],
  },
  title: {
    type: String,
    required: [true,"title is required"]
  },
  desc: {
    type: String,
    required:[true,"desc is required"]
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    required: [true,"cheap is required"]
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Hotel", HotelSchema)