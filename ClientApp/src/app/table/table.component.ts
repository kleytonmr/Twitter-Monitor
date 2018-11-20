import { Component, OnInit, Injectable } from '@angular/core';
import {TweetService} from '../tweet.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html', 
  styleUrls: ['./table.component.css']
})

@Injectable()
export class TableComponent implements OnInit {

  constructor(private twitter:TweetService) { }
  
  tweets: any = [];

  ngOnInit() { 
    this.tweets = this.twitter.getTweets().text;
  }
}
