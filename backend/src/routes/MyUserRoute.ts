import express from "express";
import MyUserContoller from "../controllers/MyUserContoller";

const router = express.Router();

router.post("/", MyUserContoller.createCurrentUser);

export default router;
