const navbarLinks = document.getElementsByClassName('navbar-links')[0]

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
	navbarLinks.classList.toggle('active')
  	if(!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
  	} else {
		menuBtn.classList.remove('open');
		menuOpen = false;
  	}
});

(function () {
	function berechne() {
		var jetzt = new Date(),
			tag = jetzt.getDate(),
			tagZahl = jetzt.getDay(),
      		zeit = ['8 Uhr - 18 Uhr','8 Uhr - 18 Uhr','8 Uhr - 18 Uhr','8 Uhr - 18 Uhr','8 Uhr - 18 Uhr','geschlossen','geschlossen'],
			wochentag = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag','Freitag', 'Samstag'],
			monatZahl = jetzt.getMonth(),
			monat = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli','August', 'September', 'Oktober', 'November', 'Dezember'],
			text;
			text = wochentag[tagZahl] + ', ' + tag + '. ' + monat[monatZahl] + ': ' + zeit[tagZahl];
		
		document.getElementById('ausgabeOeffnungszeit')
			.innerHTML = text;
	}
	document.addEventListener("DOMContentLoaded", function () {
		berechne();
	});
}());