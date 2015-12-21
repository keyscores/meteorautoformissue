AutoForm.setDefaultTemplate('materialize');

AutoForm.hooks({
  insertStaff: {
    onSuccess: function(formType, result){
      var submitted = this.insertDoc
      console.log(submitted);

      //Give a UI response
      Materialize.toast(submitted.name + ' Cadastrado', 4000)

      //insert the data in another collection PAYEE
      var payeeObj = {
        "codigoParceiroSignus":1003,
        "cnpj":42005122890,
        "name":"ALESSANDER DE SOUZA MAIA",
        "complementoSignus":59,
        "unknownIdSignus":251,
        "payeeType":"self"
      }

      payeeObj.codigoParceiroSignus = submitted.codigoParceiroSignus
      payeeObj.cnpj = submitted.codigoParceiroSignus
      payeeObj.name = submitted.name
      payeeObj.codigoParceiroSignus = submitted.complementoSignus

      console.log(payeeObj);
      Payee.insert(payeeObj);


      // Forward fill the data as a convenience to the users.
      var endYear = 2015
      console.log("initial month : " + submitted.month);
      console.log("insertDoc year" + submitted.year);
      //all months upto athe end of endYear get the same data
      while (submitted.year <= endYear && submitted.month < 13){
        submitted.month++;
        if (submitted.month == 13) {
          if (submitted.year == endYear) {
            return
          }
          submitted.year++;
          submitted.month = 1
        }
        console.log("The date is, month:" + submitted.month + " year: " + submitted.year);
        //Insert it
        Salary.insert(submitted);
        Person.insert({name:this.insertDoc.name, idSignus:this.insertDoc.idSignus})
      }

    }
  },
  hoursFormUpdate: {
    onSuccess: function(formType, result){
      // Materialize.toast('Horas Alteradas', 4000)
      console.log( EJSON.stringify(this.updateDoc.$set.name, {indent: true}) );
      Materialize.toast(this.updateDoc.$set.name + ' - Horas Alteradas', 4000)
    }
  },
  hoursFormInsert: {
    onSuccess: function(formType, result){
      Materialize.toast('Horas Cadastradas', 4000)

    }
  },
  updateSalary: {
    onSuccess: function(formType, result){
      Materialize.toast(this.updateDoc.$set.name + ' - Remuneração alterada', 4000)


      if (Session.get('updateAll')){
        var endYear = 2016
        var submitted = this.updateDoc.$set
        while (submitted.year <= endYear && submitted.month < 13){
          submitted.month++;
          if (submitted.month == 13) {
            if (submitted.year == endYear) {
              break
            }
            submitted.year++;
            submitted.month = 1
          }
          console.log("The date is, month:" + submitted.month + " year: " + submitted.year);
          //Insert it
          //console.log(EJSON.stringify( this.updateDoc.$set, {indent: true}) );
          var cursor = Salary.find({name: submitted.name, year: submitted.year, month : submitted.month }).fetch()
          if (cursor.length == 0){
            console.log("Person has no records for this month");
          } else {
            //meteor forces client code to update by ID only - alternative is to have a server method.
            //autoform places all objects in a  $set object as a convenience because of mongo.update syntax
            Salary.update({_id: cursor[0]._id }, this.updateDoc);
          }
        }//ends while loop

      } //end if (session.get)


      Meteor.call("update")
      console.log("Updated");

    }
  }
});
