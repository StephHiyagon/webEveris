const Beneficios = (update)=>{
  const div = $('<div class="container-fluid"><h4 class="news">Beneficios</h4></div>');
  const row = $('<div class="row"></div>');
  const categorias = $('<div class="col m2 hide-on-small-only"></div>');
  const listaCategoria = $('<ul class="collection">'+
                      '<li class="collection-item dismissable"><div>Más buscados<a href="#!" class="secondary-content link-categoria" data-categoria="44"><i class="material-icons">send</i></a></div></li>'+
                      '<li class="collection-item dismissable"><div>Diversión y Ocio<a href="#!" class="secondary-content link-categoria" data-categoria="123"><i class="material-icons">send</i></a></div></li>'+
                      '<li class="collection-item dismissable"><div>Educación<a href="#!" class="secondary-content link-categoria" data-categoria="139"><i class="material-icons">send</i></a></div></li>'+
                      '<li class="collection-item dismissable"><div>Salud y Deporte<a href="#!" class="secondary-content link-categoria" data-categoria="48"><i class="material-icons">send</i></a></div></li>'+
                      '<li class="collection-item dismissable"><div>Bebés y Niños<a href="#!" class="secondary-content link-categoria" data-categoria="16"><i class="material-icons">send</i></a></div></li>'+
                      '<li class="collection-item dismissable"><div>Autos y Motos<a href="#!" class="secondary-content link-categoria" data-categoria="107"><i class="material-icons">send</i></a></div></li></ul>');
  const promociones = $('<div class="col s12 m10"></div>');


  div.append(row);
  categorias.append(listaCategoria);
  state.benefits.forEach(function(index, item){
    if(item < 10){
      promociones.append(showBenef(index, div));
    }
  });
  row.append(categorias, promociones);

  $(_=>{

    $('.link-categoria').on("click", function(e){
      e.preventDefault();
      let arrayFiltrado = filterBenefit($(this).data("categoria"));
      promociones.empty();
      arrayFiltrado.forEach(function(item){

        promociones.append(showBenef(item, div));
      });
    });
  });
  return div;
}

const Modal = (item, div)=>{

const modal=$('<div class="container modal-ejemplo"></div>');
const close = $('<span class="close">X</span>');
const row = $('<div class="row"></div>');
const colum1 = $('<div class="col s12 m6">'+item.description+'</div>');
const colum2 = $('<div class="col s12 m6"></div>');
const mapa = $('<div id="map" class="mapa"></div>');

div.append(modal);
modal.append(row, close);
row.append(colum1, colum2);
colum2.append(mapa);
  close.on('click', function(){
    modal.hide();
    modal.empty();
  });
}
