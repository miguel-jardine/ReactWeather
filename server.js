var 
    // Config
    APPLICATION = "ReactWeather",
    PORT = 4000,

    // Base
    express         = require("express"),
    util            = require("util"),
    app             = express(),
end_var_def = [];


app
    .use(express.static('public'))

    // START SERVER.
    .listen(PORT, function () {
        util.log(APPLICATION + ' server listening on port ' + PORT + '...');   
    })
;