import { Component } from '@angular/core';
import { Task } from '../task.interface';
import { OnInit } from '@angular/core';

import { FireService } from '../tasks/fire.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [],
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private fireService: FireService) {}

  ngOnInit(): void {
    this.fireService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  updateTaskStatus(newTask: Task) {
    this.fireService.updateTask(newTask);
    for (let task of this.tasks) console.log(task);
  }

  deleteTask(id: string) {
    this.fireService.deleteTask(id);
  }

  deleteAllTasks() {
    this.fireService.deleteAllTasks();
  }
}
