// Función para detectar y saltar anuncios
const skipAds = () => {
    const skipButton = document.querySelector(".ytp-ad-skip-button");
    if (skipButton) {
      skipButton.click();
      console.log("Ad skipped!");
    }
  };
  
  // Observar cambios en el DOM para detectar anuncios dinámicamente
  const observer = new MutationObserver(() => {
    skipAds();
  });
  
  // Iniciar el observador en el contenedor principal de YouTube
  const player = document.getElementById("movie_player");
  if (player) {
    observer.observe(player, { childList: true, subtree: true });
  }
  