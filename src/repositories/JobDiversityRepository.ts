import { JobsDiversity } from "../models/JobsDiversity";
import { IJobDiversityRepository } from "./IJobDiversityRepository";
import { JobsRepository } from "./JobRepository";

export class JobDiversityRepository extends JobsRepository implements IJobDiversityRepository{
    private jobsDiversity: JobsDiversity[]
    protected static INSTANCE: JobDiversityRepository;

    constructor() {
        super()
        this.jobsDiversity = [];
    }

    public static getInstance(): JobDiversityRepository {
        if (!this.INSTANCE) this.INSTANCE = new JobDiversityRepository();
        return this.INSTANCE;
    }

    create ( {id, name, requirements, wage, benefits, isRemote, localization, isActive, type}: JobsDiversity ): void {
        const newJobDiversity = new JobsDiversity(id, name, requirements, wage, benefits, isRemote, localization, isActive, type);
        this.jobsDiversity.push(newJobDiversity);
    }

    getAll() {
        const jobs = this.jobsDiversity;
        if (!jobs) throw new Error("Empty job list!");
        return jobs;
    }

    finishJob(jobId: number): void {
        const job = this.validateJobDiversity(jobId);
        job.isActive = false;
    }

    activateJob(jobId: number): void {
        const job = this.validateJobDiversity(jobId);
        job.isActive = true;
    }

    private validateJobDiversity(jobId: number): JobsDiversity {
        const job = this.jobsDiversity.find( item => item.id === jobId );
        if (!job) throw new Error("job not found");
        return job;
    }
}