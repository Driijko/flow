<!-- SCRIPTS ///////////////////////////////// -->
<script>
  // STATE ----------------------------------
  let src;
  if (window.innerWidth < 800) {
    src = "./assets/logos/dreeko-logo448x143.png";
  } else {
    src = "./assets/logos/dreeko-logo768x246.png";
  };
</script>

<!-- MARKUP ////////////////////////////////////// -->
<section class="dreeko-section">
  <h3>
    <img src={src} alt="Dreeko" />
  </h3>
  <p>
    Dreeko is a web developer, designer, animator and musician living in Toronto, Canada.
  </p>
  <p>
    To see more of their work in web development, check out this <a href="https://driijko.github.io/dreeko-dev" rel="noopener noreferrer" target="_blank">portfolio website</a>.
  </p>
  <p>
    To check out their music, visit <a href="https://driijko.github.io/tracks" rel="noopener noreferrer" target="_blank">Tracks by Dreeko</a>.
  </p>
</section>