const totalSteps = 3;
const fraction = 100/totalSteps;
let currentWidth = 0;
const steps = document.querySelectorAll('.step');
const progress = document.querySelector('.porgress-bar');
const threeStep = document.querySelector('.step');
const pTag = document.querySelector('.paragraph') 
steps.forEach((step, index) => {
  step.addEventListener('click', () => {
    steps.forEach((step) => {
      step.classList.remove('active');
    });
    step.classList.add('active');
    currentWidth = (index + 1) * fraction;
    progress.style.width = currentWidth + '%';
    steps.forEach((step, index) => {
      step.querySelector('.step-number').textContent = index + 1;
      if(progress.style.width === '100%'){
        pTag.style.display = 'block'
      }
      else{
        progress.style.width === '0%'
        pTag.style.display = 'none'
      }
    });
  });
});




