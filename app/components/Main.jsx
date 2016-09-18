var 
    React       = require("react"),
    Nav         = require("Nav"),

end_var_def = [];


var Main = React.createClass({
    render: function () {
        return (
            <div>
                <Nav />
                <h1>Main Component</h1>
                {this.props.children}
            </div> 
       );
    }

});

module.exports = Main;