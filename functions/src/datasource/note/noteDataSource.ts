class NoteDataSource {

  getNotes() {
    return "Lista de notas";
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
