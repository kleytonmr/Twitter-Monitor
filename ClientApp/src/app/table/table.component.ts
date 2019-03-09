import { Component, OnInit, Injectable } from '@angular/core';
import {TweetService} from '../tweet.service';
import { ExportExcelService } from '../export-excel.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html', 
  styleUrls: ['./table.component.css']
})

@Injectable()
export class TableComponent implements OnInit {

  constructor(private twitter:TweetService, private exp: ExportExcelService) { }
  
  tweets: any = [];
  data: any = [];

  read(){
    for(var i =0; i < 100; i++){
      this.data.push({'text': this.tweets[i]})
    }
  }

  exportAsXLSX():void {
    this.read();
    this.exp.exportAsExcelFile(this.data, 'Tweets');
  }
  
  ngOnInit() { 
    this.tweets = this.twitter.getTweets().text;
  }
}
