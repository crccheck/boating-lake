(function($){
  "use strict";

  $.fn.mirrorMaybe = function(){
    if (Math.random() > 0.5){
      this.addClass('mirror');
    }
    return this;
  };

  var getPassenger = function(){
    var passengers = ['lovers', 'murderer', 'penguin', 'robot', 'voyeur'],
        passenger = passengers[Math.floor(Math.random() * passengers.length)];
    return $('<div class="passenger ' + passenger + '"/>').mirrorMaybe();
  };

  var makeBoat = function(){
    var $boat = $('<div class="party"><div class="boat"></div></div>');

    var top = Math.floor(Math.random() * 99) + 1;
    $boat.css({
      top: top + '%',
      zIndex: top
    }).mirrorMaybe();

    $boat.prepend(getPassenger());
    $boat.prepend(getPassenger());

    $boat.appendTo($lake);

    setTimeout(function(){
      $boat.addClass('launched');
    }, 50);

    setTimeout(function(){
      $boat.remove();
    }, 30 * 1000);
  };

  var $lake = $('#lake');

  setInterval(makeBoat, 2 * 1000);
  makeBoat();

})(window.jQuery);
