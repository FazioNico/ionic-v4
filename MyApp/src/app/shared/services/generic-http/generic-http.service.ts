import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  public apiEndpoint: {} = {
    fakeApi: 'https://jsonplaceholder.typicode.com'
  };

  constructor(public httpClient: HttpClient) { }

  get(api: string, path: string = null): Observable<any> {
    if (!this.apiEndpoint[api]) {
      return of(new Error('API Endoint do not exist.'));
    }
    return this.httpClient.get(`${this.apiEndpoint[api]}${(path) ? `${path}` : ``}`).pipe(
      map(res => res || {}),
      catchError((err: Error) => of(new Error(`${err.message || `Unable to request service API.`}`)))
    );
  }

}
