import { ICandidateRepository } from "../../../repositories/ICandidateRepository";

interface IRequest{
    id: string;
    name: string;
    skills: string[];
    trainning: string[];
    experience: string[];
    projects: string[];
}

export class GetAllCandidateService{
    constructor(private candidateRepository: ICandidateRepository<string>) {}

    execute() {
        return this.candidateRepository.getAll();
    }
}