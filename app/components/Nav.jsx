var 
    React       = require("react"),

    {Link, IndexLink}      = require("react-router"),

end_var_def = [];


var Nav = React.createClass({

    _handleSearch: function (e) {
        e.preventDefault();
        
        var 
            navSearch = this.refs.navSearch,
            city = navSearch.value,
        end_var_def = [];

        if (city.length > 0) {
            var address = encodeURIComponent(city);
            window.location.hash = "#/?city=" + address;
            navSearch.value = "";
        }
    },

    
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">ReactWeather</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this._handleSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search weather" ref="navSearch" />
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }

});

module.exports = Nav;