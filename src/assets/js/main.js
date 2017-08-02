const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  const update = function() {
    render(root);
  }


  if(state.modal==null){
    wrapper.append(Header(update));
    wrapper.append(Board(update));
  }

  if(state.modal=="modal"){
    wrapper.append(Modal(update));
  }

  // if(state.modal)
;
  root.append(wrapper);

}


const state = {
  pin:null,
  page:null,
  pin2:null,
  page2:null,
  pines:null,
  modal:null,
  id:null,
  data:null,
  image:null,
  creator:null,
  nameBoard:null,
  titulo:null,
  nota:null,
  publicado:null,
  site:null
}


$(_=>{

  $.get('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AZ2i9KfK4bcYVlQFmQ2ZjB8JS7DRFM4qVqQ9s7REItsdIWA_dQAAAAA&fields=id%2Clink%2Cnote%2Curl%2Ccreated_at%2Ccounts%2Ccolor%2Cboard%2Cattribution%2Cmedia%2Cmetadata%2Coriginal_link%2Ccreator%2Cimage', (data) => {

      if (!data) { return alert('no hay data gg');}

      state.pin = data.data;
      state.page= data.page;

      console.log(data.data);

      const root = $('#root');
      render(root);

    });




});
