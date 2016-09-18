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
    .use(function (req, res, next) {
        if (PORT === process.env.PORT) {
            if (req.headers["x-forwarded-proto"] === "http") {
                util.log("Proper request protocol.");
                next();

            } else {
                var address = "http://" + req.hostname + req.url;
                res.redirect(address);
                console.log("Going to ", address);

            }
            
        } else next();
    })

    .use(express.static('public'))

    // START SERVER.
    .listen(PORT, () => {
        util.log(APPLICATION + ' server listening on port ' + PORT + '...');   
    })
;