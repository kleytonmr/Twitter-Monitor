import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TweetService {
  
  constructor(private http: HttpClient) { }

  tweets: any[];

  getTweets(){
    return this.tweets
  }
  
  tweetList(keywords:string){
    return this.http.get("/api/tweet/find/" + keywords)
      .map((tweet: any[]) =>{
        this.tweets = tweet;
        return true;
    });
  }
}


