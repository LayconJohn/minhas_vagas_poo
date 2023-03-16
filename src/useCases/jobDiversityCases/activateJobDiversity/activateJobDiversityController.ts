import { Request, Response } from "express";
import { ActivateJobDiversityService } from "./activateJobDiversityService";

export class ActivateJobDiversityController{
    constructor(private activateJobDiversityService: ActivateJobDiversityService){}

    handle(req: Request, res: Response){
        const { jobId } = req.params;
        this.activateJobDiversityService.execute(Number(jobId));
        return res.sendStatus(201);
    }
}