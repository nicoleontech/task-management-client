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
  constructor(private taskService: TaskService) {}

  loading = false;
  taskList: Task[] = [];
  subscription: Subscription | undefined;
  insertedTask: Task = {} as Task;
  updatedTask: Task = {} as Task;

  isEditing: boolean = false;
  taskToBeEdited: Task = {} as Task;

  priorityValues = ['high', 'medium', 'low'];
  statusValues = ['open', 'ongoing', 'completed', 'overdue'];
  taskId!: number;

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

  onSubmit(receivedTask: Task): void {
    this.taskService
      .addTask$Json$Json({ body: receivedTask })
      .subscribe((response) => {
        console.log(response);
        this.insertedTask = Object.assign(response);
        this.taskList.push(this.insertedTask);
      });
  }

  onDeleteTask(taskId: number) {
    console.log('delete called!');
    console.log(taskId);
    this.taskService
      .deleteTask$Response({ api_key: '', taskId: taskId })
      .subscribe((response) => {
        console.log(response);
        this.taskList.splice(
          this.taskList.findIndex((task) => task.taskId === taskId),
          1
        );
      });
  }

  //TODO : write error component and check if error response
  onUpdateTask(task: Task) {
    this.taskService
      .updateTask$Json$Json({ body: task })
      .subscribe((response) => {
        console.log(response);

        this.taskList[
          this.taskList.findIndex((task) => task.taskId === response.taskId)
        ] = response;
      });
  }

  onCancelUpdateTask() {
    this.isEditing = false;
  }
}
