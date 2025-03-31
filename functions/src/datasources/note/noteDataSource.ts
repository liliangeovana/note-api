import db from "@config/firestore";
import { INote } from "@models/export";
import { messageManager } from "@utils/message";

class NoteDataSource {

  getNotes() {

    const note: INote = {
      id: 1,
      description: "Nota de teste",
    };

    return messageManager.successMessage("Notas encontradas", 200, note);
  }

  storeNote(note: INote) {
    const notes = db.collection("notes").doc().set(note);
    return messageManager.successMessage("Nota criada", 201, notes);
  }

  putNote() {
    return "Nota atualizada";
  }

  deleteNote() {
    return "Nota deletada";
  }

  getNoteById(id_note: string | number) {
    return `Nota ${id_note}`;
  }

}

export const noteDataSource = new NoteDataSource();
