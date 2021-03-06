import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TweetService {
  
  
  constructor(private http: HttpClient) { 
  }

  private tweets: any = [];
  private keywords: string;
  private time: number;

  tweetList(){
    return this.http.get('http://localhost:5002/api/score/' + this.keywords);
  }

  loadTweets(){
    this.tweetList().subscribe(
      tweets => {this.tweets = tweets },
      err => console.error(err),
      () => console.log('done loading tweets')
    );
  }

  getTweets(){
    return this.tweets;
  }

  setKeywors(key:string){
    this.keywords = key;
    this.loadTweets();
  }

  setTime(value:number){
    this.time = value;
  }

  getTime(){
    return this.time;
  }
}


