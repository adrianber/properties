import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PropertiesService } from './properties-service.service';
import { ServiceAreaComponent } from './service-area/service-area.component';


@NgModule({
  declarations: [
    AppComponent,
    ServiceAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PropertiesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
