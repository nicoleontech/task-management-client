import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { TaskComponent } from './task/task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { OrderModule } from 'ngx-order-pipe';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { KeycloakService } from './auth/keycloak.service';
import { ErrorInterceptor } from './exceptions/error-interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';

export function initializeKeycloak(
  keycloak: KeycloakService
): () => Promise<any> {
  return () => keycloak.initKeycloak();
}

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    CreateTaskComponent,
    DropdownComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
  ],

  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
