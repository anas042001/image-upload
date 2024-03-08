const express = require('express')
const app =express()

app.use(express.json);

const mongoose = require('mongoose')
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser : true,
    useUnifiedTopology : true,
  },
  (err) => {
    if (err) {
      console.log(err);
    }
    else{
      console.log("Connected to DB");
    }
  }
);
app.listen(5000, (req, res) => {
  console.log("Running on 5000");
})

