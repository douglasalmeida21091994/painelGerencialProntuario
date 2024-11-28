const pai = document.querySelector('.pai');
let isMouseDown = false;
let startX;
let scrollLeft;

pai.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.pageX - pai.offsetLeft;
    scrollLeft = pai.scrollLeft;
    pai.style.cursor = 'grabbing'; // muda o cursor para indicar que está arrastando
    pai.style.userSelect = 'none'; // desativa a seleção de texto
});

pai.addEventListener('mouseleave', () => {
    isMouseDown = false;
    pai.style.cursor = 'grab'; // volta ao cursor original
    pai.style.userSelect = ''; // restaura a seleção de texto
});

pai.addEventListener('mouseup', () => {
    isMouseDown = false;
    pai.style.cursor = 'grab'; // volta ao cursor original
    pai.style.userSelect = ''; // restaura a seleção de texto
});

pai.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - pai.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste a sensibilidade, multiplique por um valor maior para aumentar a velocidade do arrasto
    pai.scrollLeft = scrollLeft - walk;
});
