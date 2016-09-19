var 
    React               = require("react"),
    {Link, IndexLink}   = require("react-router"),

end_var_def = [];

var Examples = () => {
        return (
            <div>
                <h2 className="text-center page-title">Examples</h2>
                <p>Here are a few cities to try:</p>
                <ol>
                    <li>
                        <Link to="/?city=Phoenix">Phoenix, Arizona, USA</Link>
                    </li>
                    <li>
                        <Link to="/?city=New Delhi">New Delhi, India</Link>
                    </li>
                </ol>
            </div>
        );
}

module.exports = Examples;