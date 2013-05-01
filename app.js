(function($){
  "use strict";

  $.fn.mirrorMaybe = function(){
    if (Math.random() > 0.5){
      this.addClass('mirror');
    }
    return this;
  };

  var getPassenger = function(){
    var passengers = ['', 'lovers', 'murderer', 'penguin', 'robot', 'voyeur'],
        passenger = passengers[Math.floor(Math.random() * passengers.length)];
    return $('<div class="passenger ' + passenger + '"/>').mirrorMaybe();
  };

  var getSpeedClass = function(){
    var speeds = ['slow', 'medium', 'medium', 'fast'];
    return speeds[Math.floor(Math.random() * speeds.length)];
  };

  var makeBoat = function(){
    var $party = $('<div class="party ' + getSpeedClass() + '"/>'),
        onABoat = Math.random() > 0.10;

    var top = Math.floor(Math.random() * 99) + 1;
    $party.css({
      top: top + '%',
      zIndex: top
    }).mirrorMaybe();
    $party.append(getPassenger());

    if (onABoat) {
      $party.append(getPassenger());
      $party.append($('<div class="boat"/>'));
    }

    $party.appendTo($lake);

    setTimeout(function(){
      $party.addClass('launched');
    }, 50);

    setTimeout(function(){
      $party.remove();
    }, 60 * 1000);

    // make next boat
    setTimeout(makeBoat, Math.random() * 3000);
  };

  var $lake = $('#lake');

  makeBoat();

})(window.jQuery);
