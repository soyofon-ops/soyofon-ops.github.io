import { JsonService } from './../../api/services/json/json.service';
import { Component, inject } from '@angular/core';
import { filter, map, takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/shared/components/base/base.component';

@Component({
  templateUrl: './main.layout.html',
  styleUrls: ['./main.layout.scss'],
})
export class MainLayout extends BaseComponent {
  jsonService = inject(JsonService);

  navbar$ = this.jsonService.getSitemap().pipe(
    map((sitemap) => sitemap.find((item) => item.code === 'main')),
    filter((sitemap) => !!sitemap),
    map((sitemap) => sitemap!.children)
  );

  constructor() {
    super();
  }

  ngOnInit() {
    this.jsonService
      .getSitemap()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
}
