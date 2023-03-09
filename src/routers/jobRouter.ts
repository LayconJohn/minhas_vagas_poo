import { Router, Request, Response } from "express";
import { createJobController } from "../useCases/jobCases/createJob/index";
import { getAllJobController } from "../useCases/jobCases/getAllJob/index";
import { finishJobController } from "../useCases/jobCases/FinishJob/index";
import { activateJobController } from "../useCases/jobCases/activateJob/index";

const router = Router();

router.post("/jobs", (req: Request, res: Response) => createJobController.handle(req, res));
router.get("/jobs", (req: Request, res: Response) => getAllJobController.handle(req, res));
router.post("/jobs/:jobId/finish", (req: Request, res: Response) => finishJobController.handle(req, res));
router.post("/jobs/:jobId/activate", (req: Request, res: Response) => activateJobController.handle(req, res));

export default router;