import { Component, OnInit } from '@angular/core';
import { Task } from '../tasks/task.interface';

import { FireService } from '../tasks/tasks.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [],
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private fireService: FireService,
    private messageService: MessageService
  ) {}

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
    this.messageService.showMessage('Task Updated');
  }

  deleteTask(id: string) {
    this.fireService.deleteTask(id);
    this.messageService.showMessage('Task Deleted');
  }

  deleteAllTasks() {
    for (let task of this.tasks) {
      this.deleteTask(task.id);
    }

    this.messageService.showMessage('All Task Updated');
  }
}
