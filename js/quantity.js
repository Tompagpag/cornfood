const input = document.getElementById("quantite");
const minusSpan = input.previousElementSibling;
const plusSpan = input.nextElementSibling;

console.log("input", input);
console.log("span -", minusSpan);
console.log("span +", plusSpan);


minusSpan.addEventListener('click', () => {
  let value = parseInt(input.value, 10);
  if(value > 1) {
    value--;
    input.value = value;
  }
});

plusSpan.addEventListener('click', () => {
  let value = parseInt(input.value, 10);
    value++;
    input.value = value;
});
