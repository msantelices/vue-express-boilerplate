const path = require('path')

let appRouter = (app)=> {

	// GET routes
	app.get('/', (req, res)=> {
		res.sendFile( path.join(__dirname, '../public/index.html') )
	})

}

module.exports = appRouter