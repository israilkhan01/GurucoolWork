

function DailyButtons(ele){
    let activebut = document.querySelector(".Create-selectbox button.active")

    if(ele.classList[0] != "active"){
        ele.classList.add("active");
        activebut.classList.remove("active")
    }
}
