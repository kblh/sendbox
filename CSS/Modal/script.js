document.addEventListener("DOMContentLoaded", function(e) { 

  /*********************
    Universal Css class toggler 
  *********************/
  const toggleTriggers = document.querySelectorAll(".j-toggle-trigger");

  function toggleHandler(e) {
      let targetId = this.dataset.target;
      let activeCssClass = this.dataset.active;
      let targetElement = document.getElementById(targetId);
      targetElement.classList.toggle(activeCssClass);
      e.preventDefault();
  }

  for (var i = 0; i < toggleTriggers.length; i++) {
    toggleTriggers[i].addEventListener('click', toggleHandler);
  }

});
