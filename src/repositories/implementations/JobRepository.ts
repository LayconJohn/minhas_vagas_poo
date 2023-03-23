import { Job } from "../../models/Jobs";
import { IJobRepository } from "../IJobRepository";
import { v4 as uuidV4 } from "uuid";

export class JobsRepository implements IJobRepository<string> {
    private jobs: Job<string>[]
    protected static INSTANCE: JobsRepository;

    constructor() {
        this.jobs = [];
    }

    public static getInstance(): JobsRepository {
        if (!this.INSTANCE) this.INSTANCE = new JobsRepository();
        return this.INSTANCE;
    }

    create( {id, name, requirements, wage, benefits, isRemote, localization, isActive}: Job<string> ): void {
        const newId = uuidV4();
        const newJob = new Job(id = newId, name, requirements, wage, benefits, isRemote, localization, isActive);
        this.jobs.push(newJob);
    }

    getAll() {
        const jobs = this.jobs;
        if (!jobs) throw new Error("Empty job list!");
        return jobs; 
    }

    finishJob(jobId: string): void {
        const job = this.validateJob(jobId);
        job.isActive = false;
    }

    activateJob(jobId: string): void {
        const job = this.validateJob(jobId);
        job.isActive = true;
    }

    private validateJob(jobId: string): Job<string> {
        const job = this.jobs.find( item => item.id === jobId );
        if (!job) throw new Error("job not found");
        return job;
    }
}