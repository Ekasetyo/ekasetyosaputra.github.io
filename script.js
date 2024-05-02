const Menus = document.querySelector('#Menus');
const navMenu = document.querySelector('#Nav-Menu');

Menus.addEventListener('click', function() {
    Menus.classList.toggle('Menus-active');

    const spans = Menus.querySelectorAll('span');
    spans.forEach(span => {
        if (span.classList.contains('close')) {
            span.style.transform = 'none';
            span.style.opacity = '1';
        } else {
            if (span === spans[0]) {
                span.style.transform = 'rotate(45deg) translate(5px, 4px)';
            } else if (span === spans[2]) {
                span.style.transform = 'rotate(-45deg) translate(4px, -4px)';
            } else {
                span.style.opacity = '0';
            }
        }
        span.classList.toggle('close');
    });

    navMenu.classList.toggle('hidden');

});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
    });
});
  
