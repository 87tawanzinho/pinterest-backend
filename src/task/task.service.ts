import { Injectable } from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  private task: TaskDto[] = [];
  async create(task: TaskDto) {
    this.task.push(task);
    console.log(this.task);
  }
}
