"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSavedVideos = exports.getLikedVideos = exports.saveVideo = void 0;
const Video_1 = require("../entity/Video");
const __1 = require("..");
const Profile_1 = require("../entity/Profile");
const saveVideo = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const newVideo = new Video_1.Video();
    newVideo.title = body.title;
    newVideo.comment = body.comment;
    newVideo.creationDate = new Date();
    newVideo.likesCount = body.likesCount;
    newVideo.path = body.path;
    newVideo.creator = body.creator;
    newVideo.tags = body.tags;
    yield __1.AppDataSource.manager.save(newVideo);
    return newVideo;
});
exports.saveVideo = saveVideo;
const getLikedVideos = (profileId) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield __1.AppDataSource.manager.findOne(Profile_1.Profile, {
        where: {
            id: profileId,
        },
        relations: {
            likedVideos: true,
        },
    });
    return profile.likedVideos;
});
exports.getLikedVideos = getLikedVideos;
const getSavedVideos = (profileId) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield __1.AppDataSource.manager.findOne(Profile_1.Profile, {
        where: {
            id: profileId,
        },
        relations: {
            savedVideos: true,
        },
    });
    return profile.savedVideos;
});
exports.getSavedVideos = getSavedVideos;
//# sourceMappingURL=VideoService.js.map