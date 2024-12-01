import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FireService } from '../tasks/fire.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styles: [],
})
export class AddTodoComponent {
  constructor(private fb: FormBuilder, private fireService: FireService) {}

  addTask = this.fb.group({
    task: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.addTask.invalid) {
      return;
    }
    let task = {
      task: this.addTask.value.task,
      status: false,
    };

    this.fireService.addTask(task).then((res) => {});

    this.addTask.reset();
  }

  check(feild: string): boolean | undefined {
    return (
      this.addTask.get(feild)?.invalid &&
      (this.addTask.get(feild)?.dirty || this.addTask.get(feild)?.touched)
    );
  }
}
