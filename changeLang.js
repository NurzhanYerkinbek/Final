var dataReload = document.querySelectorAll("[data-reload]");

var language = {
	eng: {
		welcome: "I'm from Karaganda"
	},
	kaz: {
		welcome: "Я с Караганды"
	}
};

if (window.location.hash) {
	if(window.locatio.hash === "#kaz") {
		langText.textContent = language.kaz.welcome;
	}
}

for (i=0; i <= dataReload.length; i++) {
	dataReload[i].onclick = function {
		location.reload(true);
	};
}
}