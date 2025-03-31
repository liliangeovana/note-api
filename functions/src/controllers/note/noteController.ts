import { noteService } from "@services/export";
import { INote } from "@models/export";

class NoteController {

  getNotes() {
    return noteService.getNotes();
  }

  storeNote(note: INote) {
    return noteService.storeNote(note);
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
