import { JobsRepository } from "../../../repositories/implementations/JobRepository";
import { FinishJobController } from "./finishJobController";
import { FinishJobService } from "./finishJobService";

const jobsRepository = JobsRepository.getInstance();
const finishJobService = new FinishJobService(jobsRepository);
export const finishJobController = new FinishJobController(finishJobService);