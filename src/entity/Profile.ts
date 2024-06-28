import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Video } from "./Video";

@Entity()
export class Profile {
  constructor(options?: Partial<Profile>) {
    this.id = options?.id ?? 0;
    this.name = options?.name ?? "";
    this.likedVideos = options?.likedVideos;
    this.savedVideos = options?.savedVideos;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Video, {
    cascade: true,
  })
  @JoinTable()
  likedVideos: Video[];

  @ManyToMany((type) => Video, {
    cascade: true,
  })
  @JoinTable()
  savedVideos: Video[];
}
