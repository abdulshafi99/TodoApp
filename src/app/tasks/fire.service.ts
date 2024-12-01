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
import { Task } from '../task.interface';
import { documentId, setDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

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

  addTask(task: {
    task: string | null | undefined;
    status: boolean;
  }): Promise<any> {
    const id = uuidv4();
    const taskCollection = collection(this.firestore, 'todos');
    return setDoc(doc(taskCollection, id), task);
  }

  deleteTask(id: string) {
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

  updateTask(newTask: Task) {
    const taskRef = doc(this.firestore, `todos/${newTask.id}`);
    return setDoc(taskRef, newTask);
  }
}
