import { Component, Input, OnInit } from '@angular/core';
import { IFeed } from '../feed/feed.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableData!: IFeed[];

  constructor() {}

  ngOnInit(): void {}

  identify(index: number, item: IFeed) {
    return item?.name;
  }
}
