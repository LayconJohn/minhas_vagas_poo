import { AbstractJobDiversityRepository } from "../../../repositories/AbstractJobDiversityRepository";

export class FinishJobDiversityService{
    constructor(private jobDiversityRepository: AbstractJobDiversityRepository){}

    execute(jobId: number): void {
        const jobDiversityExist = this.jobDiversityRepository.getAll().find(item => item.id === jobId);
        if (!jobDiversityExist) throw new Error("Job not found");
        this.jobDiversityRepository.finishJob(jobId);
    }
}