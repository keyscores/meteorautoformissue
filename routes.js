Router.route('/', function () {
  // if ( _.intersection(Meteor.user().roles , _.find(PERMISSIONS, function(e){ return e.route = "editHours" } ).roles ).length  == 0){
  //   Router.go('/');
  // }
  this.render('hoursForm');
  //this.layout("layout");
});
