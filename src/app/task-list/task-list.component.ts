import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../api/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  constructor(private router: Router) {}
  order: string = 'taskId';
  isEditing: boolean = false;
  taskToBeEdited: Task = {} as Task;
  @Input() priorityValues: string[] = [];
  @Input() statusValues: string[] = [];

  @Input() taskList: Task[] = [];
  @Output() deleteTask = new EventEmitter<number>();
  // @Output() editTask = new EventEmitter();
  // @Output() updateTask = new EventEmitter<Task>();
  // @Output() cancelUpdateTask = new EventEmitter();

  onDeleteTask(taskId: number) {
    this.deleteTask.emit(taskId);
  }

  onEditTask(task: Task) {
    this.router.navigate(['/task/', task.taskId]);
  }

  // onUpdateTask(task: Task) {
  //   this.updateTask.emit(task);
  //   this.isEditing = false;
  // }
  // onCancelEdit() {
  //   this.isEditing = false;
  // }
}
