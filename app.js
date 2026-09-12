// Apply editable photo settings to both pages and the gallery.
document.querySelectorAll('[data-photo]').forEach(element => {
  const photo = window.PRISMA_IMAGES?.[element.dataset.photo];
  if (!photo) return;
  if (element.tagName === 'IMG') {
    element.src = photo.src;
    element.alt = photo.alt;
    element.style.objectPosition = photo.position || '50% 50%';
  } else {
    element.dataset.image = photo.src;
    element.dataset.caption = photo.caption || photo.alt;
  }
});
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.textContent = open ? 'Close ×' : 'Menu ☰'; });
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.textContent='Menu ☰'; }));
document.addEventListener('keydown',e=>{if(e.key==='Escape' && nav?.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu ☰';menu.focus();}});
document.querySelectorAll('[data-service]').forEach(a => a.addEventListener('click', () => { const select=document.querySelector('[name="service"]'); if(select) select.value=a.dataset.service; }));
const form = document.querySelector('#quote-form');
form?.addEventListener('submit', e => { e.preventDefault(); const data=new FormData(form); const body=`Hi Diego,\n\nI'd like a quote for ${data.get('service')}.\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || 'Not provided'}\nLocation: ${data.get('location')}\n\n${data.get('message')}\n\nThank you!`; window.location.href=`mailto:info@prisma.cleaning?subject=${encodeURIComponent('Cleaning quote — '+data.get('service'))}&body=${encodeURIComponent(body)}`; document.querySelector('#form-status').textContent='Your request is ready in your email app. Send it there to contact Diego. If no app opened, email info@prisma.cleaning or call (904) 469-9949.'; });
const dialog=document.querySelector('#gallery-dialog');
document.querySelectorAll('.project').forEach(button=>button.addEventListener('click',()=>{dialog.querySelector('img').src=button.dataset.image;dialog.querySelector('img').alt=button.dataset.caption;dialog.querySelector('p').textContent=button.dataset.caption;dialog.showModal();}));
document.querySelector('.close-dialog')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());
