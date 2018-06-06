import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public post: any;

  constructor(
    private _route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {
    console.log(this._route.snapshot.queryParams);
    this.post = this._route.snapshot.queryParams;
  }

  back() {
    this._location.back();
  }
}
