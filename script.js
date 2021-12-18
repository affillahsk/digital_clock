window.addEventListener('load', calculateTime)

function calculateTime(){
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var time = hour >= 12 ? 'PM' : 'AM' ;
    var dayNames = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

    hour = hour % 12;
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementById("date").innerHTML = dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("time").innerHTML = time;

    setTimeout(calculateTime,200);
}

