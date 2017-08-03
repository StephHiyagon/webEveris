"use strict";

const filtroContacto = (query, container)=> {
  return state.personal.filter((item) => {
    return ((item.Apellido.toLowerCase().indexOf(query)>-1) || (item.Apellido2.toLowerCase().indexOf(query)>-1) || (item.Nombre.toLowerCase().indexOf(query)>-1) ||  (item.DatosEmpleado.EMPLOYEE_NUMBER.toLowerCase().indexOf(query)>-1));
  });
}

const reRender = (filtro, container, divResult) => {
    container.empty();
    filtro.forEach((item) => {
      container.append(showItem(item, container, divResult));
    });
}

const showItem = (item, container, divResult) => {
  const itemDiv = $('<div class="row"></div>');
  const p1 = $('<span class="item-place__title col s9">'+ item.Nombre +'   '+item.Apellido +'   '+item.Apellido2 +'</span>');
  const p2 = $('<span class="col s3">'+item.DatosEmpleado.EMPLOYEE_NUMBER+'</span>');
  const parent = $('<div></div>');
  const name = $('<h5>'+ item.Nombre + '  '+ item.Apellido +'</h5> <br>');
  const mail = $('<p> '+item.DatosEmpleado.EMAIL+'</p>');
  const codigo = $('<p> '+item.DatosEmpleado.EMPLOYEE_NUMBER+'</p>');
  // const mail = $('<p> '+item.DatosEmpleado.EMAIL+'</p>');
  // const mail = $('<p> '+item.DatosEmpleado.EMAIL+'</p>');

  itemDiv.append(p1);
  itemDiv.append(p2);

  parent.append(name);
  parent.append(mail);
  parent.append(codigo);

  itemDiv.on("click", (e) => {
    e.preventDefault();
    container.empty();
    container.hide();
    divResult.empty();
    divResult.append(parent);
  });
  container.show();
  return itemDiv;
}
