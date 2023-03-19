const progress_bar = document.getElementById('progress-bar');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const step = document.querySelectorAll('.step');

// This will be like an index, which will represent whicever step is active.
let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    // console.log(currentActive);
    // We need to bound the currentActive so if it get's to the end of steps, it stops.
    // 'Step' is a node-list, we can treat it like an array
    if (currentActive > step.length) {
        currentActive = step.length;
    }
    update();
})

previous.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
})

function update() {
    step.forEach((step, index) => {
        if (index < currentActive) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    })

    // Get all the steps with the class of 'active', because we want the line to turn blue as well.
    const actives = document.querySelectorAll('.active');

    // console.log(actives.length, step.length);
    // This gives us the current step with the class of 'active', and the total number of steps.
    // We need to find a percentage for the progress-bar's width property. We have a 'width:0%' in our CSS, we want to change that when we click any button.
    // console.log(actives.length / step.length);
    // Our goal is to get the numbers in percentage.
    // console.log((actives.length / step.length) * 100);
    // console.log((actives.length / step.length) * 100 + '%');
    // progress_bar.style.width = (actives.length / step.length) * 100 + '%';
    // The progress-bar goes past the number, because the above equation gives us a higher percentage, let's lower the percentage a little.
    progress_bar.style.width = ((actives.length - 1) / (step.length - 1)) * 100 + '%';

    //To toggle the disabled state in the buttons
    if (currentActive === 1) {
        previous.disabled = true;
    } else if (currentActive === step.length) {
        next.disabled = true;
    } else {
        previous.disabled = false;
        next.disabled = false;
    }
}

