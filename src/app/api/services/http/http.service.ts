import { API_NAME } from '../../../enum/api.enum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environments } from 'src/app/environments/environment';
import { APIResponse } from '../../../models/api.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  // 資源檔清單
  assetAPI = [API_NAME.Sitemap];

  constructor(private httpClient: HttpClient) {}

  get<T>(apiName: API_NAME) {
    return this.httpClient
      .get(environments.api[apiName])
      .pipe(this.fetchData(apiName)) as Observable<T>;
  }

  post<T>(apiName: API_NAME, data: any) {
    return this.httpClient
      .post(environments.api[apiName], data)
      .pipe(this.fetchData(apiName)) as Observable<T>;
  }

  fetchData<T>(apiName: API_NAME) {
    return (source: Observable<APIResponse<T> | T>): Observable<T> =>
      source.pipe(
        map((resp) =>
          this.assetAPI.includes(apiName)
            ? (resp as T)
            : (resp as APIResponse<T>).data
        )
      );
  }
}
