import { JobsRepository } from "../../../repositories/implementations/JobRepository";
import { ActivateJobController } from "./activateJobcontroller";
import { ActivateJobService } from "./activateJobService";

const jobsRepository = JobsRepository.getInstance();
const activateJobService = new ActivateJobService(jobsRepository);
export const activateJobController = new ActivateJobController(activateJobService);