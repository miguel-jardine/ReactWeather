var 
    React               = require("react"),
    WeatherForm         = require("WeatherForm"),
    WeatherMessage      = require("WeatherMessage"),
    ErrorModal          = require("ErrorModal"),
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
        that.setState({
            isLoading: true,
            errorMessage: undefined
        });

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
                that.setState({
                    isLoading: false,
                    errorMessage: err.message
                });
            }
        )
    },


    render: function () {
        var {isLoading, city, temp, errorMessage} = this.state;

        function renderMessage () {
            if (isLoading) {
                return (
                    <h3 className="text-center">Fetching weather...</h3>
                );
            } else if (city && temp) {
                return (
                    <WeatherMessage city={city} temp={temp} />
                );
            }
        }

        function renderError () {
            if (typeof errorMessage === "string") {
                return <ErrorModal message={errorMessage} />
            }
        }

        return (
            <div>
                <h2 className="text-center page-title">Get Weather</h2>
                <WeatherForm onSubmit={this._cHandleSubmit} />
                {renderMessage()}
                {renderError()}
            </div>

        );
    }

});

module.exports = Weather;