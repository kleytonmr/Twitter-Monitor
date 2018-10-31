import { Component, OnInit } from '@angular/core';
import {TweetService} from '../tweet.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  
  constructor(private twitter: TweetService) {}
  
  value = '';

  onEnter(value: string) { 
    this.value = value; 
  }
 
  ngOnInit():void {
  }
}
