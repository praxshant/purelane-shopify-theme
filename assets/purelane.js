(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const reveal = (scope = document) => {
    const items = [...scope.querySelectorAll('.rv:not([data-purelane-reveal])')];
    items.forEach((item) => item.setAttribute('data-purelane-reveal', ''));
    if (reducedMotion || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('in'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
  };

  const initHero = (hero) => {
    if (hero.dataset.purelaneReady) return;
    hero.dataset.purelaneReady = 'true';
    const stage = hero.querySelector('[data-purelane-hero-stage]');
    const slides = stage ? [...stage.querySelectorAll('[data-purelane-hero-slide]')] : [];
    const dots = [...hero.querySelectorAll('[data-purelane-hero-dots] button')];
    const product = hero.querySelector('[data-purelane-hero-product]');
    let index = 0;
    let timer;
    let frame;

    const goTo = (nextIndex) => {
      if (!slides.length) return;
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => slide.classList.toggle('on', slideIndex === index));
      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === index;
        dot.classList.toggle('on', active);
        dot.setAttribute('aria-pressed', String(active));
      });
    };
    const stop = () => {
      window.clearInterval(timer);
      timer = undefined;
    };
    const play = () => {
      if (!reducedMotion && slides.length > 1 && !timer) timer = window.setInterval(() => goTo(index + 1), 3800);
    };

    dots.forEach((dot, dotIndex) => dot.addEventListener('click', () => {
      stop();
      goTo(dotIndex);
      play();
    }));

    if (stage) {
      stage.addEventListener('mouseenter', stop);
      stage.addEventListener('mouseleave', play);
      if ('IntersectionObserver' in window) {
        new IntersectionObserver((entries) => entries.forEach((entry) => (entry.isIntersecting ? play() : stop())), { threshold: 0.2 }).observe(stage);
      } else {
        play();
      }
    }

    if (!reducedMotion && product && window.matchMedia('(min-width: 1024px)').matches) {
      hero.addEventListener('pointermove', (event) => {
        const bounds = hero.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(() => {
          product.style.transform = `translate3d(${(x * -16).toFixed(2)}px, ${(y * -10).toFixed(2)}px, 0)`;
        });
      });
      hero.addEventListener('pointerleave', () => product.style.removeProperty('transform'));
    }
  };

  const initialise = (scope = document) => {
    reveal(scope);
    scope.querySelectorAll('[data-purelane-hero]').forEach(initHero);
  };

  initialise();
  document.addEventListener('shopify:section:load', (event) => initialise(event.target));
})();
