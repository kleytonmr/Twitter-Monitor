import { Component, OnInit, Injectable } from '@angular/core';
import {TweetService} from '../tweet.service';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

@Injectable()
export class DashboardComponent implements OnInit {

  constructor(private sdbar: SideBarComponent) {}

  positive: Object;
  negative: Object;
  neutral:  Object;

  totalofTweets = this.sdbar.sumTweets();
  percentPositive = ((this.sdbar.getTotalPositive()/this.sdbar.sumTweets()) * 100).toFixed(2);
  percentNegative = ((this.sdbar.getTotalNegative()/this.sdbar.sumTweets()) * 100).toFixed(2);
  percentNeutral = ((this.sdbar.getTotalNeutral()/this.sdbar.sumTweets()) * 100).toFixed(2);
  
  getPositive(){
    //Gráfico positivo 
    this.positive = {
      title: {
        text:'Positivo', 
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
        data: this.sdbar.getP(),
        color: '#fff'
      }],
    };
  }

  getNegative(){
    // Gráfico negativo
    this.negative = {
      title: {
        text:'Negativo', 
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
        data: this.sdbar.getN(),
        color: '#fff'
      }],
    };
  }

  getNeutral(){
    //Gráfico positivo 
    this.neutral = {
      title: {
        text:'Neutra', 
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
        data: this.sdbar.getNt(),
        color: '#fff'
      }],
    };
  }

  
  ngOnInit() {
    this.getNeutral();
    this.getPositive();
    this.getNegative();
    
  }
}
