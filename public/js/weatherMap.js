$(document).on('keypress',function(e) {
    if(e.which == 13) {
        var city = $('#cityInput').val();
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=a888c6d89d8ef6c45ff1eb3610fe307b",
            datatype: "jsonp",
            data: {units: 'metric', lang: 'pt'}
        }).then(function(data) {
           $('.city-name').text(data.name+", "+data.sys.country);
           $('.city-temp').text(data.main.temp + "°C");
           $('.city-weather').text(data.weather[0].description);
           $('.city-humidity').text(data.main.humidity+"%"); 
           $("#weather-icon").attr("src","http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png");

           var newItem = document.createElement("LI");
           var textnode = document.createTextNode(data.name+", "+data.main.temp+"°C, "+data.weather[0].description);
           newItem.appendChild(textnode);

           var list = document.getElementById("cityHistory");
           list.insertBefore(newItem, list.childNodes[0]);

           $.post("/",{
            cidade: data.name,
            temperatura: data.main.temp,
            clima: data.weather[0].description,
            })
        })
    }
});

$(document).ready(function() {
    var today = new Date();
    document.getElementById('dtText').innerHTML=today;
  });
