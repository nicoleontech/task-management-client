import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { TaskComponent } from './task/task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { InsertFormComponent } from './insert-form/insert-form.component';
import { OrderModule } from 'ngx-order-pipe';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { KeycloakService } from './auth/keycloak.service';

export function initializeKeycloak(
  keycloak: KeycloakService
): () => Promise<any> {
  return () => keycloak.initKeycloak();
}

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    SimpleTableComponent,
    InsertFormComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
  ],
  //RouterModule.forRoot(routes)],
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
