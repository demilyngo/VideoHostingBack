import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Profile } from "./Profile";

@Entity()
export class User {
  constructor(options?: Partial<User>) {
    this.id = options?.id ?? 0;
    this.email = options?.email ?? "";
    this.login = options?.login ?? "";
    this.password = options?.password ?? "";
    this.profile = options?.profile ?? new Profile();
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @OneToOne((type) => Profile)
  @JoinColumn()
  profile: Profile;
}
