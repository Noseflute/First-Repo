var favFoods = ["bacon", "Lettuce", "Tomato"];

//Take users information
//Ask them what they want to replace baon with
//Rpelace Bacon
//Then output the entire array to the screen

var newFood = prompt("What do you want to replace bacon with?")
favFoods[0]= newFood;

window.alert(favFoods[0] + " " + favFoods[1] + " " + favFoods[2]);
//Output all values of the array to the screen