import { Component, OnInit } from '@angular/core';
import { GenericHttpService } from '../../../../shared/services/generic-http/generic-http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.scss']
})
export class TabTwoComponent implements OnInit {

  public posts$: Observable<any[]>;

  constructor(private _http: GenericHttpService) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts(): void {
    this.posts$ = this._http.get('fakeApi', '/posts');
  }

  goPost(post): void {
    console.log('::: Go to post detail', post);
  }
}
