let btn = document.getElementById('changbtn');
let changeStyleName = 'style2';

let change = name => {
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = name + '.css';
  document.head.appendChild(link);
};

btn.addEventListener('click', _ => {
  change(changeStyleName);
});
