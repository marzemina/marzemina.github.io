var myMap;
ymaps.ready(init);

function init () {
	myMap = new ymaps.Map('map', {
		center: [59.93930, 30.3294], 
		zoom: 16
	}),
	myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
			hintContent: 'Мороженное "Глейси" находится здесь',
			balloonContent: 'Заходите в гости'
		}, {

			iconLayout: 'default#image',

			iconImageHref: 'img/pin.png',

			iconImageSize: [218, 142],
        
			iconImageOffset: [-41, -142]
		});
myMap.geoObjects.add(myPlacemark);
	
}

function addEvent(element, evnt, funct){
	if (element.attachEvent)
		return element.attachEvent('on'+evnt, funct);
	else
		return element.addEventListener(evnt, funct, false);
}

addEvent(
	document.getElementById('cfb'),
	'click',
	function () { 
		document.getElementById('cfpopup').classList.add('feedback-form');
		document.getElementById('cfoverlay').classList.add('feedback-form-overlay-show');
	}
);

addEvent(
	document.getElementById('cfb2'),
	'click',
	function () { 
		document.getElementById('cfpopup').classList.remove('feedback-form');
		document.getElementById('cfoverlay').classList.remove('feedback-form-overlay-show');
	}
);

addEvent(
	document.getElementById('cfoverlay'),
	'click',
	function () { 
		document.getElementById('cfpopup').classList.remove('feedback-form');
		document.getElementById('cfoverlay').classList.remove('feedback-form-overlay-show');
	}
);