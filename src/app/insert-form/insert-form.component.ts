import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Task } from '../api/models';
import { CategoryService, TaskService } from '../api/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css'],
})
export class InsertFormComponent {
  form: FormGroup;
  label: string = 'Category';

  categoryName: FormControl;
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
    private router: Router
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      categoryName: new FormControl('', { nonNullable: true }),
      dueDate: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],
    });
    this.categoryName = this.form.get('categoryName') as FormControl;
    this.categoryName.addValidators(Validators.required);
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getAllCategoriesNames$Json().subscribe((response) => {
      this.categories = response;
    });
  }

  onSubmitForm() {
    const task = this.form.value as Task;

    this.taskService.addTask$Json$Json({ body: task }).subscribe((response) => {
      this.router.navigate(['task-list']);
    });
  }

  selectOption(value: string) {
    this.onChange.emit(value);
  }
}
