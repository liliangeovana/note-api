import { noteDataSource } from "@datasources/export";


class NoteService {

  getNotes() {
    return noteDataSource.getNotes();
  }

  postNote() {
    return noteDataSource.postNote();
  }

  putNote() {
    return noteDataSource.putNote();
  }

  deleteNote() {
    return noteDataSource.deleteNote();
  }

  getNoteById(id_note: string | number) {
    return noteDataSource.getNoteById(id_note);
  }

}

export const noteService = new NoteService();
