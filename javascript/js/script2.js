 window.onload = function()
    {
      
       var buttonStart = document.getElementById("buttonStart");
       var buttonStop = document.getElementById("buttonStop");

       var stopwatchHandler = document.getElementById("stopwatchHandler");
       var intervalRefId;

       buttonStart.onclick = function()
       {
            if (intervalRefId)
                clearInterval(intervalRefId);
            var startingValue = document.getElementById("startingValue").value;

            stopwatchHandler.innerHTML = startingValue;

            intervalRefId = setInterval(function(){
                if (startingValue <= 0)
                {
                    clearInterval(intervalRefId);
                    return;
                }   

                stopwatchHandler.innerHTML = --startingValue;
            },1000);
       };
       buttonStop.onclick = function()
       {
            clearInterval(intervalRefId);
       };
    };