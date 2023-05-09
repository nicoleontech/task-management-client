import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from '../api/services';
import { Task } from '../api/models';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit, OnDestroy {
  form: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      dueDate: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  loading = false;
  taskList: Task[] = [];
  subscription: Subscription | undefined;
  task: Task = {
    taskId: 1,
    title: '',
    description: '',
    priority: 'high',
    status: 'open',
    dueDate: '',
  };

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

  onSubmit(): void {
    console.log('insert call');
    if (this.form.valid) {
      console.log(this.form.value);
      const task = this.form.value as Task;
      console.log({ body: task });
      // const taskWithBody = { body: task };
      this.taskService
        .addTask$Json$Json({ body: task })
        .subscribe((response) => {
          console.log(response);
        });
    } else {
      console.log('Form is not valid');
    }
  }

  onDeleteTask(taskId: number) {
    console.log('delete called!');
    console.log(taskId);
    this.taskService
      .deleteTask$Response({ api_key: '', taskId: taskId })
      .subscribe((response) => console.log(response));
  }

  editId: number | undefined;

  onUpdateTask(task: Task) {
    this.editId = task.taskId;
    this.taskService
      .updateTask$Json$Json({ body: task })
      .subscribe((response) => console.log(response));
  }
}
