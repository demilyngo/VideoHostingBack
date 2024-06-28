import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Tag } from "./Tag";
import { Profile } from "./Profile";

@Entity()
export class Video {
  constructor(options?: Partial<Video>) {
    this.id = options?.id ?? 0;
    this.title = options?.title ?? "";
    this.comment = options?.comment ?? "";
    this.creationDate = options?.creationDate ?? new Date();
    this.likesCount = options?.likesCount ?? 0;
    this.path = options?.path ?? "";
    this.creator = options?.creator ?? new Profile();
    this.tags = options?.tags;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  comment: string;

  @Column()
  creationDate: Date;

  @Column()
  likesCount: number;

  @Column()
  path: string;

  @ManyToOne((type) => Profile)
  @JoinColumn()
  creator: Profile;

  @ManyToMany((type) => Tag)
  @JoinTable()
  tags: Tag[];
}
