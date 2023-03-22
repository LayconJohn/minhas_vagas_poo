import { Job } from "../models/Jobs";
import { IJobRepository } from "./IJobRepository";

export class JobsRepository implements IJobRepository {
    private jobs: Job[]
    protected static INSTANCE: JobsRepository;

    constructor() {
        this.jobs = [];
    }

    public static getInstance(): JobsRepository {
        if (!this.INSTANCE) this.INSTANCE = new JobsRepository();
        return this.INSTANCE;
    }

    create( {id, name, requirements, wage, benefits, isRemote, localization, isActive}: Job ): void {
        const newJob = new Job(id, name, requirements, wage, benefits, isRemote, localization, isActive);
        this.jobs.push(newJob);
    }

    getAll() {
        const jobs = this.jobs;
        if (!jobs) throw new Error("Empty job list!");
        return jobs; 
    }

    finishJob(jobId: number): void {
        const job = this.validateJob(jobId);
        job.isActive = false;
    }

    activateJob(jobId: number): void {
        const job = this.validateJob(jobId);
        job.isActive = true;
    }

    private validateJob(jobId: number): Job {
        const job = this.jobs.find( item => item.id === jobId );
        if (!job) throw new Error("job not found");
        return job;
    }
}