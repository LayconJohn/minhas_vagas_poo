import { JobDiversityRepository } from "../../../repositories/JobDiversityRepository";
import { ActivateJobDiversityController } from "./activateJobDiversityController";
import { ActivateJobDiversityService } from "./activateJobDiversityService";

const jobDiversityRepository = JobDiversityRepository.getInstance();
const activateJobDiversityService = new ActivateJobDiversityService(jobDiversityRepository);
export const activateJobDiversitycontroller = new ActivateJobDiversityController(activateJobDiversityService);