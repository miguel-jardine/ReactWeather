var 
    React           = require("react"),
    ReactDOM        = require("react-dom"),
    Main            = require("Main"),
    Weather         = require("Weather"),
    About           = require("About"),
    Examples        = require("Examples"),

    {Route, Router, IndexRoute, hashHistory} = require("react-router"),

end_var_def=[];

// Load Foundation
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

// App specific styling
require("style!css!appStyles");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Weather} />
            <Route path="about" component={About} />
            <Route path="examples" component={Examples} />
        </Route>
    </Router>,
    document.getElementById("app")
);

