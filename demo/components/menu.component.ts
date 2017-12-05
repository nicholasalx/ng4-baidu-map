import { Component } from '@angular/core'

@Component({
  selector: 'menu',
  styles: [
    `
    :host {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
    }
    a {
        color: #7f8c8d;
        cursor: pointer;
        text-decoration: none;
        padding: 15px;
    }
    a.active {
        color: #424242;
    }
    a:hover {
        border-bottom: 3px solid #dd1b16;
    }
    @media screen and (max-width: 800px) {
        a {
            padding: 15px 5px 15px 5px;
        }
    }
    `
  ],
  template: `
        <a routerLink="/home" routerLinkActive="active">HOME</a>
        <a routerLink="/quickstart" routerLinkActive="active">QUICK START</a>
        <a routerLink="/apidoc" routerLinkActive="active">API DOCUMENTATION</a>
    `
})
export class MenuComponent {}
