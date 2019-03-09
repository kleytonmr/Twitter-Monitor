using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace Twitter_monitor
{
    public static class PositiveScore{
        public static int score;
    }
    public class Positive : Hub
    {
        
    public async Task BroadcastScore(){
         await Clients.All.SendAsync("broadcastScore", PositiveScore.score);
     }

     public async Task SetScore(int s){
         PositiveScore.score = s;
         await BroadcastScore();
     }
    } 
}
