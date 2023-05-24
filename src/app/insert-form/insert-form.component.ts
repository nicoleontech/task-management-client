import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../api/models';
import { CategoryService } from '../api/services';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css'],
})
export class InsertFormComponent {
  form: FormGroup;
  label: string = 'Category';
  @Input() priorityValues: string[] = [];
  @Input() statusValues: string[] = [];
  @Input() categories: string[] = [];
  @Output() onSubmit = new EventEmitter();
  @Output() onChange = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      categoryName: [Validators.required],
      dueDate: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  onSubmitForm() {
    const task = this.form.value as Task;
    console.log(`Task is: ${task}`);
    this.onSubmit.emit(task);
  }

  selectOption(value: string) {
    this.onChange.emit(value);
  }
}
