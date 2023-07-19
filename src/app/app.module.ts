import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayout } from './layouts/default/default.layout';
import { HomeComponent } from './feature/home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, DefaultLayout],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
