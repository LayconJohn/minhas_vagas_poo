import prisma from "../../database/pg";
import { Candidate } from "../../models/Candidates";
import { ICandidateRepository } from "../ICandidateRepository";

export class CandidateRepositoryPg implements ICandidateRepository<number>{
    async create({ name, skills, trainning, experience, projects }: Candidate<number>): Promise<void> {
    }
    getAll(): Candidate<number>[] {
        throw new Error("Method not implemented.");
    }
    
} 