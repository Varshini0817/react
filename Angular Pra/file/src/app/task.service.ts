import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks : Task[]=[
    {
      id:1, title:'VV', descr:'Veda', completed: true
    },
    {
      id:2, title:'V', descr:'Varsh', completed: false
    }
  ]
  getTasks(): Task[]{
    return this.tasks;
  }
  constructor() { }
}
