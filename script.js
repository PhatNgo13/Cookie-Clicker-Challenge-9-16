let fullName = prompt("What's your name?")
alert(`Hey ${fullName}. Welcome to Coding 11, we're here to chase the bag!!!`);
let cash = 0;

// BUTTON FOR WHEN YOU CLICK ON THE IMAGE
add.onclick = function(){
    if(cash < 5 || cash > 103){
        cash +=1;
        document.getElementById("sum").innerHTML = cash;
    } else if(cash = 5){
        alert(`Wow ${fullName}, good job. You can finally upgrade the bag!`)
    }
}

// WHEN THE SUM IS 5, ALERT WILL TELL YOU TO CLICK UPGRADE. THAT'S WHEN UPGRADE ARE UNLOCK.
upgrade.onclick = function(){
    if(cash >= 5 ){
        cash += 100
        document.getElementById("sum").innerHTML = cash;
        console.log("clicked")
    }
}




// let cash = document.getElementById("amount").innerHTML;
// console.log(cash)

// for (let cash = 0; cash < 10; cash++){
//     console.log(cash)
// } 

// let cash = document.getElementById("cash");
// let amount =

// if(cash < 10){
//     cash++;

// }

// let increaseCash = function(number){
//     console.log(cash);
// }

// function addOne(){
//     increaseCash(+1);
//     console.log(cash);
// }