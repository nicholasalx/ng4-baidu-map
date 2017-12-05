import { Component } from '@angular/core'

import { MapOptions } from '../../../src'

@Component({
  selector: 'doc-baidu-map',
  styles: [
    `
        `
  ],
  template: `
  <p>
    The <code>baidu-map</code> component is the core of this module. It is used to instantiate a Baidu Map object in your page. Every other component must be contained within a <code>baidu-map</code> for them to work.
  </p>
  <h2 class="title">Usage</h2>
  <div class="snippet" highlight>
    <pre><code class="html">
    &lt;baidu-map [options]="expression" (loaded)="expression" (clicked)="expression"&gt;&lt;/baidu-map&gt;
    </code></pre>
  </div>

  <h2 class="title">Attributes</h2>
  <blockquote>Required properties are in red</blockquote>

  <table class="matrix">
    <thead>
      <tr>
        <th style="width: 100px;">Param</th>
        <th>Type</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>options</td>
        <td><span class="label required">expression</span></td>
        <td>
        Literal for constructing <code>baidu-map</code>. See <a href="#/apidoc/map-options">MapOptions</a>
        </td>
      </tr>
      <tr>
        <td>loaded</td>
        <td><span class="label">expression</span></td>
        <td>Expression to evaluate upon map instance loaded event. (<code>$event</code> object is available as <a href="http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html#a0b0" target="_blank">map</a> instance)</td>
      </tr>
      <tr>
        <td>clicked</td>
        <td><span class="label">expression</span></td>
        <td>Expression to evaluate upon map click event. (<code>$event</code> object is passed by Baidu-Map directly)</td>
      </tr>
    </tbody>
  </table>

  <h2 class="title">Example</h2>
  <baidu-map [options]="opts" (clicked)="mapClick($event)"></baidu-map>
  <div class="snippet" highlight>
      <pre><code class="html">&lt;baidu-map [options]="opts" (clicked)="mapClick($event)"&gt;&lt;/baidu-map&gt;</code></pre>
  </div>
  
  <br/>

  <div class="snippet" highlight>
  <pre><code class="typescript">export class DemoComponent &#123;
  public opts: MapOptions

  constructor() &#123;
    this.opts = &#123;
      centerAndZoom: &#123;
        lat: 39.920116,
        lng: 116.403703,
        zoom: 16
      &#125;,
      enableKeyboard: true
    &#125;
  &#125;

  public mapClick(e: any) &#123;
    alert(\`The coordinate you chose is: \$&#123;e.point.lng&#125; : \$&#123;e.point.lat&#125;\`)
  &#125;
&#125;</code></pre>
</div>
    `
})
export class DocBaidumapComponent {
  public opts: MapOptions

  constructor() {
    this.opts = {
      centerAndZoom: {
        lat: 39.920116,
        lng: 116.403703,
        zoom: 16
      },
      enableKeyboard: true
    }
  }

  public mapClick(e: any) {
    alert(`The coordinate you chose is: ${e.point.lng} : ${e.point.lat}`)
  }
}
