window.onload = function () {
	function changeName(e) {
		document.querySelector('.changename').classList.add('activ');
	}

	document.addEventListener('click', (e) =>
		e.target.className == 'card__title' ? changeName(e) : null
	);

	//смена верстки (табличная и блочная)
	let tabl = document.querySelector('.tabl');

	tabl.addEventListener('mouseover', function () {
		document.querySelector('.grid').classList.add('toggle');
	});

	tabl.addEventListener('mouseout', function () {
		document.querySelector('.grid').classList.remove('toggle');
	});

	///drag and drop
	let elems = document.querySelectorAll('.grid__item');
	let parents = document.querySelectorAll('.grid__deck');
	let current;

	elems.forEach(function (elem) {
		elem.addEventListener('dragstart', function (event) {
			current = this;
		});
	});

	elems.forEach(function (elem) {
		elem.addEventListener('drag', function (event) {
			current = this;
		});
	});

	elems.forEach(function (elem) {
		elem.addEventListener('dragend', function (event) {
			current = this;
		});
	});
	parents.forEach(function (parent) {
		parent.addEventListener('dragover', function (event) {
			event.preventDefault();
		});

		parent.addEventListener('dragenter', function (event) {
			event.preventDefault();
		});

		parent.addEventListener('dragleave', function (event) {
			event.preventDefault();
		});

		parent.addEventListener('drop', function (event) {
			this.append(current);
		});
	});
};
