import { Injectable, inject } from '@angular/core';
import { API_NAME } from '../../../enum/api.enum';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { Sitemap } from 'src/app/models/api.model';

@Injectable({
  providedIn: 'root',
})
export class JsonService {
  httpService: HttpService = inject(HttpService);

  constructor() {}

  getSitemap(): Observable<Array<Sitemap>> {
    return this.httpService.get(API_NAME.Sitemap);
  }
}
