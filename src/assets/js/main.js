const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  if (state.page==0) {
    wrapper.append(Login(_=>render(root)));
    root.append(wrapper);
  }else if (state.page==1) {
    wrapper.append(Dashboard());
    root.append(wrapper);
  }

}

const state = {
  page:0,
  user:null,
  news:null
}


$(_=>{

  $.get('https://hackathon-ef798.firebaseio.com/getemployee.json', (data) => {

      if (!data) { return alert('no hay data gg');}

      state.user = data.persona;
      console.log(data.persona);

      const root = $('#root');
      render(root);

    });




});
