import {cloudinary} from "../config/cloudinary.js";
import fs from "fs";

export async function uploadImage(req, res, next) {
  try{
    if(!localPath) return null

    const response=await cloudinary.uploader.upload(localPath,{
      response_type:"auto",
    })
    console.log("cloudinary upload success",response.url)
    fs.unlinkSync(localPath)
    return response
  }catch(error){
    console.error("cloudinary upload failed:",error.message)
    if(fs.existsSync(localPath)){
      fs.unlink(localPath)
    }
    return null
  }
    } 