import express from "express";
import indexComplait from "../feature/complaints/routes/index";
import indexUser from "../feature/user/routes/index"

import cors from "cors";

const router = express.Router();
const options: cors.CorsOptions = {
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'X-Access-Token',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: "*",
    preflightContinue: false,
};

router.use(cors(options));
router.use(indexComplait);
router.use(indexUser);

export {
  router
}