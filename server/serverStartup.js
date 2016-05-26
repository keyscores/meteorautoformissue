//Run on every server restart
Meteor.startup(function(){

    Hours.remove({});

    Hours.insert({
      year: 2015,
      month: 1,
      name: "Albert",

    });

    Hours.insert({
      year: 2015,
      month: 1,
      name: "Bernard",
    });

    Hours.insert({
      year: 2015,
      month: 2,
      name: "Carl"

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
