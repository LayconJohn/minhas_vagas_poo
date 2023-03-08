import { CandidateRepository } from "../../repositories/CandidateRepository";

interface IRequest{
    id: string;
    name: string;
    skills: string[];
    trainning: string[];
    experience: string[];
    projects: string[];
}

export class GetAllCandidateService{
    constructor(private candidateRepository: CandidateRepository) {}

    execute(): IRequest[] {
        return this.candidateRepository.getAll();
    }
}