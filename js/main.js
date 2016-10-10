window.addEventListener("load", function(){
	var chatRaymi = document.querySelector(".avatar");
	var contenedor = document.querySelector(".container");
	var mensaje = document.getElementById("mensajes");	

	chatRaymi.addEventListener("click", function(){
		var cajaRaymi = document.createElement("div");

		cajaRaymi.classList.add("cajaRaymi");

		contenedor.appendChild(cajaRaymi);
	});

	window.addEventListener("keyPress", mensaje , fechaPub );

		function mensaje (){
			var cajaMensaje = document.createElement("div");
			var p = document.createElement("p");
			var texto = this.parentElement.children[0].value;
			p.innerText = texto;
		};
		function fechaPub (){
			var fecha = new Date();
			var hora = fecha.getHours();
			var minuto = fecha.getMinutes();
			var segundo = fecha.getSeconds();
			return hora + ":" + minuto + ":" + segundo;
		}


});