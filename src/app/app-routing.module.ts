import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayout } from './layouts/main/main.layout';
import { HomeComponent } from './feature/home/home.component';
import { UIComponent } from './feature/ui/ui.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    data: { code: 'main' },
    children: [
      {
        path: '',
        component: HomeComponent,
        data: { code: 'home' },
      },
      {
        path: 'ui',
        component: UIComponent,
        data: { code: 'ui' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
