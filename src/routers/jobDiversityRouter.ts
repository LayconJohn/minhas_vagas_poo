import { Router, Request, Response } from "express";
import { createJobDiversityController } from "../useCases/jobDiversityCases/createJobDiversity/index";
import { getAllJobDiversityController } from "../useCases/jobDiversityCases/getAllJobDiversity/index";

const router = Router();

router.post("/jobs/diversity", (req: Request, res: Response) => createJobDiversityController.handle(req, res))
router.get("/jobs/diversity", (req: Request, res: Response) => getAllJobDiversityController.handle(req, res))

export default router;