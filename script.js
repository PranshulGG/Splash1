const svg = document.querySelector("#animation");
svg.style.opacity = 1;

const all = document.querySelector("#all");
const spider = document.querySelector("#spider");
const logotype = document.querySelector("#logotype"); 

const line = document.querySelector("#line");
const lineLength = line.getTotalLength();
line.style.strokeDasharray = lineLength;
line.style.strokeDashoffset = lineLength;

const bodyLinesPaths = document.querySelectorAll("#body-lines path");
[].forEach.call(bodyLinesPaths, (el) => {
  const lenght = el.getTotalLength();
  el.style.strokeDasharray = lenght;
  el.style.strokeDashoffset = lenght;
});

const bodyLinesCircles = document.querySelectorAll("#body-lines circle");
[].forEach.call(bodyLinesCircles, (el) => {
  el.style.strokeDasharray = 13;
  el.style.strokeDashoffset = 13;
});

const headLinesPaths = document.querySelectorAll("#head-lines path");
[].forEach.call(headLinesPaths, (el) => {
  const lenght = el.getTotalLength();
  el.style.strokeDasharray = lenght;
  el.style.strokeDashoffset = lenght;
});

TweenMax.set(line, {
  transformOrigin: "center top",
});

TweenMax.from(all, 1, {
  opacity: 0,
});

new TimelineMax()

  .to(line, 0.8, {
    strokeDashoffset: lineLength + 100,
    ease: Power2.easeIn,
  })

  .to(line, 0.8, {
    strokeDashoffset: lineLength * 2,
    ease: Power4.easeIn,
  })

  .to(line, 0.2, {
    attr: { d: "M217.5,293.9c-28.7-140,52.7-154.3,0-293.4" },
    ease: Power4.easeOut,
  })

  .to(line, 0.6, {
    attr: { d: "M217.5,326.2c0-149.3,0-187.4,0-325.7" },
    ease: Elastic.easeOut,
  });

TweenMax.set(spider, {
  transformOrigin: "center",
  rotation: 180,
  scale: 0.5,
  y: -196,
});

new TimelineMax()

  .to(spider, 0.8, {
    y: -196 + 100,
    ease: Power2.easeIn,
  })

  .to(spider, 0.8, {
    y: 130,
    ease: Power4.easeIn,
  })

  .to(spider, 0.2, {
    y: 90,
    ease: Power4.easeOut,
  })

  .to(spider, 0.6, {
    y: 130,
    ease: Elastic.easeOut,
  });

// LEGS

TweenMax.set("#l1 .t", { transformOrigin: "0 100%" });
TweenMax.set("#l1 .m", { transformOrigin: "25% 100%" });
TweenMax.set("#l1 .b", { transformOrigin: "100% 100%" });

TweenMax.set("#l2 .t", { transformOrigin: "0 100%" });
TweenMax.set("#l2 .m", { transformOrigin: "100% 100%" });
TweenMax.set("#l2 .b", { transformOrigin: "100% 100%" });

TweenMax.set("#l3 .t", { transformOrigin: "100% 0" });
TweenMax.set("#l3 .m", { transformOrigin: "100% 0" });
TweenMax.set("#l3 .b", { transformOrigin: "100% 0" });

TweenMax.set("#l4 .t", { transformOrigin: "0 0" });
TweenMax.set("#l4 .m", { transformOrigin: "25% 0" });
TweenMax.set("#l4 .b", { transformOrigin: "100% 0" });

TweenMax.set("#r1 .t", { transformOrigin: "100% 100%" });
TweenMax.set("#r1 .m", { transformOrigin: "75% 100%" });
TweenMax.set("#r1 .b", { transformOrigin: "0 100%" });

TweenMax.set("#r2 .t", { transformOrigin: "100% 100%" });
TweenMax.set("#r2 .m", { transformOrigin: "0 100%" });
TweenMax.set("#r2 .b", { transformOrigin: "0 100%" });

TweenMax.set("#r3 .t", { transformOrigin: "0 0" });
TweenMax.set("#r3 .m", { transformOrigin: "0 0" });
TweenMax.set("#r3 .b", { transformOrigin: "0 0" });

TweenMax.set("#r4 .t", { transformOrigin: "100% 0" });
TweenMax.set("#r4 .m", { transformOrigin: "75% 0" });
TweenMax.set("#r4 .b", { transformOrigin: "0 0" });

const ease = Elastic.easeOut;
const dur = 1.3;
const del = 0.07;
const t = 30;
const m = 25;
const b = 10;
new TimelineMax({
  delay: 1.5,
})

  .to("#l1 .t", dur, { ease, rotation: -t }, 0)
  .to("#l1 .m", dur, { ease, rotation: -m }, 0)
  .to("#l1 .b", dur, { ease, rotation: -b }, 0)

  .to("#l2 .t", dur, { ease, rotation: -t }, del)
  .to("#l2 .m", dur, { ease, rotation: -m }, del)
  .to("#l2 .b", dur, { ease, rotation: -b }, del)

  .to("#l3 .t", dur, { ease, rotation: t }, del * 2)
  .to("#l3 .m", dur, { ease, rotation: m }, del * 2)
  .to("#l3 .b", dur, { ease, rotation: b }, del * 2)

  .to("#l4 .t", dur, { ease, rotation: t }, del * 3)
  .to("#l4 .m", dur, { ease, rotation: m }, del * 3)
  .to("#l4 .b", dur, { ease, rotation: b }, del * 3)

  .to("#r1 .t", dur, { ease, rotation: t }, 0)
  .to("#r1 .m", dur, { ease, rotation: m }, 0)
  .to("#r1 .b", dur, { ease, rotation: b }, 0)

  .to("#r2 .t", dur, { ease, rotation: t }, del)
  .to("#r2 .m", dur, { ease, rotation: m }, del)
  .to("#r2 .b", dur, { ease, rotation: b }, del)

  .to("#r3 .t", dur, { ease, rotation: -t }, del * 2)
  .to("#r3 .m", dur, { ease, rotation: -m }, del * 2)
  .to("#r3 .b", dur, { ease, rotation: -b }, del * 2)

  .to("#r4 .t", dur, { ease, rotation: -t }, del * 3)
  .to("#r4 .m", dur, { ease, rotation: -m }, del * 3)
  .to("#r4 .b", dur, { ease, rotation: -b }, del * 3)

  .to("#l1 .t", dur, { ease, rotation: 0 }, dur)
  .to("#l1 .m", dur, { ease, rotation: 0 }, dur)
  .to("#l1 .b", dur, { ease, rotation: 0 }, dur)

  .to("#l2 .t", dur, { ease, rotation: 0 }, dur + del)
  .to("#l2 .m", dur, { ease, rotation: 0 }, dur + del)
  .to("#l2 .b", dur, { ease, rotation: 0 }, dur + del)

  .to("#l3 .t", dur, { ease, rotation: 0 }, dur + del * 2)
  .to("#l3 .m", dur, { ease, rotation: 0 }, dur + del * 2)
  .to("#l3 .b", dur, { ease, rotation: 0 }, dur + del * 2)

  .to("#l4 .t", dur, { ease, rotation: 0 }, dur + del * 3)
  .to("#l4 .m", dur, { ease, rotation: 0 }, dur + del * 3)
  .to("#l4 .b", dur, { ease, rotation: 0 }, dur + del * 3)

  .to("#r1 .t", dur, { ease, rotation: 0 }, dur)
  .to("#r1 .m", dur, { ease, rotation: 0 }, dur)
  .to("#r1 .b", dur, { ease, rotation: 0 }, dur)

  .to("#r2 .t", dur, { ease, rotation: 0 }, dur + del)
  .to("#r2 .m", dur, { ease, rotation: 0 }, dur + del)
  .to("#r2 .b", dur, { ease, rotation: 0 }, dur + del)

  .to("#r3 .t", dur, { ease, rotation: 0 }, dur + del * 2)
  .to("#r3 .m", dur, { ease, rotation: 0 }, dur + del * 2)
  .to("#r3 .b", dur, { ease, rotation: 0 }, dur + del * 2)

  .to("#r4 .t", dur, { ease, rotation: 0 }, dur + del * 3)
  .to("#r4 .m", dur, { ease, rotation: 0 }, dur + del * 3)
  .to("#r4 .b", dur, { ease, rotation: 0 }, dur + del * 3);

TweenMax.set(all, {
  smoothOrigin: true,
  transformOrigin: "center 120%",
});

new TimelineMax({
  delay: 3,
})

  .to(all, 2, {
    scale: 10,
  })

  .to(
    '[stroke-width="1.8"]',
    1,
    {
      attr: { "stroke-width": 1.2 },
    },
    "-=1"
  )

  .to(
    '[stroke-width="1"]',
    1,
    {
      attr: { "stroke-width": 0.6 },
    },
    "-=2"
  )

  .to(
    all,
    2,
    {
      y: 310,
      ease: Back.easeOut,
    },
    "-=1"
  )

  .staggerTo(
    headLinesPaths,
    2,
    {
      strokeDashoffset: 0,
    },
    1,
    "-=3"
  )

  .to(
    all,
    2,
    {
      transformOrigin: "50% 85.75%",
      rotation: 90,
    },
    "-=5"
  )

  .to(
    all,
    5,
    {
      scale: 15,
    },
    "-=5"
  )

  .staggerTo(
    bodyLinesPaths,
    1.5,
    {
      strokeDashoffset: 0,
    },
    0.6,
    "-=4"
  )

  .staggerTo(
    bodyLinesCircles,
    1.5,
    {
      strokeDashoffset: 0,
    },
    0.6,
    "-=3"
  )

  .staggerFrom(
    "#dots circle",
    0.06,
    {
      opacity: 0,
      scale: 0.4,
      x: -100,
      y: -100,
    },
    -0.06,
    "-=3"
  )

  .to(all, 5, {
    x: -900,
    ease: SlowMo.ease,
  })

  .from(
    logotype,
    1,
    {
      opacity: 0,
    },
    "-=5"
  )

  .to(
    line,
    4.7,
    {
      attr: { "stroke-width": 0 },
      ease: SlowMo.ease,
    },
    "-=5"
  )

  .to(
    all,
    1,
    {
      opacity: 0,
    },
    "-=.8"
  );

   window.addEventListener('load', function() {
    // After 5 seconds, remove the splash screen and redirect to a link
    setTimeout(function() {
      var splashScreen = document.querySelector('.splash-screen');
      splashScreen.parentNode.removeChild(splashScreen);
      window.location.href = " https://pranshulgg.github.io/splash2f/"; // Replace with your desired link
   }, 12200); // Change the timeout value (in milliseconds) to your desired duration
   });

