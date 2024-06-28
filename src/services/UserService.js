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
exports.login = exports.getProfileById = exports.createUser = exports.checkExistingLogin = exports.checkExistingName = void 0;
const __1 = require("..");
const Profile_1 = require("../entity/Profile");
const User_1 = require("../entity/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const checkExistingName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield __1.AppDataSource.manager.exists(Profile_1.Profile, {
        where: {
            name: name,
        },
    });
});
exports.checkExistingName = checkExistingName;
const checkExistingLogin = (login) => __awaiter(void 0, void 0, void 0, function* () {
    return yield __1.AppDataSource.manager.exists(User_1.User, {
        where: {
            login: login,
        },
    });
});
exports.checkExistingLogin = checkExistingLogin;
const saltRounds = 8;
const createUser = (form) => __awaiter(void 0, void 0, void 0, function* () {
    const newProfile = new Profile_1.Profile();
    newProfile.name = form.name;
    yield __1.AppDataSource.manager.save(newProfile);
    const newUser = new User_1.User();
    newUser.email = form.email;
    newUser.login = form.login;
    newUser.password = yield bcrypt.hash(form.password, saltRounds);
    newUser.profile = newProfile;
    yield __1.AppDataSource.manager.save(newUser);
    return newUser;
});
exports.createUser = createUser;
const getProfileById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield __1.AppDataSource.manager.findOne(Profile_1.Profile, {
        where: {
            id: parseInt(id.toString()),
        },
        relations: {
            likedVideos: true,
            savedVideos: true,
        },
    });
    return profile;
});
exports.getProfileById = getProfileById;
const login = (login, password) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const user = yield __1.AppDataSource.manager.findOne(User_1.User, {
        where: {
            login: login.toString(),
        },
        relations: {
            profile: true,
        },
    });
    //   if (!user || !bcrypt.compareSync(password.toString(), user.password)) {
    //     throw new Error();
    //   }
    const token = jwt.sign({
        id: (_a = user.id) === null || _a === void 0 ? void 0 : _a.toString(),
        email: user.email,
        login: user.login,
        profile: user.profile,
    }, __1.SECRET_KEY, {
        expiresIn: "2 days",
    });
    return { user: user, token: token };
});
exports.login = login;
//# sourceMappingURL=UserService.js.map