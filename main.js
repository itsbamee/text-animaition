const h1 = document.querySelector('h1');
/*
const text = h1.innerText;
h1.innerText = '';
let tags = '';
for (let letter of text) tags += `<span>${letter}</span>`;
h1.innerHTML = tags;
*/

//h1 요소는 자동적으로 분리해서 span으로 감싸도록 자동처리하는 방법
//el -> 선택자가 들어가는 요소는 함수명을 el, elem 등으로 써주는게 좋음
function splitText(el, interval = 0, tagName = 'span') {
	const text = el.innerText;
	el.innerHTML = '';
	let tags = '';
	let count = 0;

	for (let letter of text) {
		tags += `<${tagName} style='display:inline-block; transition-delay:${interval * count}s'>${letter}</${tagName}>`;
		count++;
	}

	el.innerHTML = tags;
}

splitText(h1, 0.2);
