import { Request, Response } from "express";

import {
  checkExistingLogin,
  checkExistingName,
  createUser,
  getProfileById,
  login,
} from "../services/UserService";

export const registerUserAction = async (
  request: Request,
  response: Response
) => {
  const isProfileNameExists = await checkExistingName(request.body.name);

  if (isProfileNameExists) {
    response.status(500).send({ error: "Имя пользователя занято" });
    return;
  }

  const isLoginExists = await checkExistingLogin(request.body.login);

  if (isLoginExists) {
    response.status(500).send({ error: "Данный логин занят" });
    return;
  }

  const newUser = await createUser(request.body);
  response.send(newUser);
};

export const getProfileByIdAction = async (
  request: Request,
  response: Response
) => {
  const profile = await getProfileById(request.body.id);

  if (!profile) {
    response.status(404);
    response.end();
    return;
  }

  response.send(profile);
};

export const loginUserAction = async (request: Request, response: Response) => {
  try {
    const user = await login(request.body.login, request.body.password);
    response.send(user);
  } catch (error) {
    response.status(500).send({ error: "Не верный логин или пароль" });
  }
};
