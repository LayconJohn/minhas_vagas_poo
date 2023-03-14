import { JobsDiversity } from "../models/JobsDiversity";

export class JobDiversityRepository {
    private jobsDiversity: JobsDiversity[]
    private static INSTANCE: JobDiversityRepository;

    constructor() {
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

    getAll(): JobsDiversity[] {
        const jobsDiversity = this.jobsDiversity;
        if (jobsDiversity.length === 0) throw new Error("Empty jobs Diversity");
        return jobsDiversity;
    }

    finishJob(jobId: number): void {
        const job = this.validateJob(jobId);
        job.isActive = false;
    }

    activateJob(jobId: number): void {
        const job = this.validateJob(jobId);
        job.isActive = false;
    }

    private validateJob(jobId: number): JobsDiversity {
        const job = this.jobsDiversity.find( item => item.id === jobId);
        if (!job) throw new Error("job not found");
        return job;
    }
}