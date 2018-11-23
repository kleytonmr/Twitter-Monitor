import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';
import {HubConnection, HubConnectionBuilder} from '@aspnet/signalr';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-positive',
  templateUrl: './positive.component.html',
  styleUrls: ['./positive.component.css']
})
export class PositiveComponent implements OnInit {
  public connection : HubConnection;

  constructor(private twitter:TweetService) {
    const builder = new HubConnectionBuilder();
    this.connection = builder.withUrl('https://localhost:5001/positive').build();
  }

  score: any = [];
  positive: Object;
  p: any = [];

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
        data: p,
        color: '#fff'
      }],
    };
  }

  loadData(){
    this.score = this.twitter.getTweets().score;
    for(var i = 0; i < 10; i++){
      this.p.push(this.score[0])
    }
    this.setPositive(this.p);
  }

  ngOnInit() {
    this.connection.start()
     .then(()=> {
       this.connection.on('getScore', (value)=>{
          console.log(value)
       })
       this.connection.invoke('getScore');
     }) ;
  }
}