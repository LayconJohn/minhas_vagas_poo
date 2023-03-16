import { JobDiversityRepository } from "../../../repositories/JobDiversityRepository";

export class ActivateJobDiversityService{
    constructor(private jobDiversityRepository: JobDiversityRepository){}

    execute(jobId: number): void {
        const jobDiversityExist = this.jobDiversityRepository.getAll().find(item => item.id === jobId);
        if (!jobDiversityExist) throw new Error("Job not found");
        this.jobDiversityRepository.activateJob(jobId);
    }
}