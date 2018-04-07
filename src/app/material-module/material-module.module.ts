import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatFormFieldModule, 
  MatInputModule
      } from '@angular/material'

@NgModule({
  imports: [
    CommonModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule
  ],
  exports: [
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule
  ]
})
export class MaterialModuleModule { }
