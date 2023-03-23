import { AbstractJobDiversityRepository } from "../../../repositories/AbstractJobDiversityRepository";

export class GetAllJobDiversityService{
    constructor(private jobDiversityRepository: AbstractJobDiversityRepository<string>){}

    execute() {
        return this.jobDiversityRepository.getAll();
    } 
}