//Run on every server restart
Meteor.startup(function(){
  console.log("########## WHAT ENV ? ##############");
  console.log(process.env.ROOT_URL );

  if (process.env.ROOT_URL == "http://localhost:3000/"){
    console.log("Startup in Dev");
    Migrations.migrateTo(1);
  }


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
