import { Job } from "../models/Jobs";

export interface IJobRepository{
    create( {id, name, requirements, wage, benefits, isRemote, localization, isActive}: Job ): void 
    getAll(): Job[]
    finishJob(jobId: number): void 
    activateJob(jobId: number): void
}