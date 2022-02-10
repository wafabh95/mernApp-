const express = require('express');
const app = express();
app.use(express.json());
const connectDB = require("./config/connectDB");
const cors = require("cors");
// require ("dotenv").config({path:"./config/.env"});
const port = 5000;
// const PORT= process.env.PORT;
connectDB();
app.use(cors())
app.use('/',require("./routes/userRoutes"))
app.listen(port,()=>{console.log("runing on port"+ port);})