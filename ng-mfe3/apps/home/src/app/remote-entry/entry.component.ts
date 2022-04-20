import { Component } from '@angular/core';

@Component({
  selector: 'ng-mfe3-home-entry',
  template: `<div class="expand">
    <h2>home's Remote Entry Component from a different repository</h2>
  </div>`,
  styles: [
    `
      .expand {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: azure;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
