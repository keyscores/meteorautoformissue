Template.hoursForm.helpers({
  needsInsert: function(){
    if (Hours.find({name:Session.get("name"), month: Session.get("month"),   year: Session.get("year")}).count()> 0 ) {
      return false
    } else {
      return true
    }
  },
  noSession: function(){
    if (Session.get("name")== undefined) {
      return true
    }
  },
  defaultForm: function (){
    return {
    name: Session.get("name"),
    month: Session.get("month"),
    year: Session.get("year")
    }
  },
  cursor: function(){
    // return Hours.find({name:Session.get("name"), month: Session.get("month"),  year: Session.get("year") }).fetch()[0]
    return Hours.find({name:"Alberto", month: 1,  year: 2015 }).fetch()[0]


  },
  listNames: function(){
    return Person.find().fetch();
  },
  listMonths: function(){
    return [{label: "Jan", value:1}]
  }
});

Template.editHours.helpers({
  title: function(){
    if (Session.get('name') == undefined) {
      return false
    }
    return Session.get('name') + " - " +  _.where(months, { value: Session.get('month')} )[0].label + " / " + Session.get("year")
  }
});
