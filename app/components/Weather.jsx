var 
    React               = require("react"),
    WeatherForm         = require("WeatherForm"),
    WeatherMessage      = require("WeatherMessage"),
    OpenWeatherMapAPI   = require("OpenWeatherMapAPI"),

end_var_def = [];


var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },


    _cHandleSubmit: function (newState) {
        var that = this;
        that.setState({isLoading: true});


        OpenWeatherMapAPI.getTemperature(newState.city).then(
            function (tempPkg) {
                var {city} = newState;
                city = city === tempPkg.city ? city : tempPkg.city + " [resolved from " + city + "]";

                newState.city = city; 
                newState.temp = tempPkg.temp;
                newState.isLoading = false;
                that.setState(newState);
            },
            function (err) {
                console.log(err);
                that.setState({isLoading: false});
            }
        )
    },


    render: function () {
        var {isLoading, city, temp} = this.state;

        function renderMessage () {
            if (isLoading) {
                return (
                    <h3>Fetching weather...</h3>
                );
            } else if (city && temp) {
                return (
                    <WeatherMessage city={city} temp={temp} />
                );
            }
        }

        return (
            <div>
                <h3>Get Weather</h3>
                <WeatherForm onSubmit={this._cHandleSubmit} />
                {renderMessage()}
            </div>

        );
    }

});

module.exports = Weather;