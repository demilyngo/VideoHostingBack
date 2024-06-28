import { Request, Response } from "express";
import { getAllTags, saveTag } from "../services/TagService";

export async function tagGetAllAction(request: Request, response: Response) {
  const tags = await getAllTags();
  response.send(tags);
}

export async function tagSaveAction(request: Request, response: Response) {
  await saveTag(request.body.name);
}
