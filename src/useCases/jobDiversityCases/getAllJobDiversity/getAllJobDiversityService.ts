import { IJobDiversityRepository } from "../../../repositories/IJobDiversityRepository";

export class GetAllJobDiversityService{
    constructor(private jobDiversityRepository: IJobDiversityRepository){}

    execute() {
        return this.jobDiversityRepository.getAll();
    } 
}