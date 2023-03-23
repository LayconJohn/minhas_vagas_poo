import { Job } from "../../models/Jobs";
import { IJobRepository } from "../IJobRepository";

export class JobRepositoryPg implements IJobRepository<number>{
    create({ id, name, requirements, wage, benefits, isRemote, localization, isActive }: Job<number>): void {
        throw new Error("Method not implemented.");
    }
    getAll(): Job<number>[] {
        throw new Error("Method not implemented.");
    }
    finishJob(jobId: number): void {
        throw new Error("Method not implemented.");
    }
    activateJob(jobId: number): void {
        throw new Error("Method not implemented.");
    }
    
}