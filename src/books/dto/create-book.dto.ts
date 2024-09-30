import { IsDate, IsEnum, IsNotEmpty, IsString,  } from "class-validator";
import { Transform } from "class-transformer";
import { Genre } from "src/common/enums/genres.enum";

export class CreateBookDto {

  @IsNotEmpty()
  title: string;

  @Transform(({ value }) => value? new Date(value): null)
  @IsDate()
  publicationDate: Date;

  @IsString()
  author:string;

  @IsEnum(Genre)
  genre: Genre;

}
