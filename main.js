import "./style.css";
import { TextInterface } from "text-interface";

let app = document.querySelector("#app");
// Create a new "Text Interface"
let ti = new TextInterface(app, "Mr. Hinkle's Guess My Number");
ti.output("Welcome to my game. Think of a number between 1 and 16");
ti.output("I will know your number after asking you 4 questions!")
ti.output("Hit return when you have one!");
await ti.readText();
ti.output("Is your number greater than or equal to 8?");
// Set the "8" bit
let greaterThan8 = await ti.readYesOrNo();
// Set the "4" bit
let floor;
if (greaterThan8) {
  floor = 8;
} else {
  floor = 0;
}
ti.output("Is it greater than or equal to "+(floor+4));
let greaterThan4 = await ti.readYesOrNo();

// Set the "2" bit
if (greaterThan4) {
  floor += 4;
} 
ti.output("is it greater than or equal to "+(floor+2));
let greaterThan2 = await ti.readYesOrNo();

if (greaterThan2) {
  floor += 2;
}

// set the "1" bit
ti.output("is it equal to "+(floor+1));
let add1 = await ti.readYesOrNo();

if (add1) {
  ti.output("Great, your number is "+(floor+1))
} else {
  ti.output('Great, your number is '+(floor))
}




