import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  interpolation: string = 'Je suis une variable interpolée ✌️'
  bindedStyle: string = '2px solid grey'; 
  model: string;
  styleModel: string = 'background ?'
  testHook: boolean = false; 
  elArray: string[] = []
  toAdd: string = 'Ajoutez un élément'

  evBinding1(event) {
    window.alert("l'événement suivant s'est produit : " + event.type)
    console.log(event)
  }

  addToList() {
    this.elArray.push(this.toAdd)
  }

}
