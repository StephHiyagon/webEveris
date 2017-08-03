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
  const foto = item.foto.split("/").pop();

  const itemDiv = $('<div class="row"></div>');
  const p1 = $('<span class="item-place__title col s9">'+ item.Nombre +'   '+item.Apellido +'   '+item.Apellido2 +'</span>');
  const p2 = $('<span class="col s3">'+item.DatosEmpleado.EMPLOYEE_NUMBER+'</span>');

  const parent = $('<div></div>');
  const divImg = $('<div class="col m5 s12 center-align"><img class="circle filtro" src="assets/img/julio.png"/></div>');
  const divInfo = $('<div class="col m7 s12"></div>');
  const name = $('<h5>'+ item.Nombre + '  '+ item.Apellido +'   '+item.Apellido2 +'</h5> <br>');
  const mail = $('<p><spanclass="strong"> Correo: </span><a href="mailto:'+item.DatosEmpleado.EMAIL+'">'+item.DatosEmpleado.EMAIL+'</a></p>');
  const codigo = $('<p><span class="strong"> N° Empleado: </span>'+item.DatosEmpleado.EMPLOYEE_NUMBER+'</p>');

  itemDiv.append(p1);
  itemDiv.append(p2);

  divInfo.append(name);
  divInfo.append(codigo);
  divInfo.append(mail);
  parent.append(divImg);
  parent.append(divInfo);
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
