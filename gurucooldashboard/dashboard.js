let gridhandler = false;


function toolkitGrid(){
    let gridwrapper = document.getElementById("gridwrapper");
    let toolshamburgur_icon_cont_btn = document.getElementsByClassName("toolshamburgur_icon_cont_btn")[0];
    let fixedToolGrid = document.getElementsByClassName("fixedToolGrid")[0];
    if(!gridhandler){
        gridhandler = true
        gridwrapper.style.display = "block"
        toolshamburgur_icon_cont_btn.style.color = "black"
        toolshamburgur_icon_cont_btn.style.backgroundColor = "#F9CA32"
        fixedToolGrid.style.display = "block"
    }else{
        gridhandler = false
        gridwrapper.style.display = "none"
        toolshamburgur_icon_cont_btn.style.color = "#676563"
        toolshamburgur_icon_cont_btn.style.backgroundColor = "#EBEBE7"
        fixedToolGrid.style.display = "none"
    }

}

let searchHandler = false;

function removesearch1(){
    let smjid =  document.getElementById("smj1");
    let search_guru_btn = document.getElementById("search_guru_btnxpt");
    let searchbar = document.getElementById("search_guru1");
    searchHandler = false
    searchbar.style.width = "0px"
    searchbar.style.padding = "0px 0px"
    searchbar.style.marginRight = "0px"
    searchbar.style.opacity= "0"
    smjid.style.display="none"
    search_guru_btn.style.color = "#676563"
}
function removesearch2(){
    let smjid =  document.getElementById("smj2");
    let search_guru_btn = document.getElementById("search_guru_btnxpt2");
    let searchbar = document.getElementById("search_guru2");
    searchHandler = false
    searchbar.style.width = "0px"
    searchbar.style.marginRight = "0px"
    searchbar.style.padding = "0px 0px"
    searchbar.style.marginRight = "0px"
    searchbar.style.opacity= "0"
    smjid.style.display="none"
    search_guru_btn.style.color = "#676563"
}
function searchanim1(){
    let smjid =  document.getElementById("smj1")
    let search_guru_btn = document.getElementById("search_guru_btnxpt");
    let searchbar = document.getElementById("search_guru1");
    searchHandler = true
    
    
    if(document.documentElement.offsetWidth < 400){
        searchbar.style.width = "180px"
    }else{
        searchbar.style.width = "250px"
    }
    searchbar.style.padding = "5px 10px"
    searchbar.style.opacity= "1";
    searchbar.style.marginRight = "10px"
    // searchbar.style.marginLeft = "10px"
    smjid.style.display="flex";
    search_guru_btn.style.color = "black"
}

function searchanim2(){
    let smjid =  document.getElementById("smj2")
    let search_guru_btn = document.getElementById("search_guru_btnxpt2");
    let searchbar = document.getElementById("search_guru2");
    searchHandler = true
    searchbar.style.width = "250px"
    searchbar.style.padding = "5px 10px"
    searchbar.style.marginRight = "10px"
    searchbar.style.opacity= "1";
    smjid.style.display="flex";
    search_guru_btn.style.color = "black"
}


function funclicked(val){
   
    console.log(val.target.querySelector(".bottomxp"))
    val.target.querySelector(".bottomxp").classList.add("bottomxpactive")
    val.target.style.color = "black"
    // console.log(val.target.querySelector(".bottomxp").classList[1])
}


let totalbuts = document.querySelectorAll(".btn_cl_cnt");
let total_buts_length = totalbuts.length;
let totalwidth = 0;
let scroller = document.getElementsByClassName("clicked_feature_list_btns");

for(let i=0;i<total_buts_length;i++){
    console.log("sks",totalbuts[i].clientWidth)
    totalwidth +=totalbuts[i].clientWidth;

}

function clicked(element){
    console.log(element);
    let leftmoveGcl = document.getElementById("leftmove");
    let rightmoveGcl = document.getElementById("rightmove")
    let bottomxpList = document.querySelectorAll(".bottomxpactive")
    let gl_feature_btnList = document.querySelectorAll(".gl_feature_btn");
    let lenl =  gl_feature_btnList.length
    let barl = bottomxpList.length
    let totalscrollmax = scroller[0].scrollWidth - scroller[0].clientWidth ;
    let totaldiff = element.offsetLeft - totalscrollmax;
    console.log("inner-height",scroller[0])
    console.log(scroller[0].scrollLeft,"offsetleft" ,element.offsetLeft,"clientLeft",element.getClientRects());
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
    console.log("ss",scroller[0].scrollLeft , "totalscrollmax",totalscrollmax)
    if(scroller[0].scrollLeft == totalscrollmax){
        leftmoveGcl.style.opacity = "1"
        leftmoveGcl.style.width = "50px"
        rightmoveGcl.style.opacity = "0"
        rightmoveGcl.style.width = "0px"
    }else if(scroller[0].scrollLeft < 1){
        leftmoveGcl.style.opacity = "0"
        rightmoveGcl.style.opacity = "1"
        rightmoveGcl.style.width = "50px"
        leftmoveGcl.style.width = "0px"
    }else{
        leftmoveGcl.style.opacity = "1"
        rightmoveGcl.style.opacity = "1"
        rightmoveGcl.style.width = "50px"
        leftmoveGcl.style.width = "50px"
    }
    console.log("ss",scroller[0].scrollLeft , "totalscrollmax",totalscrollmax)

    for(let j=0 ; j<barl ; j++){
       bottomxpList[j].parentElement.style.color="#9D9792"
        bottomxpList[j].classList.remove("bottomxpactive")
        // gl_feature_btnList[j].style.color = "#9D9792";
    }
    element.querySelector(".bottomxp").classList.add("bottomxpactive")
    element.style.color = "black";

}



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
function rightmove(){
    console.log("sknf",scroller[0].clientWidth/2,scroller[0].clientWidth)
    scroller[0].scrollBy({
        top: 0,
        left: -scroller[0].clientWidth/2,
        behavior: 'smooth'
      });
    //   console.log(scroller[0].scrollWidth,scroller[0].scrollLeft)
}



