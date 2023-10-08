function initHamburger(){
  const hamburgerIcon = document.querySelector('.js_hamburger_icon');
  const iconSpans = document.querySelectorAll('.js_hamburger_icon span');

  function activeHamburger() {
    document.querySelector('.js_hamburger_list ul').classList.toggle('ativo');

    iconSpans.forEach((item) => {
      item.classList.toggle('ativo');
    });


  }
  hamburgerIcon.addEventListener('click', activeHamburger);
}

initHamburger();

// Get all the project items
const projectItems = document.querySelectorAll('.kader2 .rij1');

// Add click event listeners to the filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
  btn.addEventListener('click', handleFilterClick);
});

function handleFilterClick(e) {
  const filter = e.target.dataset.filter;

  // Loop through all the project items and show/hide them based on the selected filter
  projectItems.forEach(item => {
    if (filter === 'all' || item.classList.contains(filter)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  // Remove active class from all buttons and add it to the clicked button
  filterButtons.forEach(btn => {
    btn.classList.remove('active');
  });
  e.target.classList.add('active');
}
