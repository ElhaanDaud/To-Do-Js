
const images = [
    "url('images/bg1.jpg')",
    "url('images/bg2.webp')",
    "url('images/bg3.jpg')"
];

document.body.style.backgroundImage = images[0];


function cycleImages(index) {
    let count = 0;
    const interval = setInterval(() => {
        count++;
        console.log(count + " seconds elapsed");
        if(count%3===0){
            document.body.style.backgroundImage = images[index];
            index = (index + 1) % images.length;
        }
        
    }, 1000); // Runs every second (1000 milliseconds)
}

cycleImages(1);
