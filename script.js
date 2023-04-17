var color = ["green","yellow","red","blue","orange"];

		document.querySelector("div").addEventListener(
					"mouseover", function () {

			document.querySelector("div").style.color
				= color[(Math.floor(Math.random() * color.length))];
		})