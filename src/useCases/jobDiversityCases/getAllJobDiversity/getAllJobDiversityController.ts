import { Request, Response } from "express";
import { GetAllJobDiversityService } from "./getAllJobDiversityService";

export class GetAllJobDiversityController{
    constructor(private getAllJobDiversityService: GetAllJobDiversityService){}

    handle(req: Request, res: Response){
        const jobs = this.getAllJobDiversityService.execute();
        return res.status(200).send(jobs);
    }
}