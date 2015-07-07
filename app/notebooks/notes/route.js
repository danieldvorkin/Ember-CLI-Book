import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('note', {notebook:params.notebook_id});
	},
	actions: {
		addNote: function(){
			var self = this;
			this.store.find('notebook',
				this.paramsFor('notebooks.notes').notebook_id).then(
				function(notebook){
					console.log(notebook);
					var note = self.store.createRecord('note', {
						title : self.controller.get('title'),
						notebook : notebook
					});
					console.log(note);
					note.save().then(function(){
						console.log('Save Successful');
						self.controller.set('message', 'save successful');
						self.controller.set('title', null);
						self.refresh();
					}, function(){
						self.controller.set('message', 'save unsuccessful');
						console.log('save failed');
					});
				});
		},
		deleteNote: function(){
			console.log('deleting note with title' + note.get('title'));
			note.deleteRecord();
			note.save();
		}
	}
});
