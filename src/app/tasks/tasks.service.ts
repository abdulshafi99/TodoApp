import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Task } from './task.interface';
import { setDoc } from 'firebase/firestore';
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
  }): Promise<void> {
    const id = uuidv4();
    const taskCollection = collection(this.firestore, 'todos');
    return setDoc(doc(taskCollection, id), task);
  }

  deleteTask(id: string): Promise<void> {
    const taskRef = doc(this.firestore, `todos/${id}`);
    return deleteDoc(taskRef);
  }

  updateTask(newTask: Task): Promise<void> {
    const taskRef = doc(this.firestore, `todos/${newTask.id}`);
    return setDoc(taskRef, newTask);
  }
}
