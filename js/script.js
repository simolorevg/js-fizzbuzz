const rowElement = document.querySelector(".row");
for(let i = 1; i <= 100; i++){
    if( (i % 3 === 0) && (i % 5 === 0)){
        
    }else if (i % 3 === 0){
        
    }else if( i % 5 === 0){
        
    }else{
        
    }
    rowElement.innerHTML += `<p>${i}</p>`;
}
