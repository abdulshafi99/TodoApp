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

  updateTaskStatus(id: number) {
    const index = this.tasks.findIndex((task) => task.id === id);
    const status = this.tasks[index].status;
    this.tasks[index].status = !status;

    console.log(this.tasks);
  }

  deleteTask(id: number) {
    this.tasks.splice(
      this.tasks.findIndex((task) => task.id === id),
      1
    );
    console.log(this.tasks);
  }
}

export interface Task {
  id: number;
  task: string | null | undefined;
  status: boolean;
}
