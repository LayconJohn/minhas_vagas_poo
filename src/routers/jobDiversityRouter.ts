import { Router, Request, Response } from "express";
import { createJobDiversityController } from "../useCases/jobDiversityCases/createJobDiversity/index";

const router = Router();

router.post("/jobs/diversity", (req: Request, res: Response) => createJobDiversityController.handle(req, res))

export default router;