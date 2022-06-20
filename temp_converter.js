let cel = document.getElementById("cel");
let fah = document.getElementById("fah");
let kel = document.getElementById("kev");


// function for celsius input 

cel.addEventListener("input", function(){   // input event fires everytime whwnever a value of tag/element is changed.
    let celTemp = +this.value;              // by adding + operator string is converted in number/integer 
    let fahTemp = (celTemp * 9/5) + 32 ;    // formula to convert celsius to fahrenheit
    let kelTemp = celTemp + 273.15;         // formula toconvert celsius to kelvin
    fahTemp = fahTemp.toFixed(4);
    kelTemp = kelTemp.toFixed(4);
    fah.value = fahTemp;
    kel.value = kelTemp
}); 

// function for fahrenheit input

fah.addEventListener('input',function(){
    let fahTemp = +this.value;
    let celTemp = (fahTemp - 32) * 5/9 ;                // formula to convert fahrenheit to celsius
    let kelTemp = (fahTemp - 32) * 5/9 + 273.15;        // formula to convert fahrenheit to kelvin
    kelTemp = kelTemp.toFixed(4);
    celTemp = celTemp.toFixed(4);
    cel.value = celTemp;
    kel.value = kelTemp;
});

// function for kelvin input

kel.addEventListener('input',function(){
    let kelTemp = +this.value;
    let celTemp = kelTemp - 273.15;                     // formula to convert kelvin to celsius
    let fahTemp = (kelTemp - 273.15)* 9/5 + 32;         // formula to convert kelvin to fahrenheit
    celTemp = celTemp.toFixed(4);
    fahTemp = fahTemp.toFixed(4);
    cel.value = celTemp;
    fah.value = fahTemp;
});




























// leftValue = ()=>{
//     // let c = this.value;

//     //celsius to other conversion
//     if(leftlistValue === "celsius" && rightlistValue === "fahrenheit"){
//         let f = (c * 9/5) + 32;
//         fah.value = f
//     }else if(leftlistValue === "celsius" && rightlistValue === "kelvin"){
//         let f = c + 273.15;
//         fah.value = f;
//     }else if(leftlistValue === "celsius" && rightlistValue === "celsius"){
//         fah.value = c
//     }

//     //fahrenheit to other conversion
//     if(leftlistValue === "fahrenheit" && rightlistValue === "kelvin"){
//         let f = (c - 32) * 5/9 + 273.15
//         fah.value = f
//     }else if(leftlistValue === "fahrenheit" && rightlistValue === "celsius"){
//         let f = (c - 32) * 5/9;
//         fah.value = f;
//     }else if(leftlistValue === "fahrenheit" && rightlistValue === "fahrenheit"){
//         fah.value = c
//     }

//     // kelvin to other conversion
//     if(leftlistValue === "kelvin" && rightlistValue === "celsius"){
//         let f = c - 273.15 
//         fah.value = f
//     }else if(leftlistValue === "kelvin" && rightlistValue === "fahrenheit"){
//         let f = (c - 273.15) * 9/5 + 32 ;
//         fah.value = f;
//     }else if(leftlistValue === "kelvin" && rightlistValue === "kelvin"){
//         fah.value = c
//     }

// }