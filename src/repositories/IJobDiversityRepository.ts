import { JobsDiversity } from "../models/JobsDiversity";

export interface IJobDiversityRepository{
    create ( {id, name, requirements, wage, benefits, isRemote, localization, isActive, type}: JobsDiversity ): void
    getAll(): JobsDiversity[]
    finishJob(jobId: number): void
    activateJob(jobId: number): void
}