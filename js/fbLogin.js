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