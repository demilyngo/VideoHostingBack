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
exports.tagSaveAction = exports.tagGetAllAction = void 0;
const TagService_1 = require("../services/TagService");
function tagGetAllAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const tags = yield (0, TagService_1.getAllTags)();
        response.send(tags);
    });
}
exports.tagGetAllAction = tagGetAllAction;
function tagSaveAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, TagService_1.saveTag)(request.body.name);
    });
}
exports.tagSaveAction = tagSaveAction;
//# sourceMappingURL=TagController.js.map