import { noteDataSource } from "@datasources/export";
import { INote } from "@models/export";


class NoteService {

  getNotes() {
    return noteDataSource.getNotes();
  }

  storeNote(note: INote) {
    return noteDataSource.storeNote(note);
  }

  putNote() {
    return noteDataSource.putNote();
  }

  deleteNote(id_note: string) {
    return noteDataSource.deleteNote(id_note);
  }

  getNoteById(id_note: string) {
    return noteDataSource.getNoteById(id_note);
  }

}

export const noteService = new NoteService();
