import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable } from "typeorm";
import { Movie } from "./movies";

@Entity({ name: "users"})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column("simple-array")
  @ManyToMany(type => Movie)
  @JoinTable()
  watchedMovies: Movie[];

  @Column("simple-array")
  @ManyToMany(type => Movie)
  @JoinTable()
  watchList: Movie[];
}
