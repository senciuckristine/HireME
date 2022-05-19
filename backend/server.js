const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require("./middleware/error");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb+srv://Anca:anca@cluster0.hxzx8.mongodb.net/MyFirstDatabase?retryWrites=true&w=majority"

);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const surveysRouter = require('./routes/surveys');
const surveyResponsesRouter = require('./routes/surveyResponses');
const adminsRouter = require('./routes/admins');


app.use('/surveys', surveysRouter);
app.use('/surveyResponses', surveyResponsesRouter);
app.use('/admins', adminsRouter);
app.use('/api/auth',require('./routes/auth'));


const server = app.listen(5000,()=>{
    console.log(`Server is running on port: ${port}`);
});
app.use(errorHandler);
process.on("unhandledRejection",(err,promise)=>{
  console.log(`Logged Error: ${err}`);
  server.close(()=> process.exit(1));
  
});
