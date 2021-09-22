
import express from "express"
import ComplaitControllerImpl from "../../adapter/controller/complaint_handling_controller";
const router = express.Router();
router.post("/createcomplaint/:id",ComplaitControllerImpl.indexCreateComplaint);
export default router;
