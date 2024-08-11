import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        //upload
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        //file has been uploaded successfully
        // console.log("file is uploaded on cloudinary", response.url)
        fs.unlinkSync(localFilePath)
        return response;   //response user ko return krdiya gya wo fir usme se url nikal lega response.url krke
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temporary files as the upload operation has failed
        return null;
    }
}

export {uploadOnCloudinary}
