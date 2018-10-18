$(function (){

  var $charactersPlace = $('#characters');
  var $requestUrl = 'https://swapi.co/api/people/';
  var $requestUrlNext = null;
  var $requestUrlPrev = null;

  var characterTemplate = "" +
  "<li>" +
  "<div>name: {{name}}</div>" +
  "<div>skin: {{skin_color}}</div>" +
  "" +
  "</li>" +
  "";

  $('.link-prev').on("click", function(){
    console.log('prev url: ' + $requestUrlPrev);
    if($requestUrlPrev !== null) {
      $charactersPlace.empty();
      fetchData($requestUrlPrev);
    }
  });

  $('.link-next').on("click", function(){
    console.log('next url: ' + $requestUrlNext);
    if($requestUrlNext !== null) {
      $charactersPlace.empty();
      fetchData($requestUrlNext);
    }
  });

  function printCharacter(character) {
    $charactersPlace.append(Mustache.render(characterTemplate, character));
  }

  function fetchData(url) {
    $.ajax({
      type: 'GET',
      url: url,
      // data: {
      //   page: 1,
      // },
      success: function(characters) {
        console.log(characters);
        $.each(characters.results, function(i, character){
          printCharacter(character);
        });

        $requestUrlNext = characters.next;
        $requestUrlPrev = characters.previous;
      },
      error: function(){
        alert('error ...');
      }
    });
  }

  fetchData($requestUrl);



});
