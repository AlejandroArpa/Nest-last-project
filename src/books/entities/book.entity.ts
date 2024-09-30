import { Genre } from "src/common/enums/genres.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  title: string;

  @Column({nullable: false})
  author: string;

  @Column({name: 'publication_date', nullable: false})
  publicationDate: Date;

  @Column({type:'enum', enum: Genre, nullable: false})
  genre: Genre;
}
