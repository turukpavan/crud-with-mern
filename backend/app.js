const express= require('express');
const app = express();
const cors= require('cors');
const userRouter = require('./routes/user.route');


//database
const connectToDB=require('./config/db');
connectToDB();

//json parse middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//routes
app.use('/api',userRouter);


//server
app.listen(3000);