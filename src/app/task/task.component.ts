import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from '../api/services';
import { Task } from '../api/models';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit, OnDestroy {
  constructor(private taskService: TaskService) { }

  loading = false;
  taskList: Task[] = [];
  subscription: Subscription | undefined;
  @Input() items: Task[] = [];

  ngOnInit(): void {
    console.log('Starting "findall" API call');
    this.loading = true;
    this.subscription = this.taskService.getAllTasks$Json().subscribe({
      next: (apiData: Array<Task>) => {
        this.taskList = apiData;

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