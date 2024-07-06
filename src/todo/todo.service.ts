import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateTodoDto } from './dto/create-todo.dto';


@Injectable()
export class TodoService {
  constructor( private readonly databaseService: DatabaseService ) {}

  create(createTodoDto: CreateTodoDto) {
    const newTodo = { id: Date.now(), ...createTodoDto };
    this.databaseService.redis.set(newTodo.id.toString(), JSON.stringify(newTodo));
    return newTodo;
  }
  

  findAll() {
    this.databaseService.redis.set('key', 'value');
    return `This action returns all todo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: string, updateTodoDto: Partial<CreateTodoDto>) {
    
    console.log(updateTodoDto);
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
