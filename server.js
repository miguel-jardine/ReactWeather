var 
    // Config
    APPLICATION = "ReactWeather",

    // Base
    express         = require("express"),
    util            = require("util"),
    app             = express(),
end_var_def = [];

const PORT = process.env.PORT || 4000;

app
    .use(express.static('public'))

    .use((req, res, next) => {
        if (req.headers["x-forwarded-proto"] === "http")
            next();
        else   
            res.redirect("http://" + req.hostname + req.url);
    })

    // START SERVER.
    .listen(PORT, function () {
        util.log(APPLICATION + ' server listening on port ' + PORT + '...');   
    })
;