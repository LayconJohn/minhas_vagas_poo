import { Candidate } from "../models/Candidates";

export interface ICandidateRepository{
    create( {id, name, skills, trainning, experience, projects}: Candidate ): void
    getAll(): Candidate[] 
}