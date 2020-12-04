const panels = document.querySelectorAll('.panel');
const nav = document.querySelector('#nav-ul');

let activeIndex = 0;
let previousScrollTime = null;

const handleKey = key => {
  if(key === 'ArrowDown'){
    activeIndex < panels.length - 1 ? activeIndex++ : activeIndex = 0;
  }
  if(key === 'ArrowUp'){
    activeIndex !== 0 ? activeIndex-- : activeIndex = panels.length - 1;
  }
  jumpToSpot();
}

const jumpToSpot = () => {
  panels[activeIndex].scrollIntoView({behavior: 'smooth'});
}

// This function is _not_ lining up properly at this time
// handleKey and MouseWheelScroll should be integrated once the flaw in scrolling is resolved
const mouseWheelScroll = (e) => {
  if(!previousScrollTime || Date.now() - previousScrollTime > 200){
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
window.addEventListener('wheel', mouseWheelScroll);
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
