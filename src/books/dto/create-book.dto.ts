import { IsDate, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { Genre } from 'src/common/enums/genres.enum';

export class CreateBookDto {
  
  @IsNotEmpty({ message: 'The title field must not be empty' })
  @IsString({ message: 'The title must be a string' })
  title: string;

  @Transform(({ value }) => value ? new Date(value) : null)
  @IsDate({ message: 'The publicationDate must be a valid date' })
  @IsNotEmpty({ message: 'The publicationDate must not be empty' })
  publicationDate: Date;

  @IsNotEmpty({ message: 'The author field must not be empty' })
  @IsString({ message: 'The author must be a string' })
  author: string;

  @IsEnum(Genre, { message: 'The genre must be a valid enum value' })
  @IsNotEmpty({ message: 'The genre must not be empty' })
  genre: Genre;
}
