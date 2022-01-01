const fs = require('fs');
const path = require('path');

const p = path.join(
	path.dirname(process.mainModule.filename),
	'db',
	'users.json',
);

module.exports = class User {
	constructor(name) {
		this.name = name;
	}

	store() {
		fs.readFile(p, (err, content) => {
			let users = [];

			if (!err) {
				users = JSON.parse(content);
			}
			users.push(this);

			fs.writeFile(p, JSON.stringify(users), (err) => {
				console.log(err);
			});
		});
	}

	static getUsers(callback) {
		fs.readFile(p, (err, content) => {
			if (err) {
				callback([]);
			} else {
				callback(JSON.parse(content));
			}
		});
	}
};
