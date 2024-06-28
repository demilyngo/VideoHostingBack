"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
const typeorm_1 = require("typeorm");
const Tag_1 = require("./Tag");
const Profile_1 = require("./Profile");
let Video = class Video {
    constructor(options) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.id = (_a = options === null || options === void 0 ? void 0 : options.id) !== null && _a !== void 0 ? _a : 0;
        this.title = (_b = options === null || options === void 0 ? void 0 : options.title) !== null && _b !== void 0 ? _b : "";
        this.comment = (_c = options === null || options === void 0 ? void 0 : options.comment) !== null && _c !== void 0 ? _c : "";
        this.creationDate = (_d = options === null || options === void 0 ? void 0 : options.creationDate) !== null && _d !== void 0 ? _d : new Date();
        this.likesCount = (_e = options === null || options === void 0 ? void 0 : options.likesCount) !== null && _e !== void 0 ? _e : 0;
        this.path = (_f = options === null || options === void 0 ? void 0 : options.path) !== null && _f !== void 0 ? _f : "";
        this.creator = (_g = options === null || options === void 0 ? void 0 : options.creator) !== null && _g !== void 0 ? _g : new Profile_1.Profile();
        this.tags = options === null || options === void 0 ? void 0 : options.tags;
    }
};
exports.Video = Video;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Video.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Video.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Video.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Video.prototype, "creationDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Video.prototype, "likesCount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Video.prototype, "path", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Profile_1.Profile),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Profile_1.Profile)
], Video.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => Tag_1.Tag),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Video.prototype, "tags", void 0);
exports.Video = Video = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], Video);
//# sourceMappingURL=Video.js.map