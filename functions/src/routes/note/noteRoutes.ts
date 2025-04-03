import { Router } from "express";
import * as noteController from "@controllers/note/noteController";

const router = Router();

router.get("/", noteController.getNotes);
router.post("/", noteController.postNote);
router.put("/:note_id", noteController.putNote);
router.delete("/:note_id", noteController.deleteNote);
router.get("/:note_id", noteController.getNoteById);


export default router;
