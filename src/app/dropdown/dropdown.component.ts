import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() id: string = '';
  @Input() value: string = '';

  onChangeValue(event: any) {
    const selectedOption = event.target.value;
    this.onChange.emit(selectedOption);
    this.dropdownControl.setValue(selectedOption);
  }
}
