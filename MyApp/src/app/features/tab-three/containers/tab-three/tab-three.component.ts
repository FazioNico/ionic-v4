import { Component, OnInit } from '@angular/core';
import { Capacitor, Plugins, GeolocationPosition } from '@capacitor/core';
import { of, Observable } from 'rxjs';
// import custom plugin
import { MotionPWA, IMotionPWADatasOptions } from '../../../../../plugins/motion/pwa/motion-pwa.plugin';

// Instantiate custom plugin
const motionPWA = new MotionPWA();

const { Motion, Toast } = Capacitor.Plugins;

@Component({
  selector: 'app-tab-three',
  templateUrl: './tab-three.component.html',
  styleUrls: ['./tab-three.component.css']
})
export class TabThreeComponent implements OnInit {

  public motionDatas: Observable<IMotionPWADatasOptions> = of({message: 'loading...'});

  constructor() { }

  ngOnInit() {
    this.startMotion();
  }

  startMotion() {
    const ready = Capacitor.isPluginAvailable('Motion');
    if (!ready) {
      return this.handlError();
    }
    Motion.addListener('orientation', (data) => {
      console.log('::::: data motion', data);
      this.motionDatas = of(data);
    });
  }

  async handlError() {
    const ERROR_MSG = 'error Capacitaor Motion not available';
    this.motionDatas = of({message: ERROR_MSG});
    this.show({message: ERROR_MSG});
    console.log('error Capacitaor Motion not available');
    // use custom plugin
    await motionPWA.start();
    this.motionDatas = motionPWA.datas;
  }

  async show(option: {message: string} = {message: 'Plugin not working'}) {
    await Toast.show({
      text: option.message
    });
  }

}
