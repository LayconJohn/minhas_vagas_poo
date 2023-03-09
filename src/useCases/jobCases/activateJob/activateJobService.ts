import { JobsRepository } from "../../../repositories/JobRepository";

export class ActivateJobService{
    constructor(private jobsRepository: JobsRepository){}

    execute(jobId: number): void{
        const jobExist = this.jobsRepository.getAll().find(item => item.id === jobId);
        if (!jobExist) throw new Error("Job not found");
        this.jobsRepository.activateJob(jobId);
    }
}