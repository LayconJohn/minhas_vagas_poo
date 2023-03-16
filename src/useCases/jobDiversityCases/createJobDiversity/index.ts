import { JobDiversityRepository } from "../../../repositories/JobDiversityRepository";
import { CreateJobdiversityController } from "./createJobDiversityController";
import { CreateJobDiversityService } from "./createJobDiversityService";

const jobDiversityRepository = JobDiversityRepository.getInstance();
const createJobDiversityService = new CreateJobDiversityService(jobDiversityRepository);
export const createJobDiversityController = new CreateJobdiversityController(createJobDiversityService);