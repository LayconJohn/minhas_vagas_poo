import { FinishJobService } from "./finishJobService";
import { Request, Response } from "express";

export class FinishJobController{
    constructor(private finishControllerService: FinishJobService){}

    handle(req: Request, res: Response){
        const { jobId } = req.params;
        this.finishControllerService.execute(Number(jobId));
        return res.sendStatus(201);
    }
}