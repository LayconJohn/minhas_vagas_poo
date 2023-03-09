import { Router, Request, Response } from "express";
import { createCandidateController } from "../useCases/canditateCases/createCandidate/index";
import { getAllCandidateController } from "../useCases/canditateCases/getAllCandidate";

const router = Router();

router.post("/candidate", (req: Request, res: Response) => createCandidateController.handle(req, res));
router.get("/candidate", (req: Request, res: Response) => getAllCandidateController.handle(req, res));

export default router;

