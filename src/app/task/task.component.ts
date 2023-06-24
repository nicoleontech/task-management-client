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
    this.loading = true;
    this.subscription = this.taskService.getAllTasks$Json().subscribe({
      next: (apiData: Array<Task>) => {
        this.taskList = apiData;
        this.loadCategories();
      },
      error: (error: any) => {
        this.loading = false;
        console.log(error);
      },
      complete: () => {
        this.loading = false;
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

  onSelectOption(value: string) {
    console.log(value);
    this.selectedOptionDropdown = value;
  }

  onDeleteTask(taskId: number) {
    this.taskService
      .deleteTask$Response({ api_key: '', taskId: taskId })
      .subscribe((response) => {
        this.taskList.splice(
          this.taskList.findIndex((task) => task.taskId === taskId),
          1
        );
      });
  }

  onUpdateTask(task: Task) {
    this.taskService
      .updateTask$Json$Json({ body: task })
      .subscribe((response) => {
        this.taskList[
          this.taskList.findIndex((task) => task.taskId === response.taskId)
        ] = response;
      });
  }

  onCancelUpdateTask() {
    this.isEditing = false;
  }
}
