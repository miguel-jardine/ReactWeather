var 
    React               = require("react"),
    ReactDOM            = require("react-dom"),
    ReactDOMServer      = require("react-dom/server"),
    Nav                 = require("Nav"),
 
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
        var {title, message} = this.props;
        var modalMarkup = (
            <div className="reveal tiny text-center" id="error-modal" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close=""> Ok </button>
                </p>
            </div>
        )

        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($("#error-modal"));
        modal.open();
    },




    render: function () {
        return (<div></div>);
    }

});

module.exports = ErrorModal;