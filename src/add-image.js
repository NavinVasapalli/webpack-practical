import Screen from './images/Screen.png';
function addImage() {
    const img = document.createElement('img');
    img.src = Screen;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;