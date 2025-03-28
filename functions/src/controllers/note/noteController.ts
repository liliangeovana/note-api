import { noteService } from "../../services";

class NoteController {

  getNotes() {
    return noteService.getNotes();
  }

  postNote() {
    return noteService.postNote();
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
