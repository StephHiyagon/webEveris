"use strict";

const filtroContacto = (query, container)=> {
  return state.personal.filter((item) => {
    return ((item.Apellido.toLowerCase().indexOf(query)>-1) || (item.Apellido2.toLowerCase().indexOf(query)>-1) || (item.Nombre.toLowerCase().indexOf(query)>-1) ||  (item.DatosEmpleado.EMPLOYEE_NUMBER.toLowerCase().indexOf(query)>-1));
  });
}

const reRender = (filtro, container) => {
    container.empty();
    state.personal.forEach((item) => {

    container.append(placeItem(item, container));
  });
}
