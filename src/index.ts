import express, { json } from "express";
import cors from "cors";
import clientRouter from "./routers/candidateRouter";
import jobRouter from "./routers/jobRouter";
import jobRouterDiversity from "./routers/jobDiversityRouter";

const app = express();

app
    .use(cors())
    .use(json())
    .use(clientRouter)
    .use(jobRouter)
    .use(jobRouterDiversity)

const port = process.env.PORT || 5001;

app.listen(port, () => console.log('listening on port ' + port));