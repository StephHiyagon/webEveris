'use strict';

const Buscar = (update) => {

  const parent = $('<div class="row"></div>');
  const form = $('<form class="col s12 m8 l6 offset-l3 offset-m2 autocomplete="off""></form>');
  const row = $('<div class="row"></div>');
  const div = $('<div class="input-field col s12"><i class="material-icons prefix">search</i></div>');
  const input = $('<input id="icon_prefix" type="text" class="validate">');
  const label = $('<label for="icon_prefix">Buscar</label>');
  const autocomplete = $('<div class="autocomplete"></div>');

  div.append(input);
  div.append(label);
  div.append(autocomplete);
  row.append(div);
  form.append(row);
  parent.append(form);

  let filterbyKey;

  input.on({
    keyup: function(e){
              if($(e.currentTarget).val() != ""){
                 filterbyKey = filtroContacto($(this).val().toLowerCase(), autocomplete);
                 console.log(state.personal);
              }else{
                autocomplete.hide();
                autocomplete.empty();
              }

        }
  });


  return parent;

}

$(_=>{

  $.get('https://hackathon-ef798.firebaseio.com/findemployees.json', (data) => {

    if (!data) { return alert('no hay data');
    }else {
      state.personal = data.Personal;
    }
  });

});
