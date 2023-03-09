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

export class GetAllJobService{
    constructor(private jobsRepository: JobsRepository) {}

    execute() {
        return this.jobsRepository.getAll();
    }
}