using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VaderSharp;
using Tweetinvi;
using Tweetinvi.Parameters;
using Tweetinvi.Models;

namespace Twitter_monitor.Controllers
{
  public class SearchTweets
  {
    public string ConsulmerKey { get; private set; }
    public string ConsulmerSecret { get; private set; }
    public string UserAccessToken { get; private set; }
    public string UserAccessSecret { get; private set; }
    
    public void configTweet(){

      //authentication
      ConsulmerKey = "wqyYVnQwUUoFacqashbu6b6CT";
      ConsulmerSecret = "CENeKkjcpxtxbHBiQa6hwByYUsPWhV59OKqVRPLPM3OOhv3Qya";
      UserAccessToken = "1120068739-j2baCJ1hsbMjWEZJcczmAAJeP7qCGm6WEaxdhvK";
      UserAccessSecret = "HmnpGdP4I3GysvgqGXmD4EamW0vH03VBShWvsTIhnpLtB";

      Auth.SetUserCredentials(this.ConsulmerKey, this.ConsulmerSecret, this.UserAccessToken, this.UserAccessSecret);
    }
  }
}


