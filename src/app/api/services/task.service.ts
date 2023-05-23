/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Task } from '../models/task';

/**
 * Operations about tasks
 */
@Injectable({
  providedIn: 'root',
})
export class TaskService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Path part for operation getAllTasks
   */
  static readonly GetAllTasksPath = '/task';

  /**
   * Returns all tasks from the system that the user has access to.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTasks$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTasks$Json$Response(
    params?: {},
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Task>>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      TaskService.GetAllTasksPath,
      'get'
    );
    if (params) {
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Array<Task>>;
        })
      );
  }

  /**
   * Returns all tasks from the system that the user has access to.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTasks$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTasks$Json(
    params?: {},
    context?: HttpContext
  ): Observable<Array<Task>> {
    return this.getAllTasks$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Task>>) => r.body as Array<Task>)
    );
  }

  /**
   * Returns all tasks from the system that the user has access to.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTasks$Xml()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTasks$Xml$Response(
    params?: {},
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Task>>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      TaskService.GetAllTasksPath,
      'get'
    );
    if (params) {
    }

    return this.http
      .request(
        rb.build({
          responseType: 'blob',
          accept: 'application/xml',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Array<Task>>;
        })
      );
  }

  /**
   * Returns all tasks from the system that the user has access to.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllTasks$Xml$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTasks$Xml(params?: {}, context?: HttpContext): Observable<Array<Task>> {
    return this.getAllTasks$Xml$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Task>>) => r.body as Array<Task>)
    );
  }

  /**
   * Path part for operation updateTask
   */
  static readonly UpdateTaskPath = '/task';

  /**
   * Update an existing task.
   *
   * Update an existing task by Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTask$Json$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTask$Json$Json$Response(
    params: {
      /**
       * Update an existent task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Task>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      TaskService.UpdateTaskPath,
      'put'
    );
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Task>;
        })
      );
  }

  /**
   * Update an existing task.
   *
   * Update an existing task by Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTask$Json$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTask$Json$Json(
    params: {
      /**
       * Update an existent task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<Task> {
    return this.updateTask$Json$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>) => r.body as Task)
    );
  }

  /**
   * Update an existing task.
   *
   * Update an existing task by Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTask$Json$Xml()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTask$Json$Xml$Response(
    params: {
      /**
       * Update an existent task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Task>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      TaskService.UpdateTaskPath,
      'put'
    );
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'blob',
          accept: 'application/xml',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Task>;
        })
      );
  }

  /**
   * Update an existing task.
   *
   * Update an existing task by Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTask$Json$Xml$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTask$Json$Xml(
    params: {
      /**
       * Update an existent task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<Task> {
    return this.updateTask$Json$Xml$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>) => r.body as Task)
    );
  }

  /**
   * Update an existing task.
   *
   * Update an existing task by Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTask$Xml$Json()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  updateTask$Xml$Json$Response(
    params: {
      /**
       * Update an existent task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Task>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      TaskService.UpdateTaskPath,
      'put'
    );
    if (params) {
      rb.body(params.body, 'application/xml');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Task>;
        })
      );
  }

  /**
   * Update an existing task.
   *
   * Update an existing task by Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTask$Xml$Json$Response()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  updateTask$Xml$Json(
    params: {
      /**
       * Update an existent task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<Task> {
    return this.updateTask$Xml$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>) => r.body as Task)
    );
  }

  /**
   * Update an existing task.
   *
   * Update an existing task by Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTask$Xml$Xml()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  updateTask$Xml$Xml$Response(
    params: {
      /**
       * Update an existent task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Task>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      TaskService.UpdateTaskPath,
      'put'
    );
    if (params) {
      rb.body(params.body, 'application/xml');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'blob',
          accept: 'application/xml',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Task>;
        })
      );
  }

  /**
   * Update an existing task.
   *
   * Update an existing task by Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTask$Xml$Xml$Response()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  updateTask$Xml$Xml(
    params: {
      /**
       * Update an existent task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<Task> {
    return this.updateTask$Xml$Xml$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>) => r.body as Task)
    );
  }

  /**
   * Update an existing task.
   *
   * Update an existing task by Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTask$XWwwFormUrlencoded$Json()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  updateTask$XWwwFormUrlencoded$Json$Response(
    params: {
      /**
       * Update an existent task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Task>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      TaskService.UpdateTaskPath,
      'put'
    );
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Task>;
        })
      );
  }

  /**
   * Update an existing task.
   *
   * Update an existing task by Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTask$XWwwFormUrlencoded$Json$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  updateTask$XWwwFormUrlencoded$Json(
    params: {
      /**
       * Update an existent task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<Task> {
    return this.updateTask$XWwwFormUrlencoded$Json$Response(
      params,
      context
    ).pipe(map((r: StrictHttpResponse<Task>) => r.body as Task));
  }

  /**
   * Update an existing task.
   *
   * Update an existing task by Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTask$XWwwFormUrlencoded$Xml()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  updateTask$XWwwFormUrlencoded$Xml$Response(
    params: {
      /**
       * Update an existent task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Task>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      TaskService.UpdateTaskPath,
      'put'
    );
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'blob',
          accept: 'application/xml',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Task>;
        })
      );
  }

  /**
   * Update an existing task.
   *
   * Update an existing task by Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateTask$XWwwFormUrlencoded$Xml$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  updateTask$XWwwFormUrlencoded$Xml(
    params: {
      /**
       * Update an existent task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<Task> {
    return this.updateTask$XWwwFormUrlencoded$Xml$Response(
      params,
      context
    ).pipe(map((r: StrictHttpResponse<Task>) => r.body as Task));
  }

  /**
   * Path part for operation addTask
   */
  static readonly AddTaskPath = '/task';

  /**
   * Add a new task to the list.
   *
   * Add a new task to the list
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addTask$Json$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addTask$Json$Json$Response(
    params: {
      /**
       * Create a new task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Task>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      TaskService.AddTaskPath,
      'post'
    );
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Task>;
        })
      );
  }

  /**
   * Add a new task to the list.
   *
   * Add a new task to the list
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addTask$Json$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addTask$Json$Json(
    params: {
      /**
       * Create a new task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<Task> {
    return this.addTask$Json$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>) => r.body as Task)
    );
  }

  /**
   * Add a new task to the list.
   *
   * Add a new task to the list
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addTask$Json$Xml()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addTask$Json$Xml$Response(
    params: {
      /**
       * Create a new task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Task>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      TaskService.AddTaskPath,
      'post'
    );
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'blob',
          accept: 'application/xml',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Task>;
        })
      );
  }

  /**
   * Add a new task to the list.
   *
   * Add a new task to the list
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addTask$Json$Xml$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  addTask$Json$Xml(
    params: {
      /**
       * Create a new task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<Task> {
    return this.addTask$Json$Xml$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>) => r.body as Task)
    );
  }

  /**
   * Add a new task to the list.
   *
   * Add a new task to the list
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addTask$Xml$Json()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  addTask$Xml$Json$Response(
    params: {
      /**
       * Create a new task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Task>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      TaskService.AddTaskPath,
      'post'
    );
    if (params) {
      rb.body(params.body, 'application/xml');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Task>;
        })
      );
  }

  /**
   * Add a new task to the list.
   *
   * Add a new task to the list
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addTask$Xml$Json$Response()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  addTask$Xml$Json(
    params: {
      /**
       * Create a new task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<Task> {
    return this.addTask$Xml$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>) => r.body as Task)
    );
  }

  /**
   * Add a new task to the list.
   *
   * Add a new task to the list
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addTask$Xml$Xml()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  addTask$Xml$Xml$Response(
    params: {
      /**
       * Create a new task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Task>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      TaskService.AddTaskPath,
      'post'
    );
    if (params) {
      rb.body(params.body, 'application/xml');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'blob',
          accept: 'application/xml',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Task>;
        })
      );
  }

  /**
   * Add a new task to the list.
   *
   * Add a new task to the list
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addTask$Xml$Xml$Response()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  addTask$Xml$Xml(
    params: {
      /**
       * Create a new task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<Task> {
    return this.addTask$Xml$Xml$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>) => r.body as Task)
    );
  }

  /**
   * Add a new task to the list.
   *
   * Add a new task to the list
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addTask$XWwwFormUrlencoded$Json()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  addTask$XWwwFormUrlencoded$Json$Response(
    params: {
      /**
       * Create a new task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Task>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      TaskService.AddTaskPath,
      'post'
    );
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Task>;
        })
      );
  }

  /**
   * Add a new task to the list.
   *
   * Add a new task to the list
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addTask$XWwwFormUrlencoded$Json$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  addTask$XWwwFormUrlencoded$Json(
    params: {
      /**
       * Create a new task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<Task> {
    return this.addTask$XWwwFormUrlencoded$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>) => r.body as Task)
    );
  }

  /**
   * Add a new task to the list.
   *
   * Add a new task to the list
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addTask$XWwwFormUrlencoded$Xml()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  addTask$XWwwFormUrlencoded$Xml$Response(
    params: {
      /**
       * Create a new task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Task>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      TaskService.AddTaskPath,
      'post'
    );
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http
      .request(
        rb.build({
          responseType: 'blob',
          accept: 'application/xml',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Task>;
        })
      );
  }

  /**
   * Add a new task to the list.
   *
   * Add a new task to the list
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addTask$XWwwFormUrlencoded$Xml$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  addTask$XWwwFormUrlencoded$Xml(
    params: {
      /**
       * Create a new task in the list
       */
      body: Task;
    },
    context?: HttpContext
  ): Observable<Task> {
    return this.addTask$XWwwFormUrlencoded$Xml$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>) => r.body as Task)
    );
  }

  /**
   * Path part for operation getTaskById
   */
  static readonly GetTaskByIdPath = '/task/{taskId}';

  /**
   * Find task by ID.
   *
   * Returns a single task
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTaskById$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTaskById$Json$Response(
    params: {
      api_key?: string;

      /**
       * ID of task to return
       */
      taskId: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Task>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      TaskService.GetTaskByIdPath,
      'get'
    );
    if (params) {
      rb.header('api_key', params.api_key, {});
      rb.path('taskId', params.taskId, {});
      rb.path('taskId', params.taskId, {});
    }

    return this.http
      .request(
        rb.build({
          responseType: 'json',
          accept: 'application/json',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Task>;
        })
      );
  }

  /**
   * Find task by ID.
   *
   * Returns a single task
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTaskById$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTaskById$Json(
    params: {
      api_key?: string;

      /**
       * Task id to delete
       */
      taskId: number;
    },
    context?: HttpContext
  ): Observable<Task> {
    return this.getTaskById$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>) => r.body as Task)
    );
  }

  /**
   * Find task by ID.
   *
   * Returns a single task
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTaskById$Xml()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTaskById$Xml$Response(
    params: {
      api_key?: string;

      /**
       * Task id to delete
       */
      taskId: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Task>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      TaskService.GetTaskByIdPath,
      'get'
    );
    if (params) {
      rb.header('api_key', params.api_key, {});
      rb.path('taskId', params.taskId, {});
      rb.path('taskId', params.taskId, {});
    }

    return this.http
      .request(
        rb.build({
          responseType: 'blob',
          accept: 'application/xml',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return r as StrictHttpResponse<Task>;
        })
      );
  }

  /**
   * Find task by ID.
   *
   * Returns a single task
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTaskById$Xml$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTaskById$Xml(
    params: {
      api_key?: string;

      /**
       * Task id to delete
       */
      taskId: number;
    },
    context?: HttpContext
  ): Observable<Task> {
    return this.getTaskById$Xml$Response(params, context).pipe(
      map((r: StrictHttpResponse<Task>) => r.body as Task)
    );
  }

  /**
   * Path part for operation deleteTask
   */
  static readonly DeleteTaskPath = '/task/{taskId}';

  /**
   * Deletes a task.
   *
   * delete a task
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTask()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTask$Response(
    params: {
      api_key?: string;

      /**
       * Task id to delete
       */
      taskId: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(
      this.rootUrl,
      TaskService.DeleteTaskPath,
      'delete'
    );
    if (params) {
      rb.header('api_key', params.api_key, {});
      rb.path('taskId', params.taskId, {});
    }

    return this.http
      .request(
        rb.build({
          responseType: 'text',
          accept: '*/*',
          context: context,
        })
      )
      .pipe(
        filter((r: any) => r instanceof HttpResponse),
        map((r: HttpResponse<any>) => {
          return (r as HttpResponse<any>).clone({
            body: undefined,
          }) as StrictHttpResponse<void>;
        })
      );
  }

  /**
   * Deletes a task.
   *
   * delete a task
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteTask$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTask(
    params: {
      api_key?: string;

      /**
       * Task id to delete
       */
      taskId: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.deleteTask$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }
}
