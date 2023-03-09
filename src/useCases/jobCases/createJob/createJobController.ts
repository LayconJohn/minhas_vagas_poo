import { CreateJobService } from "./createJobService";
import { Request, Response } from "express";

interface IRequest{
    name: string;
    requirements: string[];
    wage: string;
    benefits: string[];
    isRemote: boolean;
    localization: string;
    isActive: boolean;
}

export class CreateJobController{
    constructor(private createJobService: CreateJobService) {}

    handle(req: Request, res: Response): Response {
        const { name, requirements, wage, benefits, isRemote, localization, isActive }: IRequest = req.body;
        this.createJobService.execute({ name, requirements, wage, benefits, isRemote, localization, isActive });
        return res.sendStatus(201);
    }
}