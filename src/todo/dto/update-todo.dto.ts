import { IsString,  IsNotEmpty } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    id: string;
  } 