import { Component, OnInit, Injectable } from '@angular/core';
import {TweetService} from '../tweet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

@Injectable()
export class DashboardComponent implements OnInit {

  constructor(private twitter:TweetService) {}

  score: any = [];
  positive: Object;
  negative: Object;

  setPositive(p){
    //Gráfico positivo 
    this.positive = {
      title: {
        text:'Positive', 
          style: {
            color: '#FFF',
      }},

      chart: {
        backgroundColor: '#00000000',
      },

      xAxis: {
        labels: {
            style: {
                color: 'white',
                fontSize: "16px"
            }
        }
      },

      yAxis: {
        labels: {
            style: {
                color: 'white',
                fontSize: "16px"
            }
        }
      },

      plotOptions: {
        series: {
            label: {
                connectorAllowed: false,
            },
          pointStart: 1
        }
      },

      series: [{
        name:'Score',
        data: [52,43, 137, 69, 97, p],
        color: '#fff'
      }],
    };
  }

  setNegative(n){
    // Gráfico negativo
    this.negative = {
      title: {
        text:'Negative', 
          style: {
            color: '#FFF',
      }},

      chart: {
        backgroundColor: '#00000000',
      },

      xAxis: {
        labels: {
            style: {
                color: 'white',
                fontSize: "16px"
            }
        }
      },

      yAxis: {
        labels: {
            style: {
                color: 'white',
                fontSize: "16px"
            }
        }
      },

      plotOptions: {
        series: {
            label: {
              color: 'while',
              connectorAllowed: false
            },
            pointStart: 1
        }
      },

      series: [{
        name:'Score',
        data: [53, 503, 77, 69, 97,n],
        color: '#fff'
      }],
    };
  }

  ngOnInit() {
    this.score = this.twitter.getTweets().score;
    this.setPositive(this.score[0]);
    this.setNegative(this.score[1]);   
  }
}
