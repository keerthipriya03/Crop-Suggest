let list = document.querySelector('.container .context');
let items = document.querySelectorAll('.container .context img');  // Select all images
let dots = document.querySelectorAll('.container .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1; // Total number of images (based on the number of img elements)

// Function to reload and display the active image
function reloadSlider() {
    // Set the context width dynamically to accommodate all images
    list.style.width = `${items.length * 100}%`;  // Ensure context width fits the images (100% per image)
    
    // Slide the container to show the active image using translateX
    list.style.transform = `translateX(-${(active * 100) / items.length}%)`;  // Move the container to show the active image

    // Update the active dot
    let lastActiveDot = document.querySelector('.container .dots li.active');
    if (lastActiveDot) lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}

// "Next" button functionality
next.onclick = function() {
    if (active + 1 > lengthItems) {
        active = 0;  // Go back to the first image if we reach the last image
    } else {
        active = active + 1;  // Move to the next image
    }
    reloadSlider();
}

// "Previous" button functionality
prev.onclick = function() {
    if (active - 1 < 0) {
        active = lengthItems;  // Go to the last image if we are at the first one
    } else {
        active = active - 1;  // Move to the previous image
    }
    reloadSlider();
}

// Dots functionality (clicking a dot directly changes the active image)
dots.forEach((li, key) => {
    li.addEventListener('click', function() {
        active = key;  // Set active index to clicked dot
        reloadSlider();
    });
})

// Initialize by showing the first image
reloadSlider();
