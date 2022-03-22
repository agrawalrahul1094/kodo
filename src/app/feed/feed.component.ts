import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FeedService, IFeed } from './feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  feeds$!: Observable<IFeed[]>;
  constructor(private feedService: FeedService) {}

  ngOnInit(): void {
    this.feeds$ = this.feedService.getFeed().pipe(
      map(feeds => feeds.splice(0,6))
    );
  }
  identify(index: number, item: IFeed) {
    return item?.name;
  }
}
