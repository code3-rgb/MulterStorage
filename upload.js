
const multer = require('multer')

// console.log(__dirname.replace("/utils","/images"))

const fileStorageEngine = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,__dirname.replace("/utils","/images"))
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage: fileStorageEngine})


module.exports = upload