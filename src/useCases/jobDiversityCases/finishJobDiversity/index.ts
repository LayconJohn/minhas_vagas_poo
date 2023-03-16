import { JobDiversityRepository } from "../../../repositories/JobDiversityRepository";
import { FinishJobDiversityController } from "./finishJobDiversityController";
import { FinishJobDiversityService } from "./finishJobDiversityService";

const jobDiversityRepository = JobDiversityRepository.getInstance();
const finishJobDiversityService = new FinishJobDiversityService(jobDiversityRepository);
export const finishJobDiversityController = new FinishJobDiversityController(finishJobDiversityService);