
const container= document.querySelector('.container')
const images = [
    "url('images/bg1.jpg')",
    "url('images/bg2.webp')",
    "url('images/bg3.jpg')"
];

const searchBox = document.querySelector('.add input');
const searchButton = document.querySelector('.addBtn');



container.style.backgroundImage=images[0]

function cycleImages(index) {
    let count = 0;
    const interval = setInterval(() => {
        count++;
        console.log(count + " seconds elapsed");
        if(count%7===0){ //every 60 sec pic changes
            container.style.animation= "fadeIn 2s";
            container.style.animationIterationCount= '1';
            container.style.animationFillMode="forwards";
            container.style.backgroundImage = images[index];
            index = (index + 1) % images.length;
            count=0
        } 
        
    }, 1000); // Runs every second (1000 milliseconds)
}

//cycleImages(1);

function addTodo(task) {
    const todoList = document.getElementById('todoList');
    
    // Create a new todo item (div element)
    const todoItem = document.createElement('button');
    todoItem.classList.add('todo-items');
    todoItem.textContent = task ; 
    
    // Append the todo item to the todo list
    todoList.appendChild(todoItem);
}




searchButton.addEventListener("click", ()=>{
    addTodo(searchBox.value);
})

