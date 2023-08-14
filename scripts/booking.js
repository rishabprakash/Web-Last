/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
const mon = document.getElementById("monday");
const tue = document.getElementById("tuesday");
const wed = document.getElementById("wednesday");
const thurs = document.getElementById("thursday");
const fri = document.getElementById("friday");

var full = document.getElementById("full");
var half = document.getElementById("half");
const clear = document.getElementById("clear-button");

var allDays = [];




var totalCost = document.getElementById("calculated-cost");




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!


function daychange(day){
    if (!allDays.includes(day)){
        allDays.push(day);
        document.getElementById(day).classList.add("selected");
    }

}

mon.addEventListener("click" , function() {daychange("monday");recalculate();});
tue.addEventListener("click" , function() {daychange("tuesday");recalculate();});
wed.addEventListener("click" , function() {daychange("wednesday");recalculate();});
thurs.addEventListener("click" , function() {daychange("thursday");recalculate();});
fri.addEventListener("click" , function() {daychange("friday");recalculate();});





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function cleardays() {
    allDays.length = 0; // Clear selected days
    const dayButtons = [mon, tue, wed, thurs, fri]; // Array of day buttons

    // Loop through day buttons and remove "selected" class
    dayButtons.forEach(dayButton => {
        dayButton.classList.remove("selected");
        recalculate();
    });
}

clear.addEventListener("click", cleardays);

half.addEventListener("click", function(){
    half.classList.add("but-color");
    full.classList.remove("but-color");
    recalculate();
});
full.addEventListener("click", function(){
    full.classList.add("but-color");
    half.classList.remove("but-color");
    recalculate();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

var rate = 0;
    half.addEventListener('click',()=>{
        rate = 20;
        recalculate();
    });





// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


full.addEventListener('click',()=>{
    rate = 35;
    recalculate();
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate(){
var total = rate * allDays.length;
    totalCost.innerHTML=  total;
}