import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../api/models';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input() label: string | undefined;
  @Input() options: string[] = [];
  @Output() onChange = new EventEmitter<string>();

  onChangeValue(event: any) {
    const selectedOption = event.target.value;
    this.onChange.emit(selectedOption);
  }
}
