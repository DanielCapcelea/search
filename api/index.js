import {Users} from "./users.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

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

app.listen(5001, () => console.log("API is working!"));