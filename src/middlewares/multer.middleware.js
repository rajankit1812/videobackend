import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)  //file.originalname naam se file bnado
    }
  })
  
export const upload = multer({ storage: storage })