  
  window.fbAsyncInit = function() 
  {
    var APP_ID = "669254336507485";
    FB.init({
      appId      : APP_ID,
      xfbml      : true,
      version    : 'v2.4'
    });
  };
  
  (function(d, s, id)
  {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
  }
  (document, 'script', 'facebook-jssdk'));

/* global FB */
FB.getLoginStatus(function(response) 
{
  if (response.status === 'connected') 
  {
    console.log('Logged in.');
  }
  else 
  {
    // this is the basic login
    // FB.login();
    // but we want publish_actions so we can delete posts
    FB.login(function(){}, {scope: 'publish_actions'});
  }
});