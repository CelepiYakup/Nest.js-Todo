import { IsString, IsDateString, IsNotEmpty,  } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty()
  @IsNotEmpty({message: "Title is BotEkrem"})
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  deadline: string;

  
}

