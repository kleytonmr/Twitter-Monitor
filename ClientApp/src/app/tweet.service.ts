import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TweetService {
  
  
  constructor(private http: HttpClient) { 
  }

  private tweets: any = [];
  private score: any = [];
  private keywords: string;

  tweetList(){
    return this.http.get('http://localhost:5002/api/text/' + this.keywords);
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

  scoreList(){
    return this.http.get('http://localhost:5002/api/score/' + this.keywords);
  }

  loadScore(){
    this.scoreList().subscribe(
      score => {this.score = score },
      err => console.error(err),
      () => console.log('done loading score')
    );
  }

  getScore(){
    console.log(this.score)
    return this.score;
  }

  setKeywors(key:string){
    this.keywords = key;
    this.loadTweets();
    this.loadScore();
  }
}


