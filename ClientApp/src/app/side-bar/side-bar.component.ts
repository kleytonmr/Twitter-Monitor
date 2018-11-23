import { Component, OnInit, Injectable } from '@angular/core';
import {TweetService} from '../tweet.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

@Injectable()
export class SideBarComponent implements OnInit {
  
  constructor(private twitter: TweetService) {}
  public countTime:number = 0;
  public interval:number = 0;
  public timeDefault = null;
  p: any = [];
  n: any = [];
  nt: any = [];
  score: any = [];
  
  onEnter(value: string) { 
    if(this.twitter.getTime() == null){
      this.twitter.setKeywors(value);
    }else{
      var time = this.twitter.getTime() * 20;
      var interval = setInterval(() => {
        if(this.countTime < time){
          this.twitter.setKeywors(value);
          console.log("Interval "+ this.countTime)
          
          this.countTime++;
          this.interval++;
          
          if(this.interval == 20){
            this.p.push(this.twitter.getTweets().score[0])
            this.n.push(this.twitter.getTweets().score[1])
            this.nt.push(this.twitter.getTweets().score[2])
            this.interval = 0;
          }  
        }else{
          clearInterval(interval)
        }
      }, 4000); 
    }
    this.countTime = 0;
    this.timeDefault = null;
  }

  getP(){ return this.p; }

  getN(){ return this.n; }

  getNt(){ return this.nt; }

  setTime(value: number) { 
    this.twitter.setTime(value);
  }

  ngOnInit():void {
  }
}
