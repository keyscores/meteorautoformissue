//AutoForm.setDefaultTemplate('materialize');

AutoForm.hooks({
  hoursFormUpdate: {
    onSuccess: function(formType, result){
      // Materialize.toast('Horas Alteradas', 4000)
      console.log( EJSON.stringify(this.updateDoc.$set.name, {indent: true}) );
    }
  }
});
