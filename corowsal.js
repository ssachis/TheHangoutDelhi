
  let currentIndex = 0;
  const track = document.getElementById("experienceTrack");
  const cards = document.querySelectorAll(".experience-card");

  function getVisibleCount() {
    if (window.innerWidth < 576) return 1;
    if (window.innerWidth < 992) return 2;
    return 3;
  }

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 30; // includes margin
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  function slide(direction) {
    const visibleCount = getVisibleCount();
    const maxIndex = cards.length - visibleCount;

    currentIndex += direction;

    if (currentIndex < 0) currentIndex = maxIndex;
    if (currentIndex > maxIndex) currentIndex = 0;

    updateCarousel();
  }

  // Autoplay every 4 seconds
  //setInterval(() => slide(1), 10000);

  // Adjust on window resize
  window.addEventListener("resize", () => {
    updateCarousel();
  });

  window.addEventListener("load", updateCarousel);
