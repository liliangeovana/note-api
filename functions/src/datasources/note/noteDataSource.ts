import { INote } from "@models/export";
import { IMessage } from "@utils/message";
import { serviceMessageManager } from "@services/export";

class NoteDataSource {

  getNotes():IMessage {

    const note: INote = {
      id: 1,
      description: "Nota de teste",
      success: true,
    };

    return serviceMessageManager.successMessage("Notas encontradas", note);
  }

  postNote() {
    return "Nota criada";
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
