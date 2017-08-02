const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  const update = function() {
    render(root);
  };

  if(state.page == null){
       wrapper.append(Login( _ => render(root)));
   }else{
      console.log(state.page);
       wrapper.append(Navbar( _ => render(root)));
       wrapper.append(state.page( _ => render(root)));
   };

    root.append(wrapper);

}

const state = {

  page:null,
  user:null,
  news:null

}


$(_=>{


$.get('https://hackathon-ef798.firebaseio.com/getemployee.json', (data) => {

      if (!data) { return alert('no hay data gg');}

      state.user = data.persona;
      console.log(data.persona);
      $.get('https://hackathon-ef798.firebaseio.com/news.json', (data) => {

          if (!data) { return alert('no hay data gg');}

          // state.news = data.data[0].attachments.data[0].title;
          state.news=data.data;
          console.log(state.news);
          // $('button-collapse').sideNav();
      });
      const root = $('#root');
      render(root);

    });




});
