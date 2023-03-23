import { IJobRepository } from "../../../repositories/IJobRepository";

export class FinishJobService{
    constructor(private jobsRepository: IJobRepository<string>){}

    execute(jobId: string): void {
        const jobExist = this.jobsRepository.getAll().find(item => item.id === jobId);
        if (!jobExist) throw new Error("Job not found");
        this.jobsRepository.finishJob(jobId);
    }
}