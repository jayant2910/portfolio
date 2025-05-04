particlesJS("particles-js", {
  particles: {
    number: { value: 100 },
    color: { value: "#00bfff" },
    shape: { type: "circle" },
    opacity: { value: 0.3, random: true },
    size: { value: 3, random: true },
    move: {
      enable: true,
      speed: 1,
      direction: "none"
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" }
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: { opacity: 0.5 }
      }
    }
  },
  retina_detect: true
});

