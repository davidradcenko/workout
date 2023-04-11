import {prisma} from "./prisma.js";
import asyncHandler from "express-async-handler"

//desc auth user
//rout post/api/auth/login
//access public
export const authUser=  asyncHandler(async(req, res)=>{
    const user =await prisma.user.findMany()
    res.join(user)
})