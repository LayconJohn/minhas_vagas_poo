import { CandidateRepository } from "../../../repositories/CandidateRepository";
import { GetAllCandidateController } from "./getAllCandidatecontroller";
import { GetAllCandidateService } from "./getAllCandidateService";

const candidateRepository = CandidateRepository.getInstance();
const getAllCandidateService = new GetAllCandidateService(candidateRepository);
export const getAllCandidateController = new GetAllCandidateController(getAllCandidateService);