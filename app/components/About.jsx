var React = require("react");

var About = () => {
        return (
            <div>
                <h2 className="text-center page-title">About</h2>
                <p>
                This is a weather app demonstrating React. It uses a few cool technologies and libraries.
                They include:
                </p>
                <ul>
                    <li>
                        <a href="nodejs.org/en/about/" target="_blank">NodeJS</a> - The JavaScript backend framwework.
                    </li>
                    <li>
                        <a href="https://facebook.github.io/react/index.html" target="_blank">React</a> - The JavaScript front end framework.
                    </li>
                    <li>
                        <a href="http://openweathermap.org/" target="_blank">OpenWeatherMap</a> - The weather API.
                    </li>
                    <li>
                        <a href="https://webpack.github.io/" target="_blank">Webpack</a> - The JavaScript bundling framework.
                    </li>
                    <li>
                        <a href="http://foundation.zurb.com/frameworks-docs.html" target="_blank">Foundation</a> - The UI styling framework.
                    </li>
                    <li>
                        <a href="https://devcenter.heroku.com/" target="_blank">Heroku</a> - Production platform.
                    </li>
                </ul>
            </div>
        );
}

module.exports = About;