var 
    React           = require("react"),
    axios           = require("axios"),

end_var_def = [];

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=78ae74cf1d8adee0e1c089986d343ae7&units=imperial";

module.exports = {
    getTemperature: function (city) {
        var address = `${OPEN_WEATHER_MAP_URL}&q=${encodeURIComponent(city)}`;

        return axios.get(address).then(
            function (res) {
                if (res.data.cod && res.data.message)
                    throw new Error(res.data.message);
                else return {
                    temp: res.data.main.temp,
                    city: res.data.name
                };
                     
            }, 
            function (res) {
                throw new Error(res.data.message);

            }
        );
    }
}