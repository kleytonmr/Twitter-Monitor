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
  }

  ngOnInit():void {
  }
}
