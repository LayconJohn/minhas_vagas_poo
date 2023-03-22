import { IJobDiversityRepository } from "../../../repositories/AbstractJobDiversityRepository";

export class GetAllJobDiversityService{
    constructor(private jobDiversityRepository: IJobDiversityRepository){}

    execute() {
        return this.jobDiversityRepository.getAll();
    } 
}