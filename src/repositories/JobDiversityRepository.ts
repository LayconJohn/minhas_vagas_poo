import { JobsDiversity } from "../models/JobsDiversity";
import { JobsRepository } from "./JobRepository";

export class JobDiversityRepository extends JobsRepository{
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
}