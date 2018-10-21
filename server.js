var Twit = require('twit')

const client = new Twit({
    consumer_key: 'wqyYVnQwUUoFacqashbu6b6CT',
    consumer_secret: 'CENeKkjcpxtxbHBiQa6hwByYUsPWhV59OKqVRPLPM3OOhv3Qya',
    access_token: '1120068739-j2baCJ1hsbMjWEZJcczmAAJeP7qCGm6WEaxdhvK',
    access_token_secret: 'HmnpGdP4I3GysvgqGXmD4EamW0vH03VBShWvsTIhnpLtB'
  });

//
//  filter the twitter public stream by the word 'Bolsonaro'.
//
var stream = T.stream('statuses/filter', { track: 'Bolsonaro' })
 
stream.on('tweet', function (tweet) {
  console.log(tweet.text);
})
 

