import { Candidate } from "../../models/Candidates";
import { ICandidateRepository } from "../ICandidateRepository";
import { v4 as uuidV4 } from "uuid";

export class CandidateRepository implements ICandidateRepository<string> {
    private candidates: Candidate<string>[];
    private static INSTANCE: CandidateRepository;
    
    private constructor() {
        this.candidates = [];
    }

    public static getInstance() {
        if (!this.INSTANCE) this.INSTANCE = new CandidateRepository();
        return this.INSTANCE;
    }

    create( {id, name, skills, trainning, experience, projects}: Candidate<string> ): void {
        const newId = uuidV4();
        const candidate = new Candidate<string>(id = newId, name, skills, trainning, experience, projects);
        this.candidates.push(candidate);
    }

    getAll(): Candidate<string>[] {
        const candidates = this.candidates;
        if (!candidates) throw new Error("Empty candidate list!");
        return candidates; 
    }

}