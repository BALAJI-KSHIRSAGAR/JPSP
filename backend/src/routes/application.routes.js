import { Router } from "express";
import { verifyJWT, verifyAdmin, verifyStudent} from "../middlewares/auth.middleware.js";
import * as applicationController from "../controllers/application.controller.js";

const router = Router();

router.route("/").get(verifyJWT, verifyAdmin, applicationController.getAllApplications);
router.route("/").post(verifyJWT,verifyStudent, applicationController.createApplication);
router.route("/me").get(verifyJWT,verifyStudent, applicationController.getMyApplications);
router.route("/pending").get(verifyJWT, verifyAdmin, applicationController.getPendingApplications);
router.route("/:id").get(verifyJWT, verifyAdmin, applicationController.getApplicationById);
router.route("/:id").delete(verifyJWT, applicationController.deleteApplication);
router.route("/approve/:id").patch(verifyJWT, verifyAdmin, applicationController.approveApplication);
router.route("/reject/:id").patch(verifyJWT, verifyAdmin, applicationController.rejectApplication);
router.route("/return/:id").patch(verifyJWT, verifyAdmin, applicationController.returnApplication);

export default router;
