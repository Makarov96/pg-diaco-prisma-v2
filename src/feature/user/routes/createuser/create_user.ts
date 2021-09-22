import express from "express"
import UserControllerImpl from "../../adapter/controller/user_handling_controller";
const router = express.Router();
router.post("/createuser",UserControllerImpl.indexCreateUser);
export default router;