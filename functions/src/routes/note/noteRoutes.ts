import { noteController } from "@controllers/export";
import { Router } from "express";

const router = Router();

router.route("/")
  .get((req, res) => {
    res.json({ message: noteController.getNotes() });
  })
  .post((req, res) => {
    noteController.storeNote(req, res);
  })
  .put((req, res) => {
    res.json({ message: noteController.putNote() });
  })
  .delete((req, res) => {
    res.json({ message: noteController.deleteNote() });
  });

router.get("/:note_id", (req, res) => {
  res.json({ message: noteController.getNoteById(req.params.note_id) });
});

export default router;
