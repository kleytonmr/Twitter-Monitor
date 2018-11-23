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

  getPositive(){
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
        data: this.sdbar.getP(),
        color: '#fff'
      }],
    };
  }

  getNegative(){
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
        data: this.sdbar.getN(),
        color: '#fff'
      }],
    };
  }

  // appendScoreP(){
  //   setInterval(() => {
  //     this.ngOnInit();
  //   }, 2000);
  // }
  
  
  ngOnInit() {
    this.getPositive();
    this.getNegative();
  }
}
