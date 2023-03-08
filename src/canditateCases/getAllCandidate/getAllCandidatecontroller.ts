import { Request, Response } from "express";
import { GetAllCandidateService } from "./getAllCandidateService";

export class GetAllCandidateController{
    constructor(private getAllCandidateService: GetAllCandidateService) {}

    handle(req: Request, res: Response): Response {
        const candidates =  this.getAllCandidateService.execute();
        return res.status(200).send(candidates);
    }
}