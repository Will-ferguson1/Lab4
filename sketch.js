

let counter = 0
let stars = ""
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  number = prompt("please choose how long you would like your starline to be");
  number = Number(number);
  //console.log(number)
  //console.log(typeof number)

  while(counter < number){
    stars = stars + "*";
    //console.log(stars);
    counter++
  } 

  console.log(stars);
  counter = counter - number;
  //console.log(counter);
  stars = ""
  

}
