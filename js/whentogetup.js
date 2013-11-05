(function(){
  var now = function(){
    return new Date();
  }
  var calculateTime = function(cycles){
    return new Date(now().getTime() + (14 + 90*cycles) * 60000);
  };

  var toTwoDidgets = function(v){
    if(v < 10){
      return "0"+v;
    }else{
      return ""+v;
    }
  }

  var formatDate = function(date){
    return toTwoDidgets(date.getHours()) + ":" + toTwoDidgets(date.getMinutes());
  };

  var updateTimes = function(){
    var i, element;
    for(i = 2; i <=7; i = i + 1){
      element = document.getElementById("result-with-"+i+"-cycles");
      if(element){
        element.innerHTML = formatDate(calculateTime(i));
      }
    }
    document.getElementById("now").innerHTML = formatDate(now());
  };

  setInterval(updateTimes, 10000);
  updateTimes();
})();
