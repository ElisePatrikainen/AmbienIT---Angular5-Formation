import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { TransclusionComponent } from './transclusion/transclusion.component';
import { TestHooksComponent } from './test-hooks/test-hooks.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TransclusionComponent,
    TestHooksComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
