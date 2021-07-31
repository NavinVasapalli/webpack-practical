import buttonText from '../../button-text.txt';
import './HelloWorldButton.scss';

class HelloWorldButton {
    buttonClassProperty = 'button';
    render() {
        const button = document.createElement('button');
        button.innerHTML = buttonText;
        button.classList.add(this.buttonClassProperty);
        const body = document.querySelector('body')
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'Hello world';
            p.classList.add('text-normal')
            body.appendChild(p);
        }
        body.appendChild(button)
    }
}

export default HelloWorldButton