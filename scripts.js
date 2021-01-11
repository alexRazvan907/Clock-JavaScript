function militaryFormat(){
// var date = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var today = new Date();

var str = "";

var hour = (today.getHours() < 10 ? '0' : '') + today.getHours()
var minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
var seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();

str = hour + ":" + minutes + ":" + seconds;
var day = today.getDay();

document.getElementById("currentTime").innerHTML = str;
}

setInterval(militaryFormat, 1000);


function amFormat(){
    
    var today = new Date();

    var hour = (today.getHours() < 10 ? '0' : '') + today.getHours()
    var minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    var seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();

    var ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12; // hour '0' should be 12

    strTime = hour + ":" + minutes + ":" + seconds + ' ' + ampm;
    
 

    document.getElementById("currentTime".innerHTML = strTime);
}
  //  var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var today1 = new Date()
var day = today1.getDay();
    
var days = document.getElementsByTagName('h4');
    for(var i = 0;i < days.length;i++){
        if(days[i].getAttribute('data-val') == day){
            days[i].style.color = "#ff073a";
        }
    }

var amPm = document.getElementById("ampm");
amPm.onclick = amFormat();

var military = document.getElementById("military");
military.onclick = militaryFormat();
    


