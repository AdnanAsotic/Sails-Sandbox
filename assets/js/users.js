// model for one entry
function UserModel(a, b, c, d) {
	var self = this;
	self.firstName = ko.observable(a);
	self.lastName = ko.observable(b);
	self.email = ko.observable(c);
	self.id = d;
}

// model for more entries
function UsersModel() {
	var self = this;
	self.users = ko.observableArray();

	// current data
	self.firstName = ko.observable("firstname");
	self.lastName = ko.observable("lastname");
	self.email = ko.observable("email");

	self.load = function() {
		console.log("loading data...");

		$.get("/user/find", function(result) {
			var temp = [];

			_.each(result, function(item) {
				self.users.push(new UserModel(item.firstName, item.lastName, item.email, item.id));
			});
		});	
	};

	self.deleteEntry = function(item) {
		$.ajax("/user/" + item.id, {
			method : "DELETE",
			success : function(result) {
				self.users.remove(item);
			}

		});
	};

	self.createEntry = function() {
		$.post("/user/create", { firstName : self.firstName(), lastName : self.lastName(), email: self.email() }, function(res) {
			self.users.removeAll();
			self.load();
		});
	};

	// initial load
	self.load();
}

$(document).ready(function(evt) {
	// declare user model
	var vm = new UsersModel();

	// apply bindings
	ko.applyBindings(vm);
});