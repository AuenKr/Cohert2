import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async (localFilePath: fs.PathLike) => {
    try {
        if (!localFilePath) throw new Error("file path name not found")
        console.log(localFilePath);
        const response = await cloudinary.uploader.upload(localFilePath as string, {
            folder: "test",
            resource_type: "auto"
        })
        // file uploaded
        console.log("file uploaded", response)
        return response;
    } catch (error) {
        console.log(error);
        fs.unlinkSync(localFilePath); // remove the locally save temp file
        return null;
    }
}

export { uploadOnCloudinary };