import Ember from 'ember';

export default Ember.Route.extend({
	actions: {

		// Login function which corresponds with the login button on the application view
		login: function(){
			var self = this;

			// Finds the record of the user by using the input given by the user in the name field
			this.store.find('user', {
				name: this.controller.get('name')
			}).then(function(users){

				// Checks for the length of users in the system
				if(users.get('length') === 1){
					var user = users.objectAt(0);
					self.controllerFor('application').set('user', user);
					self.transitionTo('notebooks', user.get('id'));
				}
				else {
					self.controller.set('message', 'Login attempt failed!!');
					console.log('unexpected query result');
				}
			});
		}
	}
});
