const containerDom = document.getElementById('container');

for (let i = 1; i <= 100; i++) {
    let contenuto = i;
    let classe = "";
    containerDom.innerHTML += `<div class="box">${contenuto}</div>`;

    if (i % 15== 0) 
     console.log("FizzBuzz");
    else if (i % 3 == 0)
     console.log("Fizz");
    else if (i % 5 == 0)
     console.log("Buzz");
    else
     console.log(i);




    
}



