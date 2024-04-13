// const jwt = require('jsonwebtoken');
// require('dotenv').config()
// /**
// * 
// * Middleware function that check if user has token and can access or not
// * 
// * @param {string} token - Authorization token provided by request sender 
// * 
// * @return
// * @status 403 No token provided
// * @Status 403 Invalid token
// * 
// */
// const verifyToken = (req, res, next) => {
//     const header = req.headers['authorization'];
//     const token = header && header.split('Bearer ')[1];
//     if (!token) return res.status(403).send({ success: false, message: 'No token provided' });
//     jwt.verify(token, process.env.SECRET, (err, decoded) => {
//         if (err) return res.status(403).send({
//             success: false, message:
//                 'Invalid token'
//         });
//         req.user = {}
//         req.user.id = decoded.iduser
//         req.user.role = decoded.role
//         next()
//     })
// }

// module.exports = { verifyToken }

const multer =require( "multer")
const fs =require( "fs")
var DIR = './public/';
if (!fs.existsSync(DIR)) { // CREATE DIRECTORY IF NOT FOUND
fs.mkdirSync(DIR, { recursive: true });
}


const storage = multer.diskStorage({
destination: (req, file, callback) => {
callback(null, DIR);
},
filename: (req, file, callback) => {
const name = file.originalname.split(' ').join('_');
callback(null, name);
}
});
const uploadFile = multer({
    storage: storage
    // dest:'../public/'
});
module.exports={uploadFile};
    