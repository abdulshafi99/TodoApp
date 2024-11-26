import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [];

  constructor() {}

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    console.log(task);
  }

  updateTask(id: number) {}

  deleteTask(id: number) {}
}

export interface Task {
  id: number;
  task: string | null | undefined;
  status: boolean;
}
