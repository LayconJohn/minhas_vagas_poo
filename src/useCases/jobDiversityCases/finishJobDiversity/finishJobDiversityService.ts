import { IJobDiversityRepository } from "../../../repositories/IJobDiversityRepository";

export class FinishJobDiversityService{
    constructor(private jobDiversityRepository: IJobDiversityRepository){}

    execute(jobId: number): void {
        const jobDiversityExist = this.jobDiversityRepository.getAll().find(item => item.id === jobId);
        if (!jobDiversityExist) throw new Error("Job not found");
        this.jobDiversityRepository.finishJob(jobId);
    }
}