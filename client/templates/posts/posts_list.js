var postsData = [
	{
		title: 'Google',
		url: 'https://www.google.com'
	},
	{
		title: 'Twitter',
		url: 'https://www.twitter.com'
	},
	{
		title: 'Facebook',
		url: 'https://www.facebook.com'
	}
];

Template.postsList.helpers({
	posts: postsData
});