import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService, TaskService } from '../api/services';
import { Task } from '../api/models';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit, OnDestroy {
  constructor(
    private taskService: TaskService,
    private categoryService: CategoryService
  ) {}

  loading = false;
  taskList: Task[] = [];
  categories: string[] = [];
  subscription: Subscription | undefined;
  insertedTask: Task = {} as Task;
  updatedTask: Task = {} as Task;

  isEditing: boolean = false;
  taskToBeEdited: Task = {} as Task;
  selectedOptionDropdown: string = '';

  priorityValues = ['high', 'medium', 'low'];
  statusValues = ['open', 'ongoing', 'completed', 'overdue'];
  taskId!: number;

  ngOnInit(): void {
    console.log('starting get api call');

    this.loading = true;
    this.subscription = this.taskService.getAllTasks$Json().subscribe({
      next: (apiData: Array<Task>) => {
        this.taskList = apiData;
        this.loadCategories();
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

  loadCategories() {
    this.categoryService.getAllCategoriesNames$Json().subscribe((response) => {
      this.categories = response;
    });
  }

  // onSubmit(receivedTask: Task): void {
  //   console.log(receivedTask);
  //   receivedTask.categoryName = this.selectedOptionDropdown;

  //   this.taskService
  //     .addTask$Json$Json({ body: receivedTask })
  //     .subscribe((response) => {
  //       console.log(response);
  //       this.insertedTask = Object.assign(response);
  //       this.taskList.push(this.insertedTask);
  //     });
  // }

  onSelectOption(value: string) {
    console.log(value);
    this.selectedOptionDropdown = value;
    console.log(this.selectedOptionDropdown);
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
