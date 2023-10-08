/* const alphabet = document.createElement('h1');
h1.innerText = 'alphabet';
console.log(alphabet);*/

const h1 = document.querySelector('h1');
const text = h1.innerText;
h1.innerText = ''; //h1을 가져와서 옮겨담고, 어펜드 해주면 뒤에 붙으니까 기존 h1을 없애주어야 함
// console.log(h1);

for (let letter of text) {
	const span = document.createElement('span');
	span.innerText = letter;
	h1.append(span);
}
