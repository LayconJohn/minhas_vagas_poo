import { Candidate } from "../models/Candidates";

export interface ICandidateRepository<T>{
    create( {id, name, skills, trainning, experience, projects}: Candidate<T> ): void
    getAll(): Candidate<T>[] 
}