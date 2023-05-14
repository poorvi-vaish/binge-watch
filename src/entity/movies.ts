import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({name: "movies"})
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column("text")
  description: string;

  @Column()
  year: number;

  @Column("simple-array", {nullable: true} )
  genre: string[];

  @Column()
  rating: string;

  @Column("text")
  url: string;

  @Column("text", {nullable: true})
  image: string;

}
