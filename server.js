const express = require('express');
const app = express();

app.use("/users/",require("./routes/userRoute"));



app.listen(3001,function(){
    console.log("server is running on port 3001")
})