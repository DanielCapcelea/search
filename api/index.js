import {Users} from "./users.js";
import cors from "cors";
import express from "express";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.json(Users);
});

app.listen(5001, () => console.log("API is working!"));