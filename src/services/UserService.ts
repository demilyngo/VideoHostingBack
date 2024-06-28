import { AppDataSource, SECRET_KEY } from "..";
import { Profile } from "../entity/Profile";
import { User } from "../entity/User";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { RegisterForm } from "../entity/RegisterForm";

export const checkExistingName = async (name: string): Promise<boolean> => {
  return await AppDataSource.manager.exists(Profile, {
    where: {
      name: name,
    },
  });
};

export const checkExistingLogin = async (login: string): Promise<boolean> => {
  return await AppDataSource.manager.exists(User, {
    where: {
      login: login,
    },
  });
};

const saltRounds = 8;
export const createUser = async (form: RegisterForm): Promise<User> => {
  const newProfile = new Profile();
  newProfile.name = form.name;
  await AppDataSource.manager.save(newProfile);

  const newUser = new User();
  newUser.email = form.email;
  newUser.login = form.login;
  newUser.password = await bcrypt.hash(form.password, saltRounds);
  newUser.profile = newProfile;
  await AppDataSource.manager.save(newUser);

  return newUser;
};

export const getProfileById = async (id: number): Promise<Profile> => {
  const profile = await AppDataSource.manager.findOne(Profile, {
    where: {
      id: parseInt(id.toString()),
    },
    relations: {
      likedVideos: true,
      savedVideos: true,
    },
  });
  return profile;
};

export const login = async (login: string, password: string) => {
  const user = await AppDataSource.manager.findOne(User, {
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

  const token = jwt.sign(
    {
      id: user.id?.toString(),
      email: user.email,
      login: user.login,
      profile: user.profile,
    },
    SECRET_KEY,
    {
      expiresIn: "2 days",
    }
  );
  return { user: user, token: token };
};
