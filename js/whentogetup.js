(function() {
  var TIME_TO_FALL_ASLEEP_IN_MINUTES = 14;
  var SLEEP_CYCLE_IN_MINUTES         = 90;
  var MILLISECONDS_IN_A_MINUTE       = 60000;

  var now = function() {
    return new Date();
  }

  var calculateTime = function(cycles) {
    return new Date(
      now().getTime() +
      minutesToMilliseconds(TIME_TO_FALL_ASLEEP_IN_MINUTES +
                            SLEEP_CYCLE_IN_MINUTES * cycles)
    );
  };

  var minutesToMilliseconds = function(minutes) {
    return minutes * MILLISECONDS_IN_A_MINUTE;
  }

  var toTwoDigits = function(v) {
    if (v < 10) {
      return "0" + v;
    } else {
      return "" + v;
    }
  }

  var formatDate = function(date) {
    return toTwoDigits(date.getHours()) + ":" + toTwoDigits(date.getMinutes());
  };

  var updateTimes = function() {
    var i, element;
    for (i = 2; i <=7; i = i + 1) {
      element = document.getElementById("result-with-" + i + "-cycles");
      if (element) {
        element.innerHTML = formatDate(calculateTime(i));
      }
    }
    document.getElementById("now").innerHTML = formatDate(now());
  };

  setInterval(updateTimes, 10000);
  updateTimes();
})();
