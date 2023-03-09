import { Request, Response } from "express";
import { GetAllJobService } from "./getAllJobService";

interface IRequest{
    name: string;
    requirements: string[];
    wage: string;
    benefits: string[];
    isRemote: boolean;
    localization: string;
    isActive: boolean;
}

export class GetAllJobController{
    constructor(private getAllJobService: GetAllJobService){}

    handle(req: Request, res: Response) {
        const jobs = this.getAllJobService.execute();
        return res.status(200).send(jobs);
    }
}