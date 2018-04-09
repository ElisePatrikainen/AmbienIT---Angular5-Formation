import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test-hooks',
  templateUrl: './test-hooks.component.html',
  styleUrls: ['./test-hooks.component.css']
})
export class TestHooksComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('constructor charged')
   }

  ngOnInit() {
    console.log('ngOnInit called')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called')
  }

}
