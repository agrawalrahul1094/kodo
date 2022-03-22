import { Component, Input, OnInit } from '@angular/core';
import { IFeed } from '../feed/feed.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardData!: IFeed;

  constructor() { }

  ngOnInit(): void {
  }

}
