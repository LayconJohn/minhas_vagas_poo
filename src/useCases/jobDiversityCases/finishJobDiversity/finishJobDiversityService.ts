import { AbstractJobDiversityRepository } from "../../../repositories/AbstractJobDiversityRepository";

export class FinishJobDiversityService{
    constructor(private jobDiversityRepository: AbstractJobDiversityRepository<string>){}

    execute(jobId: string): void {
        const jobDiversityExist = this.jobDiversityRepository.getAll().find(item => item.id === jobId);
        if (!jobDiversityExist) throw new Error("Job not found");
        this.jobDiversityRepository.finishJob(jobId);
    }
}