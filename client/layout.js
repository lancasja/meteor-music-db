/* ============= */
/* == Helpers == */
/* ============= */

Template.layout.helpers({
	activeIf: function(t) {
		var currentRoute = Router.current();
		return currentRoute && t === currentRoute.lookupTemplate() ? 'active' : '';
	}
});