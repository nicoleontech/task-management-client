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


@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllCategoriesNames
   */
  static readonly GetAllCategoriesNamesPath = '/category';

  /**
   * Returns all categories from the system that the user has access to.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCategoriesNames$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategoriesNames$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.GetAllCategoriesNamesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * Returns all categories from the system that the user has access to.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllCategoriesNames$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategoriesNames$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<string>> {

    return this.getAllCategoriesNames$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

  /**
   * Returns all categories from the system that the user has access to.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCategoriesNames$Xml()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategoriesNames$Xml$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<string>>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.GetAllCategoriesNamesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: 'application/xml',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<string>>;
      })
    );
  }

  /**
   * Returns all categories from the system that the user has access to.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllCategoriesNames$Xml$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategoriesNames$Xml(params?: {
  },
  context?: HttpContext

): Observable<Array<string>> {

    return this.getAllCategoriesNames$Xml$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<string>>) => r.body as Array<string>)
    );
  }

}
