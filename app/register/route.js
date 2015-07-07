import Ember from 'ember';

export default Ember.Route.extend({
	actions: {

		// addNew function which corresponds with the button action set in the register template
		addNew: function(){
			var self = this;

			// Creates the record in the DB for "user", uses the entry for the value "name"
			var user = this.store.createRecord('user', {
				name: this.controller.get('name')
			});
			
			// Save the user info then send a message to the console that the save has succeeded
			user.save().then(function(){
				console.log('save successful');
				self.controller.set('message', 'A new user with the name "' + self.controller.get('name') + '" was added!');
				
				// After sending the message to the user, set name to NULL for the next entry
				self.controller.set('name', null);
			}, function(){
				
				// If the save fails, console log a message stating the failed attempt
				self.controller.set('message', 'User registration has failed');
				console.log('save failed');
			});
		}
	}
});
