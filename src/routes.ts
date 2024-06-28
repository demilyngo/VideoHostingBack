import { tagGetAllAction, tagSaveAction } from "./controllers/TagController";
import {
  getProfileByIdAction,
  loginUserAction,
  registerUserAction,
} from "./controllers/UserController";
import {
  videoGetAllAction,
  videoSaveAction,
  getLiekdVideosAction,
  getSavedVideosAction,
} from "./controllers/VideoController";
import { auth } from "./middleware/auth";

export const AppRoutes = [
  {
    path: "/tag",
    method: "post",
    auth: auth,
    action: tagSaveAction,
  },
  {
    path: "/video",
    method: "post",
    auth: auth,
    action: videoSaveAction,
  },
  {
    path: "/getAllVideos",
    method: "get",
    action: videoGetAllAction,
  },
  {
    path: "/getAllTags",
    method: "get",
    action: tagGetAllAction,
  },
  {
    path: "/register",
    method: "post",
    action: registerUserAction,
  },
  {
    path: "/getProfileById",
    method: "get",
    auth: auth,
    action: getProfileByIdAction,
  },
  {
    path: "/login",
    method: "post",
    action: loginUserAction,
  },
  {
    path: "/getLikedVideos",
    method: "get",
    auth: auth,
    action: getLiekdVideosAction,
  },
  {
    path: "/getSavedVideos",
    method: "get",
    auth: auth,
    action: getSavedVideosAction,
  },
];
