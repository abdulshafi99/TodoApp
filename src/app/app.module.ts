import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: AddTodoComponent },
  { path: 'todoList', component: TodoListComponent },
];

const firebaseConfig = {
  apiKey: 'AIzaSyA19eYLKG_AJJrKI7rX1hGT2H2GT20UY0A',
  authDomain: 'todo-app-d7431.firebaseapp.com',
  projectId: 'todo-app-d7431',
  storageBucket: 'todo-app-d7431.firebasestorage.app',
  messagingSenderId: '298966269288',
  appId: '1:298966269288:web:d56b24075331a90b95aadd',
};

@NgModule({
  declarations: [AppComponent, AddTodoComponent, TodoListComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
