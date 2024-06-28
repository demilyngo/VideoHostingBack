import "reflect-metadata";
import { DataSource } from "typeorm";
import { Request, Response } from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import { AppRoutes } from "./routes";
import * as jwt from "jsonwebtoken";

export const SECRET_KEY: jwt.Secret = "secret";
export const AppDataSource = new DataSource({
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
AppDataSource.initialize()
  .then(async (connection) => {
    const app = express();
    app.use(bodyParser.json());

    AppRoutes.forEach((route) => {
      if (route.auth) {
        app[route.method](
          route.path,
          route.auth,
          (request: Request, response: Response, next: Function) => {
            route
              .action(request, response)
              .then(() => next)
              .catch((err) => next(err));
          }
        );
      } else {
        app[route.method](
          route.path,
          (request: Request, response: Response, next: Function) => {
            route
              .action(request, response)
              .then(() => next)
              .catch((err) => next(err));
          }
        );
      }
    });

    app.listen(3000);

    console.log("Express application is up and running on port 3000");
  })
  .catch((error) => console.log("TypeORM connection error: ", error));
