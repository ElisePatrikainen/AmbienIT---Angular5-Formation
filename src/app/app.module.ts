import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { TransclusionComponent } from './transclusion/transclusion.component';
import { TestHooksComponent } from './test-hooks/test-hooks.component';
import { NestedComponent } from './nested/nested.component';
import { NewComponent } from './new/new.component';
import { LifecyleComponent } from './lifecyle/lifecyle.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TransclusionComponent,
    TestHooksComponent,
    NestedComponent,
    NewComponent,
    LifecyleComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
