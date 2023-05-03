import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskService } from '../api/services';
import { Task } from '../api/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit, OnDestroy {
  constructor(private taskService: TaskService) {}

  loading = false;
  taskList: Task[] = [];
  subscription: Subscription | undefined;

  ngOnInit(): void {
    console.log('Starting "findall" API call');
    this.loading = true;
    this.subscription = this.taskService.getAllTasks$Json().subscribe({
      next: (apiData: Array<Task>) => {
        console.log(apiData);
      },
      error: (error: any) => {
        this.loading = false;
        console.log(error);
      },
      complete: () => {
        this.loading = false;
        console.log('API call completed');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
