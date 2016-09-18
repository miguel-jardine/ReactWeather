var 
    debug = process.env.NODE_ENV !== "production",
    webpack = require("webpack"),

end_var_def = [];

module.exports = {
    entry: "./app/app.jsx",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        root: __dirname,
        extensions: ["", ".jsx", ".js"],
        alias: {
            Main:               "app/components/Main.jsx",
            Nav:                "app/components/Nav.jsx",
            Weather:            "app/components/Weather.jsx",
            About:              "app/components/About.jsx",
            Examples:           "app/components/Examples.jsx",
            WeatherForm:        "app/components/WeatherForm.jsx",
            WeatherMessage:     "app/components/WeatherMessage.jsx",
            OpenWeatherMapAPI:  "api/OpenWeatherMapAPI.jsx"
        }
    }, 
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: debug ? "eval-source-map" : null,
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
    ]
};