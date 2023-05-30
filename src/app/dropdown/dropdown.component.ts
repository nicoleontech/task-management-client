import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../api/models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input() label: string | undefined;
  @Input() options: string[] = [];
  @Input() dropdownControl: any;
  @Output() onChange = new EventEmitter();
  selectedValue: string | undefined;

  onChangeValue(event: any) {
    const selectedOption = event.target.value;
    this.onChange.emit(selectedOption);
    this.dropdownControl.setValue(this.selectedValue);
  }
}
