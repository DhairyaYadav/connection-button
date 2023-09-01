let button = document.querySelector('button');

let statuss = document.querySelector('h3');
let count = 0;

button.addEventListener('click',function(){
    count = count + 1;
    // console.log(count);
    if(count%2 != 0){
        statuss.innerHTML = "connected";
        statuss.style.color = "#6a6f4c";
        button.innerHTML = "revert";
        button.style.backgroundColor = "#5d2510";
    } else{
        statuss.innerHTML = "not connected";
        statuss.style.color = "#5d2510";
        button.innerHTML = "connect";
        button.style.backgroundColor = "#6a6f4c";
    }
})