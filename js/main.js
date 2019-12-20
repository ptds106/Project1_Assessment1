let numb = 0;

const number = document.getElementById('number')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const input = document.getElementById('input')


number.textContent = numb;

plus.addEventListener("click", () => {
    numb += Number(input.value)
    number.textContent = numb;
    if(numb < 0) {
        number.style.color = 'red';
    } else {
        number.style.color = 'black';
    }
});
minus.addEventListener("click", () => {
    numb -= Number(input.value)
    number.textContent = numb;
    if(numb < 0) {
        number.style.color = 'red';
    } else {
    number.style.color = 'black';
    }
});
