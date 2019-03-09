import { Component, OnInit, Injectable } from '@angular/core';
import {TweetService} from '../tweet.service';
import { TableComponent } from '../table/table.component';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

@Injectable()
export class SideBarComponent implements OnInit {
  
  constructor(private twitter: TweetService, private callExportXlsx: TableComponent) {}

  countTime:number = 0;
  interval:number  = 0;
  timeDefault =   null;
  totalofPositive =  0;
  totalofNegative =  0;
  totalofNeutral =   0;
  p: any = [];
  n: any = [];
  nt: any = [];
  score: any = [];
  
  
  onEnter(value: string) { 
    
    if(this.twitter.getTime() == null){
      this.twitter.setKeywors(value);
    
    }else{
      var time = this.twitter.getTime() * 20;
      var positive = 0; 
      var negative = 0;
      var neutral = 0;

      var interval = setInterval(() => {
        if(this.countTime < time){
          this.twitter.setKeywors(value);
          console.log("Interval "+ this.countTime)
          
          positive += this.twitter.getTweets().score[0];
          negative += this.twitter.getTweets().score[1];
          neutral  += this.twitter.getTweets().score[2];
          
          this.countTime++;
          this.interval++;
          
          if(this.interval == 20){
            this.p.push(positive)
            this.n.push(negative)
            this.nt.push(neutral)

            this.totalofPositive += positive;
            this.totalofNegative += negative;
            this.totalofNeutral += neutral;

            positive = 0;
            negative = 0;
            neutral = 0;
            
            this.interval = 0;
          }  
        }else{
          clearInterval(interval)
        }
      }, 6000); 
    }
    this.countTime = 0;
    this.timeDefault = null;
  }

  sumTweets(){
    return (this.totalofPositive + this.totalofNegative + this.totalofNeutral)
  }

  getTotalPositive(){
    return this.totalofPositive;
  }

  getTotalNegative(){
    return this.totalofNegative;
  }

  getTotalNeutral(){
    return  this.totalofNeutral;    
  }

  getP(){ return this.p; }

  getN(){ return this.n; }

  getNt(){ return this.nt; }

  setTime(value: number) { 
    this.twitter.setTime(value);
  }

  xlsx(){
    this.callExportXlsx.exportAsXLSX();
  }

  ngOnInit():void {
  }
}
