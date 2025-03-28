import { Router } from "express";
import { noteController } from "../../controllers";

const router = Router();

router.route("/")
  .get((req, res) => {
    res.json({ message: noteController.getNotes() });
  })
  .post((req, res) => {
    res.status(201).json({ message: noteController.postNote() });
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
