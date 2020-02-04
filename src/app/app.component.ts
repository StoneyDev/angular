import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise(
    (resolve, reject) => {
      const DATE = new Date();
      setTimeout(() => {
        resolve(DATE);
      },2000)
    }
  );

  devices = [
    {
      name: 'PC',
      status: 'on'
    },
    {
      name: 'Machine à laver',
      status: 'off'
    },
    {
      name: 'Ampoule',
      status: 'on'
    },
  ]

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onTurnOn() {
    console.log(`C'est allumé !`)
  }
}