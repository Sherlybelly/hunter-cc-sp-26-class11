let headerElement;
let slider;
let inputText;
let dropdown;

function setup() {
  createCanvas(400, 400);

  headerElement = createElement("h2", "hi this is h2");
  headerElement.position(0, 0);
  headerElement.html("i have changed the content now");

  slider = createSlider(0, width, width / 2);

  inputText = createInput("this is some text");
  inputText.position(10, 350);

  dropdown = createSelect();
  dropdown.option("sky blue", "skyblue");
  dropdown.option("pink");
}

function draw() {
  background(dropdown.value());
  // print(slider.value())
  text(inputText.value(), slider.value(), height / 2);
}
