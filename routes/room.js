import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controller/room.js";
const route=express.Router();
import {verifyAdmin} from "../utils/verifyToken.js"


//create

route.post('/:hotelid',verifyAdmin,createRoom);
//update
route.put('/:id',verifyAdmin,updateRoom)
  

 

//get

route.get('/:id',getRoom)
  

  
//getall

route.get('/',getRooms)
  

  

//delete
route.delete('/:id/hotelid',verifyAdmin,deleteRoom)

export default route


