const panels = document.getElementsByClassName('panel');
let activeIndex = 0;

handleKey = key => {
  if(key === 'ArrowDown'){
    activeIndex < panels.length - 1 ? activeIndex++ : activeIndex = 0;
  }
  if(key === 'ArrowUp'){
    activeIndex !== 0 ? activeIndex-- : activeIndex = panels.length - 1;
  }
  panels[activeIndex].scrollIntoView({behavior: 'smooth'});
}

document.addEventListener('keydown', (e) => handleKey(e.code));
panels[0].scrollIntoView();


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
