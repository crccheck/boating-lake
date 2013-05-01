(function($){
  "use strict";

  var makeBoat = function(){
    var $boat = $('<div class="boat"/>');

    if (Math.random() > 0.5){
      $boat.addClass('mirror');
    }

    $boat.appendTo($lake);

    setTimeout(function(){
      $boat.addClass('launched');
    }, 50);

    setTimeout(function(){
      $boat.remove();
    }, 10 * 1000);
  };

  var $lake = $('#lake');

  setInterval(makeBoat, 2 * 1000);

})(window.jQuery);
