import { CandidateRepository } from "../../../repositories/implementations/CandidateRepository";
import { CreateCandidateController } from "./createCandidateController";
import { CreateCandidateService } from "./createCandidateService";


const candidateRepository = CandidateRepository.getInstance();
const createCandidateService = new CreateCandidateService(candidateRepository);
export const createCandidateController = new CreateCandidateController(createCandidateService);

