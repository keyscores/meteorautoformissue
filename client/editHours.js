Template.hoursForm.helpers({

  cursor: function(){
    // return Hours.find({name:Session.get("name"), month: Session.get("month"),  year: Session.get("year") }).fetch()[0]
    return Hours.find({name:"Alberto", month: 1,  year: 2015 }).fetch()[0]
  },

});
