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
exports.AppDataSource = exports.SECRET_KEY = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = require("./routes");
exports.SECRET_KEY = "secret";
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "298346k29430602c",
    database: "videohosting",
    synchronize: true,
    entities: ["src/entity/*.js"],
    subscribers: ["src/subscriber/*.js"],
    migrations: ["src/migration/*.js"],
});
exports.AppDataSource.initialize()
    .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    const app = express();
    app.use(bodyParser.json());
    routes_1.AppRoutes.forEach((route) => {
        if (route.auth) {
            app[route.method](route.path, route.auth, (request, response, next) => {
                route
                    .action(request, response)
                    .then(() => next)
                    .catch((err) => next(err));
            });
        }
        else {
            app[route.method](route.path, (request, response, next) => {
                route
                    .action(request, response)
                    .then(() => next)
                    .catch((err) => next(err));
            });
        }
    });
    app.listen(3000);
    console.log("Express application is up and running on port 3000");
}))
    .catch((error) => console.log("TypeORM connection error: ", error));
//# sourceMappingURL=index.js.map