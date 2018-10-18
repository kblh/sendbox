$(function (){

  var $usersContainer = $('.users-container');
  var $infoContainer = $('.info-container');
  var $requestUrl = 'https://reqres.in/api/users/';
  var $currentPage = 1;
  var $totalPages = 0;


  /**
   * Add new user
   */

  $('.add-user').on("click", function(){
    var name = $('#userName').val();
    var job = $('#userJob').val()
    addUser(name, job);
  });

  function addUser(name, job) {
    $.ajax({
      type: 'POST',
      url: $requestUrl,
      data: {
        name: name,
        job: job,
      },
      success: function(user) {
        console.log(user);
      },
      error: function() {
        console.error('Error adding user');
      }
    });
  }


  /**
   * User list
   */

  var userTemplate = "" +
  "<div>" +
    "<h3>{{first_name}} {{last_name}}</h3>" +
    "<div><img src='{{avatar}}' /></div>" +
  "</div>" +
  "";


  $('.link-next').on("click", function(){
    if($currentPage < $totalPages) {
      $currentPage++;
      $usersContainer.empty();
      fetchUsers();
      printInfo();
    }
  });

  $('.link-prev').on("click", function(){
    if($currentPage > 1) {
      $currentPage--;
      $usersContainer.empty();
      fetchUsers();
      printInfo();
    }
  });

  function printUser(user) {
    $usersContainer.append(Mustache.render(userTemplate, user));
  }

  function printInfo() {
    $infoContainer.empty();
    $infoContainer.append('page: ' + $currentPage + ' / total pages: ' + $totalPages);
  }



  function fetchUsers() {
    $.ajax({
      type: 'GET',
      url: $requestUrl,
      data: {
        page: $currentPage,
      },
      success: function(users) {
        console.log(users);
        $.each(users.data, function(i, user){
          printUser(user);
        });

        $currentPage = users.page;
        $totalPages = users.total_pages;
        printInfo();
        console.log('current page: ' + $currentPage);
        console.log('total pages: ' + $totalPages);

      },
      error: function() {
        console.error("Error fetching data ...");
      }
    });
  }

  fetchUsers();

})
