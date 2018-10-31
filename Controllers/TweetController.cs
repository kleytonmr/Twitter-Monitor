using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Tweetinvi;
using Tweetinvi.Parameters;
using VaderSharp;


namespace Twitter_monitor.Controllers
{
    [Route("api/[controller]")]
    public class TweetController : Controller
    {
      public TweetController(){
        SearchTweets searchTweets = new SearchTweets();
        searchTweets.configTweet();
      }

      [HttpGet("find/{keyword}")]
      public IActionResult search (string keyword){
        try
          {
              return Ok(Search.SearchTweets(new SearchTweetsParameters(keyword)));
          }
        catch(Exception ex){
              return BadRequest($"Deu erro: {ex.Message}");
          }
      }

      [HttpGet]
      public IActionResult search (){
        try
          {
              return Ok(Search.SearchTweets(new SearchTweetsParameters("Kleytonmr")));
          }
        catch(Exception ex){
              return BadRequest($"Deu erro: {ex.Message}");
        }
      }
   }
}

