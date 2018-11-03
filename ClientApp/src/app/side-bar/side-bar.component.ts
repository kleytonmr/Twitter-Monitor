import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {TweetService} from '../tweet.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  
  constructor(private twitter: TweetService, private table: TableComponent, private router: Router) {}
  
  value = '';
  
  onEnter(value: string) { 
    this.value = value; 
    this.twitter.setKeywors(this.value);
  }



  ngOnInit():void {
  }
}
