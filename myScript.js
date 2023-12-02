gsap.registerPlugin(ScrollTrigger) 
gsap.registerPlugin(TextPlugin)

// JS and jquery
$(document).ready(function() {
  $("#flip").click(function() {
    $("#panel-down").slideToggle("slow");
  });
});

function random() {
  var y = Math.floor(Math.random() * 100);
  return y;
}

var numberofStars = 210;
var choice = $("svg");

for (var i = 1; i <= numberofStars; i++) {
  var element = '<svg><circle class="star" cx="0.1" cy="2" r="0.21" fill="yellow" opacity="1"></svg>';
  choice.append(element);
}

var x = document.getElementsByClassName("star");

for (i = 0; i < x.length; i++) {
  x[i].setAttribute("cx", random());
}

for (i = 0; i < x.length; i++) {
  x[i].setAttribute("cy", (random() / 5));

}
for (i = 0; i < x.length; i++) {
  x[i].setAttribute("opacity", (random() / 100));

}
for (i = 0; i < x.length; i++) {
  x[i].setAttribute("r", (random() / 320));

}

// GSAP animations section
gsap.to("#target-one", {
  scrollTrigger: {
    trigger: "#target-one",
    toggleActions: "restart pause reverse pause"
  },
  duration: 1,
  ease: "power3.inOut",
  rotation: 360,
  delay: 3,
  y: 1,
  x: 2,
  opacity: 0.3,
});
gsap.to(".poetry-facts", {
  scrollTrigger: {
    trigger: ".poetry-facts",
    toggleActions: "restart pause reverse pause"
  },
  duration: 2,
  delay: 1,
  ease: "none",
  translateX: -10,
  scaleX: 1.03,
});

gsap.to(".paragraph", {
  duration: 10,
  text: "literary work in which the expression of feelings and ideas is given intensity by the use of distinctive style and rhythm; poems collectively or as a genre of literature",
  ease: "none",
});

gsap.to(".star", {
  ease: "none",
  duration: 1,
  repeat: Infinity,
  scale: 0.9,
});

gsap.to(".poetry-text", {
  ease: "none",
  duration: 5,
  opacity: 1,
});

gsap.to(".shooting-star", {
  scrollTrigger: {
    trigger: ".shooting-star",
    toggleActions: "restart none none none"
  },
  duration: 2,
  ease: "expo.in",
  translateX: 95,
  y: -40,
  opacity: 0.2,
  delay: 2,
});

gsap.to(".moon", {
  x: 0.1,
  y: 0.1,
  ease: "none",
  duration: 0.3,
  repeat: Infinity,
});

gsap.to("#poems", {
  scrollTrigger: {
    trigger: "#poem",
    toggleActions: "restart none none none"
  },
  ease: "none",
  duration: 3,
  opacity: 1,
});