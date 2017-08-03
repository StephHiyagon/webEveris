const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  const update = function() {
    render(root);
  };

  if(state.page == null){
       wrapper.append(Login( _ => render(root)));
   }else {
      wrapper.append(Navbar(update));
      wrapper.append(state.page( _ => render(root)));
   }

  root.append(wrapper);

}

const state = {

  page:null,
  user:null,
  news:null,
  benefits:null,
  id2: null

}


$(_=>{
$.get('https://hackathon-ef798.firebaseio.com/getemployee.json', (data) => {

      if (!data) { return alert('no hay data gg');}

      state.user = data.persona;
      $.get('https://hackathon-ef798.firebaseio.com/news.json', (data) => {

          if (!data) { return alert('no hay data gg');}
          state.news=data.data;
      });
      $.get('https://hackathon-ef798.firebaseio.com/benefits.json', (data) => {

          if (!data) { return alert('no hay data gg');}
          state.benefits=data;

      });

      const root = $('#root');
      render(root);

    });
});
