//import dependencies
import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import bodyParser from "body-parser";

//import routes  
import router from "./routes/product.js";

const app = express();

//middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//routes
app.use('/product', router);

// =================================================================
const CONNECTION_URL = "mongodb://127.0.0.1:27017/shop";
const PORT = 5000;

mongoose.connect(CONNECTION_URL)
.then(() => {
app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
})
.catch(error => console.log(error));
