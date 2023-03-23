import { JobsDiversity } from "../models/JobsDiversity";

export abstract class AbstractJobDiversityRepository<T>{
    abstract create ( {id, name, requirements, wage, benefits, isRemote, localization, isActive, type}: JobsDiversity<T> ): void
    abstract getAll(): JobsDiversity<T>[]
    abstract finishJob(jobId: T): void
    abstract activateJob(jobId: T): void
}