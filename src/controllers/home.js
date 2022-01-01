const Users = require('../models/users');

exports.usersGetCtrls = (req, res, next) => {
	res.status(200).render('users', {
		pageTitle: 'Add new user',
	});
};

exports.usersAddCtrls = (req, res, next) => {
	const { name } = req.body;
	const user = new Users(name);
	user.store();
	res.redirect('/');
};

exports.homeCtrls = (req, res, next) => {
	Users.getUsers((users) => {
		res.status(200).render('home', {
			users,
			pageTitle: 'Home | Main',
			content: "It's Home page",
		});
	});
};
