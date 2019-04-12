$(document).ready(function(){

  /* Universal toggler */
  $(".j-toggle-trigger").click(function(event) {
    var trigger = $(this);
    var target = $(trigger.attr("data-target"));
    var activeCssClass =  trigger.attr("data-active");

    trigger.toggleClass(activeCssClass);
    target.slideToggle();
    event.stopPropagation();
  });

  /* nav-main - hamburger */
	$('.j-nav-trigger').click(function(){
		$(this).toggleClass('open');
    $('.j-nav-main').slideToggle();
    event.stopPropagation();
	});

  /* select */
  $(".j-select select").change( function() {
    var select = $(this);
    var label = select.siblings('.j-select-value');
    label.text(select.find('option:selected').text());
  });

  /*********************
    CountTo
    https://codepen.io/syedrafeeq/pen/rcfsJ
  *********************/

  $('.j-timer-number').data('countToOptions', {
    formatter: function (value, options) {
      return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
    }
  });
  
  // start all the timers
  function startCount() {
    $('.j-timer').each(count);  
  }

  startCount();
  
  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
  }

  jQuery(function ($) {
    // custom formatting example
  });

  /*********************
    Lazy
    http://jquery.eisbehr.de/lazy/
  *********************/
  
  $('.lazy').Lazy({
    scrollDirection: 'vertical',
    effect: 'fadeIn',
    visibleOnly: true,
    onError: function(element) {
        console.log('error loading ' + element.data('src'));
    }
  });
  
  /*********************
    ScrollMagic
    http://scrollmagic.io/
  *********************/

  var controller = new ScrollMagic.Controller();

  // var introScene = new ScrollMagic.Scene({
  //   triggerHook: 0,
  //   duration: 400,
  //   triggerElement: '#intro'
  // })
  // .setPin('#intro', {pushFollowers: false})
  // .setPin('#intro')
  // .addTo(controller);

  // var introScene2 = new ScrollMagic.Scene({
  //   triggerHook: 0.3,
  //   triggerElement: '#sec01'
  // })
  // .setPin('#intro', {pushFollowers: false})
  // .addTo(controller);

  $('.j-paralax').each(function() {
    var paralaxTl = new TimelineMax();
    paralaxTl
      .from($(this).find('.j-paralax-content'), 0.4, {autoAlpha: 0, ease:Power0.easeNone}, 0.4)
      .from($(this).find('.j-paralax-image'), 1, {y: '-50%', ease:Power0.easeNone}, 0)
    ;

    var paralaxScene = new ScrollMagic.Scene({
      triggerHook: 1,
      offset: -400,
      duration: '150%',
      triggerElement: this
    })
    .setTween(paralaxTl)
    .addTo(controller);
  });

  $('.j-scroll-magic').each(function() {
    // var animateElem = $('#'+this.id);
    var scrollMagicScene = new ScrollMagic.Scene({
      // duration: 3000,
      // triggerHook: 1,
      offset: -100,
      reverse: false,
      triggerElement: this
    })
    .setClassToggle(this, 'active')
    // .addIndicators()
    .setPin()
    // .on('enter', function(e){
    //   console.log(animateElem);
    //   animateElem.toggleClass("animated slideInLeft faster");
    // })
    // .on('leave', function(e){
    //   console.log('leaving ....');
    // })
    .addTo(controller);
  });

  $('.j-magic-title').each(function() {
    var magicTitleScene = new ScrollMagic.Scene({
      // duration: 300,
      // triggerHook: 1,
      // offset: -100,
      // reverse: false,
      triggerElement: this
    })
    .setClassToggle(this, 'active')
    // .addIndicators()
    .setPin()
    .addTo(controller);
  });

  $('.j-magic-counters').each(function() {
    var magicCountersScene = new ScrollMagic.Scene({
      // duration: 300,
      // triggerHook: 1,
      // offset: -100,
      // reverse: false,
      triggerElement: this
    })
    // .addIndicators()
    .setPin()
    .on('enter', function(e){
      startCount();
    })
    // .on('leave', function(e){
    //   console.log('leaving ....');
    // })
    .addTo(controller);
  });

  $('.j-magic-title22').each(function() {
    var animateElem = $('#'+this.id);
    var magicTitleScene = new ScrollMagic.Scene({
      // duration: 300,
      // triggerHook: 1,
      // offset: -100,
      // reverse: false,
      triggerElement: this
    })
    // .setClassToggle(this, 'active')
    // .addIndicators()
    .setPin()
    .on('enter', function(e){
      console.log(animateElem);
      animateElem.toggleClass("animated fadeInLeftX pulse Xslower");
    })
    // .on('leave', function(e){
    //   console.log('leaving ....');
    // })
    .addTo(controller);
  });

  // $('.j-section-multiple').each(function(){
  //   var setMultipleClasses = TweenMax.set(this, {
  //     className: "animated slideInLeft faster"
  //   });
  //   // Create a ScrollMagic Scene
  //   var sectionMultiple = new ScrollMagic.Scene({
  //     triggerElement: this
  //   })
  //   .setTween(setMultipleClasses)
  //   .addIndicators()
  //   .addTo(controller);    
  // });
  
  // var groupScene = new ScrollMagic.Scene({
  //   triggerHook: 0.3,
  //   triggerElement: '.j-group-scene'
  // })
  // .setClassToggle(".j-group-scene", "animated")
  // .addTo(controller);

});
