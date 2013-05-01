(function($){
  "use strict";

  var makeBoat = function(){
    var $boat = $('<div class="boat"/>');

    if (Math.random() > 0.5){
      $boat.addClass('mirror');
    }

    $boat.appendTo($lake);
  };

  var $lake = $('#lake');
  makeBoat();
  makeBoat();
  makeBoat();
  makeBoat();

})(window.jQuery);
