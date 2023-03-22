import { JobsDiversity } from "../models/JobsDiversity";

export abstract class AbstractJobDiversityRepository{
    abstract create ( {id, name, requirements, wage, benefits, isRemote, localization, isActive, type}: JobsDiversity ): void
    abstract getAll(): JobsDiversity[]
    abstract finishJob(jobId: number): void
    abstract activateJob(jobId: number): void
}