import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  publisher: string;

  @IsInt()
  @IsNotEmpty()
  pages: number;
}
