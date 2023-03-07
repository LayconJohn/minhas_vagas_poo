import express, { json } from "express";
import cors from "cors";

const app = express();

app
    .use(cors())
    .use(json())

const port = process.env.PORT || 5001;

app.listen(port, () => console.log('listening on port ' + port));