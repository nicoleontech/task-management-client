import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../api/models';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.css'],
})
export class SimpleTableComponent {
  @Input() isEditing: boolean = false;
  @Input() priorityValues: string[] = [];
  @Input() statusValues: string[] = [];

  @Input() taskList: Task[] = [];
  @Output() deleteTask = new EventEmitter<number>();
  @Output() editTask = new EventEmitter();
  @Output() updateTask = new EventEmitter<Task>();
  @Output() cancelUpdateTask = new EventEmitter();

  onDeleteTask(taskId: number) {
    this.deleteTask.emit(taskId);
  }

  onEditTask() {
    this.editTask.emit();
  }

  onUpdateTask(task: Task) {
    this.updateTask.emit(task);
  }
  onCancelEdit() {
    this.cancelUpdateTask.emit();
  }
}
