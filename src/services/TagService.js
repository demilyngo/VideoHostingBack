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
exports.saveTag = exports.getAllTags = void 0;
const __1 = require("..");
const Tag_1 = require("../entity/Tag");
const getAllTags = () => __awaiter(void 0, void 0, void 0, function* () {
    const tags = yield __1.AppDataSource.manager.find(Tag_1.Tag);
    return tags;
});
exports.getAllTags = getAllTags;
const saveTag = (tagName) => __awaiter(void 0, void 0, void 0, function* () {
    const newTag = new Tag_1.Tag();
    newTag.name = tagName;
    yield __1.AppDataSource.manager.save(newTag);
});
exports.saveTag = saveTag;
//# sourceMappingURL=TagService.js.map