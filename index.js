const yesBtn = document.querySelector('#yesBtn');
const gifOverlay = document.getElementById('gifOverlay');
const gifChange = document.getElementById('gifChange');

yesBtn.addEventListener('click',function () {
    alert('Te amo muchísimo mi vida hermosa hermosa 💞')
    const contenedorImg = document.getElementById('contenedorImg');
    contenedorImg.style.justifyContent = 'center';
    gifOverlay.style.display = 'block'; // Mostrar la capa de superposición con el gif
    gifChange.innerHTML = '<img src="/PrimerSanValentin.github.io/Poto.gif" alt="" style="height: 300px;width: 533.34px;">'; // Cambiar el gif debajo de los botones
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
