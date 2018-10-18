$(function (){

  var $usersContainer = $('.users-container')
  var $requestUrl = 'https://reqres.in/api/users/'

  function printUser(user) {
    $usersContainer.append('<h2>' + user.first_name + ' ' + user.last_name + '</h2>');
  }

  function fetchUsers() {
    $.ajax({
      type: 'GET',
      url: $requestUrl,
      data: {
        page: 1,
      },
      success: function(users) {
        console.log(users);
        $.each(users.data, function(i, user){
          printUser(user);
        });
      },
      error: function() {
        console.error("Error fetching data ...");
      }
    });
  }

  fetchUsers();

})
