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
  public show = true;

  tweetList(){
    this.twitter.tweetList().subscribe(
      teste => {this.tweets = teste },
      err => console.error(err),
      () => console.log('done loading tweets')
    );
  }

  ngOnInit() { 
    this.tweetList();
  }
}
