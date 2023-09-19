const {S3Client,PutObjectCommand}= require('@aws-sdk/client-s3')
const dotEnv = require('dotenv')
dotEnv.config()
const ACCESS_KEY_ID = process.env.ACCESS_KEY
const SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY
const REGION = process.env.REGION 
const URL = process.env.URL


const s3Client = new S3Client({
    region:REGION,
    endpoint :URL,
    credentials:{
        accessKeyId:ACCESS_KEY_ID,
        secretAccessKey:SECRET_ACCESS_KEY,
    }
    

})