import { Component } from '@angular/core';
import { Task } from '../tasks/task.interface';
import { OnInit } from '@angular/core';

import { FireService } from '../tasks/tasks.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [],
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private fireService: FireService) {}

  getTasks() {
    this.fireService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
  ngOnInit(): void {
    this.getTasks();
  }

  updateTaskStatus(newTask: Task) {
    this.fireService.updateTask(newTask);
  }

  deleteTask(id: string) {
    this.fireService.deleteTask(id);
  }

  deleteAllTasks() {
    this.fireService.deleteAllTasks();
  }
}
