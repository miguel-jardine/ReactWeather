var 
    React       = require("react"),

end_var_def = [];


var WeatherForm = React.createClass({
    getDefaultProps: function () {
        return {
            city: "Phoenix"
        }
    },


    _handleSubmit: function (e) {
        e.preventDefault();

        var 
            {city} = this.refs,
            value,

        end_var_def = [];


        value = city.value;
        city.value = "";
        city = value;

        if (city.length > 0)
            this.props.onSubmit({city: city});
    },


    render: function () {
        return (
            <form onSubmit={this._handleSubmit}>
                <input type="text" placeholder="Enter city's name" ref="city" />
                <button className="button expanded hollow">Get Weather</button>
            </form>
        );
    }

});

module.exports = WeatherForm;