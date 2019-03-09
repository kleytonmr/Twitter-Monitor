import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-negative',
  templateUrl: './negative.component.html',
  styleUrls: ['./negative.component.css']
})
export class NegativeComponent implements OnInit {

  constructor(private sdbar :SideBarComponent) { }

  negative: Object;
  totalofTweets = this.sdbar.sumTweets();
  percentNegative = ((this.sdbar.getTotalNegative()/this.sdbar.sumTweets()) * 100).toFixed(2);
  
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

  ngOnInit() {
    this.getNegative();
  }
}
