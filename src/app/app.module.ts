import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModuleModule } from './material-module/material-module.module'

import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ApiService } from './api-service'; 
import { FakeService } from './fake.service'; 


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule, 
    MaterialModuleModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [
    {provide : ApiService, useClass : FakeService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
