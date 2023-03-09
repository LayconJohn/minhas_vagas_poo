import { ActivateJobService } from "./activateJobService";
import { Request, Response } from "express";

export class ActivateJobController{
    constructor(private activateJobService: ActivateJobService){}

    handle(req: Request, res: Response){
        const { jobId } = req.params;
        this.activateJobService.execute(Number(jobId));
        return res.sendStatus(200);
    }
}