import { Request, Response } from "express";
import { Video } from "../entity/Video";
import { AppDataSource } from "..";
import { CustomRequest } from "../middleware/auth";
import { User } from "../entity/User";
import {
  getLikedVideos,
  getSavedVideos,
  saveVideo,
} from "../services/VideoService";

export async function videoGetAllAction(request: Request, response: Response) {
  response.send(
    await AppDataSource.manager.find(Video, {
      relations: {
        tags: true,
        creator: true,
      },
    })
  );
}

export async function videoSaveAction(request: Request, response: Response) {
  const newVideo = await saveVideo(request.body);
  response.send(newVideo);
}

export const getLiekdVideosAction = async (
  request: Request,
  response: Response
) => {
  const likedVideos = await getLikedVideos(
    ((request as CustomRequest).token as User).profile.id
  );
  response.send(likedVideos);
};

export async function getSavedVideosAction(
  request: Request,
  response: Response
) {
  const savedVideos = await getSavedVideos(
    ((request as CustomRequest).token as User).profile.id
  );
  response.send(savedVideos);
}
