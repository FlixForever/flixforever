// moving background mouse effect

$(document).ready(function () {
  var documentHeight = $(document).height();
  var $magic = $(".magic"),
    magicWHalfWidth = $magic.width() / 2;
  magicWHalfHeight = $magic.height() / 2;
  $(document).on("mousemove", function (e) {
    if (e.pageY + magicWHalfHeight < documentHeight) {
      // fixed error at the bottom of page
      $magic.css({
        left: e.pageX - magicWHalfWidth,
        top: e.pageY - magicWHalfHeight,
      });
    }
  });
});

// scroll up btn

const scrollUpBtn = document.querySelector("footer .content .scroll-up");

scrollUpBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// bar

const open = document.getElementById("open");
const close = document.getElementById("close");
const nav = document.querySelector("header .header ul");

open.addEventListener("click", () => {
  open.classList.add("close");
  close.classList.add("show");
  nav.classList.add("show");
});

close.addEventListener("click", () => {
  close.classList.remove("show");
  open.classList.remove("close");
  nav.classList.remove("show");
});
var timeline = new TimelineMax({
  onComplete: function () {
    this.restart();
  },
});
timeline.add(TweenLite.to("#left", 0.4, { scaleY: 0, delay: 1 }));
timeline.add(
  TweenLite.to("#left", 0.01, {
    transformOrigin: "bottom",
    y: "100%",
    opacity: 0,
  })
);
timeline.add(
  TweenLite.to("#center", 0.4, {
    attr: {
      d: "M297.846,364.016l-59,-5.113l0,0.727c19.69,0.965 39.356,2.657 59,5l0,-0.614Z",
    },
  })
);
timeline.add(
  TweenLite.to("#center", 0.01, {
    opacity: 0,
    attr: {
      d: "M195.846,69.63l-59,0l0.256,0.6c14.559,-0.109 39.379,0.153 58.942,-0.027l-0.198,-0.573Z",
    },
  })
);
timeline.add(TweenLite.to("#right", 0.4, { scaleY: 0 }));
timeline.add(
  TweenLite.to("#right", 0.01, {
    transformOrigin: "bottom",
    y: "100%",
    opacity: 0,
  })
);
timeline.add(TweenLite.to("#left", 0.01, { opacity: 1, delay: 1, y: 0 }));
timeline.add(TweenLite.to("#left", 0.4, { scaleY: 1 }));
timeline.add(TweenLite.to("#center", 0.01, { opacity: 1 }));
timeline.add(
  TweenLite.to("#center", 0.4, {
    attr: {
      d: "M195.846,69.63l-59,0l102,290c19.69,0.965 39.356,2.657 59,5l-102,-295Z",
    },
  })
);
timeline.add(TweenLite.to("#right", 0.01, { opacity: 1, y: 0 }));
timeline.add(TweenLite.to("#right", 0.4, { scaleY: 1 }));
