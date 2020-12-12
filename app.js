const panels = document.querySelectorAll('.panel');
const nav = document.querySelector('#nav-ul');                // Navbar itself for click event listener
const navItems = document.querySelectorAll('nav ul li');      // Headings in the Navbar

let activeIndex = 0;                                          // Index of active panel
let prevIndex = null;                                         // Index of panel just moved from
let previousScrollTime = null;                                // Time of previous scroll to keep things from getting wild

const handleKey = key => {
  if(key === 'ArrowDown'){
    prevIndex = activeIndex;
    changePanel('down');
  }
  if(key === 'ArrowUp'){
    prevIndex = activeIndex;
    changePanel('up');
  }
  jumpToSpot();
}

const jumpToSpot = () => {
  navItems[activeIndex].classList.add('active');
  if(prevIndex !== null) navItems[prevIndex].classList.remove('active');
  panels[activeIndex].scrollIntoView({behavior: 'smooth'})
}

const mouseWheelScroll = (e) => {
  e.preventDefault();
  if(!previousScrollTime || Date.now() - previousScrollTime > 200){
    prevIndex = activeIndex;
    if(e.deltaY > 0){
      changePanel('down');
    }
    else if(e.deltaY < 0){
      changePanel('up');
    }
    previousScrollTime = Date.now();
  }
  jumpToSpot();
}

const changePanel = (direction) => {
  if(direction === 'down'){
    activeIndex < panels.length - 1 ? activeIndex++ : activeIndex = 0;
  }
  else{
    activeIndex !== 0 ? activeIndex-- : activeIndex = panels.length - 1;
  }
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
