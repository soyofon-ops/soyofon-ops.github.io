import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Angular Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home.component';
import { UIComponent } from './feature/ui/ui.component';
// Layout Components
import { MainLayout } from './layouts/main/main.layout';
// Shared Components
import { SectionBlockComponent } from './shared/components/section-block/section-block.component';
import { HttpService } from './api/services/http/http.service';
import { JsonService } from './api/services/json/json.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // Layouts
    MainLayout,
    // Pages
    HomeComponent,
    UIComponent,
    // Components
    SectionBlockComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  providers: [HttpService, JsonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
