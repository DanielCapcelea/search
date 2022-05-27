import {Users} from "./users.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const hostname = '0.0.0.0';
const port = process.env.PORT || 5002;

app.get("/", (req, res) => {
    const {queryRequest} = req.query;

    const keys = ["first_name", "last_name", "email"];

    const search = (data) => {
        return data.filter((item) =>
            keys.some((key) => item[key].toLowerCase().includes(queryRequest))
        );
    };

    queryRequest ? res.json(search(Users)) : res.json(Users);
});

app.listen(port, () => console.log("API is working!"));