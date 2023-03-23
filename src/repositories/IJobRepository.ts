import { Job } from "../models/Jobs";

export interface IJobRepository<T>{
    create( {id, name, requirements, wage, benefits, isRemote, localization, isActive}: Job<T> ): void 
    getAll(): Job<T>[]
    finishJob(jobId: T): void 
    activateJob(jobId: T): void
}