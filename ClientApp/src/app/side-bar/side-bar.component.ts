import { Component, OnInit } from '@angular/core';
import {TweetService} from '../tweet.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  
  constructor(private twitter: TweetService) {}
  
  onEnter(value: string) { 
    this.twitter.setKeywors(value);
    // setTimeout(() => {
    // }, 1000);
  }

  setTime(value: number) { 
    this.setTime(value);
  }

  ngOnInit():void {
  }
}
