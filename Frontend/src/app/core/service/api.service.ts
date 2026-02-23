import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpResponseType } from '../../shared/entities/HttpResponseType';

export interface RequestOptions {
  headers?: Record<string, string>;
  pathParams?: Record<string, string>;
  queryParams?: Record<string, string | number | boolean>;
  responseType?: HttpResponseType;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiUrl;

  private resolvePathParams(endpoint: string, pathParams: Record<string, string> = {}): string {
    return Object.keys(pathParams).reduce(
      (acc, key) => acc.replace(`:${key}`, pathParams[key]),
      endpoint,
    );
  }

  private buildHttpParams(queryParams: Record<string, string | number | boolean> = {}): HttpParams {
    let params = new HttpParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        params = params.append(key, String(value));
      }
    });
    return params;
  }

  // GET
  async get<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const url = `${this.baseUrl}${this.resolvePathParams(endpoint, options.pathParams)}`;
    const request$ = this.http.get<T>(url, {
      headers: new HttpHeaders(options.headers || {}),
      params: this.buildHttpParams(options.queryParams),
      // We cast as 'json' to satisfy Angular's strict method overloads, but we use your Enum for the logic
      responseType: (options.responseType || HttpResponseType.JSON) as 'json',
    });
    return firstValueFrom(request$);
  }

  // POST
  async post<T>(endpoint: string, body: any, options: RequestOptions = {}): Promise<T> {
    const url = `${this.baseUrl}${this.resolvePathParams(endpoint, options.pathParams)}`;
    const request$ = this.http.post<T>(url, body, {
      headers: new HttpHeaders(options.headers || {}),
      params: this.buildHttpParams(options.queryParams),
      responseType: (options.responseType || HttpResponseType.JSON) as 'json',
    });
    return firstValueFrom(request$);
  }

  // POST multipart/form-data
  async postForm<T>(
    endpoint: string,
    formData: FormData,
    options: RequestOptions = {},
  ): Promise<T> {
    const url = `${this.baseUrl}${this.resolvePathParams(endpoint, options.pathParams)}`;
    const request$ = this.http.post<T>(url, formData, {
      headers: new HttpHeaders(options.headers || {}),
      params: this.buildHttpParams(options.queryParams),
      responseType: (options.responseType || HttpResponseType.JSON) as 'json',
    });
    return firstValueFrom(request$);
  }

  // PATCH
  async patch<T>(endpoint: string, body: any, options: RequestOptions = {}): Promise<T> {
    const url = `${this.baseUrl}${this.resolvePathParams(endpoint, options.pathParams)}`;
    const request$ = this.http.patch<T>(url, body, {
      headers: new HttpHeaders(options.headers || {}),
      params: this.buildHttpParams(options.queryParams),
      responseType: (options.responseType || HttpResponseType.JSON) as 'json',
    });
    return firstValueFrom(request$);
  }

  // PUT
  async put<T>(endpoint: string, body: any, options: RequestOptions = {}): Promise<T> {
    const url = `${this.baseUrl}${this.resolvePathParams(endpoint, options.pathParams)}`;
    const request$ = this.http.put<T>(url, body, {
      headers: new HttpHeaders(options.headers || {}),
      params: this.buildHttpParams(options.queryParams),
      responseType: (options.responseType || HttpResponseType.JSON) as 'json',
    });
    return firstValueFrom(request$);
  }

  // DELETE
  async delete<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const url = `${this.baseUrl}${this.resolvePathParams(endpoint, options.pathParams)}`;
    const request$ = this.http.delete<T>(url, {
      headers: new HttpHeaders(options.headers || {}),
      params: this.buildHttpParams(options.queryParams),
      responseType: (options.responseType || HttpResponseType.JSON) as 'json',
    });
    return firstValueFrom(request$);
  }

  // DOWNLOAD FILE
  async downloadFile(
    endpoint: string,
    fileName: string,
    options: RequestOptions = {},
  ): Promise<void> {
    const url = `${this.baseUrl}${this.resolvePathParams(endpoint, options.pathParams)}`;
    const request$ = this.http.get(url, {
      headers: new HttpHeaders(options.headers || {}),
      params: this.buildHttpParams(options.queryParams),
      responseType: HttpResponseType.BLOB, // <-- Uses Enum strictly
    });

    const blob = await firstValueFrom(request$);

    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
  }
}
