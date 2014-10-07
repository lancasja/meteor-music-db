/* ============= */
/* == Helpers == */
/* ============= */

Template.artists.helpers({
	artists: function() {
		return Artists.find();
	},

	settings: function() {
		return {
			useFontAwesome: true,
			fields: [
				{ key: 'fname', label: 'First Name'},
				{ key: 'lname', label: 'Last Name'}
			]
		}
	}
});

/* ============ */
/* == Events == */
/* ============ */

Template.artists.events({
	// show modal when Add Song is clicked
	'click #addArtist': function(e, t) {
		e.preventDefault();
		var modal = t.find('.add-modal');
		modal.style.top = 0;
	},

	// dissmiss modal when x is clicked
	'click .modal-close': function(e, t) {
		e.preventDefault();
		var modal = t.find('.add-modal');
		modal.style.top = '-200%';
	},

	// take input from form and add to database
	// this will have to be moved into a method
	'submit form': function(e, t) {
		e.preventDefault();
		var modal = t.find('.add-modal');

		// form input values
		var fname = t.find('#artist-fname').value;
		var lname = t.find('#artist-lname').value;
		
		// Add to Collection
		Artists.insert({
			fname: fname,
			lname: lname
		});

		// dismiss modal
		modal.style.top = '-200%';
	}
});