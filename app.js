const express = require("express");
const path = require("path");
const multer = require("multer");
const app = express();

console.log(path.join(__dirname,"views"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});

const maxSize = 1 * 1000 * 1000;
const upload = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: (req, file, cb) => {
    var filetypes = /jpeg|jpg|png/;
    var mimetype = filetypes.test(file.mimetype);

    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }

    cb(
      "Error: File upload only supports the " +
      "Error: File upload only supports the " +
        "following filetypes - " +
        filetypes
    );
  },
}).single("mypic");

app.get('/', (req, res)=>{
    res.render("signup");
})

app.post("/uploadProfile", (req, res, next) => {
    upload(req, res , (err)=>{
        if (err) {
            res.render(err);
        }
        else{
            res.send("Success");
        }
    })
})


app.listen(5000, (error) => {
    if(error) throw error;
    console.log("Server Running on 5000");
})