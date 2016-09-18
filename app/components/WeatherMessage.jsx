var 
    React       = require("react"),

end_var_def = [];


// var WeatherMessage = React.createClass({
//     getDefaultProps: function (e) {
//         return {
//             city: "Phoenix",
//             temp: 110
//         }

//     },


//     render: function () {
//         var {city, temp} = this.props;

//         return (
//             <h3>It is {temp} in {city}</h3>
//         );
//     }

// });

var WeatherMessage = ({city, temp}) => {
    // var {city, temp} = props;
    return (<h3>It is {temp} in {city}</h3>);    
}

module.exports = WeatherMessage;