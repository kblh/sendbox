document.addEventListener("DOMContentLoaded", function(e) { 



  /**
   * Universal Css class toggler
   */
  const toggleTriggers = document.querySelectorAll(".j-toggle-trigger");

  function toggleHandler(e) {
    let targetId = this.dataset.target;
    let activeCssClass = this.dataset.active;
    let targetElement = document.getElementById(targetId);
    targetElement.classList.toggle(activeCssClass);
    e.preventDefault();
    e.stopPropagation();
  }

  for (var i = 0; i < toggleTriggers.length; i++) {
    toggleTriggers[i].addEventListener('click', toggleHandler);
  }


  /**
   * stopPropagation
   */
  const stopPropagationElements = document.querySelectorAll(".j-stop-propagation");

  function stopPropagationElementsHandler(e) {
    e.stopPropagation();
  }

  for (var i = 0; i < stopPropagationElements.length; i++) {
    stopPropagationElements[i].addEventListener('click', stopPropagationElementsHandler);
  }


  /**
   * Close on ESC
   */
  const closeOnEscapeElements = document.querySelectorAll('.j-close-on-escape');


  document.addEventListener('keyup', function (e) {
    if (e.defaultPrevented) {
      return;
    }

    function closeOnEscapeHandler(e) {
      let targetId = this.dataset.target;
      let activeCssClass = this.dataset.active;
      let targetElement = document.getElementById(targetId);
      targetElement.classList.remove(activeCssClass);
      e.preventDefault();
      e.stopPropagation();
    }

    var key = e.key || e.keyCode;

    if (key === 'Escape' || key === 'Esc' || key === 27) {
      for (var i = 0; i < closeOnEscapeElements.length; i++) {
        closeOnEscapeElements[i].addEventListener('keyup', closeOnEscapeHandler);
      }
      console.log(key);
    }
  });


  /**
   * ESC handler
   */
  // document.addEventListener('keyup', function (e) {
  //   if (e.defaultPrevented) {
  //     return;
  //   }

  //   var key = e.key || e.keyCode;

  //   if (key === 'Escape' || key === 'Esc' || key === 27) {
  //     console.log(key);
  //   }
  // });


});
