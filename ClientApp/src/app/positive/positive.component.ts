import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';
import {HubConnection, HubConnectionBuilder} from '@aspnet/signalr';
import { ThrowStmt } from '@angular/compiler';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-positive',
  templateUrl: './positive.component.html',
  styleUrls: ['./positive.component.css']
})
export class PositiveComponent implements OnInit {
  public connection : HubConnection;

  constructor(private sdbar : SideBarComponent) {
    const builder = new HubConnectionBuilder();
    this.connection = builder.withUrl('https://localhost:5001/positive').build();
  }
  
  positive: Object;
  totalofTweets = this.sdbar.sumTweets();
  percentPositive = ((this.sdbar.getTotalPositive()/this.sdbar.sumTweets()) * 100).toFixed(2);
  score :number;

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


  ngOnInit() {
    this.getPositive();
    var t = [1232,3232,3232,323]
    this.connection.invoke('SetScore', t);

    this.connection.start()
     .then(()=> {
       this.connection.on('broadcastScore', (value)=>{
          this.score = value
       });
     });
  }
}