import { Router } from "express";
import noteRoutes from "./note/noteRoutes";

const router = Router();

router.use("/note", noteRoutes);

export default router;
