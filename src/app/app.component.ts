import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h2>
    {{ heading1 }}
  </h2>
  <input type="text">
  <app-marvellous-comp></app-marvellous-comp>
</div>`,
  styles: ['input[type="text"], textarea {    background-color :   white;   }']
})
export class AppComponent {
  heading1 = 'Marvellous Infosystems';
  name: string ="";
  }
