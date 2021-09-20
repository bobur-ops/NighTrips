const pickbtn1 = document.getElementById("pickbtn1");
const pickbtn2 = document.getElementById("pickbtn2");
const pickbtn3 = document.getElementById("pickbtn3");
const pickbtn4 = document.getElementById("pickbtn4");

const selectBar = document.getElementById("selectBar");

function active1() {
	selectBar.classList.remove("active-2");
	selectBar.classList.remove("active-3");
	selectBar.classList.remove("active-4");
	selectBar.classList.add("active-1");
}
function active2() {
	selectBar.classList.remove("active-1");
	selectBar.classList.remove("active-3");
	selectBar.classList.remove("active-4");
	selectBar.classList.add("active-2");
}
function active3() {
	selectBar.classList.remove("active-2");
	selectBar.classList.remove("active-1");
	selectBar.classList.remove("active-4");
	selectBar.classList.add("active-3");
}
function active4() {
	selectBar.classList.remove("active-2");
	selectBar.classList.remove("active-3");
	selectBar.classList.remove("active-1");
	selectBar.classList.add("active-4");
}