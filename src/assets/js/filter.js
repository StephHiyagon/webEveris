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
  const divImg = $('<div class="col m5 s12"><img src=""></div>');
  const divInfo = $('<div class="col m7 s12"></div>');
  const name = $('<h5>'+ item.Nombre + '  '+ item.Apellido +'   '+item.Apellido2 +'</h5> <br>');
  const mail = $('<p><span class="strong"> Correo: </span>'+item.DatosEmpleado.EMAIL+'</p>');
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


const getCategories = ()=> {
  $.get('https://hackathon-ef798.firebaseio.com/categories.json', (data) => {
      if (!data) { return alert('no hay data');}
      state.category = data;
  });
}

const showBenef = (item, div) => {
    const promocion = $('<div class="col s12 m6"></div>');
    const contenedor = $('<div class="card horizontal height"></div>');

    const divImagen1 = $('<div class="img-promocion valign-wrapper card-image"></div>');
    const imagen = $('<img src="'+item.imgCompany+'">');
    const divDescrip = $('<div class="card-stacked"></div>');
    const divDescrip1 = $('<div class="promocion card-content"></div>');

    const nombreCompania = $('<h4>'+item.nameCompany+'</h4>');
    const descrip = $('<p>'+item.title+'</p>');
    const span = $('<span class="float-right">'+item.discount+'</span>');
    promocion.append(contenedor);
    contenedor.append(divImagen1, divDescrip);
    divImagen1.append(imagen);
    divDescrip.append(divDescrip1);
    divDescrip1.append(nombreCompania, descrip, span);

    promocion.on("click", function(e){
      e.preventDefault();
      state.beneficio = item;
      Modal(item, div);
    });
    return promocion;

}

const filterBenefit = (query)=> {
  return state.benefits.filter((item)=>{
    return (item.links.categories.indexOf(query.toString())>-1);
  });
}
