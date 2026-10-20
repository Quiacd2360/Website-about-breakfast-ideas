const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const menuOverlay = document.querySelector("#menu-overlay");

if (menuOpenButton) {
  menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
  });
}

if (menuCloseButton) {
  menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });
}

if (menuOverlay) {
  menuOverlay.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });
}

const testimonialViewport = document.querySelector(".testimonials-list");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const testimonialDots = document.querySelectorAll(".testimonial-slider-dot");
const previousTestimonialButton = document.querySelector(
  ".testimonial-arrow-previous",
);
const nextTestimonialButton = document.querySelector(".testimonial-arrow-next");

if (
  testimonialViewport &&
  testimonialCards.length > 0 &&
  testimonialDots.length === testimonialCards.length
) {
  const scrollToTestimonial = (index) => {
    const card = testimonialCards[index];
    const left =
      card.offsetLeft -
      testimonialViewport.clientWidth / 2 +
      card.clientWidth / 2;

    testimonialViewport.scrollTo({ left, behavior: "smooth" });
  };

  const setActiveTestimonial = (index) => {
    testimonialDots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === index;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-pressed", String(isActive));
    });
  };

  testimonialDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      scrollToTestimonial(index);
      setActiveTestimonial(index);
    });
  });

  if (previousTestimonialButton) {
    previousTestimonialButton.addEventListener("click", () => {
      const activeIndex = Array.from(testimonialDots).findIndex((dot) =>
        dot.classList.contains("is-active"),
      );
      scrollToTestimonial(Math.max(0, activeIndex - 1));
    });
  }

  if (nextTestimonialButton) {
    nextTestimonialButton.addEventListener("click", () => {
      const activeIndex = Array.from(testimonialDots).findIndex((dot) =>
        dot.classList.contains("is-active"),
      );
      scrollToTestimonial(Math.min(testimonialCards.length - 1, activeIndex + 1));
    });
  }

  testimonialViewport.addEventListener("scroll", () => {
    const viewportCenter =
      testimonialViewport.scrollLeft + testimonialViewport.clientWidth / 2;
    const index = Array.from(testimonialCards).reduce(
      (closestIndex, card, cardIndex) => {
        const closestCard = testimonialCards[closestIndex];
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const closestCenter =
          closestCard.offsetLeft + closestCard.clientWidth / 2;
        return Math.abs(cardCenter - viewportCenter) <
          Math.abs(closestCenter - viewportCenter)
          ? cardIndex
          : closestIndex;
      },
      0,
    );
    setActiveTestimonial(index);
  });
}
