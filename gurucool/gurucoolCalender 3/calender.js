console.log(new Date());
var dt = new Date();
var TaskListActive = false;
let ListofTask = [
  {
    day: 1,
    year: 2021,
    month: 3,
    text: "Hi Israil !",
    startTime: "10:00 PM",
    edTime: "11:00 PM",
  },
  {
    day: 10,
    year: 2021,
    month: 3,
    text: "Hi Azhar !",
    startTime: "10:00 PM",
    edTime: "11:00 PM",
  },
];

// var TaskCall;

function taskList(task) {
  return (`<div class='wellDone' onclick='TaskDetail(this)'> <div class='text' >
  ${task.text}
  </div> 
    <div class='time'>
    ${task.startTime} - ${task.edTime}
    </div> </div>`);
}

function GoalList(task) {
  return (`<div class='wellDone' onclick='TaskDetail(this)'> <div class='text' >
  ${task.text}
  </div> 
    <div class='time'>
    ${task.startTime} - ${task.edTime}
    </div> </div>`);
}

let ListofAddedTask = [
  {
    day: 1,
    year: 2021,
    month: 3,
    imgUrl: "./img/green-chameleon-s9CC2SKySJM-unsplash.jpg",
  },
  {
    day: 10,
    year: 2021,
    month: 3,
    imgUrl: "./img/peter-fogden-z7oytXGI6VI-unsplash.jpg",
  },
];

function renderDate() {
  dt.setDate(1);
  var day = dt.getDay();
  var today = new Date();
  var endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
  day;
  var prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.getElementById("month").innerHTML = months[dt.getMonth()];
  console.log(dt.getFullYear());
  document.getElementById("date_str").innerHTML = dt.getFullYear();
  var cells = "";
  if(TaskListActive){
    for (x = day; x > 0; x--) {
        cells +=
          "<div class='prev_date normal'> <span>" +
          (prevDate - x + 1) +
          " </span></div>";
      }
      //   console.log(day);
      for (i = 1; i <= endDate; i++) {
        let dtm = dt.getMonth();
        let dtfy = dt.getFullYear();
        if (i == today.getDate() && dtm == today.getMonth()) {
          //   console.log("--sn", dtm);
          let Handler = false;
          let CurrentTodaySelect;
          for (let j = 0; j < ListofTask.length; j++) {
            let select = ListofTask[j];
            if (select.day == i && select.month == dtm && select.year == dtfy) {
              Handler = true;
              CurrentTodaySelect = select;
            }
          }
          if (Handler) {
            cells +=
              "<div class='normal today' > <div class='purple'>" +
              i +
              "</div><div class='list'>" +
              taskList(CurrentTodaySelect)
              + " </div> </div>";
          } else {
            cells += "<div class='normal today' > <div>" + i + "</div></div>";
          }
        } else {
          let elseHandler = false;
          let CurrentSelect;
          for (let j = 0; j < ListofTask.length; j++) {
            let select = ListofTask[j];
            if (select.day == i && select.month == dtm && select.year == dtfy) {
              elseHandler = true;
              CurrentSelect = select;
            }
          }
          if (elseHandler) {
            cells +=
              "<div class='normal'> <div class='purple'>" +
              i +
              "</div> <div class='list'>" +
              taskList(CurrentSelect) +
              "  </div> </div>";
          } else {
            cells +=
              "<div class='normal'><div>" +
              i +
              "</div> <button class='addGoal'> <i class='fas fa-plus'></i> </button> </div>";
          }
        }
      }
  }else{
    for (x = day; x > 0; x--) {
        cells +=
          "<div class='prev_date normal'> <span>" +
          (prevDate - x + 1) +
          " </span></div>";
      }
      //   console.log(day);
      for (i = 1; i <= endDate; i++) {
        let dtm = dt.getMonth();
        let dtfy = dt.getFullYear();
        if (i == today.getDate() && dtm == today.getMonth()) {
          //   console.log("--sn", dtm);
          let Handler = false;
          let CurrentTodaySelect;
          for (let j = 0; j < ListofAddedTask.length; j++) {
            let select = ListofAddedTask[j];
            if (select.day == i && select.month == dtm && select.year == dtfy) {
              Handler = true;
              CurrentTodaySelect = select;
            }
          }
          if (Handler) {
            cells +=
              "<div class='normal today' > <div class='purple'>" +
              i +
              "</div><div onclick='editViewButtos(this)'> <img " +
              "src=" +
              CurrentTodaySelect.imgUrl +
              " > </div> </div>";
          } else {
            cells += "<div class='normal today' > <div>" + i + "</div></div>";
          }
        } else {
          let elseHandler = false;
          let CurrentSelect;
          for (let j = 0; j < ListofAddedTask.length; j++) {
            let select = ListofAddedTask[j];
            if (select.day == i && select.month == dtm && select.year == dtfy) {
              elseHandler = true;
              CurrentSelect = select;
            }
          }
          if (elseHandler) {
            cells +=
              "<div class='normal'> <div class='purple'>" +
              i +
              "</div> <div onclick='editViewButtos(this)'> <img " +
              "src=" +
              CurrentSelect.imgUrl +
              " > </div> </div>";
          } else {
            cells +=
              "<div class='normal'><div>" +
              i +
              "</div> <button class='addGoal'> <i class='fas fa-plus'></i> </button> </div>";
          }
        }
      }
  }
  


  document.getElementsByClassName("days")[0].innerHTML = cells;
}

function moveDate(para) {
  if (para == "prev") {
    dt.setMonth(dt.getMonth() - 1);
  } else if (para == "next") {
    dt.setMonth(dt.getMonth() + 1);
  }
  renderDate();
}

let ToggleHandler = false;


let TaskDetailHandler = false;

function TaskDetail(ele){
    let TaskBox = document.querySelector(".popup-box");
    let taskWrap = document.getElementById("taskWrap")
    if(!TaskDetailHandler){
       TaskDetailHandler = true;
       TaskBox.style.display = "unset";
       taskWrap.classList.add("active")
    }else{
        TaskDetailHandler = false;
        TaskBox.style.display = "none";
        taskWrap.classList.remove("active")
    }

}

function ToggleSideBar(element) {
  let toggleWrapper = document.getElementById("toggleWrapper");
  let leftContainer = document.getElementsByClassName("Guru_profile_container");
  let rightContainer = document.getElementsByClassName("mentor_dash");
  let options = document.querySelectorAll(".options");
  let names = document.querySelectorAll(".options .name");
  let create = document.getElementsByClassName("create");
  let createbtn = document.querySelector(".createbutton span");

  if (document.documentElement.offsetWidth > 1100) {
    if (!ToggleHandler) {
      ToggleHandler = true;
      leftContainer[0].style.width = "60px";
      rightContainer[0].style.width = "calc(100% - 75px)";
      rightContainer[0].style.left = "65px";
      createbtn.style.display = "none";
      create[0].style.flexDirection = "column-reverse";
      element.style.marginBottom = "15px";
      for (let i = 0; i < names.length; i++) {
        names[i].style.display = "none";
      }
    } else {
      ToggleHandler = false;
      leftContainer[0].style.width = "280px";
      rightContainer[0].style.width = "calc(100% - 300px)";
      rightContainer[0].style.left = "290px";
      createbtn.style.display = "unset";
      element.style.marginBottom = "0px";
      create[0].style.flexDirection = "row-reverse";
      for (let i = 0; i < names.length; i++) {
        names[i].style.display = "block";
      }
    }
  } else {
    if (ToggleHandler) {
      ToggleHandler = false;
      leftContainer[0].style.width = "60px";
      rightContainer[0].style.width = "calc(100% - 75px)";
      rightContainer[0].style.left = "65px";
      createbtn.style.display = "none";
      create[0].style.flexDirection = "column-reverse";
      element.style.marginBottom = "15px";
      toggleWrapper.classList.remove("active");
      for (let i = 0; i < names.length; i++) {
        names[i].style.display = "none";
        names[i].style.marginLeft = "uset";
        options[i].style.justifyContent = "center";
      }
    } else {
      ToggleHandler = true;
      leftContainer[0].style.width = "280px";
      rightContainer[0].style.width = "calc(100% - 75px)";
      rightContainer[0].style.left = "65px";
      createbtn.style.display = "unset";
      element.style.marginBottom = "0px";
      create[0].style.flexDirection = "row-reverse";
      toggleWrapper.classList.add("active");
      for (let i = 0; i < names.length; i++) {
        names[i].style.display = "block";
        names[i].style.marginLeft = "10px";
        options[i].style.justifyContent = "flex-start";
      }
    }
  }
}

var getAttribute = "popupbox-3";
var getContainer;
function CreateForGettingAttribute(element) {
  getAttribute = element.getAttribute("createType");
  let removeBg = document.querySelector(".options.active")
  getContainer = document.getElementsByClassName(`${getAttribute}`);
  console.log(getContainer[0]);
  
  if(element.classList.length <= 1){
      removeBg.classList.remove("active")
      element.classList.add("active")
  }

  if(getAttribute == "popup-box-2"){
    TaskListActive = true;
    renderDate();
  }
  if(getAttribute == "popupbox-3"){
    TaskListActive = false;
    renderDate();
  }
}
let createHandler = false;

let createGoalContainer = document.querySelector(".popupbox-3");

function CreateFunctionality(ele) {
  let createWrapper = document.getElementById("createWrapper");
  getContainer = document.getElementsByClassName(`${getAttribute}`);
  if (!createHandler) {
    createHandler = true;
    
    
    if(getContainer[0] === createGoalContainer){
      getContainer[0].style.height = "max-content";
    }
    else{
      getContainer[0].style.display = "block";
    }

    createWrapper.classList.add("active");
    
  } else {
    createHandler = false;
       
    if(getContainer[0] === createGoalContainer){
      getContainer[0].style.height = "0px";
    }
    else{
      getContainer[0].style.display = "none";
    }
    createWrapper.classList.remove("active");
  }
}




let EditViewHandler = false;
function editViewButtos(ele){
  let editViewWrapper = document.getElementById("editViewWrapper");
  let editViewButtons = document.getElementById("editViewButtons")
  if(!EditViewHandler){
    EditViewHandler = true;
    editViewWrapper.classList.add("active");
    editViewButtons.style.display="flex";
  }else{
    EditViewHandler = false;
    editViewWrapper.classList.remove("active");
    editViewButtons.style.display="none";
  }

}

let EditHandler = false;
function editViewButtonsShow(ele){
  console.log("dnjdjjn")
    let editWrapper = document.getElementById("editWrapper");
    let editViewWrapper = document.getElementById("editViewWrapper");
    let EditcardContainer = document.getElementById("EditcardContainer");
   
    if(!EditHandler){
      EditHandler = true;
      EditViewHandler = false;
        editWrapper.classList.add("active")
        EditcardContainer.classList.add("active");
        editViewButtons.style.display="none";
        editViewWrapper.classList.remove("active");
      }else{
        EditHandler = false;
        editWrapper.classList.remove("active")
        EditcardContainer.classList.remove("active");
        editViewWrapper.classList.remove("active");
       
      }
}
let createGoalHandler = false;
function createGoalContainerView(){
  let createGoalWrapper = document.getElementById("createGoalWrapper");
  let createGoalContainer = document.querySelector(".Create-cardContainer");
  let createWrapper = document.getElementById("createWrapper");
  let createGoalListContainer = document.querySelector(".popupbox-3");

  if(!createGoalHandler){
     createGoalHandler = true
     createHandler = false;
      createGoalWrapper.classList.add("active")
      createGoalContainer.classList.add("active");
      createWrapper.classList.remove("active");
      createGoalListContainer.style.height = "0px";
      //editViewWrapper.classList.remove("active");
    }else{
      createGoalHandler = false;
      createHandler = false;
      createGoalWrapper.classList.remove("active")
      createGoalContainer.classList.remove("active");
      createWrapper.classList.remove("active");
      createGoalListContainer.style.height = "0px";
      //editViewWrapper.classList.remove("active");
     
    }

}