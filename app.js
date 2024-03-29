const {S3Client,PutObjectCommand}= require('@aws-sdk/client-s3')
const fs =require('fs')
const dotEnv = require('dotenv').config()


const s3Client = new S3Client({
    region:process.env.REGION,
    endpoint :process.env.URL,
    credentials:{
        accessKeyId:process.env.ACCESS_KEY_ID,
        secretAccessKey:process.env.SECRET_ACCESS_KEY,
    }
})


const uploadFile =async()=>{
    try {
        const fileContent = fs.readFileSync('Abena.JPG')
        const object= new PutObjectCommand({
            Bucket:process.env.BUCKET_NAME,
            Key:'Abena.JPG',
            Body: fileContent

        })
        await s3Client.send(object)
    } catch (error) {
        console.log(error);
    }
}
uploadFile()