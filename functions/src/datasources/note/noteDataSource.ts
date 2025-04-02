import db from "@config/firestore";
import { INote } from "@models/export";
import { IMessage, messageManager } from "@utils/message";

class NoteDataSource {

  getNotes() {

    const note: INote = {
      id: 1,
      description: "Nota de teste",
    };

    return messageManager.successMessage("Notas encontradas", 200, note);
  }

  async storeNote(note: INote) {
    const notes = await db.collection("notes").doc().set(note);
    return messageManager.successMessage("Nota criada", 201, notes);
  }

  putNote() {
    return "Nota atualizada";
  }

  async deleteNote(id_note: string) {
    const note = db.collection("notes");

    return await note
      .doc(id_note)
      .delete()
      .then(() => {
        return messageManager.successMessage("Nota apagada", 200);
      })
      .catch((error) => {
        return messageManager.errorMessage("Erro ao apagar nota", 500, error);
      });
  }

  async getNoteById(id_note: string): Promise<IMessage> {
    const note = db.collection("notes");

    return await note
      .doc(id_note)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          return messageManager.informationMessage("Nota não encontrada", 404);
        } else {
          return messageManager.successMessage("Nota encontrada", 200, doc.data());
        }
      })
      .catch((error) => {
        return messageManager.errorMessage("Erro ao buscar nota", 500, error);
      });
  }
}

export const noteDataSource = new NoteDataSource();
