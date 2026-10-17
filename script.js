const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
menuButton?.addEventListener('click',()=>{
  const expanded=menuButton.getAttribute('aria-expanded')==='true';
  menuButton.setAttribute('aria-expanded',String(!expanded));
  nav.classList.toggle('open',!expanded);
});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}));
document.querySelector('#text-size')?.addEventListener('click',()=>{
  document.body.classList.toggle('large-text');
});
document.querySelector('#contrast')?.addEventListener('click',event=>{
  const button=event.currentTarget;
  const enabled=document.body.classList.toggle('high-contrast');
  button.setAttribute('aria-pressed',String(enabled));
});
