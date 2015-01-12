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
				{ key: 'label', label: 'Label'}
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
		var addModal = t.find('.add-modal');
		var editModal = t.find('.edit-modal');

		if (addModal.style.top === '0px') {
			addModal.style.top = '-200%';
		}

		if (editModal.style.top === '0px') {
			editModal.style.top = '-200%';
		}
	},

	'click .reactive-table tr': function(e, t) {

		/* This will return the object (document)
			that the selected row is associated with */
		var song = this;
		Session.set('song', song);
		console.log(Session.get('song'));

		var modal = t.find('.edit-modal');
		modal.style.top = 0;
	}
});




































