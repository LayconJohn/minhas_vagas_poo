import { CreateCandidateService } from "./createCandidateService";
import { Request, Response } from "express";

export class CreateCandidateController{
    constructor(private createClientService: CreateCandidateService) {}

    handle(req: Request, res: Response){
        const {name, skills, trainning, experience, projects} = req.body;

        this.createClientService.execute({name, skills, trainning, experience, projects});

        return res.sendStatus(201);
    }
}