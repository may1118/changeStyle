let pBtn = document.querySelector('p');
pBtn.addEventListener('click', el => {
  let theme = el.target.dataset.theme;
  switchTheme(theme);
});
function switchTheme(t) {
  // 利用jquery可以比较好获取到link标签中含有title属性链接
  $('link[title]').each(function() {
    this.disabled = true;
    this.disabled = this.title != t;
  });
  return false;
}
