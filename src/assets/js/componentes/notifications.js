const Notifications = ()=>{
	const div = $("<div class='container'></div>");
	const row = $("<div class='row'></div>");
	const h4 = $("<h4>Comunicados</h4>");

	row.append(h4);
	$.get('https://hackathon-ef798.firebaseio.com/announcements.json', (json)=>{
		
		const array = json.data;
		console.log(array);

		const col1 = $("<div class='col s12'></div>");
		const sub1 = $("<div class='hide-on-med-and-down col s12 col l9'></div>");
		const sub2 = $("<div class='hide-on-med-and-down col s12 col l3'></div>");
		const col2 = $("<div class='hide-on-med-and-down col s12'></div>");
		array.forEach((obj)=>{
			let col = $("<div class='hide-on-med-and-up col s12'></div>");
			col.append(cuadroGrande(obj));

			col1.append(col);

		});
		sub1.append(cuadroGrande(array[1]));
		sub2.append(cuadroPequeño(array[0]));
		sub2.append(cuadroPequeño(array[4]));

		col1.append(sub1);
		col1.append(sub2);

		col2.append(cuadroHorizontal(array[2]));
		col2.append(cuadroHorizontal(array[3]));
		
		row.append(col1);
		row.append(col2);
		/*row.append(col3);*/
	});

	div.append(row);
	return div;
};

const cuadroPequeño = (info)=>{
	const contenedor= $("<div class='col s12'></div>");
	const card = $("<div class='card'></div>")
	const cardImg = $("<div class='card-image'></div>");
	const img = $(info.text.replace("<p>","").replace("</p>",""));
	const cardContent = $("<div class='card-content'></div>");
	const title = $("<h6 class='fw500'>"+info.title+"</h6>");
	const subTitle = $(info.subtitle);

	card.css("padding", "1rem");
	cardContent.css("padding", "24px 0 6px 0");
	img.addClass("img-small");

	cardContent.append(title);
	cardContent.append(subTitle);
	cardImg.append(img);
	card.append(cardImg);
	card.append(cardContent);
	contenedor.append(card);

	return contenedor;
}
const cuadroGrande = (info)=>{
	const card = $("<div class='card'></div>")
	const cardImg = $("<div class='card-image'></div>");
	const img = $(info.text.replace("<p>","").replace("</p>","").replace("\n", ""));
	const cardContent = $("<div class='card-content'></div>");
	const title = $("<h5>"+info.title+"</h5>");
	const subTitle = $(info.subtitle);

	img.css("width", "100%");
	img.css("height", "auto");

	cardContent.append(title);
	cardContent.append(subTitle);
	cardImg.append(img);
	card.append(cardImg);
	card.append(cardContent);

	return card;
}

const cuadroHorizontal = (info)=>{
	const contenedor = $("<div class='col s12 col l6'></div>");
	const card = $("<div class='card horizontal'></div>");
	const cardImg = $("<div class='card-image'></div>");
	const img = $(info.text.replace("<p>","").replace("</p>","").replace("<p>Entrevista</p>", ""));
	const cardStacked = $("<div class='card-stacked'></div>");
	const cardContent = $("<div class='card-content'></div>");
	const title = $("<h5>"+info.title+"</h5>");
	const subTitle = $(info.subtitle);

	card.css("height", "320px");
	img.css("width", "100%");
	img.css("height", "250px");

	cardImg.append(img);
	cardContent.append(title);
	cardContent.append(subTitle);
	cardStacked.append(cardContent);

	card.append(cardImg);
	card.append(cardStacked);

	contenedor.append(card);
	return contenedor;
}