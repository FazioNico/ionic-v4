import { Component, OnInit } from '@angular/core';
import { Capacitor, Plugins, GeolocationPosition } from '@capacitor/core';
import { Observable, of, from as fromPromise} from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

const { Toast, Geolocation } = Capacitor.Plugins;

@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.css']
})
export class TabOneComponent implements OnInit {

  public coordinates$: Observable<GeolocationPosition>;
  public defaultPos = {latitude: 42, longitude: 2};

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
    // demarer le loader....
    this.displayLoader()
    .then((loader: any) => {
      // get position
      return this.getCurrentPosition()
        // finaly dismiss() loader if position exist
        .then(position => (position) ? loader.dismiss() : null);
    })
    // do not forget to handle promise rejection
    .catch(err => console.log(err));
  }

  async displayLoader() {
    const loading = await this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 2000
    });
    loading.present();
    return await loading;
  }
  async getCurrentPosition(): Promise<any> {
    const isAvailable: boolean = Capacitor.isPluginAvailable('Geolocation');
    if (!isAvailable) {
      console.log('Err: plugin not available');
      return of(new Error('Err: plugin not available'));
    }
    const POSITION = Plugins.Geolocation.getCurrentPosition();
    this.coordinates$ = fromPromise(POSITION).pipe(
      switchMap((data: any) => of(data.coords)),
      tap(data => console.log(data))
    );
    return POSITION;
  }

  async show() {
    await Toast.show({
      text: 'Hello!'
    });
  }
}
