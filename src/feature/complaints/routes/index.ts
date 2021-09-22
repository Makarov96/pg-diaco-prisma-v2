
import express from "express"
import createComplaint from "./createcomplaint/create_complait";

const router = express.Router();
router.use("/complait",createComplaint);
export default router;