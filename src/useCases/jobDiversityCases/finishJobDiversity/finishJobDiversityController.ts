import { Request, Response } from "express";
import { FinishJobDiversityService } from "./finishJobDiversityService";

export class FinishJobDiversityController{
    constructor(private finishJobDiversityService: FinishJobDiversityService){}

    handle(req: Request, res: Response) {
        const { jobId } = req.params;
        this.finishJobDiversityService.execute(Number(jobId));
        return res.sendStatus(201); 
    }
}