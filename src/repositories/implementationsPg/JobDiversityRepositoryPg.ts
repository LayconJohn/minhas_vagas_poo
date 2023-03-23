import { JobsDiversity } from "../../models/JobsDiversity";
import { AbstractJobDiversityRepository } from "../AbstractJobDiversityRepository";

export class JobDiversityRepositoryPg<T> extends AbstractJobDiversityRepository<T>{
    create({ id, name, requirements, wage, benefits, isRemote, localization, isActive, type }: JobsDiversity<T>): void {
        throw new Error("Method not implemented.");
    }
    getAll(): JobsDiversity<T>[] {
        throw new Error("Method not implemented.");
    }
    finishJob(jobId: T): void {
        throw new Error("Method not implemented.");
    }
    activateJob(jobId: T): void {
        throw new Error("Method not implemented.");
    }

}