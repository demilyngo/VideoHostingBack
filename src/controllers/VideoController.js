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
exports.getSavedVideosAction = exports.getLiekdVideosAction = exports.videoSaveAction = exports.videoGetAllAction = void 0;
const Video_1 = require("../entity/Video");
const __1 = require("..");
const VideoService_1 = require("../services/VideoService");
function videoGetAllAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        response.send(yield __1.AppDataSource.manager.find(Video_1.Video, {
            relations: {
                tags: true,
                creator: true,
            },
        }));
    });
}
exports.videoGetAllAction = videoGetAllAction;
function videoSaveAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const newVideo = yield (0, VideoService_1.saveVideo)(request.body);
        response.send(newVideo);
    });
}
exports.videoSaveAction = videoSaveAction;
const getLiekdVideosAction = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const likedVideos = yield (0, VideoService_1.getLikedVideos)(request.token.profile.id);
    response.send(likedVideos);
});
exports.getLiekdVideosAction = getLiekdVideosAction;
function getSavedVideosAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const savedVideos = yield (0, VideoService_1.getSavedVideos)(request.token.profile.id);
        response.send(savedVideos);
    });
}
exports.getSavedVideosAction = getSavedVideosAction;
//# sourceMappingURL=VideoController.js.map