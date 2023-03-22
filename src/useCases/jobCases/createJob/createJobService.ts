import { v4 as uuidV4 } from "uuid";
import { IJobRepository } from "../../../repositories/IJobRepository";

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
    
    constructor(private jobRepository: IJobRepository) {}

    execute({ name, requirements, wage, benefits, isRemote, localization, isActive }: IRequest): void {
        const id = uuidV4();
        this.jobRepository.create({ id, name, requirements, wage, benefits, isRemote, localization, isActive }) 
    }
}