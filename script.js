let radioBtns = ['option1', 'option2', 'option3'];

let filter1 = document.getElementById('filter1');
let filter2 = document.getElementById('filter2');
let filter3 = document.getElementById('filter3');

let prevActiveBtn = 'option2';

filter2.style.display = 'flex';

radioBtns.forEach((element) => {
  let radioBtn = document.getElementById(element);

  radioBtn.addEventListener('click', handleClick);
});

function handleClick() {
  //if user click on same button then no need to execute the rest of the code
  if (this.id === prevActiveBtn) {
    return;
  }

  // removing the active class from previously selected radio button

  removeActiveClass();

  //add filter in the options

  addFilters(this.id);

  //adding the active class to selected radio button

  addActiveClass(this.id);

  prevActiveBtn = this.id;
}

function removeActiveClass() {
  let activeBtn = document.querySelector('label.active_option_container');
  activeBtn.classList.remove('active_option_container');
}
function addActiveClass(elementId) {
  let labelSelected = document.querySelector('label[for=' + elementId + ']');
  labelSelected.classList.add('active_option_container');
}

function addFilters(elementId) {
  if (elementId === 'option1') {
    filter1.style.display = 'flex';
    filter2.style.display = 'none';
    filter3.style.display = 'none';
  } else if (elementId === 'option2') {
    filter2.style.display = 'flex';
    filter1.style.display = 'none';
    filter3.style.display = 'none';
  } else {
    filter3.style.display = 'flex';
    filter1.style.display = 'none';
    filter2.style.display = 'none';
  }
}
