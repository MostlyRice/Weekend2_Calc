// Express code.
let express = require('express');
let app = express();

// Tells express where our static content is located.
app.use(express.static('server/public'));

// Can use any number from 1000 - 99999
// but don't choose 5432 which is the default for the database.
const port = 3005;

//bodyParser code.
const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded( { extended: true } ));

// Start our server.
app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
})
