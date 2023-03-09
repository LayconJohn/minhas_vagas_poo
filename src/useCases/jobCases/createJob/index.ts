import { JobsRepository } from "../../../repositories/JobRepository";
import { CreateJobController } from "./createJobController";
import { CreateJobService } from "./createJobService";

const jobRepository = JobsRepository.getInstance();
const createJobService = new CreateJobService(jobRepository);
export const createJobController = new CreateJobController(createJobService); 