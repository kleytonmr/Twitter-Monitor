import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
// import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TweetService {
  
  constructor(private http: Http) { }

  private tweets: any = [];
  private keywords: string;

  tweetList(){
    return this.http.get("/api/tweet/find/" + "bolsonaro")
      .map((response: Response) => this.tweets = response.json());
  }

  getTweets(){
    return this.tweets;
  }

  setKeywors(key:string){
    this.keywords = key;
  }
}


