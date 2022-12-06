const d = element => document.querySelector(element);
const da = element => document.querySelectorAll(element);

d('.btn-menu').addEventListener('click', () => {
  ocultaBar(da('.nav-item-name'));
  ocultaBar(da('.btn-menu span'));
  if (d('.btn-menu span').classList.contains('oculto')) {
    d('.menu-lateral').classList.add('menu-lateral-oculto');
  } else {
    d('.menu-lateral').classList.remove('menu-lateral-oculto');
  }
});

function ocultaBar(e) {
  e.forEach(item => {
    if (item.classList.contains('oculto')) {
      item.classList.remove('oculto');
    } else {
      item.classList.add('oculto');
    }
  });
}
