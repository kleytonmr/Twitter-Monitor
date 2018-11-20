import { Component, OnInit } from '@angular/core';
import {TweetService} from '../tweet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private twitter:TweetService) {
    
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
        data: [52503,43934, 137133, 69658, 97031, 119931,57177],
        color: '#fff'
      }],
    };

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
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133],
        color: '#fff'
      }],
    };
  }

  score: any = [];
  positive: Object;
  negative: Object;

  ngOnInit() {
    this.score = this.twitter.getScore();
  }
}
