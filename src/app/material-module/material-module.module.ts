import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatDividerModule, 
  MatCardModule, 
  MatIconModule, 
  MatTooltipModule
      } from '@angular/material'

@NgModule({
  imports: [
    CommonModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDividerModule, 
    MatCardModule, 
    MatIconModule, 
    MatTooltipModule
  ],
  exports: [
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatDividerModule, 
    MatCardModule, 
    MatIconModule, 
    MatTooltipModule
  ]
})
export class MaterialModuleModule { }
