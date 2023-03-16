import { JobDiversityRepository } from "../../../repositories/JobDiversityRepository";

export class GetAllJobDiversityService{
    constructor(private jobDiversityRepository: JobDiversityRepository){}

    execute() {
        return this.jobDiversityRepository.getAll();
    } 
}