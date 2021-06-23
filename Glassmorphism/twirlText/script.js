for (let i = 1; i <= 100; i++) {
  let box = document.createElement("div");
  box.classList.add("txtBox");
  box.innerHTML = `RAza <span>A</span>Ly`;
  document.querySelector(".text").appendChild(box);
}

document.body.addEventListener("mousemove", (e) => {
  gsap.to(".txtBox", {
    x: e.clientX,
    y: e.clientY,
    stagger: -0.01,
    rotate: (i, target) => {
      return (i + 1) * 0.2;
    },
  });
});
