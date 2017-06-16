var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);


var user = {
  screen_name: 'YAestdan',
  count: 200
}

T.get('statuses/user_timeline', user, function(err, data, response) {
  if(!err){
    for (let i = 0; i < data.length; i++){

      let id = { id: data[i].id_str }

      T.post('favorites/create', id, function(err, response){
        if(err){
          console.log(err[0].message);
        }
        else{
          let username = response.user.screen_name;
          let tweetId = response.id_str;
          console.log('Favorited: ', `https://twitter.com/${username}/status/${tweetId}`)
        }

      });
    }
  } else {
    console.log(err);
  }
});
