const panels = document.querySelectorAll('.panel');
const nav = document.querySelector('#nav-ul');                // Navbar itself for click event listener
const navItems = document.querySelectorAll('nav ul li');      // Headings in the Navbar

let activeIndex = 0;                                          // Index of active panel
let prevIndex = null;                                         // Index of panel just moved from
let previousScrollTime = null;                                // Time of previous scroll to keep things from getting wild

const handleKey = key => {
  if(key === 'ArrowDown'){
    prevIndex = activeIndex;
    activeIndex < panels.length - 1 ? activeIndex++ : activeIndex = 0;
  }
  if(key === 'ArrowUp'){
    prevIndex = activeIndex;
    activeIndex !== 0 ? activeIndex-- : activeIndex = panels.length - 1;
  }
  jumpToSpot();
}

const jumpToSpot = () => {
  navItems[activeIndex].classList.add('active');
  if(prevIndex !== null) navItems[prevIndex].classList.remove('active');
  panels[activeIndex].scrollIntoView({behavior: 'smooth'})
}

// This function is _not_ lining up properly at this time
// handleKey and MouseWheelScroll should be integrated once the flaw in scrolling is resolved
const mouseWheelScroll = (e) => {
  e.preventDefault();
  if(!previousScrollTime || Date.now() - previousScrollTime > 200){
    prevIndex = activeIndex;
    if(e.deltaY > 0){
      activeIndex < panels.length - 1 ? activeIndex++ : activeIndex = 0;
    }
    else if(e.deltaY < 0){
      activeIndex !== 0 ? activeIndex-- : activeIndex = panels.length - 1;
    }
    previousScrollTime = Date.now();
  }
  jumpToSpot();
}

const navClick = (e) => {
  // Extracts text from clicked nav element
  const destinationID = e.target.textContent.toLowerCase();
  panels.forEach((panel, index) => {
    if(panel.id === destinationID){
      activeIndex = index;
    }
  })
  jumpToSpot();
}

document.addEventListener('keydown', (e) => handleKey(e.code));
window.addEventListener('wheel', mouseWheelScroll, {passive: false});
nav.addEventListener('click', navClick);

jumpToSpot();


console.log(`
┏┓   In this 
┃┃╱╲ house we 
┃╱╱╲╲ love
╱╱╭╮╲╲ & appreciate
╱▔▔▔▔▔▔▔▔▔▔╲
people who look 
at the console
 | ┏┳┓╭╮┏┳┓ |
▔▏┗┻┛┃┃┗┻┛▕▔
  `);
