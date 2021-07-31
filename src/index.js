// import helloWorld from "./hello-world.js";
// import addImage from "./add-image.js";
import HelloWorldButton from "./components/HelloWorldButton/HelloWorldButton.js";
import Heading from "./components/Heading/Heading.js";

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();
heading.render();

helloWorldButton.render();
// helloWorld();
// addImage();
