const panels = document.getElementsByClassName('panel');
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

const mouseWheelScroll = (e) => {
  if(!previousScrollTime || Date.now() - previousScrollTime > 200){
    if(e.deltaY > 0){
      console.log('Going down!')
      activeIndex < panels.length - 1 ? activeIndex++ : activeIndex = 0;
    }
    else if(e.deltaY < 0){
      console.log('Going up!')
      activeIndex !== 0 ? activeIndex-- : activeIndex = panels.length - 1;
    }
    previousScrollTime = Date.now();
  }
  jumpToSpot();
}

document.addEventListener('keydown', (e) => handleKey(e.code));
window.addEventListener('wheel', mouseWheelScroll)

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
