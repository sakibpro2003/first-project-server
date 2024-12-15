import httpStatus from "http-status";
import AppError from "../errors/AppError";
import { User } from "../modules/user/user.model";
import { TLoginUser } from "./auth.interface";
import bcrypt from 'bcrypt'


const loginUser = async(payload: TLoginUser)=>{
    const isUserExists = await User.findOne({id: payload?.id})
    console.log(isUserExists)

    //check if the user exists or not
    if(!isUserExists){
        throw new AppError(httpStatus.NOT_FOUND,"This user does not exists!")
    }
    //check if the user is deleted 
    if(isUserExists.isDeleted){
        throw new AppError(httpStatus.FORBIDDEN,"This user is deleted")
    }
    //check if the user is blocked
    if(isUserExists?.status==="blocked"){
        throw new AppError(httpStatus.FORBIDDEN,"This user is blocked")
    }
    //check if the password is correct
    const isPasswordMatched = await bcrypt.compare(payload?.password,isUserExists?.password);
    console.log(isPasswordMatched)
    
    return {}
}

export const AuthServices = {
    loginUser,
}