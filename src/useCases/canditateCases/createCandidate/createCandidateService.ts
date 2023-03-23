import { v4 as uuidV4 } from "uuid";
import { ICandidateRepository } from "../../../repositories/ICandidateRepository";

interface IRequest{
    name: string;
    skills: string[];
    trainning: string[];
    experience: string[];
    projects: string[];
}

export class CreateCandidateService {
    constructor(private candidateRepository: ICandidateRepository<string>) {}

    execute( {name, skills, trainning, experience, projects}: IRequest ) {
        const id = uuidV4();
        const candidateExists = this.candidateRepository.getAll().find(item => item.name === name);
        if (candidateExists) throw new Error("Candidate already exists");
        if (!id || !skills || !trainning || !experience || !projects) throw new Error("Invalid body!");
        this.candidateRepository.create({ id, name, skills, trainning, experience, projects });
    }

}