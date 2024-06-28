"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const TagController_1 = require("./controllers/TagController");
const UserController_1 = require("./controllers/UserController");
const VideoController_1 = require("./controllers/VideoController");
const auth_1 = require("./middleware/auth");
exports.AppRoutes = [
    {
        path: "/tag",
        method: "post",
        auth: auth_1.auth,
        action: TagController_1.tagSaveAction,
    },
    {
        path: "/video",
        method: "post",
        auth: auth_1.auth,
        action: VideoController_1.videoSaveAction,
    },
    {
        path: "/getAllVideos",
        method: "get",
        action: VideoController_1.videoGetAllAction,
    },
    {
        path: "/getAllTags",
        method: "get",
        action: TagController_1.tagGetAllAction,
    },
    {
        path: "/register",
        method: "post",
        action: UserController_1.registerUserAction,
    },
    {
        path: "/getProfileById",
        method: "get",
        auth: auth_1.auth,
        action: UserController_1.getProfileByIdAction,
    },
    {
        path: "/login",
        method: "post",
        action: UserController_1.loginUserAction,
    },
    {
        path: "/getLikedVideos",
        method: "get",
        auth: auth_1.auth,
        action: VideoController_1.getLiekdVideosAction,
    },
    {
        path: "/getSavedVideos",
        method: "get",
        auth: auth_1.auth,
        action: VideoController_1.getSavedVideosAction,
    },
];
//# sourceMappingURL=routes.js.map