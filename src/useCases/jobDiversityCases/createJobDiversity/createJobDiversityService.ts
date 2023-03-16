import { JobDiversityRepository } from "../../../repositories/JobDiversityRepository";
import { v4 as uuidV4 } from "uuid";

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

export class CreateJobDiversityService{
    constructor(private jobDiversityRepository: JobDiversityRepository) {}

    execute({name, requirements, wage, benefits, isRemote, localization, isActive, type}: IRequest): void {
        const id = uuidV4();
        this.jobDiversityRepository.create({id, name, requirements, wage, benefits, isRemote, localization, isActive, type})
    }
}