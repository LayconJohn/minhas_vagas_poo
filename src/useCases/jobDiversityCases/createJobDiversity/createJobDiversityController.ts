import { CreateJobDiversityService } from "./createJobDiversityService";
import { Request, Response } from "express";

interface IRequest{
    name: string;
    requirements: string[];
    wage: string;
    benefits: string[];
    isRemote: boolean;
    localization: string;
    isActive: boolean;
    type: string;
}

export class CreateJobdiversityController{
    constructor(private createJobDiversityService: CreateJobDiversityService){}

    handle(req: Request, res: Response){
        const { name, requirements, wage, benefits, isRemote, localization, isActive, type }: IRequest = req.body;
        this.createJobDiversityService.execute({ name, requirements, wage, benefits, isRemote, localization, isActive, type });
        return res.sendStatus(201);
    }
}