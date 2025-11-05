document.addEventListener("DOMContentLoaded", function() {
  const envelopeContainer = document.getElementById('envelopeContainer');

  // 1) Na starcie: koperta zamknięta i bez animacji
  envelopeContainer.classList.add('close', 'no-anim');

  // 2) Po krótkiej chwili (np. 50 ms) usuwamy no-anim,
  //    aby kliknięcia normalnie wywoływały animacje
  setTimeout(() => {
    envelopeContainer.classList.remove('no-anim');
  }, 50);

  // 3) Obsługa kliknięcia
  envelopeContainer.addEventListener('click', () => {
    // Jeśli jest otwarta -> zamknij
    if (envelopeContainer.classList.contains('open')) {
      envelopeContainer.classList.remove('open');
      // Dodajemy .close + .close-animate, żeby uruchomić animację zamykania
      envelopeContainer.classList.add('close', 'close-animate');

      // Gdy animacja się skończy (np. 800 ms), usuwamy .close-animate
      setTimeout(() => {
        envelopeContainer.classList.remove('close-animate');
      }, 800);

    } else {
      // Jeśli jest zamknięta -> otwórz
      // Usuwamy .close i .close-animate (gdyby było)
      envelopeContainer.classList.remove('close', 'close-animate');
      // Dodajemy .open, żeby uruchomić animację otwierania
      envelopeContainer.classList.add('open');
    }
  });
});
