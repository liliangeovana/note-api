import * as noteService from "@services/note/noteService";
import { Request, Response } from "express";
import { messageManager } from "@utils/message";

/**
 * Controller for handling notes.
 * @module noteController
 */


// METHOD GET
export const getNotes = async (request: Request, response: Response) => {
  const notes = await noteService.getNotes();
  response.status(200).json(messageManager.successMessage("Notas encontradas", 200, notes));
};


// METHOD GET
export const getNoteById = async (request: Request, response: Response) => {
  const note = await noteService.getUserById(request.params.note_id);

  if (!note) {
    response.status(404).json(messageManager.errorMessage("Nota não encontrada", 404));
    return;
  }

  response.status(200).json(messageManager.successMessage("Nota encontrada", 200, note));
};


// METHOD POST
export const postNote = async (request: Request, response: Response) => {
  const note = await noteService.postNote(request.body);

  if (!note) {
    response.status(400).json(messageManager.errorMessage("Erro ao criar nota", 400));
    return;
  }

  response.status(201).json(messageManager.successMessage("Nota criada com sucesso", 201, note));
};


// METHOD PUT
export const putNote = async (request: Request, response: Response) => {
  const noteUpdate = await noteService.putNote(request.params.note_id, request.body);

  if (!noteUpdate) {
    response.status(404).json(messageManager.errorMessage("Nota não encontrada", 404));
    return;
  }
};

// METHOD DELETE
export const deleteNote = async (request: Request, response: Response) => {
  const noteDelete = await noteService.deleteNote(request.params.note_id);

  if (!noteDelete) {
    response.status(404).json(messageManager.errorMessage("Nota não encontrada", 404));
    return;
  }

  response.status(200).json(messageManager.successMessage("Nota deletada com sucesso", 200));
};
