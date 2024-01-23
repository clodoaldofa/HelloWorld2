const colors = ['red', 'green', 'yellow'];
let colorIndex = 0;
const h1 = document.querySelector('#hello-world');
h1.addEventListener('click', () => {
  colorIndex = (colorIndex + 1) % colors.length;
  h1.style.color = colors[colorIndex];
});
