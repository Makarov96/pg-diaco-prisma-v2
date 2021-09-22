
import express from "express"
import anonymousUser from "./createuser/create_anonymouse_user";
import user from "./createuser/create_user";

const router = express.Router();
router.use("/anonymous",anonymousUser);
router.use("/user",user);

export default router;