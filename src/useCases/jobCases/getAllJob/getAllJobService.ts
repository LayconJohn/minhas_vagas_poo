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

export class GetAllJobService{
    constructor(private jobsRepository: IJobRepository<string>) {}

    execute() {
        return this.jobsRepository.getAll();
    }
}