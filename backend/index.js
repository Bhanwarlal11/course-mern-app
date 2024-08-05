const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cors = require("cors")
const bookRoute = require("./route/book.route.js");
const userRoute = require("./route/user.route.js")

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();


const port = process.env.PORT || 5000;
const URI = process.env.MongoDBURI;


// connect to mongoDB
const connectToDB = async () => {
    try {
        await mongoose.connect(URI, { });
        console.log("MongoDB connected");
      } catch (error) {
        console.log("mongodb connection failed", error);
      }
}
connectToDB();


// defining routes
app.use("/book", bookRoute);

app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`app listerning on port ${port}`);
});
