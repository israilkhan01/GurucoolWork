function tzactive(activePoint){
    let tzlist = document.getElementsByClassName("tz")
    let basiccTlist = document.getElementsByClassName("basiccT");
    console.log(tzlist);

    for(let i=0 ; i<3;i++ ){
        if(i==activePoint){
            basiccTlist[i].classList.add("displaY")
            tzlist[i].classList.add("gurutaskcontActive")
        }else{
            basiccTlist[i].classList.remove("displaY")
            tzlist[i].classList.remove("gurutaskcontActive")
        }
    }

}

let circle = document.querySelector("#circle");
let radius = circle.r.baseVal.value;
console.log("radius", radius);
let circumference = 2 * radius * Math.PI;
let Area = radius * radius * Math.PI;
circle.style.strokeDasharray = ` ${circumference } ${
  circumference
}`;
circle.style.strokeDashoffset = `${circumference}`;

//function for circle
function setProgress(percent) {
  const offset = circumference * 1 - (circumference * 1 * percent) / 100;
  console.log(offset, "offse");
  circle.style.strokeDashoffset = offset;
}
let currentPercent = document.getElementById("currentPercent")
let currentprogress = document.getElementsByClassName("currentprogress")

let initialper = 0
setProgress(initialper* 100);
currentPercent.innerHTML = (initialper* 100).toFixed(0);
currentprogress[0].style.width = `${initialper*100}%`

function incprogress(){
    let currentprogress = document.getElementsByClassName("currentprogress")
    let currentPercent = document.getElementById("currentPercent")
    initialper=initialper+0.1;
    if(initialper<1){
        // initialper=initialper+0.1;
        currentprogress[0].style.width = `${initialper*100}%`
        currentPercent.innerHTML = (initialper* 100).toFixed(0);
        setProgress(initialper* 100)
    }

}