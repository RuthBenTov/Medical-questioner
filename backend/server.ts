import express from "express";
const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;



app.use(express.json());
app.use(cors());

import emailRoutes from "./API/emailRoutes"
app.use("/api/v1/email", emailRoutes);


const server = app.listen(PORT, () => {
    console.log(`server is listening in port:${PORT} :)`)
})