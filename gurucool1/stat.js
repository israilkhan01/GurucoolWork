
let min = 0 ;
let max = 300 ;

let Avg = 50;
let Cutoff = 200;
let TopScore = 280;

let first = min;
let last = min;
let mid = min ;


let Steps = max - min;
if(min>0){
    Steps = max
}
let Score = 100;
let minSc = document.getElementById("minSc");
let maxSc = document.getElementById("maxSc");

//inner html change 

minSc.innerHTML = min;
maxSc.innerHTML = max;


function CalculatePathPer(value,Steps){
    return ((value/Steps)*100);
}


let cursor = document.getElementById("cursor");
let PathMove = document.getElementById("pathmove");
let topSc = document.getElementById("topSc");
let AvgSc = document.getElementById("AvgSc");
let CutSc = document.getElementById("CutSc");
let start = document.getElementById("start");

let percent=  CalculatePathPer(Score,Steps);


//cursor percent

let wp =  CalculatePathPer(17,Steps)




let cursorPer =  percent - wp;


let minP = Math.abs(CalculatePathPer(min,Steps));

if(min > 0){
    minP=0;
}

console.log("minP",minP)
PathMove.style.width = `${percent}%`;
PathMove.style.left =`${minP}%`
cursor.style.left = `calc(${percent + minP}% - ${17}px)`

start.style.left = `${(minP)}%`


let AvgP = CalculatePathPer(Avg,Steps);
let CutoffP = CalculatePathPer(Cutoff,Steps);
let TopScoreP = CalculatePathPer(TopScore,Steps);




if(Avg > Cutoff && Avg > TopScore){
    first = Avg ;
    AvgSc.style.width = `${100 - AvgP - TopScoreP - CutoffP}%`
    AvgSc.style.left = `${AvgP +minP}%`;
    if(Cutoff>TopScore){
     mid = Cutoff ;
     last = TopScore ;
     //last
     topSc.style.width = `${TopScoreP}%`;
     topSc.style.left = `${(0)*100 + minP}%`;


     //mid
     CutSc.style.width = `${CutoffP - TopScoreP }%`;
     CutSc.style.left = `${TopScoreP + minP}%`;
     
    }else{
     last = Cutoff ;
     //last
     CutSc.style.width = `${CutoffP}%`;
     CutSc.style.left = `${(0)*100 + minP}%`;
     mid = TopScore ;
     //mid
     topSc.style.width = `${TopScoreP - CutoffP}%`
     topSc.style.left = `${CutoffP + minP}%`
     
    }
    
 }else{
     last = Avg ;
     AvgSc.style.width = `${AvgP}%`
     AvgSc.style.left = `${0+minP}%`
    if(Cutoff>TopScore){
     first = Cutoff ;
     //first
     CutSc.style.width = `${100 - CutoffP - TopScoreP - AvgP}%`
     CutSc.style.left = `${CutoffP + minP}%`
     mid = TopScore ;

     //mid


     topSc.style.width = `${TopScoreP - AvgP}%`
     topSc.style.left = `${AvgP +minP}%`
    }else{
     mid = Cutoff ;
     first = TopScore ;
     console.log("dcjdjj",100 - TopScoreP);

     //first
     console.log("TopScore",TopScoreP,"Steps",Steps)
     topSc.style.width = `${100 - TopScoreP - CutoffP - AvgP}%`
     topSc.style.left = `${TopScoreP + minP}%`;

     //mid
     CutSc.style.width = `${CutoffP  - AvgP}%`
     CutSc.style.left = `${AvgP + minP}%`
    }
 }







async function circleParameters(curr_circle){
    let radius = await curr_circle.r.baseVal.value;
    console.log("radius", radius);
    let currcircumference = await 2 * radius * Math.PI;
    let Area =await radius * radius * Math.PI;
    curr_circle.style.strokeDasharray = await ` ${currcircumference } ${
      currcircumference
    }`;
    curr_circle.style.strokeDashoffset = await `${currcircumference}`;
    
    return currcircumference
}



//function for circle
async function setProgress(percent,curr_circle) {
 let currcircumference =   await circleParameters(curr_circle);
  const offset = await currcircumference * 1 - (currcircumference * 1 * percent) / 100;
  console.log(offset, "offse");
  curr_circle.style.strokeDashoffset = offset;
}

let circle = document.querySelector("#circle");
let circle1 = document.querySelector("#circle1");
let circle2 = document.querySelector("#circle2");


let currentPercent = document.getElementById("currentPercent")
let currentPercent1 = document.getElementById("currentPercent1")
let currentPercent2 = document.getElementById("currentPercent2")
// let currentprogress = document.getElementsByClassName("currentprogress")



let correct = 1;
let total = 30;
let incorrect  =  total - correct ;
let attempts = 2
let unattempts = total - attempts;


let initialper = (correct/total);
let initialper1 = (incorrect/total);
let initialper2 = (unattempts/total);

async function circleAni (x,y,z){
   await setProgress(x* 100,circle1);  //incorrect
   await setProgress(y* 100,circle);  //correct
   await setProgress(z* 100,circle2);  //unattempts
}

circleAni(initialper,initialper1,initialper2)




currentPercent.innerHTML = incorrect;

currentPercent1.innerHTML = correct;

currentPercent2.innerHTML = unattempts;

// currentprogress[0].style.width = `${initialper*100}%`



let scroller = document.getElementsByClassName("perButtons");


// function incprogress(){
//     let currentprogress = document.getElementsByClassName("currentprogress")
//     let currentPercent = document.getElementById("currentPercent")
//     initialper=initialper+0.1;

   

//     if(initialper<1){
//         // initialper=initialper+0.1;
//         currentprogress[0].style.width = `${initialper*100}%`
//         currentPercent.innerHTML = (initialper* 100).toFixed(0);
//         setProgress(initialper* 100)
//     }

// }


let iterator = 0
function leftmove(ele){
    // scroller[0].scroll
    console.log(ele)
    if(ele){
        console.log("button-click")
    }else{
        ele = 120
    }
    scroller[0].scrollBy({
        top: 0,
        left: ele,
        behavior: 'smooth'
      });
    //   console.log(scroller[0].scrollWidth)
}


function clickovbuts(element){
    let ovbutsAll = document.querySelector(".ovbuts.active");
    // console.log("element",element.classList.remove("active"));
    console.log("ovbutsAll",ovbutsAll);
   



    let movement = scroller[0].scrollLeft + scroller[0].clientWidth + 150 - element.offsetLeft

    if(scroller[0].scrollLeft + scroller[0].clientWidth < element.offsetLeft){
        // leftmove(element.offsetLeft - element.clientWidth -20)
        leftmove(movement)
       
        // console.log("left",scroller[0].scrollLeft + 300 + 150 - element.offsetLeft)
    }
    else{
        console.log("move" , movement - element.clientWidth)
        leftmove(-movement + element.clientWidth+ scroller[0].clientWidth/2)
    }


    if(ovbutsAll.classList[1] == "active"){
        ovbutsAll.classList.remove("active")
    }
    element.classList.add("active")
    
}


// function WidthChange2(x){
//     let svgCir = document.querySelectorAll(".cir");
//     let SvgCirLength = svgCir.length;
//     if (x.matches) {
//        for(let i=0 ;i<SvgCirLength ; i++){
//            svgCir[i].setAttribute("cx" , "40");
//            svgCir[i].setAttribute("cy" , "40");
//            svgCir[i].setAttribute("r" , "31");
//        }
//     } else {
//         for(let i=0 ;i<SvgCirLength ; i++){
//             svgCir[i].setAttribute("cx" , "60");
//             svgCir[i].setAttribute("cy" , "60");
//             svgCir[i].setAttribute("r" , "51");
//         }
//     }
//   }

function WidthChange(x){
    let svgCir = document.querySelectorAll(".cir");
    let SvgCirLength = svgCir.length;
    if (x.matches) {
       for(let i=0 ;i<SvgCirLength ; i++){
           svgCir[i].setAttribute("cx" , "45");
           svgCir[i].setAttribute("cy" , "45");
           svgCir[i].setAttribute("r" , "41");
       }
    } else {
        for(let i=0 ;i<SvgCirLength ; i++){
            svgCir[i].setAttribute("cx" , "60");
            svgCir[i].setAttribute("cy" , "60");
            svgCir[i].setAttribute("r" , "51");
        }
    }
  }
  let lxm = window.matchMedia("(max-width: 500px)");
  let xm = window.matchMedia("(max-width: 650px)");
  
  WidthChange(xm) 
//   WidthChange2(lxm)
//   xm.addListener(WidthChange);
xm.addEventListener("change",WidthChange)
  