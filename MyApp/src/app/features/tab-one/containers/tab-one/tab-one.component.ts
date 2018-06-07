import { Component, OnInit } from '@angular/core';
import { Capacitor, Plugins } from '@capacitor/core';

@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.css']
})
export class TabOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getCurrentPosition();
  }
  async getCurrentPosition() {
    const ready = Capacitor.isPluginAvailable('Geolocation');
    if (!ready) {
      return console.log('Error Geolocation not available');
    }
    const { Geolocation } = Plugins;
    const coordinates = await Geolocation.getCurrentPosition();
    if (coordinates instanceof Error) {
      return console.log('Error position', coordinates.message);
    }
    console.log('Current', coordinates);
  }

}
