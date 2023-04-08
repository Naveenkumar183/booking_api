import express from "express";
import { createHotel,deleteHotel, getallHotel, getHotel, updateHotel } from "../controller/hotel.js";
import Hotel from "../model/Hotel.js";
const route=express.Router();
import {verifyAdmin} from "../utils/verifyToken.js"


//create

route.post('/',verifyAdmin,createHotel);
//update
route.put('/:id',verifyAdmin,updateHotel)
  

 

//get

route.get('/:id',getHotel)
  

  
//getall

route.get('/',getallHotel)
  

  

//delete
route.delete('/:id',verifyAdmin,deleteHotel)

export default route