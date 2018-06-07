import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GenericHttpService } from '../../../../shared/services/generic-http/generic-http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public post$: Observable<any>;

  constructor(
    private _route: ActivatedRoute,
    private _location: Location,
    private _http: GenericHttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    console.log(this._route.snapshot.params.id);
    this.post$ = this._http.get('fakeApi', '/posts/' + this._route.snapshot.params.id);
  }

  back() {
    this._router.navigate(['']);
  }
}
