import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';


@Injectable()
export class TodoService {
  constructor( private readonly databaseService: DatabaseService ) {}

  create(createTodoDto) {
    return 'This action adds a new todo';
  }
  

  findAll() {
    this.databaseService.redis.set('key', 'value');
    return `This action returns all todo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto) {
    return `This action updates a #${id} todo`;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
