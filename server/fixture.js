if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Google',
		url: 'https://www.google.com'
	});

	Posts.insert({
		title: 'Twitter',
		url: 'https://twitter.com'
	});

	Posts.insert({
		title: 'Facebook',
		url: 'https://www.facebook.com'
	});
};