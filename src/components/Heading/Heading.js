import './heading.scss'
class Heading {
    render(){
        const h1 = documnet.createElement('h1');
        const body = document.querySelector('body');
        h1.innerHTML = 'Webpack practice';
        body.appendChild(h1);
    }
}

export default Heading;