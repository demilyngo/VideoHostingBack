import { Video } from "../entity/Video";
import { AppDataSource } from "..";
import { Profile } from "../entity/Profile";

export const saveVideo = async (body: any): Promise<Video> => {
  const newVideo = new Video();
  newVideo.title = body.title;
  newVideo.comment = body.comment;
  newVideo.creationDate = new Date();
  newVideo.likesCount = body.likesCount;
  newVideo.path = body.path;
  newVideo.creator = body.creator;
  newVideo.tags = body.tags;

  await AppDataSource.manager.save(newVideo);
  return newVideo;
};

export const getLikedVideos = async (profileId: number): Promise<Video[]> => {
  const profile = await AppDataSource.manager.findOne(Profile, {
    where: {
      id: profileId,
    },
    relations: {
      likedVideos: true,
    },
  });
  return profile.likedVideos;
};

export const getSavedVideos = async (profileId: number): Promise<Video[]> => {
  const profile = await AppDataSource.manager.findOne(Profile, {
    where: {
      id: profileId,
    },
    relations: {
      savedVideos: true,
    },
  });
  return profile.savedVideos;
};
