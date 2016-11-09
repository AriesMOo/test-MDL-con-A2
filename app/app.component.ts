import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
      <h1>Hello Angular</h1>

      <mdl-textfield type="text" [(ngModel)]="theText" icon="search"></mdl-textfield>

<!--      <mdl-card class="demo-card-square" mdl-shadow="2">
        <mdl-card-title mdl-card-expand>
          <h2 mdl-card-title-text>Update</h2>
        </mdl-card-title>
        <mdl-card-supporting-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenan convallis.
        </mdl-card-supporting-text>
        <mdl-card-actions mdl-card-border>
          <button mdl-button mdl-colored mdl-ripple>
            View Updates
          </button>
        </mdl-card-actions>
      </mdl-card>-->
    `
})
export class AppComponent { }
