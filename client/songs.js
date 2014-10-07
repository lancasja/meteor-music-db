/* ============= */
/* == Helpers == */
/* ============= */

// return the Songs collection for reactive-table
Template.songs.helpers({
	songs: function() {
		return Songs.find();
	},

	// setting for reactive-table
	settings: function() {
		return {
			useFontAwesome: true,
			fields: [
				{ key: 'name', label: 'Name'},
				{ key: 'title', label: 'Tilte'},
				{ key: 'club', label: 'Label'}
			]
		}
	}
});

/* ============ */
/* == Events == */
/* ============ */

Template.songs.events({
	// show modal when Add Song is clicked
	'click #addSong': function(e, t) {
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
		var title = t.find('#song-title').value;

		// If the field is empty show an error message
		if (title.length <= 0) {
			console.log('Please enter a value.');
		}
		/* how can we clear the fields? */
		else {
			// Add to Collection
			Songs.insert({
				title: title
			});

			// dismiss modal
			modal.style.top = '-200%';
		}
	}
});




































