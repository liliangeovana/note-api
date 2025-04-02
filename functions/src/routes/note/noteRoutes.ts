import { noteController } from "@controllers/export";
import { Router } from "express";

const router = Router();

router.route("/")
  .get((req, res) => {
    res.json(noteController.getNotes());
  })
  .post(async (req, res) => {
    res.json(await noteController.storeNote(req.body));
  })
  .put((req, res) => {
    res.json(noteController.putNote());
  })
  .delete((req, res) => {
    res.json(noteController.deleteNote());
  });

router.get("/:note_id", async (req, res) => {
  res.json(await noteController.getNoteById(req.params.note_id));
});

export default router;
