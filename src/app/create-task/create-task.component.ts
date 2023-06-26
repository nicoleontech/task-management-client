import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../api/models';
import { CategoryService, TaskService } from '../api/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent {
  form: FormGroup;
  label: string = 'Category';

  categories: string[] = [];
  priorityValues = ['high', 'medium', 'low'];
  statusValues = ['open', 'ongoing', 'completed', 'overdue'];
  @Output() onChange = new EventEmitter();

  priority = null;
  status = null;
  categoryName = null;

  constructor(
    private categoryService: CategoryService,
    private taskService: TaskService,
    private router: Router
  ) {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      categoryName: new FormControl(this.categoryName, Validators.required),
      priority: new FormControl(this.priority),
      status: new FormControl(this.status),
    });
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
      this.router.navigate(['tasks']);
    });
  }

  // selectOption(value: string) {
  //   this.onChange.emit(value);
  // }
}
