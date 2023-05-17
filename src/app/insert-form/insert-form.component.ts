import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../api/models';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css'],
})
export class InsertFormComponent {
  form: FormGroup;
  @Input() priorityValues: string[] = [];
  @Input() statusValues: string[] = [];
  @Output() onSubmit = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      dueDate: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  onSubmitForm() {
    const task = this.form.value as Task;
    this.onSubmit.emit(task);
  }
}
