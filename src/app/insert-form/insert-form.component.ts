import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Task } from '../api/models';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css'],
})
export class InsertFormComponent {
  form: FormGroup;
  label: string = 'Category';
  dropdownControl: FormControl;
  @Input() priorityValues: string[] = [];
  @Input() statusValues: string[] = [];
  @Input() categories: string[] = [];
  @Output() onSubmit = new EventEmitter();
  @Output() onChange = new EventEmitter();

  priority = null;
  status = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      dropdownControl: new FormControl('', { nonNullable: true }),
      dueDate: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required],
    });
    this.dropdownControl = this.form.get('dropdownControl') as FormControl;
    this.dropdownControl.addValidators(Validators.required);
  }

  onSubmitForm() {
    const task = this.form.value as Task;
    console.log(`Task is: ${task}`);
    this.onSubmit.emit(task);
    this.form.reset();
  }

  selectOption(value: string) {
    this.onChange.emit(value);
  }
}
