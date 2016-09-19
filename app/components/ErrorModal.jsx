var 
    React       = require("react"),
    Nav         = require("Nav"),

end_var_def = [];


var ErrorModal = React.createClass({

    getDefaultProps: function () {
        return {
            title: "ReactWeather Error",

        };
    },

    propTypes: function () {
        return {
            title: React.PropTypes.string,
            message: React.PropTypes.string.isRequired
        }
    },
    
    componentDidMount: function () {
        var modal = new Foundation.Reveal($("#error-modal"));
        modal.open();
    },


    render: function () {
        var {title, message} = this.props;
        
        return (
            <div className="reveal tiny text-center" id="error-modal" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close=""> Ok </button>
                </p>
            </div>
       );
    }

});

module.exports = ErrorModal;