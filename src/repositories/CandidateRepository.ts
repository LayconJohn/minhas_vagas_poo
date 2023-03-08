import { Candidate } from "../models/Candidates";

export class CandidateRepository {
    private candidates: Candidate[];
    private static INSTANCE: CandidateRepository;
    
    private constructor() {
        this.candidates = [];
    }

    public static getInstance() {
        if (!this.INSTANCE) this.INSTANCE = new CandidateRepository();
        return this.INSTANCE;
    }

    create( {id, name, skills, trainning, experience, projects}: Candidate ): void {
        const candidate = new Candidate(id, name, skills, trainning, experience, projects);
        this.candidates.push(candidate);
    }

    getAll(): Candidate[] {
        const candidates = this.candidates;
        if (!candidates) throw new Error("Empty candidate list!");
        return candidates; 
    }

}