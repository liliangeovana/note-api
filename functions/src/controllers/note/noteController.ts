import { noteService } from "@services/export";

class NoteController {

  getNotes() {
    return noteService.getNotes();
  }

  async storeNote(req: any, res: any) {
    try {
      const note = await noteService.storeNote(req.body); 
      res.status(200).json({
        message: "Nota criada com sucesso.",
        data: note
      });
    } catch (error: any) {
      res.status(400).json({
        message: error.message
      });
    }
  }

  putNote() {
    return noteService.putNote();
  }

  deleteNote() {
    return noteService.deleteNote();
  }

  getNoteById(id_note: string | number) {
    return noteService.getNoteById(id_note);
  }

}

export const noteController = new NoteController();
