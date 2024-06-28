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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const Profile_1 = require("./Profile");
let User = class User {
    constructor(options) {
        var _a, _b, _c, _d, _e;
        this.id = (_a = options === null || options === void 0 ? void 0 : options.id) !== null && _a !== void 0 ? _a : 0;
        this.email = (_b = options === null || options === void 0 ? void 0 : options.email) !== null && _b !== void 0 ? _b : "";
        this.login = (_c = options === null || options === void 0 ? void 0 : options.login) !== null && _c !== void 0 ? _c : "";
        this.password = (_d = options === null || options === void 0 ? void 0 : options.password) !== null && _d !== void 0 ? _d : "";
        this.profile = (_e = options === null || options === void 0 ? void 0 : options.profile) !== null && _e !== void 0 ? _e : new Profile_1.Profile();
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "login", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => Profile_1.Profile),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Profile_1.Profile)
], User.prototype, "profile", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Object])
], User);
//# sourceMappingURL=User.js.map