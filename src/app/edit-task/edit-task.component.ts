import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService, TaskService } from '../api/services';
import { Task } from '../api/models';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
})
export class EditTaskComponent {
  form: FormGroup;
  label: string = 'Category';
  taskToBeEdited: Task = {} as Task;

  // categoryName: FormControl;
  categories: string[] = [];
  priorityValues = ['high', 'medium', 'low'];
  statusValues = ['open', 'ongoing', 'completed', 'overdue'];
  @Output() onChange = new EventEmitter();

  priority = null;
  status = null;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      categoryName: ['', Validators.required],
      dueDate: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],
    });

    this.loadCategories();
    this.getTaskId();
  }

  loadCategories() {
    this.categoryService.getAllCategoriesNames$Json().subscribe((response) => {
      this.categories = response;
    });
  }

  getTaskId() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      this.taskService
        .getTaskById$Json$Response({ taskId: id })
        .subscribe((response) => {
          this.taskToBeEdited = response.body;
        });
    });
  }

  selectOption(value: string) {
    this.onChange.emit(value);
  }

  onUpdateTask() {
    this.taskService
      .updateTask$Json$Json({ body: this.taskToBeEdited })
      .subscribe((response) => {
        console.log(response);
        this.router.navigate(['tasks']);
      });
  }

  onCancelEdit() {
    this.router.navigate(['tasks']);
  }
}
