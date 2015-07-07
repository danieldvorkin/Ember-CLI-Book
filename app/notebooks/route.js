import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params){
		return this.store.find('notebook', {user: params.user_id});
	},
	actions: {
		addNotebook: function(){
			var self = this;
			var notebook = this.store.createRecord('notebook', {
				title: this.controller.get('title'),
				user: this.controllerFor('application').get('user')
			});
			notebook.save().then(function(){
				self.controller.set('message', 'New Notebook added successfully!');
				console.log('Save Successful');
				self.controller.set('title', null);
				self.refresh();
			}, function(){
				self.controller.set('message', 'New Notebook was NOT added successfully :(');
				console.log('Save Failed');
			});
		}
	}
});
