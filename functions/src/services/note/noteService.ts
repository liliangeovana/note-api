import { db } from "@config/firestore";
import { INote } from "@models/export";

const collection = db.collection("notes");

// METHOD GET
export const getNotes = async (): Promise<INote[]> => {
  const snapshot = await collection.get();
  return snapshot.docs.map((doc) => (doc.data() as INote));
};

// METHOD GET ID
export const getUserById = async (note_id: string): Promise<INote | null> => {
  const doc = await collection.doc(note_id).get();
  return doc.exists ? (doc.data() as INote) : null;
};


// METHOD POST
export const postNote = async (note: INote): Promise<INote> => {
  const docRef = db.collection("notes").doc(); // Cria uma referência com ID automático
  await docRef.set(note); // Salva os dados
  const doc = await docRef.get(); // Busca o documento recém-criado
  return { id: doc.id, ...doc.data() } as INote;
};

// METHOD PUT
export const putNote = async (id: string, note: Partial<INote>): Promise<boolean> => {
  const doc = collection.doc(id);
  const snapshot = await doc.get();

  if (!snapshot.exists) {
    return false;
  }
  await doc.update(note);
  return true;
};


// METHOD DELETE
export const deleteNote = async (note_id: string): Promise<boolean> => {
  const doc = collection.doc(note_id);
  const snapshot = await doc.get();

  if (!snapshot.exists) {
    return false;
  }
  await doc.delete();
  return true;
};
