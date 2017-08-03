const Notifications = ()=>{
	const div = $("<div class='container'></div>");
	const row = $("<div class='row'></div>");
	const h4 = $("<h4>Comunicados</h4>");

	row.append(h4);
	$.get('https://hackathon-ef798.firebaseio.com/announcements.json', (json)=>{
		
		const array = json.data;
		console.log(array);

		const col2 = $("<div class='col s12 col l6 col xl6'></div>");
		
		array.forEach((obj, i)=>{
			/*let img = $(obj.text);
			let title = $("<p>"+obj.title+"</p>");
			console.log(obj.text);

			div.append(img);
			div.append(title);*/
			console.log(i);
			if(i>0){
				col2.append(cuadroPequeño(obj));
			}
			
		});

		row.append(cuadroGrande(array[0]));
		row.append(col2)
	});

	div.append(row);
	return div;
};

const cuadroPequeño = (info)=>{
	const contenedor= $("<div class='col s12 col l6 col xl6'></div>");
	const divImg = $(info.text.replace("<p>","").replace("</p>","").replace("\n", "").replace("<p>Entrevista</p>"), "");
	const divTitle = $("<div></div>");
	const title = $("<p>"+info.title+"</div>");

	divImg.css("width", "100%");
	divImg.css("height", "150px");

	divTitle.append(title);
	contenedor.append(divImg);
	contenedor.append(divTitle);

	return contenedor;
}
const cuadroGrande = (info)=>{
	const contenedor= $("<div class='col s12 col l6 col xl6'></div>");
	const divImg = $(info.text.replace("<p>","").replace("</p>","").replace("\n", ""));
	const divTitle = $("<div></div>");
	const title = $("<p>"+info.title+"</div>");

	divImg.css("width", "100%");
	divImg.css("height", "400px");

	divTitle.append(title);
	contenedor.append(divImg);
	contenedor.append(divTitle);

	return contenedor;
}