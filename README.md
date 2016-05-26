# meteorautoformissue

## Autoform seems to have an issue only in tables rendered Firefox
If the {{#Autoform}} encompasses a <td> </td>  it will not render in Firefox. Safari and Chrome, are safe.

~~~~
<tr>
  <td> {{this.name}}</td>
  {{#autoForm id=this._id doc= this  type = "update" collection="Hours"}}
  <td>
    {{> afQuickField name='year'}}
  </td>
  <td>
    {{> afQuickField name='month'}}
  </td>
  <td style="vertical-align:middle;">
    <button type="submit" class="btn">Update</button>
  </td>
  {{/autoForm}}
</tr>
~~~~
