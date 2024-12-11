import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
    course = 'Angular';

    tasks : Task[]=[];
    constructor(
      private taskService : TaskService
    ){}

    ngOnInit() : void {
      this.tasks = this.taskService.getTasks();
    }
}
