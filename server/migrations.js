cleanStart = function(){

  Hours.remove({});

  Hours.insert({
    year: 2015,
    month: 1,
    name: "Alberto",
    list: [{
      project: "Jogo",
      hours: 7
    }, {
      project: "Campanha",
      hours: 1
    }]

  });

  Hours.insert({
    year: 2015,
    month: 1,
    name: "Bernardo",
    list: [{
      project: "Jogo",
      hours: 2
    }, {
      project: "Campanha",
      hours: 9
    }]

  });

  Hours.insert({
    year: 2015,
    month: 2,
    name: "Bernardo",
    list: [{
      project: "Jogo",
      hours: 2
    }, {
      project: "Campanha",
      hours: 9
    }]

  });
}
