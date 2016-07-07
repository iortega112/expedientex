
function getWeather() {

    var appId = '5e5ca07a27d81d4ed6100d51fa1993b5';
    var city = Math.floor((Math.random() * 100000) + 1);
    var url = 'http://api.openweathermap.org/data/2.5/forecast/city?id=' + city + '&APPID=';

//524901
    var wtRequest = $.getJSON(url + appId);


    wtRequest.done(
            function (d) {
       
                if (d.cod == 404) {
                    setTimeout(function () {
                        getWeather();
                    }, 1200);

                }else{
                $('h1').html(d.city.name);}
            });



    wtRequest.always(
            function (d) {
                console.log('ha llamado a la api con el id '+city);
               // console.log(d);
            });



    wtRequest.fail(
            function (d) {
                alert('no city found for code ' + city);
            });


}