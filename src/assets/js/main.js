const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  const update = function() {
    render(root);
  };

  wrapper.append(Navbar());
  wrapper.append(Dashboard(update));
  root.append(wrapper);

}


const state = {
  user:null,
  news:null,
  page:null
}


$(_=>{

  $.get('https://hackathon-ef798.firebaseio.com/news.json', (data) => {

      if (!data) { return alert('no hay data gg');}

      // state.news = data.data[0].attachments.data[0].title;
      state.news=data.data;

      console.log(state.news);

      const root = $('#root');
      render(root);
      $(".button-collapse").sideNav();
    });




});
