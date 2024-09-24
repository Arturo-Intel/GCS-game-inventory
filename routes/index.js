var express = require('express');
var router = express.Router();

var dbConn = require('../lib/db');
/* GET home page. */
router.get('/', (req, res) => {
    res.send(`
        <html>
          <body>
            <h1>Game Inventory</h1>
            <h1>test</h1>
          </body>
        </html>
      `);
    });



module.exports = router;
