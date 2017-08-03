const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  const update = function() {
    render(root);
  };

  if(state.page == null){
       wrapper.append(Login( _ => render(root)));
   }else if (state.page == Dashboard) {
     console.log("Hola");
      wrapper.append(Navbar(update));
      wrapper.append(state.page( _ => render(root)));
   }else if (state.page == Buscar) {
     wrapper.append(Navbar(update));
     wrapper.append(state.page( _ => render(root)));

   }else if(state.page == Beneficios){
     wrapper.append(Navbar(update));
     wrapper.append(state.page( _ => render(root)));
   };

  root.append(wrapper);

}

const state = {

  page:null,
  user:null,
  news:null,
  benefits:null

}


$(_=>{
$.get('https://hackathon-ef798.firebaseio.com/getemployee.json', (data) => {

      if (!data) { return alert('no hay data gg');}

      state.user = data.persona;
      console.log(data.persona);
      $.get('https://hackathon-ef798.firebaseio.com/news.json', (data) => {

          if (!data) { return alert('no hay data gg');}
          state.news=data.data;
          console.log(state.news);
      });
      $.get('https://hackathon-ef798.firebaseio.com/benefits.json', (data) => {

          if (!data) { return alert('no hay data gg');}
          state.benefits=data;
          console.log(data[1]);
      });

      const root = $('#root');
      render(root);

    });
});
