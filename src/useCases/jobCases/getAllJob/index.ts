import { JobsRepository } from "../../../repositories/implementations/JobRepository";
import { GetAllJobController } from "./getAllJobController";
import { GetAllJobService } from "./getAllJobService";

const jobsRepository = JobsRepository.getInstance();
const getAllJobService = new GetAllJobService(jobsRepository);
export const getAllJobController = new GetAllJobController(getAllJobService);