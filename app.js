function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('live-time').innerHTML = today.toDateString().toUpperCase() + " " + h + ":" + m + ":" + s;
  t = setTimeout(function () {
    startTime()
  }, 500);
}
startTime();

const dropDownEvent = document.getElementById("drop-down-event");
const dropDown = document.getElementById("drop-down");
const dropDownMini = document.getElementById("drop-down-mini");
const sidebar = document.getElementById("sidebar");

function addEventListeners(){
  dropDownEvent.addEventListener("click", toggleDrop);
  dropDownMini.addEventListener("click", toggleDropMini);
}


function toggleDrop(){
  dropDown.classList.toggle("show");
}

function toggleDropMini(e) {
  sidebar.classList.toggle("show");
}
addEventListeners();


var modal = document.getElementById('modalbox');
var btn = document.getElementById('btn');
var btnClose = document.getElementById('btnClose');


var modalParam, btnParam, btnCloseParam;

function showModel(modalParam, btnParam, btnCloseParam){

btnParam.onclick = function () {
  modalParam.style.display = "block";
}

btnCloseParam.onclick = function () {
  modalParam.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modalParam) {
    modalParam.style.display = 'none';
    console.log(event.target);
  }
}
}




var editModal = document.getElementById("edit-modalbox");
var editBtn = document.querySelectorAll(".btn-success");
var editBtnClose = document.getElementById('edit-btnClose');

var editModalParam, editBtnParam, editBtnCloseParam;

function showEditModel(editModalParam, editBtnParam, editBtnCloseParam){

editBtnParam.onclick = function (e) {
  editModalParam.style.display = "block";
  console.log(e.target.getAttribute("data"));
  const dataId = e.target.getAttribute("data");
  document.getElementById("dataId").innerHTML = "Id: " + dataId;
}

editBtnCloseParam.onclick = function () {
  editModalParam.style.display = "none";
}

// window.onclick = function (event) {
//   if (event.target == editModalParam) {
//     editModalParam.style.display = 'none';
//     console.log(event.target);
//   }
// }
}
showModel(modal, btn, btnClose);

editBtn.forEach(function (btn) {
  showEditModel(editModal, btn, editBtnClose);
})



 
