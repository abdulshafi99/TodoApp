import { Component } from '@angular/core';
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
  constructor(private fb: FormBuilder) {}

  registerForm = this.fb.group({
    todo: ['', Validators.required],
  });

  onSubmit(): void {
    console.log('submitted form', this.registerForm.value);
    console.log('submitted form', this.registerForm.valid);
    console.log('submitted form', this.registerForm.invalid);
    this.registerForm.reset();
    this.isSubmitted = true;
  }

  isSubmitted = false;
  check(feild: string): boolean | undefined {
    return (
      this.registerForm.get(feild)?.invalid &&
      (this.registerForm.get(feild)?.dirty ||
        this.registerForm.get(feild)?.touched ||
        this.isSubmitted)
    );
  }
}
