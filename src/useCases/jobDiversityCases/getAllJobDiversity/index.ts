import { JobDiversityRepository } from "../../../repositories/implementations/JobDiversityRepository";
import { GetAllJobDiversityController } from "./getAllJobDiversityController";
import { GetAllJobDiversityService } from "./getAllJobDiversityService";

const jobDiversityRepository = JobDiversityRepository.getInstance();
const getAllJobDiversityService = new GetAllJobDiversityService(jobDiversityRepository);
export const getAllJobDiversityController = new GetAllJobDiversityController(getAllJobDiversityService);