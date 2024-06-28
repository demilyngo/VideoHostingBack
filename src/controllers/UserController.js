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
exports.loginUserAction = exports.getProfileByIdAction = exports.registerUserAction = void 0;
const UserService_1 = require("../services/UserService");
const registerUserAction = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const isProfileNameExists = yield (0, UserService_1.checkExistingName)(request.body.name);
    if (isProfileNameExists) {
        response.status(500).send({ error: "Имя пользователя занято" });
        return;
    }
    const isLoginExists = yield (0, UserService_1.checkExistingLogin)(request.body.login);
    if (isLoginExists) {
        response.status(500).send({ error: "Данный логин занят" });
        return;
    }
    const newUser = yield (0, UserService_1.createUser)(request.body);
    response.send(newUser);
});
exports.registerUserAction = registerUserAction;
const getProfileByIdAction = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield (0, UserService_1.getProfileById)(request.body.id);
    if (!profile) {
        response.status(404);
        response.end();
        return;
    }
    response.send(profile);
});
exports.getProfileByIdAction = getProfileByIdAction;
const loginUserAction = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, UserService_1.login)(request.body.login, request.body.password);
        response.send(user);
    }
    catch (error) {
        response.status(500).send({ error: "Не верный логин или пароль" });
    }
});
exports.loginUserAction = loginUserAction;
//# sourceMappingURL=UserController.js.map