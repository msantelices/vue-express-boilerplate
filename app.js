const express 	 = require('express')
const bodyParser = require('body-parser')
const routes 	 = require('./routes/routes.js')
const app 		 = express()

// Use body-parser
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended: true}) )

// Use styles and scripts from public folder
app.use( express.static( __dirname + '/public' ) )

// App routes
routes(app)

// App server
const port 	 = process.env.PORT || 3000
const server = app.listen(port, ()=> { console.log(`Server running on port ${port}`) })
