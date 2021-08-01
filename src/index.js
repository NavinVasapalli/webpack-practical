// import helloWorld from "./hello-world.js";
// import addImage from "./add-image.js";
import Heading from "./components/Heading/Heading.js";
import HelloWorldButton from "./components/HelloWorldButton/HelloWorldButton.js";


const helloWorldButton = new HelloWorldButton();
const heading = new Heading();
window.addEventListener("load", function() {
heading.render();
helloWorldButton.render();
// helloWorld();
// addImage();
});