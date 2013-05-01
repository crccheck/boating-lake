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

  var getSpeedClass = function(){
    var speeds = ['slow', 'medium', 'medium', 'fast'];
    return speeds[Math.floor(Math.random() * speeds.length)];
  };

  var makeBoat = function(){
    var $boat = $('<div class="party ' + getSpeedClass() + '"><div class="boat"></div></div>');

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

    // make next boat
    setTimeout(makeBoat, Math.random() * 3000);
  };

  var $lake = $('#lake');

  makeBoat();

})(window.jQuery);
