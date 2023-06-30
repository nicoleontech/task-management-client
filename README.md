# TaskManagementClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server
You can run this application either locally or inside a docker container.
To run the application locally, after cloning this repository you can:
- run `ng serve` for a dev server.
- navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
At first, you will see the default login page of keycloak. You can log in using the username nicolesar and password 12345,
or using the username example and password 12345!

Alternatively, if you wish to run this application inside a docker container, you could follow the steps below:
- open a cli, go to the source directory of the project, and execute this bat file: `task-management-client-startup.bat`.
- navigate to `http://localhost:4200/`. The application will be accessible via localhost. At first, you will see the default
  login page of keycloak. You can log in using the username nicolesar and password 12345, or using the username example and password 12345!
The above-mentioned steps will build a docker image for the client application and run it inside a docker container.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
