ng4-baidu-map
=====================

[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

Baidu-Map module for Angular4

Read full documentation here: [documentation](https://github.com/nicholasalx/ng4-baidu-map)

Read code example here: [example](https://github.com/nicholasalx/ng4-baidu-map/demo)


>Be aware that it is a totally rewrite version, therefore, backward compatibility is not considered


## Getting started ##

```bash
npm install ng4-baidu-map
```

## Usage ##

**app.module.ts**

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BaiduMapModule } from 'ng4-baidu-map';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BaiduMapModule.forRoot({ak: 'your ak'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

**app.component.ts**

```typescript
import { Component } from '@angular/core';

import { MapOptions } from 'ng4-baidu-map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  options: MapOptions;

  constructor() {
    this.options = {
      centerAndZoom: {
        lat: 39.920116,
        lng: 116.403703,
        zoom: 16
      },
      enableKeyboard: true
    };
  }
}
```

**app.component.html**

```html
<baidu-map [options]="options" style="display: block; width: 550px; height: 350px;"></baidu-map>
```
