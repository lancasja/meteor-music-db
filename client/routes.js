/* ============ */
/* == Routes == */
/* ============ */

Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('home', {
		path: '/'
	});

	this.route('songs');

	this.route('artists');
});