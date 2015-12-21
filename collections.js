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

  },
  month: {
    type: Number,
    label: "Month",
    autoform: {
      options: months
    }
  },
  year: {
    type: Number,
    label: "Year",
  },
  list: {
    type: Array,
    //optional: true,
  },
  'list.$': {
    type: Object
  },
  'list.$.project': {
    label: "Project",
    type: String,

    autoform : {
      type: "select2",
      select2Options: {
        multiple:false
      },

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
    label: "Hours",
    type: Number,
    //optional: false,
    decimal: true
  }
}));
