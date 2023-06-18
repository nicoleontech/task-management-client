import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: '', redirectTo: '/task-list', pathMatch: 'full' },
  { path: 'task-list', component: TaskComponent },
  { path: 'insert-task', component: CreateTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
