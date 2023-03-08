import express, { json } from "express";
import cors from "cors";
import clientRouter from "./routers/candidateRouter"

const app = express();

app
    .use(cors())
    .use(json())
    .use(clientRouter)

const port = process.env.PORT || 5001;

app.listen(port, () => console.log('listening on port ' + port));