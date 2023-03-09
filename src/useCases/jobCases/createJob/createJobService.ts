import { JobsRepository } from "../../../repositories/JobRepository";
import { v4 as uuidV4 } from "uuid";

interface IRequest{
    name: string;
    requirements: string[];
    wage: string;
    benefits: string[];
    isRemote: boolean;
    localization: string;
    isActive: boolean;
}

export class CreateJobService{
    
    constructor(private jobRepository: JobsRepository) {}

    execute({ name, requirements, wage, benefits, isRemote, localization, isActive }: IRequest): void {
        const id = uuidV4();
        this.jobRepository.create({ id, name, requirements, wage, benefits, isRemote, localization, isActive }) 
    }
}