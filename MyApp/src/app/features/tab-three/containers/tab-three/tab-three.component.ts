import { Component, OnInit } from '@angular/core';
import { Capacitor, Plugins, GeolocationPosition } from '@capacitor/core';
import { of, Observable } from 'rxjs';

const { Motion } = Capacitor.Plugins;

@Component({
  selector: 'app-tab-three',
  templateUrl: './tab-three.component.html',
  styleUrls: ['./tab-three.component.css']
})
export class TabThreeComponent implements OnInit {

  public motionDatas: Observable<any> = of({message: 'loading...'});

  constructor() { }

  ngOnInit() {
    this.startMotion();
  }

  startMotion() {
    const ready = Capacitor.isPluginAvailable('Motion');
    if (!ready) {
      this.motionDatas = of({message: 'error Capacitaor Motion not available'});
      return this.handlError();
    }
    Motion.addListener('orientation', (data) => {
      console.log('::::: data motion', data);
      this.motionDatas = of(data);
    });
  }

  handlError() {
    console.log('error Capacitaor Motion not available');
  }
}
