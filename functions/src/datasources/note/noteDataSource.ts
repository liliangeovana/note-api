import { INote } from "@models/export";

class NoteDataSource {

  getNotes(): INote {
    return {
      id: 1,
      description: "Descrição da nota 1",
      success: true,
    };
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
