import { AbstractJobDiversityRepository } from "../../../repositories/AbstractJobDiversityRepository";

export class GetAllJobDiversityService{
    constructor(private jobDiversityRepository: AbstractJobDiversityRepository){}

    execute() {
        return this.jobDiversityRepository.getAll();
    } 
}