using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using System.Web;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace Twitter_monitor
{
    public class Positive : Hub
    {
     public async Task getScore()
     {
         await Clients.Caller.SendAsync("getScore", 100);
     }
    } 
}
