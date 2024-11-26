import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styles: [],
})
export class AddTodoComponent {
  counter = makeCounter();
  constructor(private fb: FormBuilder, private taskService: TaskService) {}

  addTask = this.fb.group({
    task: ['', Validators.required],
  });

  onSubmit(): void {
    this.isSubmitted = true;

    let task = {
      id: this.counter(),
      task: this.addTask.value.task,
      status: false,
    };
    this.taskService.addTask(task);

    this.addTask.reset();
  }

  isSubmitted = false;
  check(feild: string): boolean | undefined {
    return (
      this.addTask.get(feild)?.invalid &&
      (this.addTask.get(feild)?.dirty ||
        this.addTask.get(feild)?.touched ||
        this.isSubmitted)
    );
  }
}

function makeCounter(n = 0) {
  let counter = n;
  return function () {
    return counter++;
  };
}
