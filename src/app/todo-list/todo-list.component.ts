import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [],
})
export class TodoListComponent {
  tasks = this.taskService.getTasks();
  constructor(private taskService: TaskService) {}

  updateTaskStatus(id: number) {
    this.taskService.updateTaskStatus(id);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
}
