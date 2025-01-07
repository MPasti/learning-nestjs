import { IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateMovieDto {
  @IsString({ message: 'O nome deve ser uma String' })
  @MaxLength(255)
  readonly name?: string;
  @IsString({ message: 'A imagem deve estar em String' })
  readonly image?: string;
  @IsNumber()
  readonly rating?: number;
  @IsString({ message: 'O nome deve ser uma String' })
  readonly plot?: string;
}
