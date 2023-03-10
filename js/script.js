const rowElement = document.querySelector(".row");
let classElement;
let numIdentity;
for(let i = 1; i <= 100; i++){
    if( (i % 3 === 0) && (i % 5 === 0)){
        classElement = "fizz-buzz";
        numIdentity = "Fizzbuzz";
        rowElement.innerHTML += `<div class="column ${classElement}">${numIdentity}</div>`;
    }else if (i % 3 === 0){
        classElement = "fizz";
        numIdentity= "Fizz";
        rowElement.innerHTML += `<div class="column ${classElement}">${numIdentity}</div>`;
    }else if( i % 5 === 0){
        classElement = "buzz";
        numIdentity = "Buzz";
        rowElement.innerHTML += `<div class="column ${classElement}">${numIdentity}</div>`;
    }else{
        numIdentity = i;
        rowElement.innerHTML += `<div class="column">${numIdentity}</div>`;
    }
    
    console.log(i, numIdentity);
    
}
