const Beneficios = ()=>{
  const div = $('<div class="container-fluid"><h4 class="news">Beneficios</h4></div>');
  const row = $('<div class="row"></div>');
  const categorias = $('<div class="col m2 hide-on-small-only"></div>');
  const listaCategoria = $('<ul class="collection">'+
                      '<li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>'+
                      '<li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>'+
                      '<li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>'+
                      '<li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>'+
                      '<li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li>'+
                      '<li class="collection-item dismissable"><div>Alvin<a href="#!" class="secondary-content"><i class="material-icons">send</i></a></div></li></ul>');
  const promociones = $('<div class="col s12 m10"></div>');

  div.append(row);
  row.append(categorias, promociones);
  categorias.append(listaCategoria);

  for (var i = 0; i < 10; i++) {
  const promocion = $('<div class="col s12 m6 modal-trigger" id="'+state.benefits[i].id+'""><a href="#modal1"></a></div>');
  const contenedor = $('<div class="card horizontal height"></div>');
  const divImagen1 = $('<div class="img-promocion valign-wrapper card-image"></div>');
  const imagen = $('<img src="'+state.benefits[i].imgCompany+'">');
  const divDescrip = $('<div class="card-stacked"></div>');
  const divDescrip1 = $('<div class="promocion card-content"></div>');

  const nombreCompania = $('<h4>'+state.benefits[i].nameCompany+'</h4>');
  const descrip = $('<p>'+state.benefits[i].title+'</p>');
  const span = $('<span class="float-right">'+state.benefits[i].discount+'</span>');
  promociones.append(promocion);
  promocion.append(contenedor);
  contenedor.append(divImagen1, divDescrip)
  divImagen1.append(imagen);
  divDescrip.append(divDescrip1);
  divDescrip1.append(divDescrip1, nombreCompania, descrip, span);



}
div.append(detalleBeneficios());

  return div;
}

const detalleBeneficios = () =>{
  const container = $('<div id="modal1" class="modal"></div>');
  const close = $('<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">X</a>');
  const modal = $('<div class="modal-content"></div>');
  const colDescrip = $('<div class="col s12 m6">ljlihugftdsegfghjjkjlk</div>');
  const colMapa = $('<div class="col s12 m6">kjhgfdsdfcgvhbjnkm</div>');
  const mapa = $('<div id="mapa"></div>');
  container.append(close, modal);
  modal.append(colDescrip, colMapa);
  colMapa.append(mapa);

  $(document).ready(function(){
   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
   $('.modal').modal();
  });
return container;
}
