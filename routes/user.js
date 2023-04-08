import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controller/user.js";
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifytoken.js";
const router=express.Router();

// router.get("/check",verifyToken,(req,res,next)=>{
//     res.send("hello user,you are logged in")
// })


// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//   res.send("hello,user,you are logged in and you can delete you account");
// })

router.put("/:id",verifyUser, updateUser);

//DELETE
router.delete("/:id",verifyUser, deleteUser);

//GET
router.get("/:id",verifyUser, getUser);

//GET ALL
router.get("/",verifyAdmin,getUsers);

export default router;


