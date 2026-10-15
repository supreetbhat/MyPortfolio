(function () {
  // Select a project name to read what it does. Without script the names stay plain links.
  var names = document.querySelectorAll('.proj');
  var panels = document.querySelectorAll('.panel');

  function show(id) {
    panels.forEach(function (p) { p.hidden = p.getAttribute('data-for') !== id; });
    names.forEach(function (n) { n.classList.toggle('is-on', n.getAttribute('data-id') === id); });
  }

  names.forEach(function (n) {
    n.addEventListener('click', function (e) {
      e.preventDefault();
      show(n.getAttribute('data-id'));
    });
    n.addEventListener('mouseenter', function () { show(n.getAttribute('data-id')); });
    n.addEventListener('focus', function () { show(n.getAttribute('data-id')); });
  });

  // Staggered entrance, once per element.
  var items = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
  items.forEach(function (el, i) {
    el.style.setProperty('--d', ((i % 4) * 70) + 'ms');
    io.observe(el);
  });
})();
