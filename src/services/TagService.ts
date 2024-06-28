import { AppDataSource } from "..";
import { Tag } from "../entity/Tag";

export const getAllTags = async (): Promise<Tag[]> => {
  const tags = await AppDataSource.manager.find(Tag);
  return tags;
};

export const saveTag = async (tagName: string) => {
  const newTag = new Tag();
  newTag.name = tagName;
  await AppDataSource.manager.save(newTag);
};
