import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Task } from './task';
import { documentId, setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FireService {
  constructor(private firestore: Firestore) {}

  getTasks(): Observable<Task[]> {
    const taskCollection = collection(this.firestore, 'todos');
    return collectionData(taskCollection, { idField: 'id' }) as Observable<
      Task[]
    >;
  }

  addTask(task: Task): Promise<any> {
    const taskCollection = collection(this.firestore, 'todos');
    return addDoc(taskCollection, task);
  }

  deleteTask(id: number) {
    const taskRef = doc(this.firestore, `todos/${id}`);
    return deleteDoc(taskRef);
  }

  deleteAllTasks() {
    const taskCollection = collection(this.firestore, 'todos');

    const tasksObservable = collectionData(taskCollection, {
      idField: 'id',
    }) as Observable<Task[]>;

    tasksObservable.subscribe((tasks) => {
      for (let task of tasks) {
        {
          const taskRef = doc(this.firestore, `todos/${task.id}`);
          deleteDoc(taskRef);
        }
      }
    });
  }

  updateTask(id: number, newTask: Task) {
    const taskRef = doc(this.firestore, `todos/${id}`);
    return setDoc(taskRef, newTask);
  }
}
