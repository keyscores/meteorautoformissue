Hours = new Mongo.Collection("hours");

months =  [
  {label: "Jan", value: 1},
  {label: "Fev", value: 2},
  {label: "Mar", value: 3},
  {label: "Abr", value: 4},
  {label: "Mai", value: 5},
  {label: "Jun", value: 6},
  {label: "Jul", value: 7},
  {label: "Ago", value: 8},
  {label: "Set", value: 9},
  {label: "Out", value: 10},
  {label: "Nov", value: 11},
  {label: "Dez", value: 12},
]

Hours.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    autoform: {
      class: 'browser-default',
    }

  },
  month: {
    type: Number,
    label: "Mês",
    autoform: {
      class: 'browser-default',
      options: months
    }
  },
  year: {
    type: Number,
    label: "Ano",
    autoform: {
      class: 'browser-default',
    }
  },
  list: {
    type: Array,
    //optional: true,
  },
  'list.$': {
    type: Object
  },
  'list.$.project': {
    label: "Projeto",
    type: String,
    autoform : {
      type: "typeahead",
      options: function () {

        return [
          {label: "A", value: "A"},
          {label: "B", value: "B"},
          {label: "C", value: "C"},

        ]
      },
      afFieldInput: {
       multiple: false
     }
    }
  },
  'list.$.hours': {
    label: "Horas",
    type: Number,
    decimal: true
  }
}));
