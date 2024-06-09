
const container= document.querySelector('.container')
const todoListBox= document.querySelector('.todoListBox')
const ul_li=document.querySelector('ul li')


const images = [
    "url('images/bg1.jpg')",
    "url('images/bg2.webp')",
    "url('images/bg3.jpg')"
];

const todoColor = [
    "rgba(103, 50, 23,0.5)",
   "rgba(41, 74, 42,0.5)",
    "rgba(27, 102, 187,0.5)"
];

const taskColor=[
    "rgba(226, 152, 117, 0.7)",
    "rgba(11, 46, 94, 0.7)",
    " rgba(41, 74, 42, 0.7)"
]


const inputBox = document.getElementById('input-box');

const listContainer = document.getElementById('list-container');


container.style.backgroundImage=images[0]


function redImage(){
    container.style.backgroundImage=images[0];
    todoListBox.style.backgroundColor=todoColor[0];
    //ul_li.style.backgroundColor=taskColor[0];
}

function greenImage(){
    container.style.backgroundImage=images[1];
    todoListBox.style.backgroundColor=todoColor[1];
    //ul_li.style.backgroundColor=taskColor[1];

}
function blueImage(){
    container.style.backgroundImage=images[2];
    todoListBox.style.backgroundColor=todoColor[2];
   // ul_li.style.backgroundColor=taskColor[2];
}


/*function cycleImages(index) {
    let count = 0;
    const interval = setInterval(() => {
        count++;
        console.log(count + " seconds elapsed");
        if(count%7===0){ //every 60 sec pic changes
            //container.style.animation= "fadeIn 2s";
            //container.style.animationIterationCount= '1';
            //container.style.animationFillMode="forwards";
            //container.style.backgroundImage = images[index];
            index = (index + 1) % images.length;
            count=0
        } 
        
    }, 1000); // Runs every second (1000 milliseconds)
}

cycleImages(1);*/


function preloadImages() {
	for (let i = 0; i < images.length; i++) {
		const img = new Image();
		img.src = "../images/" + images[i];
	}
}

function addTask() {
    event.preventDefault();
    const inputBox = document.getElementById('input-box');
    const task = inputBox.value.trim(); // Trim to remove leading and trailing whitespace

    if (task === '') {
        alert('You must write something');
        return;
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    

    inputBox.value = ''; // Clear the input field
    saveData();
}


listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}


function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}

showTask();
