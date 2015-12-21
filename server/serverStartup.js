//Run on every server restart
Meteor.startup(function(){

    Hours.remove({});

    Hours.insert({
      year: 2015,
      month: 1,
      name: "Alberto",
      list: [{
        project: "A",
        hours: 7
      }, {
        project: "C",
        hours: 1
      }]

    });

    Hours.insert({
      year: 2015,
      month: 1,
      name: "Bernardo",
      list: [{
        project: "A",
        hours: 2
      }, {
        project: "B",
        hours: 9
      }]

    });

    Hours.insert({
      year: 2015,
      month: 2,
      name: "Bernardo",
      list: [{
        project: "A",
        hours: 2
      }, {
        project: "B",
        hours: 9
      }]

    });


  var query = Hours.find();
  query.observeChanges({
    added: function (id, fields) {
      console.log("Added : " + id );
    },
    changed: function (id, fields) {
      console.log("Changed : " + id );
    },
    removed: function (id) {
      console.log("Removed : " + id);
    }
  });

});
