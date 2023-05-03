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

import { User } from '../models/user';


/**
 * Operations about user
 */
@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation createUser
   */
  static readonly CreateUserPath = '/user';

  /**
   * Create user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUser$Json$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser$Json$Json$Response(params?: {

    /**
     * Created user object
     */
    body?: User
  },
  context?: HttpContext

): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.CreateUserPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Create user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUser$Json$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser$Json$Json(params?: {

    /**
     * Created user object
     */
    body?: User
  },
  context?: HttpContext

): Observable<User> {

    return this.createUser$Json$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Create user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUser$Json$Xml()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser$Json$Xml$Response(params?: {

    /**
     * Created user object
     */
    body?: User
  },
  context?: HttpContext

): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.CreateUserPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/xml',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Create user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUser$Json$Xml$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUser$Json$Xml(params?: {

    /**
     * Created user object
     */
    body?: User
  },
  context?: HttpContext

): Observable<User> {

    return this.createUser$Json$Xml$Response(params,context).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Create user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUser$Xml$Json()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  createUser$Xml$Json$Response(params?: {

    /**
     * Created user object
     */
    body?: User
  },
  context?: HttpContext

): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.CreateUserPath, 'post');
    if (params) {
      rb.body(params.body, 'application/xml');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Create user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUser$Xml$Json$Response()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  createUser$Xml$Json(params?: {

    /**
     * Created user object
     */
    body?: User
  },
  context?: HttpContext

): Observable<User> {

    return this.createUser$Xml$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Create user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUser$Xml$Xml()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  createUser$Xml$Xml$Response(params?: {

    /**
     * Created user object
     */
    body?: User
  },
  context?: HttpContext

): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.CreateUserPath, 'post');
    if (params) {
      rb.body(params.body, 'application/xml');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/xml',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Create user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUser$Xml$Xml$Response()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  createUser$Xml$Xml(params?: {

    /**
     * Created user object
     */
    body?: User
  },
  context?: HttpContext

): Observable<User> {

    return this.createUser$Xml$Xml$Response(params,context).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Create user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUser$XWwwFormUrlencoded$Json()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  createUser$XWwwFormUrlencoded$Json$Response(params?: {

    /**
     * Created user object
     */
    body?: User
  },
  context?: HttpContext

): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.CreateUserPath, 'post');
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Create user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUser$XWwwFormUrlencoded$Json$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  createUser$XWwwFormUrlencoded$Json(params?: {

    /**
     * Created user object
     */
    body?: User
  },
  context?: HttpContext

): Observable<User> {

    return this.createUser$XWwwFormUrlencoded$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Create user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUser$XWwwFormUrlencoded$Xml()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  createUser$XWwwFormUrlencoded$Xml$Response(params?: {

    /**
     * Created user object
     */
    body?: User
  },
  context?: HttpContext

): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.CreateUserPath, 'post');
    if (params) {
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/xml',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Create user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUser$XWwwFormUrlencoded$Xml$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  createUser$XWwwFormUrlencoded$Xml(params?: {

    /**
     * Created user object
     */
    body?: User
  },
  context?: HttpContext

): Observable<User> {

    return this.createUser$XWwwFormUrlencoded$Xml$Response(params,context).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation createUsersWithListInput
   */
  static readonly CreateUsersWithListInputPath = '/user/createWithList';

  /**
   * Creates list of users with given input array.
   *
   * Creates list of users with given input array
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUsersWithListInput$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUsersWithListInput$Json$Response(params?: {
    body?: Array<User>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.CreateUsersWithListInputPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Creates list of users with given input array.
   *
   * Creates list of users with given input array
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUsersWithListInput$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUsersWithListInput$Json(params?: {
    body?: Array<User>
  },
  context?: HttpContext

): Observable<User> {

    return this.createUsersWithListInput$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Creates list of users with given input array.
   *
   * Creates list of users with given input array
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createUsersWithListInput$Xml()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUsersWithListInput$Xml$Response(params?: {
    body?: Array<User>
  },
  context?: HttpContext

): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.CreateUsersWithListInputPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/xml',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Creates list of users with given input array.
   *
   * Creates list of users with given input array
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createUsersWithListInput$Xml$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createUsersWithListInput$Xml(params?: {
    body?: Array<User>
  },
  context?: HttpContext

): Observable<User> {

    return this.createUsersWithListInput$Xml$Response(params,context).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation loginUser
   */
  static readonly LoginUserPath = '/user/login';

  /**
   * Logs user into the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginUser$Xml()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginUser$Xml$Response(params?: {

    /**
     * The user name for login
     */
    username?: string;

    /**
     * The password for login in clear text
     */
    password?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.LoginUserPath, 'get');
    if (params) {
      rb.query('username', params.username, {});
      rb.query('password', params.password, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/xml',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Logs user into the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loginUser$Xml$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginUser$Xml(params?: {

    /**
     * The user name for login
     */
    username?: string;

    /**
     * The password for login in clear text
     */
    password?: string;
  },
  context?: HttpContext

): Observable<string> {

    return this.loginUser$Xml$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Logs user into the system.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginUser$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginUser$Json$Response(params?: {

    /**
     * The user name for login
     */
    username?: string;

    /**
     * The password for login in clear text
     */
    password?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.LoginUserPath, 'get');
    if (params) {
      rb.query('username', params.username, {});
      rb.query('password', params.password, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Logs user into the system.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `loginUser$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  loginUser$Json(params?: {

    /**
     * The user name for login
     */
    username?: string;

    /**
     * The password for login in clear text
     */
    password?: string;
  },
  context?: HttpContext

): Observable<string> {

    return this.loginUser$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation logoutUser
   */
  static readonly LogoutUserPath = '/user/logout';

  /**
   * Logs out current logged in user session.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `logoutUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  logoutUser$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.LogoutUserPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Logs out current logged in user session.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `logoutUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  logoutUser(params?: {
  },
  context?: HttpContext

): Observable<void> {

    return this.logoutUser$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getUserByName
   */
  static readonly GetUserByNamePath = '/user/{username}';

  /**
   * Get user by user name.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserByName$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByName$Json$Response(params: {

    /**
     * The name that needs to be fetched. Use user1 for testing.
     */
    username: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserByNamePath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Get user by user name.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserByName$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByName$Json(params: {

    /**
     * The name that needs to be fetched. Use user1 for testing.
     */
    username: string;
  },
  context?: HttpContext

): Observable<User> {

    return this.getUserByName$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Get user by user name.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserByName$Xml()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByName$Xml$Response(params: {

    /**
     * The name that needs to be fetched. Use user1 for testing.
     */
    username: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<User>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.GetUserByNamePath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/xml',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<User>;
      })
    );
  }

  /**
   * Get user by user name.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserByName$Xml$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserByName$Xml(params: {

    /**
     * The name that needs to be fetched. Use user1 for testing.
     */
    username: string;
  },
  context?: HttpContext

): Observable<User> {

    return this.getUserByName$Xml$Response(params,context).pipe(
      map((r: StrictHttpResponse<User>) => r.body as User)
    );
  }

  /**
   * Path part for operation updateUser
   */
  static readonly UpdateUserPath = '/user/{username}';

  /**
   * Update user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser$Json()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser$Json$Response(params: {

    /**
     * name that need to be deleted
     */
    username: string;

    /**
     * Update an existent user in the store
     */
    body?: User
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UpdateUserPath, 'put');
    if (params) {
      rb.path('username', params.username, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Update user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUser$Json$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateUser$Json(params: {

    /**
     * name that need to be deleted
     */
    username: string;

    /**
     * Update an existent user in the store
     */
    body?: User
  },
  context?: HttpContext

): Observable<void> {

    return this.updateUser$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Update user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser$Xml()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  updateUser$Xml$Response(params: {

    /**
     * name that need to be deleted
     */
    username: string;

    /**
     * Update an existent user in the store
     */
    body?: User
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UpdateUserPath, 'put');
    if (params) {
      rb.path('username', params.username, {});
      rb.body(params.body, 'application/xml');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Update user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUser$Xml$Response()` instead.
   *
   * This method sends `application/xml` and handles request body of type `application/xml`.
   */
  updateUser$Xml(params: {

    /**
     * name that need to be deleted
     */
    username: string;

    /**
     * Update an existent user in the store
     */
    body?: User
  },
  context?: HttpContext

): Observable<void> {

    return this.updateUser$Xml$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Update user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateUser$XWwwFormUrlencoded()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  updateUser$XWwwFormUrlencoded$Response(params: {

    /**
     * name that need to be deleted
     */
    username: string;

    /**
     * Update an existent user in the store
     */
    body?: User
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UpdateUserPath, 'put');
    if (params) {
      rb.path('username', params.username, {});
      rb.body(params.body, 'application/x-www-form-urlencoded');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Update user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateUser$XWwwFormUrlencoded$Response()` instead.
   *
   * This method sends `application/x-www-form-urlencoded` and handles request body of type `application/x-www-form-urlencoded`.
   */
  updateUser$XWwwFormUrlencoded(params: {

    /**
     * name that need to be deleted
     */
    username: string;

    /**
     * Update an existent user in the store
     */
    body?: User
  },
  context?: HttpContext

): Observable<void> {

    return this.updateUser$XWwwFormUrlencoded$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteUser
   */
  static readonly DeleteUserPath = '/user/{username}';

  /**
   * Delete user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUser$Response(params: {

    /**
     * The name that needs to be deleted
     */
    username: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.DeleteUserPath, 'delete');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Delete user.
   *
   * This can only be done by the logged in user.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUser(params: {

    /**
     * The name that needs to be deleted
     */
    username: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteUser$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
