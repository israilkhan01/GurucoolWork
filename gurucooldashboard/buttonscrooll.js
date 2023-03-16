let mennucontrolHandler = false
function menucontrol(){
    let barlist = document.querySelectorAll(".bar");
    let Guru_profile_container = document.querySelector(".Guru_profile_container")
    let bar1 = document.getElementById("bar1");
    let bar2 = document.getElementById("bar2");
    let bodywrapper = document.getElementById("bodywrapper");
    if(!mennucontrolHandler){
        mennucontrolHandler =  true
        bar1.style.width = "100%"
        bar2.style.width = "100%"
        bodywrapper.style.display = "block"
        Guru_profile_container.style.right = "0px"

    }else{
        mennucontrolHandler = false
        bodywrapper.style.display = "none"
        bar1.style.width = "60%"
        bar2.style.width = "40%"
        Guru_profile_container.style.right = "-300px"


    }
}



// let totalbuts = document.querySelectorAll(".btn_cl_cnt");
// let total_buts_length = totalbuts.length;
// let totalwidth = 0;
// let scroller = document.getElementsByClassName("clicked_feature_list_btns");

// for(let i=0;i<total_buts_length;i++){
//     console.log("sks",totalbuts[i].clientWidth)
//     totalwidth +=totalbuts[i].clientWidth;

// }
// let iterator = 0
// function leftmove(){
//     scroller[0].scrollBy({
//         top: 0,
//         left: -100,
//         behavior: 'smooth'
//       });
//       console.log(scroller[0].scrollWidth)
// }
// function rightmove(){
//     scroller[0].scrollBy({
//         top: 0,
//         left: 100,
//         behavior: 'smooth'
//       });
//       console.log(scroller[0].scrollWidth,scroller[0].scrollLeft)
// }



