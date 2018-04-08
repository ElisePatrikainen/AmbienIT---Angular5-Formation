import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  model: string;
  testHook: boolean = false

  evBinding1(event) {
    window.alert("l'événement suivant s'est produit : " + event.type)
    console.log(event)
  }

}
