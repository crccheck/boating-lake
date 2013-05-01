(function($){
  "use strict";

  $.fn.mirrorMaybe = function(){
    if (Math.random() > 0.5){
      this.addClass('mirror');
    }
    return this;
  };

  var getPassenger = function(){
        var passengers = ['', 'lovers', 'murderer', 'penguin', 'robot', 'voyeur', 'victim'],
            passenger = passengers[Math.floor(Math.random() * passengers.length)];
        return $('<div class="passenger ' + passenger + '"/>').mirrorMaybe();
      },
      getFlotsam = function(){
        var passengers = ['penguin', 'penguin', 'robot', 'victim', 'victim'],
            passenger = passengers[Math.floor(Math.random() * passengers.length)];
        return $('<div class="passenger ' + passenger + '"/>').mirrorMaybe();
      };

  var getSpeedBoatClass = function(){
        var speeds = ['slow', 'medium', 'medium', 'fast'];
        return speeds[Math.floor(Math.random() * speeds.length)];
      },
      getFlotsamSpeedClass = function(){
        var speeds = ['veryslow', 'slow', 'slow', 'medium'];
        return speeds[Math.floor(Math.random() * speeds.length)];
      };

  var makeBoat = function(){
    var $party = $('<div class="party"/>'),
        onABoat = Math.random() > 0.10;

    var top = Math.floor(Math.random() * 99) + 1;
    $party.css({
      top: top + '%',
      zIndex: top
    }).mirrorMaybe();

    if (onABoat) {
      $party
        .append(getPassenger())
        .append(getPassenger())
        .append($('<div class="boat"/>'))
        .addClass(getSpeedBoatClass());
    } else {
      $party
        .append(getFlotsam())
        .addClass(getFlotsamSpeedClass());
      }

    $party.appendTo($lake);

    setTimeout(function(){
      $party.addClass('launched');
    }, 50);

    setTimeout(function(){
      $party.remove();
    }, 120 * 1000);

    // make next boat
    setTimeout(makeBoat, Math.random() * 3000);
  };

  var $lake = $('#lake');

  makeBoat();

})(window.jQuery);
