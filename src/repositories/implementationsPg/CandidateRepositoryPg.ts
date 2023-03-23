import { Candidate } from "../../models/Candidates";
import { ICandidateRepository } from "../ICandidateRepository";

export class CandidateRepositoryPg implements ICandidateRepository<number>{
    create({ id, name, skills, trainning, experience, projects }: Candidate<number>): void {
        throw new Error("Method not implemented.");
    }
    getAll(): Candidate<number>[] {
        throw new Error("Method not implemented.");
    }
    
} 