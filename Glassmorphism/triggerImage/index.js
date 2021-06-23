const imgBx = gsap.utils.toArray(".imgBx");
imgBx.forEach((img, i) => {
  ScrollTrigger.create({
    trigger: img,
    toggleClass: "active",
    start: "top 80%",
    end: "top 10%",
    // markers: true
  });
});