import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IFeed {
  name: string;
  image: string;
  description: string;
  dateLastEdited: string;
}

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  mockDataUrl: string = './../../assets/mock_data.json';

  constructor(private httpClient: HttpClient) {}

  getFeed(): Observable<IFeed[]> {
    return this.httpClient.get<IFeed[]>(this.mockDataUrl);
  }
}
