var 
    React       = require("react"),
    Nav         = require("Nav"),

end_var_def = [];


var Main = React.createClass({
    render: function () {
        return (
            <div>
                <Nav />
                    <div className="row">
                        <div className="columns medium-6 large-4 small-centered">
                            {this.props.children}
                        </div>
                    </div>
            </div> 
       );
    }

});

module.exports = Main;