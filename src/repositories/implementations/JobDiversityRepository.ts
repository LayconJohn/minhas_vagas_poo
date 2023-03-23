import { v4 as uuidV4 } from "uuid";
import { JobsDiversity } from "../../models/JobsDiversity";
import { AbstractJobDiversityRepository } from "../AbstractJobDiversityRepository";
import { JobsRepository } from "./JobRepository";

export class JobDiversityRepository extends JobsRepository implements AbstractJobDiversityRepository<string>{
    private jobsDiversity: JobsDiversity<string>[]
    protected static INSTANCE: JobDiversityRepository;

    constructor() {
        super()
        this.jobsDiversity = [];
    }

    public static getInstance(): JobDiversityRepository {
        if (!this.INSTANCE) this.INSTANCE = new JobDiversityRepository();
        return this.INSTANCE;
    }

    create ( {id, name, requirements, wage, benefits, isRemote, localization, isActive, type}: JobsDiversity<string> ): void {
        const newId = uuidV4();
        const newJobDiversity = new JobsDiversity(id = newId, name, requirements, wage, benefits, isRemote, localization, isActive, type);
        this.jobsDiversity.push(newJobDiversity);
    }

    getAll() {
        const jobs = this.jobsDiversity;
        if (!jobs) throw new Error("Empty job list!");
        return jobs;
    }

    finishJob(jobId: string): void {
        const job = this.validateJobDiversity(jobId);
        job.isActive = false;
    }

    activateJob(jobId: string): void {
        const job = this.validateJobDiversity(jobId);
        job.isActive = true;
    }

    private validateJobDiversity(jobId: string): JobsDiversity<string> {
        const job = this.jobsDiversity.find( item => item.id === jobId );
        if (!job) throw new Error("job not found");
        return job;
    }
}