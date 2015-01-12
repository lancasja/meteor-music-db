/* ============= */
/* == Helpers == */
/* ============= */

Template.editModal.helpers({
	selectedSong: function() {
		return Session.get('song');
	}
});

/* ============= */
/* == Events == */
/* ============= */

Template.editModal.events({
	'submit form': function(e, t) {
		e.preventDefault();

		var newTitle = t.find('#newSongTitle').value;
		var songId = Session.get('song')._id;
		var modal = t.find('.edit-modal');
		
		// edit/update document
		Songs.update(
			{_id: songId},
			{
				title: newTitle
			},
			{upsert: true}
		);

		modal.style.top = '-200%';
	},

	'click .delete-song': function(e, t) {
		e.preventDefault();

		var songId = Session.get('song')._id;
		var modal = t.find('.edit-modal');

		Songs.remove(songId);

		modal.style.top = '-200%';
	}
});