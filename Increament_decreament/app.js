
let numberBox = document.querySelector("#number");
const plus = document.querySelector("#plus");
let  minus = document.querySelector("#minus");
let reset = document.querySelector("#reset");


let my_number = 0;



plus.addEventListener('click', function() {






let existingNumber = numberBox.value
my_number = existingNumber;
// my_number  = my_number + 1;
my_number++;
numberBox.value = my_number;

   
    

})
minus.addEventListener('click', function(){
    let existingNumber = numberBox.value
    mynumber = existingNumber;
    my_number  = my_number - 1;
    numberBox.value = my_number;  
    

})

reset.addEventListener('click', function() 
   
{
    my_number  = 0;
    numberBox.value= 0;
})



/* 

If the user puts a number muanuel then add one from wahter the number is





*/