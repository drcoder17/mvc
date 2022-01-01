//Imported libs and packages
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const PORT = 3000 || process.env.PORT;

// Routes imported
const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/user');

// App configured
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, 'views'));

// App routes initialized
app.use(homeRoutes);
app.use(userRoutes);

app.use('/*', (req, res, next) => {
	res.status(404).render('404', {
		pageTitle: 'Page Not Found',
		content: 'Page Not Found',
	});
});

// App nested to a local server and PORT
app.listen(PORT, () => console.log(`Server is on ${PORT}`));
