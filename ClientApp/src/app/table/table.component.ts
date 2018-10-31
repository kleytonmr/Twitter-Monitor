import { Component, OnInit, Injectable } from '@angular/core';
import {TweetService} from '../tweet.service';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html', 
  styleUrls: ['./table.component.css']
})

@Injectable()
export class TableComponent implements OnInit {
  
  constructor(private twitter:TweetService) { 
  }

  tweets:string [] =  [];

  ngOnInit():void {
  this.twitter.tweetList("Bolsonaro")
    .subscribe(sucess =>{
      if (sucess){
        this.tweets = this.twitter.tweets;
      }
  })
}
}



