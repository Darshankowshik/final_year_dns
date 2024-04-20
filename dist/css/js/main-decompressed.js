// Create an array of your images urls
const imagesUrls = ["../img/assets/ssi-mood.webp", "../img/assets/op-mood.webp", "../img/assets/va-mood.webp", "../img/assets/hy-mood.webp", "../img/assets/oa-mood.webp", "../img/assets/be-mood.webp", "../img/assets/hp-mood.webp", "../img/assets/ho-mood.webp", "../img/assets/md-mood.webp", "../img/assets/default-mood.webp"]
// // Fetch your the scene container in which you wish to have the WebGL scene in
// // It should take the entirity of the screen
const glContainer = window.document.querySelector("#webglBubble")
// // Pass this variable as a paramater in the Scene init method
MainThreeScene.init(glContainer)
// // Pass the images urls variable as a parameter in the texture initialization method
MainThreeScene.initTextures(imagesUrls)
// // The set Texture method allows you to change the refracted texture of the ball

// REMOVE NO JS
document.documentElement.className = "js";

//SCROLL TOP on refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

//REGISTER GSAP PLUGINS
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText, DrawSVGPlugin, MorphSVGPlugin, InertiaPlugin, Flip, MotionPathPlugin)
//REGISTER GSAP PLUGINS END



// define a function that sets min-height of my-element to window.innerHeight:

if(document.querySelector(".work") && isMobile()) {
  const setHeight = () => {
    document.querySelector("body").style.minHeight = window.innerHeight + "px"
    document.querySelector("#smooth-wrapper").style.minHeight = window.innerHeight + "px"
    document.querySelector(".content.work").style.height = window.innerHeight + "px"
  };
  let deviceWidth = window.matchMedia("(max-width: 1024px)");
  if (deviceWidth.matches) {
    window.addEventListener("resize", setHeight);
    setHeight();
  }
} 

gsap.config({
  nullTargetWarn: false,
});

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

//IPHONE
function iPhone() {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// ANDROID
function isAndroid() {
  return /Android/i.test(navigator.userAgent);
}
// FIX WEBGL BUBBLE JUMPING
gsap.to(".blur-circle", {scale: 1, opacity: .3, delay: .35, duration: 1, ease: "power4.inOut"})


//MAIN VARS =============================================================================================================================
let mouseX = 0
let mouseY = 0
let ballX = 0
let ballY = 0
let ballSpeed = .17
let thisClass
let scrollFixCta
let ctaFixIn

let heroAnim = gsap.timeline({ paused: true })

// ELEMENT TAGS
const hamburger = document.querySelector("#hamburger")
const logo = document.querySelector("#logo")
const bodyTag = document.querySelector("body")
const wrapper = document.querySelector("#smooth-wrapper")
const contentTag = document.querySelector(".content")
const workDetail = document.querySelector(".work-detail")


// BG AND NAV BG ANIMATION SETUP =====================================================================================================================================
// =====================================================================================================================================================================

let pageMaster = gsap.timeline({paused: true})
let hambIcon = gsap.timeline({paused: true})
let menuBgAnim = gsap.timeline({paused: true})

let pageShape = document.querySelectorAll(".page-to-page svg");
let easterPath = "M830 439.5C830 472.244 816.831 501.911 795.5 523.496C773.836 545.417 743.754 559 710.5 559C677.246 559 647.164 545.417 625.5 523.496C604.169 501.911 591 472.244 591 439.5C591 408.056 603.145 379.448 623 358.111C644.818 334.665 675.946 320 710.5 320C747.397 320 780.387 336.722 802.308 363C819.597 383.727 830 410.398 830 439.5Z"
let shapeStart
let page2
let page3
let menuMid
let menuEnd

if(!isMobile()) {

  // PAGE SHAPES
  shapeStart = "M0 20C0 8.95429 8.86995 0 19.9156 0C68.0089 0 189.957 0 236.667 0C317.505 0 392.495 0 473.333 0C556.906 0 626.428 0 710 0C800.016 0 856.651 0 946.667 0C1067.34 0 1062.66 0 1183.33 0C1273.85 0 1361.73 0 1400 0C1411.05 0 1420 8.95431 1420 20V860C1420 871.046 1411.05 880 1400 880H20C8.95432 880 0 871.046 0 860V20Z" 
  page2 = "M0 281.943C0 260.021 33.5348 252.576 43.9009 271.893C88.8096 355.58 162.35 466.5 236.667 466.5C356 466.5 365 107.333 472 107.333C579 107.333 626.428 225.5 710 225.5C800.016 225.5 856.651 0.5 946.667 0.5C1067.34 0.5 1062.66 414 1183.33 414C1257.18 414 1329.27 246.617 1374.1 116.704C1381.76 94.5095 1420 100.218 1420 123.698V638C1420 649.046 1411.05 658 1400 658H20C8.95432 658 0 649.046 0 638V281.943Z" 
  page3 = "M0 1.5C0 0.671573 0.644757 0 1.47318 0C15.3551 0 125.137 0 236.667 0C356 0 365 0 472 0C579 0 626.428 0 710 0C800.016 0 856.651 0 946.667 0C1067.34 0 1062.66 0 1183.33 0C1296.08 0 1404.74 0 1418.53 0C1419.36 0 1420 0.671573 1420 1.5V1.5C1420 2.32843 1419.33 3 1418.5 3H1.49997C0.671538 3 0 2.32843 0 1.5V1.5Z" 

  // MENU SHAPES
  menuMid = "M0 330.791C0 314.732 18.1732 304.806 32.0206 312.937C78.3273 340.127 166.163 385.5 236.667 385.5C337.333 385.5 392.495 0.5 473.333 0.5C556.906 0.5 626.428 331 710 331C800.016 331 856.651 122 946.667 122C1067.34 122 1062.66 486.5 1183.33 486.5C1257.01 486.5 1328.93 297.715 1373.79 150.656C1380.74 127.87 1420 133.102 1420 156.924V840C1420 851.046 1411.05 860 1400 860H20C8.95432 860 0 851.046 0 840V330.791Z"
  menuEnd = "M0 20C0 8.95431 8.88486 0 19.9306 0C61.3757 0 159.423 0 236.667 0C337.333 0 392.495 0 473.333 0C556.906 0 626.428 0 710 0C800.016 0 856.651 0 946.667 0C1067.34 0 1062.66 0 1183.33 0C1273.85 0 1361.73 0 1400 0C1411.05 0 1420 8.95431 1420 20V304C1420 315.046 1411.05 324 1400 324H20C8.95432 324 0 315.046 0 304V20Z"

  // CHANGE VIEVWBOX
  pageShape.forEach(ps => {
    ps.setAttribute("viewBox", "0 0 1420 880");
    let thisPath = ps.querySelector("path:last-of-type")
    gsap.set(thisPath, {morphSVG: shapeStart,})
  })
} else if (isMobile()) {
  // PAGE SHAPES
  shapeStart = "M0 9.92881e-05C23 -0.00012411 47.5 9.92881e-05 60 9.92881e-05C72.5 9.92881e-05 105 9.92881e-05 120 9.92881e-05C135 9.92881e-05 160.5 0 180 0C199.5 0 221 9.92881e-05 240 9.92881e-05C259 9.92881e-05 283 9.92881e-05 300 9.92881e-05C317 9.92881e-05 336 9.92881e-05 360 9.92881e-05C360 34 360 751 360 751H0C0 751 0 35.0003 0 9.92881e-05Z" 
  page2 = "M0 209.5C23 209.5 21 491 60 491C99 491 83 281 120 281C157 281 141 368 180 368C219 368 205 209.5 240 209.5C275 209.5 267 424 300 424C333 424 336 311 360 311C360 345 360 751 360 751H0C0 751 0 244.5 0 209.5Z" 
  page3 = "M0 750C23 750 21 750 60 750C99 750 83 750 120 750C157 750 141 750 180 750C219 750 205 750 240 750C275 750 267 750 300 750C333 750 336 750 360 750C360 750.999 360 750.999 360 750.999H0.000144839C0.000144839 750.999 0 750.999 0 750Z" 

  // MENU SHAPES
  menuMid = "M0 202.5C23 202.5 21 125 60 125C99 125 83 272.5 120 272.5C157 272.5 141 96.5 180 96.5C219 96.5 205 330.5 240 330.5C275 330.5 267 215.5 300 215.5C333 215.5 336 265 360 265C360 299 360 751 360 751H0C0 751 0 237.5 0 202.5Z"
  menuEnd = "M0 464.5C23 464.5 46 464.5 60 464.5C74 464.5 100.5 464.5 120 464.5C139.5 464.5 164.5 464.5 180 464.5C195.5 464.5 223 464.5 240 464.5C257 464.5 289 464.5 300 464.5C311 464.5 336 464.5 360 464.5C360 498.5 360 751 360 751H0C0 751 0 499.5 0 464.5Z"

  function reportWindowSize() {
    const mobilePageBg = document.querySelector(".page-to-page")
    mobilePageBg.style.height = window.innerHeight + 60 + "px"
  }
  reportWindowSize()
  window.onresize = reportWindowSize;

  // SET VIEWBOX
  pageShape.forEach(ps => {
    ps.setAttribute("viewBox", "0 0 360 751"); 
    let thisPath = ps.querySelector("path:last-of-type")
    gsap.set(thisPath, {morphSVG: shapeStart,})
  })

}


// ANIMATE PAGE TO PAGE BG
// PAGE OUT
if(isMobile()) {
  function pageOut() {
    let pagePageOut = gsap.timeline()
  
    pagePageOut.to("#pageBgAnim", {
      morphSVG: page2,
      duration: .8,
      ease: "expo.in"
    })
    pagePageOut.to(".page-to-page svg:nth-of-type(2)", {
      
      duration: .8,
      ease: "expo.in"
    }, "<")
    pagePageOut.to("#pageBgAnim", {
      morphSVG: page3,
      duration: .8,
      ease: "expo.out"
    })
    pagePageOut.to(".page-to-page svg:nth-of-type(2)", { 
      
      duration: .8,
      ease: "expo.out"
    }, "<")
  
    return pagePageOut
  }
  
  // PAGE IN
  function pageIn() {
    let pagePageIn = gsap.timeline()
  
    pagePageIn.to("#pageBgAnim2", {
      delay: .2,
      morphSVG: page2,
      duration: .8,
      ease: "expo.in"
    })
    pagePageIn.to(".page-to-page svg:first-of-type", { 
      yPercent: 100,
      duration: .8,
      ease: "expo.in"
    }, "<")
    pagePageIn.to("#pageBgAnim2", {
      morphSVG: shapeStart,
      duration: .8,
      ease: "expo.out"
    })
    pagePageIn.to(".page-to-page svg:first-of-type", { 
      yPercent: 100,
      duration: .8,
      ease: "expo.out"
    }, "<")
  
    return pagePageIn
  }
} else if (!isMobile()) {
  function pageOut() {
    let pagePageOut = gsap.timeline()

    pagePageOut.to("#pageBgAnim", {
      morphSVG: page2,
      duration: .8,
      ease: "expo.in"
    })
    pagePageOut.to(".page-to-page svg:nth-of-type(2)", {
      yPercent: 50,
      duration: .8,
      ease: "expo.in"
    }, "<")
    pagePageOut.to("#pageBgAnim", {
      morphSVG: page3,
      duration: .8,
      ease: "expo.out"
    })
    pagePageOut.to(".page-to-page svg:nth-of-type(2)", { 
      yPercent: 100,
      duration: .8,
      ease: "expo.out"
    }, "<")

    return pagePageOut
  }

  // PAGE IN
  function pageIn() {
    let pagePageIn = gsap.timeline()

    pagePageIn.to("#pageBgAnim2", {
      delay: .2,
      morphSVG: page2,
      duration: .8,
      ease: "expo.in"
    })
    pagePageIn.to(".page-to-page svg:first-of-type", { 
      yPercent: 50,
      duration: .8,
      ease: "expo.in"
    }, "<")
    pagePageIn.to("#pageBgAnim2", {
      morphSVG: shapeStart,
      duration: .8,
      ease: "expo.out"
    })
    pagePageIn.to(".page-to-page svg:first-of-type", { 
      yPercent: 100,
      duration: .8,
      ease: "expo.out"
    }, "<")

    return pagePageIn
  }
}

pageMaster  
  .add( pageOut() )
  .add( pageIn(), "-=1.6" )


// END BG AND NAV BG ANIMATION SETUP =====================================================================================================================================
// =====================================================================================================================================================================

// CUSTOM EASE =============================================================================================================================
let easeValA = "M0,0 C0,0 0.236,-0.014 0.337,0.114 0.485,0.302 0.314,0.662 0.514,0.86 0.681,1.026 1,1 1,1"
let easeValB = "M0,0 C0,0 0.026,0.439 0.24,0.778 0.377,0.995 0.668,1 0.816,1 0.947,1 1,1 1,1"
let easeValC = "M0,0 C0.123,-0.014 0.24,0.031 0.306,0.078 0.537,0.241 0.441,0.677 0.56,0.836 0.626,0.924 0.698,1 1,1 "

let customEaseA = CustomEase.create("custom", easeValA)
let customEaseB = CustomEase.create("custom", easeValB)
let customEaseC = CustomEase.create("custom", easeValC)

// SET UP A SMOOTH SCROLLING
// GSAP SMOOTH SCROLL /=============================================================================================================
//===================================================================================================================================
let smoother
function smoothScroll() {
  if(!isMobile() && window.innerWidth > 768 ) {
      smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: ".content",
          smooth: 1.2, // how long (in seconds) it takes to "catch up" to the native scroll position
          //smoothTouch: .1
          effects: true, // looks for data-speed and data-lag attributes on elements
          normalizeScroll: true // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
          //ease: "elastic"
          //ignoreMobileResize: true // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
      });
      
      smoother.effects(".parallax-wrap img", { speed: "auto" })
      let pImg = document.querySelectorAll(".parallax-img")
      pImg.forEach(pi => {
        let thisImg = pi.querySelector("img")
        let thisHeight = thisImg.offsetHeight + "px"
        pi.style.height = thisHeight
      })
      smoother.effects(".parallax-img img", { speed: ".75" })


      const scrollTo = gsap.utils.toArray(".scroll-to")
      scrollTo.forEach(st => {
          const scrollTarget = st.dataset.scroll
          // console.log(scrollTarget)
          st.addEventListener("click", function() {
          smoother.scrollTo("#" + scrollTarget, true, "top 0%")
          })
      })  
      return smoother   
  }
}
smoothScroll()
// END GSAP SMOOTH SCROLL /=============================================================================================================
//===================================================================================================================================


//====================================================================================================================================================================
//====================================================================================================================================================================
// MENU ANIMATION WITH HAMB HOVER
//=====================================================================================================================================================================
const menuWrap = document.querySelector("#menu-slide")
const social = document.querySelector("#menu-slide .social")
const navLink = gsap.utils.toArray("#menu-slide .nav-link")
gsap.set(navLink, {pointerEvents: "none"})
let menuPath
let pagePath

// SET UP BG ANIMATION
let isOpen

gsap.set([social, navLink], { opacity: 0 })

const menuOpen = function () {

  // ANIMATE MENU BG //////////////////////////////////////////
  menuBgAnim.to("#pageBgAnim", {
    morphSVG: menuMid,
    duration: .6,
    ease: "expo.in"
  })
  menuBgAnim.to("#pageBgAnim", {
    morphSVG: menuEnd,
    duration: .6,
    ease: "expo.out"
  })
  if(!isMobile()) {
    menuBgAnim.to(".page-to-page svg", { 
      yPercent: 63,
      duration: .6,
      ease: "expo.out"
    }, "<")
  } else if (isMobile()) {
    menuBgAnim.to(".page-to-page svg", { 
      yPercent: 0,
      duration: .6,
      ease: "expo.out"
    }, "<")
  }
  // ANIMATE MENU BG //////////////////////////////////////////


  // ANIMATE HAMB ICON ///////////////////////////////////////////////////////////
  let lineA = "M5.07849 34.5V35" 
  lineB = "M21 30H9"
  lineC = "M25.0784 25V25.5"
  pointA = "M5.07843 35L9 32.4482L9 27.6127L5.07843 25L1.07843 27.6127L1 32.4482L5.07843 35Z"
  pointB = "M25.0784 35L29 32.4482V27.6127L25.0784 25L21.0784 27.6127L21 32.4482L25.0784 35Z"

  hambIcon.to(".lineA", {morphSVG: lineA, duration: 1, ease: "power4.inOut"})
  hambIcon.to(".lineB", {morphSVG: lineB, duration: 1, ease: "power4.inOut"}, "<")
  hambIcon.to(".lineC", {morphSVG: lineC, duration: 1, ease: "power4.inOut"}, "<")
  hambIcon.to(".pointA", {morphSVG: pointA, duration: 1, ease: "power4.inOut"}, "<")
  hambIcon.to(".pointB", {morphSVG: pointB, duration: 1, ease: "power4.inOut"}, "<")
  // ANIMATE HAMB ICON ///////////////////////////////////////////////////////////


  // MENU INNER  /////////////////////////////////////////////////////////////////
  const menuBackward = function() {
    wrapper.classList.remove("is-exiting")
    // gsap.to(wrapper, { opacity: 1, duration: .3, ease: "power4" })
    gsap.to(glContainer, { opacity: 1, duration: .3, ease: "power4" })
    gsap.to(".page-to-page svg:first-of-type", {opacity: 1, duration: .3})
    gsap.to(navLink, {pointerEvents: "none"})
  }
  const menuForward = function() {
    wrapper.classList.add("is-exiting")
    // gsap.to(wrapper, { opacity: 0, duration: .3, ease: "power4" })
    gsap.to(glContainer, { opacity: 0, duration: .3, ease: "power4" })
    gsap.to(".page-to-page svg:first-of-type", {opacity: 0, duration: .3})
  }
  menuInner = gsap.timeline({onStart: menuForward, onReverseComplete: menuBackward, paused: true});
  menuInner.to(menuWrap, {
    y: "0%",
    duration: .35,
    ease: "power4"
  })
  menuInner.to(navLink, {
    y: "0%",
    opacity: 1,
    duration: .9,
    stagger: {
      amount: .1
    },
    onStart: () => {
      gsap.to(navLink, {pointerEvents: "auto"})
    },
    ease: CustomEase.create("custom", "M0,0 C0,0 0.259,-0.011 0.364,0.158 0.48,0.346 0.394,0.716 0.53,0.874 0.63,0.99 0.842,1 0.874,1 0.964,1 1,1 1,1 ")
  })
  menuInner.to(social, {
    y: "150%",
    opacity: 1,
    duration: .6,
    ease: "power4"
  }, "-=.5")
  // MENU INNER //////////////////////////////////////////////////////////////////////////////////
}
menuOpen()



// CLICK EVENT
hamburger.addEventListener("click", function () {
  const cta = document.querySelector("#fixed-cta")
  // END MOBILE CONDITION
  if (hamburger.classList.contains("active")) {
    hambIcon.reverse()
    menuBgAnim.reverse()
    menuInner.reverse()
    // ADD TO MASTER
    hamburger.classList.remove("active")
    logo.classList.remove("active")
    if (document.querySelector("#fixed-cta") > 0 && cta.classList.contains("active")) {
      gsap.to(cta, { opacity: 1, delay: 1, duration: .2, ease: "power4" })
    }
    if(!isMobile()) {
      smoother.paused(false)
    }
  } else {
    hambIcon.restart()
    menuBgAnim.restart()
    menuInner.restart()
    hamburger.classList.add("active")
    logo.classList.add("active")
    if (document.querySelector("#fixed-cta") && cta.classList.contains("active")) {
      gsap.to(cta, { opacity: 0, duration: .2, ease: "power4" })
    }
    if(!isMobile()) {
      smoother.paused(true)
    }
  }
})


 // EASTER EGG %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function triggerDotAnim() {

  let dots = gsap.utils.toArray(".ecMove"),
  thCenter = window.innerWidth / 2,
  tvCenter = window.innerHeight / 2

  // SELECT AND GET POSITIONS OF OUR DOTS
  dots.forEach(dot=> {
    let x = dot.getBoundingClientRect().left
    let y = dot.getBoundingClientRect().top
    let dw = dot.getBoundingClientRect().width
    let dh = dot.getBoundingClientRect().width

    gsap.set(dot, {
      x: thCenter - x - (dw / 2),
      y: tvCenter - y - (dh / 2),
      opacity: 1,
      scale: 0
    })
  })

  // IMAGES PARALLAX SCROLL ON MOUSEMOVE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  function magicParallax() {

    wrapper.addEventListener("mousemove", function(e) {
        parallaxIt(e, "#easterImg img:first-of-type", 5);
        parallaxIt(e, "#easterImg img:nth-of-type(2)", 15);
        parallaxIt(e, "#easterImg img:nth-of-type(3)", 40);
        parallaxIt(e, "#easterImg img:nth-of-type(4)", 40);
        parallaxIt(e, "#magic-keys", 20);
        parallaxIt(e, ".ec.main", 30);
    })
    function parallaxIt(e, target, movement) {
        if(bodyTag.classList.contains("easterOn")) {
          let relX = e.pageX - wrapper.getBoundingClientRect().left;
          let relY = e.pageY - wrapper.getBoundingClientRect().top;
    
          gsap.to(target, {
              duration: 1,
              x: (relX - wrapper.offsetWidth / 2) / wrapper.offsetWidth * movement,
              y: (relY - wrapper.offsetHeight / 4) / wrapper.offsetHeight * movement
          });
        } else {
            gsap.to(target, {
              duration: .25,
              x: 0,
              y: 0
          });
        }
    }
    
  }

  // SET UP OUR TIMELINE ´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´´
  let dotsPlay = gsap.timeline({paused: true})
  let ranTime = gsap.utils.random(10, 18, 1, true);
  let ranPosX = gsap.utils.random(10, 50, 1, true);
  var float = [{xPercent:0, yPercent:0}, {xPercent:-20, yPercent:20}, {xPercent:16, yPercent:-9}, {xPercent:3, yPercent:24} , {xPercent:0, yPercent:0}]

  dotsPlay.to(dots, {
    motionPath: {
      path: float, 
      curviness: 4
    },
    stagger: {
      amount: .1,
      yoyo: false,
      repeat: -1
    },
    duration: ranTime,
    ease: "linear",
    repeat:-1,
  })

  let eTl = gsap.timeline({paused: true, onStart: () => {smoother.paused(true)}, onReverseComplete: () => {smoother.paused(false), dotsPlay.pause()}})
  gsap.set(".ec.main", {scale: 0});
  let triggerTo = gsap.timeline({paused: true})
  eTl.to(["#logo" , "#hamburger" ], {opacity: 0, duration: 1,pointerEvents: "none", ease: "power4", onStart: ()=> {
    smoother.scrollTo("#hero", true, "top 0%")
  }})
  eTl.to(".ec.main", {
    scale: 1,
    duration: 1.5,
    ease: customEaseC,
  }, "<")
  eTl.to("#pageBgAnim", {
    morphSVG: {
      shape: easterPath,
      type: "rotational"
    },
    duration: 1.5,
    ease: customEaseC,
  }, "<")
  eTl.to("#blurDeviation", {
    duration: 1.5,
    attr:{"stdDeviation":17},
    ease: customEaseC,
  }, "<")
  eTl.to(dots, {
    x: 0,
    y: 0,
    scale: 1,
    duration: 1.75,
    stagger: .1,
    ease: customEaseB,
    onStart: () => {dotsPlay.play()}
  }, "-=.8")
  eTl.to("#easterImg", {
    opacity: 1,
    duration: 1,
    ease: "power4",
    onComplete: magicParallax()
  }, "-=1.25")


    // RESET ANIM ON PAGE CHANGE %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  triggerTo.clear()

  // OUR TRIGGER %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  let easterTrigger = document.querySelector("#easterEgg")
  // LOOP TRIGGER TO GET ATTENTION
  let ea = gsap.timeline()


  // EASTE CLOSE ANIM ///////////////////////////////////////////////////////////////////////////////////////////
  let magiClose = document.querySelector("#magic-close")
  gsap.set(magiClose, {pointerEvents: "none", scale: 0,})
  function closeHover() {
    magiClose.addEventListener("mouseenter", function() {
      gsap.to("#magic-close div", {
        scale: 1.2,
        duration: 1,
        ease: "elastic"
      })
      gsap.to("#magic-close i:first-of-type", {
        rotateZ: 0,
        duration: .5,
        ease: "expo"
      })
      gsap.to("#magic-close i:nth-of-type(2)", {
        rotateZ: 0,
        duration: .5,
        ease: "expo"
      })
    })
    magiClose.addEventListener("mouseleave", function() {
      gsap.to("#magic-close div", {
        scale: 1,
        duration: 1,
        ease: "elastic"
      })
      gsap.to("#magic-close i:first-of-type", {
        rotateZ: 45,
        duration: 1,
        ease: "elastic"
      })
      gsap.to("#magic-close i:nth-of-type(2)", {
        rotateZ: -45,
        duration: 1,
        ease: "elastic"
      })
    })
  }

  // SPLIT CHARS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  let lettering = new SplitText(".about #hero h1", { type: "lines, chars" })
  gsap.set(".about #hero h1", { perspective: 400, })
  gsap.set(lettering.chars, {
    transformOrigin: "0% 100%",
    scale: 6,
    opacity: 0,
    rotate: 45,
    y: window.innerHeight,
  })

  // LOOPING TEXT ANIMATION %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  let textLoop = gsap.timeline({paused: true, repeat: -1})
  let ti = gsap.utils.toArray("#magic-keys p")
  ti.forEach(item => {
    let ch = new SplitText(item, { type: "chars" })
    gsap.set(ch.chars, {yPercent: -105, opacity: 0, scaleY: .5})
    textLoop.to(ch.chars, {yPercent: 0, opacity: 1, scaleY: 1, duration: .5, stagger: {amount: .1}, ease: "power4"})
    textLoop.to(ch.chars, {yPercent: 105, duration: .5, delay: .8, opacity: 0, scaleY: .5, stagger: {amount: .1}, ease: "power4.in"})
  })

  // AUDIO VAR %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
  let soundFx = document.querySelector("#magicAudio")
  soundFx.volume = 0;

  gsap.to(lettering.chars, {
    delay: .5,
    transformOrigin: "0% 100%",
    scale: 1,
    opacity: 1,
    rotate: 0,
    duration: 1,
    delay: .8,
    stagger: {
      amount: .3,
    },
    y: 0,
    ease: CustomEase.create("custom", "M0,0 C0,0 0.076,0.578 0.226,0.826 0.324,0.989 0.599,0.986 0.66,0.989 0.791,0.997 1,1 1,1 "),
    onComplete: () => {
      ea.set("#easterEgg div", {scale: 1})
      ea.to("#easterEgg div", {
        scaleY: .8,
        scaleX: 1,
        transformOrigin: "center center",
        duration: .6,
        ease: "power1.inOut",
        stagger: {
          amount: .3,
          from: "start",
          yoyo: true,
          repeat: -1
        }
      })
    }
  })
  
  function tReverse() {
    triggerTo.reverse().timeScale(-2)
  }
  
  triggerTo.to(".about h1 div div div" , {opacity: 0, y: 20, duration: 1, stagger: {amount: .25}, ease: "expo.inOut"})
  triggerTo.to(["#breadcrumb" , "#fixed-cta", ".scroll-to"], {opacity: 0, duration: 1, pointerEvents: "none", ease: "power4"}, "<")
  triggerTo.to(magiClose, {scale: 1, duration: .75, ease: "power4", onComplete: ()=> {textLoop.play(), closeHover()}})
  triggerTo.to("#magic-keys", {scale: 1, duration: .75, ease: "power4", onStart: () => {magiClose.style.pointerEvents = "auto"}, onReverseComplete: ()=> {easterTrigger.style.pointerEvents =   "auto", textLoop.pause(0)
  }})

  // add sound
  soundFx.src = "../video/magic-ambient.ogg";


  // OPEN ///////////////////////////////////////////////////////////////////////////////////////
  easterTrigger.addEventListener("click", function() {
      ea.pause()
      easterTrigger.style.pointerEvents = "none"
      soundFx.play()

      for (let i = 0; i < 100; i ++) {
        setTimeout(() => {
           soundFx.volume = 0 + i * 0.01;
        }, i * 10);
      }

      eTl.play().timeScale(1)
      triggerTo.play().timeScale(1)
      bodyTag.classList.add("easterOn")
      easterTrigger.classList.add("active")
  })

  // CLOSE ///////////////////////////////////////////////////////////////////////////////////////
  magiClose.addEventListener("click", function() {
    magiClose.style.pointerEvents = "none"
    ea.play()
    for (let i = 0; i < 100; i ++) {
      setTimeout(() => {
         soundFx.volume = 1 - i * 0.01;
         if(i == 99) {
          soundFx.pause()
         }
      }, i * 10);
    }
    
    eTl.reverse().timeScale(-2)
    gsap.delayedCall(.5, tReverse);
    bodyTag.classList.remove("easterOn")
    easterTrigger.classList.remove("active")
  })

}
if(document.querySelector(".about") && !isMobile()) {
  triggerDotAnim()
} else {
  let lettering = new SplitText(".about #hero h1", { type: "lines, chars" })
  gsap.set(".about #hero h1", { perspective: 400, })
  gsap.set(lettering.chars, {
    transformOrigin: "0% 100%",
    scale: 6,
    opacity: 0,
    rotate: 45,
    y: window.innerHeight,
  })
  gsap.to(lettering.chars, {
    transformOrigin: "0% 100%",
    scale: 1,
    opacity: 1,
    rotate: 0,
    duration: 1,
    delay: .8,
    stagger: {
      amount: .3,
    },
    y: 0,
    ease: CustomEase.create("custom", "M0,0 C0,0 0.076,0.578 0.226,0.826 0.324,0.989 0.599,0.986 0.66,0.989 0.791,0.997 1,1 1,1 "),
  })
}



// =================================================================================================================================================================
// =========================================================================================================================================================
// PAGE INITS

PageInits = {

  lazyLoad: function() {
    if (document.querySelector(".lazy")) {
      ScrollTrigger.config({ limitCallbacks: true });

      gsap.utils.toArray(".lazy").forEach(image => {
        
        let newSRC = image.dataset.src,
            newImage = document.createElement("img"),
            
        loadImage = () => {
          newImage.onload = () => {
            newImage.onload = null; // avoid recursion
            newImage.src = image.src; // swap the src
            image.src = newSRC;
            // place the low-res version on TOP and then fade it out.
            gsap.set(newImage, {
              position: "absolute", 
              top: image.offsetTop, 
              left: image.offsetLeft, 
              width: image.offsetWidth, 
              height: image.offsetHeight
            });
            image.parentNode.appendChild(newImage);
            gsap.to(newImage, {
              opacity: 0, 
              duration: .35,
              onComplete: () => newImage.parentNode.removeChild(newImage)
            });
            st && st.kill();
          }
          newImage.src = newSRC;
        }, 
            
        st = ScrollTrigger.create({
          trigger: image,
          start: "-50% bottom",
          onEnter: loadImage,
          onEnterBack: loadImage // make sure it works in either direction
        });
      });
    }
  },

  mainScripts: function () {

  // SPAM PROTECTOR ====================================================================================================================
    const spamProtector = function() {
        const links = document.querySelectorAll("[data-part1]");
        for (const link of links) {
        const attrs = link.dataset;
        link.setAttribute(
            "href",
            `mailto:${attrs.part1}@${attrs.part2}.${attrs.part3}?subject=${encodeURIComponent(link.textContent)}`
        );
        }
    }
    spamProtector()

     // CIRCLE ICON HOVER
    // CIRCLE ICON HOVER
    let circleLink = gsap.utils.toArray(".circle-link")
    circleLink.forEach(ci => {
      let circleIcon = ci.querySelector(".circle-icon i")
      ci.addEventListener("mouseenter", function() {
        gsap.to(circleIcon, {
          scale: 1.25,
          duration: 1,
          ease: "elastic"
        })
      })
      ci.addEventListener("mouseleave", function() {
        gsap.to(circleIcon, {
          scale: 1,
          duration: 1,
          ease: "elastic"
        })
      })
    })
    
    //=============================================================================================================================
    // HOME PAGE ATTITUDE SECTION
    //===========================================================================================================================
    if (document.querySelector("#attitude") && !isMobile()) {
      const sideScrollWrap = document.querySelector(".boxes")
      const sideItem = gsap.utils.toArray(".boxes > div")
      const scrollPadding = sideScrollWrap.getBoundingClientRect().left / 2
      let currentPixel = sideItem[0].getBoundingClientRect().left
      
      // GET width of the slider items
      let scrollWidth = 0;
      for (let i = 0; i < sideItem.length; i++) {
        scrollWidth += sideItem[i].offsetWidth;
      }
      const scrollX = -scrollWidth + (window.innerWidth - (scrollPadding * 4))
      //(scrollPadding)

      // CHECK SCROLL SPEED
      const attScroll = function () {
        const newPixel = sideItem[0].getBoundingClientRect().left
        const diff = newPixel - currentPixel
        const speed = Math.abs(Math.round(diff * 1.75) / 100)
        const speedMax = Math.min(Math.max(speed, 0), 1);
        

        // GET SCROLL DIRECTION
        gsap.to(sideItem, {
          scale: 1 - (speedMax / 2),
        })

        currentPixel = newPixel
        requestAnimationFrame(attScroll)
      }
      attScroll()

      // SIDE SCROLLING
      gsap.to(sideItem, {
        scrollTrigger: {
          trigger: "#attitude",
          start: 'top top',
          end: 'bottom -=300%',
          toggleActions: "play none reverse none",
          scrub: true,
        },
        x: scrollX,
        ease: "linear"
      })
      gsap.to("#attitude", {
        scrollTrigger: {
          trigger: "#attitude",
          id:"attScroll",
          start: 'top top',
          end: 'bottom -=290%',
          toggleActions: "play none reverse none",
          scrub: true,
          pin: "#attitude"
        },
      })

      const aboutShape = gsap.utils.toArray(".hex-wrap .shape-anim polyline")
      gsap.set(aboutShape, {
        drawSVG: "0% 0%"
      })
      // TEXT MASKING
      const textTag = document.querySelector("#attitude p:first-of-type")
      const fadeText = document.querySelector("#attitude p:nth-of-type(2)")
      let fadeSplit = new SplitText(fadeText, { type: "chars" })

      let textAnim = gsap.timeline({
        scrollTrigger: {
          trigger: fadeText,
          start: 'top 50%',
          end: 'bottom -=310%',
          toggleActions: "play reverse play reverse",
          scrub: .2,
        }
      })
      textAnim.from(fadeSplit.chars, {
        y: (index) => {
          return ((index * 100))
        },
        duration: 1,
        ease: "linear"
      })
      textAnim.to(textTag, {
        webkitClipPath: "inset(0% 0% 0% 0%)",
        duration: 3,
        ease: "linear"
      })
      textAnim.to(textTag, {
        webkitClipPath: "inset(0% 100% 0% 0%)",
        duration: 5,
        ease: "linear"
      })
      textAnim.to(fadeSplit.chars, {
        y: (index) => {
          return -(index * 100) - 550
        },
        duration: 1,
        ease: "linear"
      })

      let shapeAnim = gsap.timeline({
        scrollTrigger: {
          trigger: fadeText,
          start: 'bottom -=250%',
          toggleActions: "restart none none none",
        },
      })
      shapeAnim.to(".hex-wrap .shape-anim polyline", {
        drawSVG: "0% 100%",
        duration: .5,
        stagger: .1,
        ease: "power4.in"
      })
      shapeAnim.to(".hex-wrap .shape-anim polyline", {
        drawSVG: "100% 100%",
        duration: .5,
        stagger: .1,
        ease: "power4.out"
      }, "-=.3")

    }

    // MOBILE ATTITUDE
    if (document.querySelector("#attitude") && isAndroid()) {

      const attitudeTag = document.querySelector("#attitude")
      const boxItem = gsap.utils.toArray(".boxes .stack")
      const boxItemInner = gsap.utils.toArray(".boxes article")
      const aboutSection = document.querySelector("#attitude .about-link")
      const boxItemHeight = boxItem[0].offsetHeight
      attitudeTag.style.marginBottom = "30vh"

      gsap.set([boxItem, aboutSection], {
        yPercent: 150
      })

      let boxPin = gsap.timeline({
        scrollTrigger: {
          trigger: attitudeTag,
          start: "top top",
          end: () => "+=" + boxItemHeight * boxItem.length,
          pin: true,
          scrub: true,
          //markers: true
        }
      })
      boxPin.to(boxItem, {
        yPercent: (i, target) => {
          return (i * 20) + 15  // 100, 200, 300
        },
        stagger: 1,
        duration: 1,
      })
      boxPin.to(boxItemInner, {
        backgroundColor: "#171A37",
        duration: 1,
        stagger: 1,
      }, "<")
      boxPin.to(aboutSection, {
        yPercent: 60,
        duration: 1,
      }, "-=2")
    }

    //==================================================================================================================================
    // CLIENT SECTION SIDE SCROLL
    //==================================================================================================================================
    if (document.querySelector(".client-wrap") && !isMobile()) {
      const rowFirst = document.querySelector(".client-wrap .row:first-of-type")
      const rowSecond = document.querySelector(".client-wrap .row:nth-of-type(2)")
      const item = document.querySelector(".client-wrap .row:first-of-type .bs-xl-6")
      const clientArea = document.querySelectorAll(".client-wrap .row")

      let itemWidth = item.offsetWidth
      let offsetFirst = rowFirst.getBoundingClientRect().left + itemWidth
      let offsetSecond = rowSecond.getBoundingClientRect().right - itemWidth


      const clientRowAnim = gsap.timeline({
        scrollTrigger: {
          trigger: ".client-wrap",
          id: "clientPin",
          start: "top 20%",
          end: "bottom top",
          pin: "#clients",
          scrub: true
        },
      })

      clientRowAnim.to(rowFirst, {
        x: -offsetFirst,
        ease: "linear",
      })
      clientRowAnim.to(rowSecond, {
        x: offsetSecond,
        ease: "linear",
      }, "<")

      // HEART BEAT ICON
      const clientStat = document.querySelector(".client-stat")
      const statBg = clientStat.querySelector(".stat-bg")
      const statIcon = clientStat.querySelector(".stat-icon img")
      const clientBox = gsap.utils.toArray(".client-item")

      //(clientStat, statBg,statIcon,statDataValue,statDataLabel)
      const heartBeat = gsap.timeline({ repeat: -1, })
      heartBeat.to(statIcon, {
        duration: .3,
        scale: 1.3,
        delay: .5,
        ease: "power3.in"
      })
      heartBeat.to(statIcon, {
        duration: .3,
        scale: 1,
        ease: "power3.out"
      })

      // KILL THE HEART WHEN WE HOVER WORK AREA
      clientArea.forEach(area => {
        area.addEventListener("mouseenter", function () {
          gsap.to(statBg, {
            scale: 1.1,
            duration: 1,
            ease: "elastic"
          })
        })
        area.addEventListener("mouseleave", function () {
          gsap.to(statBg, {
            scale: 1,
            duration: 1,
            ease: "elastic"
          })
        })
      })

      clientBox.forEach(client => {
        //const selectImage = document.querySelector('[data-img="' + dataNo + '"]');
        client.addEventListener("mouseenter", function () {
          const thisData = this.dataset.client
          const statItem = document.querySelector('[data-stat="' + thisData + '"]');
          heartBeat.pause()

          gsap.to(statItem, {
            yPercent: -50,
            opacity: 1,
            scale: 1,
            duration: .4,
            ease: "power4"
          })
          statIcon.classList.add("invisible")

        })

        client.addEventListener("mouseleave", function () {
          const thisData = this.dataset.client
          const statItem = document.querySelector('[data-stat="' + thisData + '"]');
          gsap.to(statItem, {
            yPercent: -50,
            opacity: 0,
            scale: .5,
            duration: .4,
            ease: "power4"
          })
          statIcon.classList.remove("invisible")
          heartBeat.restart()
        })
      })
    }


    // SERVICE SWITCH BUTTON HOVER ////////////////////////////////////////////////////////////////////////
    const swTitle = gsap.utils.toArray(".title-switch span:not(.first)")
    const titSplit = new SplitText(swTitle, { type: "chars" })
    const swImg = document.querySelector(".button-switch img")

    let i = 0
    let spin = -0
    gsap.set(titSplit.chars, {yPercent: 102})

    if(document.querySelector(".button-switch")) {
      const swBtn = document.querySelector(".button-switch")
      const circle = gsap.utils.toArray(".button-switch i")

      const tl2 = gsap.timeline()
      const switchIn = function () {
        tl2.to(circle, {
          scale: 1.1,
          stagger: {
            amount: 0,
            from: "end"
          },
          duration: .35,
          ease: "back",
          onStart: () => {
            swBtn.classList.add("hovered")
          }
        })
      }
      const switchOut = function () {
        tl2.to(swBtn.querySelector("i:first-of-type"), {
          scale: .55,
          duration: .2,
          ease: "back"
        })
        tl2.to(swBtn.querySelector("i:nth-of-type(2)"), {
          scale: .7,
          duration: .2,
          ease: "back"
        }, "<")
        tl2.to(swBtn.querySelector("i:nth-of-type(3)"), {
          scale: .85,
          duration: .2,
          ease: "back"
        }, "<")
        tl2.to(swBtn.querySelector("i:nth-of-type(4)"), {
          scale: 1,
          duration: .2,
          ease: "back",
          onComplete: () => {
            swBtn.classList.remove("hovered")
          }
        }, "<")
      }     

      const changeTitle = function() {
        const tl = gsap.timeline()
        let cur = i
        let curTitle = gsap.utils.toArray('[data-ch="' + cur + '"] > div')
        spin = spin + 180 
        // UPDATE OUR LIST ORDER
        i = i + 1
        if (i > 3) {
          i = 0
        }

        let nextTitle = gsap.utils.toArray('[data-ch="' + i + '"] > div')

        const resetTitle = function() {
          gsap.set(curTitle, {
            yPercent: 110,
          })
        }
        tl.to(curTitle, {
          yPercent: -110,
          stagger: {
            amount: .1,
          },
          duration: 1,
          ease: "elastic",
        })
        tl.to(nextTitle, {
          yPercent: 0,
          stagger: {
            amount: .1,
          },
          duration: 1,
          ease: "elastic",
          onComplete: resetTitle 
        }, "<")
        tl.to(swImg, {
          rotate: spin,
          ease: "back",
        }, "<")
      }

      if(!isMobile()) {
        swBtn.addEventListener("mouseenter", function(){
          if(tl2.isActive()) {
            return
          }
          switchIn()
        })
        swBtn.addEventListener("mouseleave", function(){
          switchOut()
        })
      }
      swBtn.addEventListener("click", function() {
        changeTitle()
      })
    }  


    // // JELLY BTUTTON HOVER
    // // ================================================================================================
    if (document.querySelector(".jelly-button")) {
      const jb = gsap.utils.toArray(".jelly-button")

      jb.forEach(jelly => {
        const jbBg = jelly.querySelector(".jb-bg")

        const ctaHoverIn = function () {
          gsap.to(jbBg, {
            scale: 1.1,
            duration: 1,
            ease: "elastic"
          })
        }
        const ctaHoverOut = function () {
          gsap.to(jbBg, {
            scale: 1,
            duration: 1,
            ease: "elastic"
          })
        }

        jelly.addEventListener("mouseenter", function () {
          ctaHoverIn()
        })
        jelly.addEventListener("mouseleave", function () {
          ctaHoverOut()
        })

      })

    }

    //================================================================
    // ARROW LINK ICON
    //================================================================
    if (document.querySelector(".button")) {
      const button = gsap.utils.toArray(".button")

      button.forEach(btn => {

        const btnBg = btn.querySelector("span:first-of-type")
        const btnIcon = btn.querySelector("i")

        btn.addEventListener("mouseenter", function () {
          const btnHover = gsap.timeline()

          btnHover.to(btnBg, {
            scale: 1.1,
            duration: 1,
            ease: "elastic"
          })
        })
        btn.addEventListener("mouseleave", function () {
          const btnHover = gsap.timeline()

          btnHover.to(btnBg, {
            scale: 1,
            duration: 1,
            ease: "elastic"
          })
        })

      })
    }

    //================================================================
    // HOME HERO TEXT CAROUSEL
    //================================================================
    if (document.querySelector(".usp-carousel")) {

      let targets = document.querySelectorAll(".usp-carousel .inner")
      let numberOfTargets = targets.length

      let duration = 0.4 //change this
      let pause = 1.25 // change this

      let stagger = duration + pause
      let repeatDelay = (stagger * (numberOfTargets - 1)) + pause

      let swapTrigger = gsap.timeline({
        repeat: 20,
        scrollTrigger: {
          trigger: ".usp-carousel",
          start: "top 90%",
          toggleActions: "play pause play none",
        }
      })

      function swapText() {
        swapTrigger.from(targets, {
          y: "100%", duration: duration, stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay: repeatDelay
          }
        })
          .to(targets, {
            y: "-100%", duration: duration, stagger: {
              each: stagger,
              repeat: -1,
              repeatDelay: repeatDelay
            }
          }, stagger)
      }

      swapText()
    }


    //================================================================
    // SCROLL PATTERN
    //================================================================
    if (!isMobile() && document.querySelector(".scrollPattern")) {
      const content = document.querySelector(".content");
      const pattern = document.querySelector(".scrollPattern")
      const patTop = pattern.querySelector(".patternTop")
      const patBottom = pattern.querySelector(".patternBottom")
      let currentPixel = content.getBoundingClientRect().top
      let oldValue = content.getBoundingClientRect().top


      // CHECK SCROLL SPEED
      const bgAnim = function () {
        const newPixel = content.getBoundingClientRect().top
        const diff = newPixel - currentPixel
        const speed = Math.abs(Math.round(diff * 5) / 100)
        const speedMax = Math.min(Math.max(speed, 0), 1);


        // GET SCROLL DIRECTION
        newValue = content.getBoundingClientRect().top;
        if (oldValue < newValue) {
          //("Up");
          gsap.to(patTop, {
            y: speedMax * 100 + "%"
          })
          gsap.to(patBottom, {
            y: 0,
          })
        } else if (oldValue > newValue) {
          gsap.to(patTop, {
            y: 0,
          })
          gsap.to(patBottom, {
            y: -speedMax * 100 + "%"
          })
        }
        oldValue = newValue;


        currentPixel = newPixel

        requestAnimationFrame(bgAnim)
      }
      bgAnim()
    }

    // REWRITE SCROLL PATTERN


    //=========================================================================================================================
    // FIX CTA FUNCTIONS ON FOOTER ==============================================================================================================================
    //=========================================================================================================================
    if(document.querySelector("#fixed-cta")) {
      const fCta = document.querySelector("#fixed-cta")
      const ctaIcon = fCta.querySelector("i")

      const fixCtaHover = function() {
        const pencilHandleB = "M27.4142 29.9237C26.6332 30.7047 26.6332 31.9711 27.4142 32.7521L43.5938 48.9316C43.8613 49.1992 44.1993 49.3854 44.5684 49.4685L50.8933 50.8933L49.4685 44.5685C49.3854 44.1993 49.1992 43.8613 48.9316 43.5938L32.7521 27.4142C31.971 26.6332 30.7047 26.6332 29.9237 27.4142L27.4142 29.9237Z"
        const pencilTipB = "M49.7919 50.1349L45 49L49 45L49.7919 50.1349Z"

        gsap.set([".handle-a", ".tip-a"], {opacity: 0})
        let penAnim = gsap.timeline({paused: true})
        penAnim.to(".handle-b", {transformOrigin: "bottom right", scale: .2, opacity: 0, x: 30, y:30, duration: .6, ease: "expo.out"})
        penAnim.to(".tip-b", {transformOrigin: "bottom right",scale: .2, opacity: 0, x: 30, y:30, duration: .6, ease: "expo.out"}, "<")
        // penAnim.to(["handle-a",".tip-a"], {opacity: 1, duration: .01}, "<")  
        penAnim.to(".handle-a", {opacity: 1, morphSVG: pencilHandleB, duration: .6, ease: "expo.out"}, "-=.5")
        penAnim.to(".tip-a", {opacity: 1, morphSVG: pencilTipB, duration: .6, ease: "expo.out"}, "<")

        //CREATE A HOVER STATEMENT
        const ctaHoverIn = function () {
          penAnim.restart()
          gsap.to(ctaIcon, {
            scale: 1.25,
            duration: 1,
            ease: "elastic"
          })
        }
        const ctaHoverOut = function () {
          gsap.to(ctaIcon, {
            scale: 1,
            duration: 1,
            ease: "elastic"
          })
        }

        fCta.addEventListener("mouseenter", function () {
          ctaHoverIn()
        })
        fCta.addEventListener("mouseleave", function () {
          ctaHoverOut()
        })
        fCta.addEventListener("click", function() {
            gsap.to(glContainer, {
                opacity: 0,
                duration: .5,
                ease: "power4"
            })
        })
        // HOVER END ============================================

        fCta.addEventListener("click", function () {
          if (!this.classList.contains("opened")) {
            fCta.classList.add("opened")
          } else {
            history.back()
            fCta.classList.remove("opened")
          }
        })
      }
      fixCtaHover()

      // FIX CTA ///////////////////////////////////
      scrollFixCta = function() {
          ctaFixIn = gsap.timeline({
            paused: true,
            scrollTrigger: {
              trigger: ".contact-link",
              start: "bottom bottom",
              toggleActions: "play pause play reverse",
            }
          })
          ctaFixIn.to(fCta, {
            scale: 0,
            duration: .4,
            ease: "expo.inOut"
          })
        
      }
      scrollFixCta()

    }

    //================================================================
    // APPEAR ITEMS IN VIEWPORT
    //================================================================
    if (document.querySelector(".view")) {
      gsap.set(".view", { opacity: 0 })

      if (!isMobile()) {
        ScrollTrigger.batch(".view", {
          start: "top bottom",
          onEnter: batch => gsap.to(batch, {
            opacity: 1,
            duration: .9,
            y: 0,
            stagger: 0.1,
            ease: customEaseB
          }),
          onLeaveBack: batch => gsap.to(batch, {
            opacity: 0,
            duration: .2,
            y: "100%",
            stagger: 0.1,
            ease: customEaseA
          }),
        });
      } else {
        ScrollTrigger.batch(".view", {
          scroller: "body",
          start: "top 90%",
          onEnter: batch => gsap.to(batch, {
            opacity: 1,
            duration: .8,
            y: 0,
            stagger: 0.1,
            ease: customEaseB
          }),
        });
      }
    }
    //================================================================
    // APPEAR ITEMS IN VIEWPORT
    //================================================================
    if (document.querySelector(".img-view") && !isMobile()) {
      gsap.set(".img-view", { opacity: 1 })

      if (!isMobile()) {
        ScrollTrigger.batch(".img-view", {

          start: "top 99%",
          onEnter: batch => gsap.to(batch, {
            opacity: 1,
            duration: 1,
            y: 0,
            stagger: 0.1,
            ease: "expo"
          }),
        });
      } else {
        ScrollTrigger.batch(".img-view", {
          scroller: "body",
          start: "top 90%",
          onEnter: batch => gsap.to(batch, {
            opacity: 1,
            duration: .8,
            y: 0,
            stagger: 0.1,
            ease: "expo"
          }),
        });
      }
    }


    // SECTION TITLE
    if (document.querySelector(".section-title")) {
      const sTitle = gsap.utils.toArray(".section-title")

      sTitle.forEach(title => {
          const iFirst = title.querySelector("i:first-of-type")
          const iSecond = title.querySelector("i:nth-of-type(2)")

          gsap.set([iFirst, iSecond], { scale: 0 })
          gsap.set(title, { x: "2em", opacity: 0 })

          const titleAnim = gsap.timeline({
            scrollTrigger: {
              trigger: title,
              //toggleActions: "restart none none none",
              start: "top 90%"
            }
          })
          titleAnim.to(title, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3"
          })
          titleAnim.to(iFirst, {
            scale: 2,
            duration: .4,
            ease: "power2.in"
          }, "-=.8s")
          titleAnim.to(iFirst, {
            scale: 1,
            duration: .3,
            ease: "power2.out"
          }, "-=.4")
          titleAnim.to(iSecond, {
            scale: 1,
            opacity: 1,
            duration: .1,
            ease: "power3"
          }, "-=.1")
          titleAnim.to(iSecond, {
            scale: 0,
            duration: .1,
            ease: "power3"
          })
          titleAnim.to(iSecond, {
            scale: 1,
            duration: .1,
            ease: "power3"
          })
          titleAnim.to(iSecond, {
            scale: 0,
            duration: .1,
            ease: "power3"
          })
          titleAnim.to(iSecond, {
            scale: 1,
            duration: .1,
            ease: "power3"
          })
      })

    }

    //================================================================
    // SCROLL TRIGGER SIDE ANIMATION    
    //================================================================
    if (document.querySelector(".side-scroll") && !isMobile()) {
      const sideScrollContainer = document.querySelector(".side-scroll");

      const sideInner = document.querySelector(".side-scroll")
      const dragItems = gsap.utils.toArray(".side-scroll .side-scroll-item")
      let currentPixel = sideInner.getBoundingClientRect().left

      // CHECK SCROLL SPEED
      const scrollScale = function () {
        const newPixel = sideInner.getBoundingClientRect().left
        const diff = newPixel - currentPixel
        const speed = Math.abs(Math.round(diff * 1.75) / 100)
        const speedMax = Math.min(Math.max(speed, 0), 1);


        // GET SCROLL DIRECTION
        gsap.to(dragItems, {
          scale: 1 - (speedMax / 2),
        })

        currentPixel = newPixel

        requestAnimationFrame(scrollScale)
      }
      scrollScale()
      

      const sideScrollFunction = function () {
        
          const scrollItem = document.querySelectorAll(".side-scroll-item")
          const scrollItemWidth = (scrollItem[0].offsetWidth * scrollItem.length + (window.innerWidth / 24 * (scrollItem.length - 1))) - sideScrollContainer.offsetWidth


          // CONSTRUCTOR
          let scrollTween = gsap.to(sideScrollContainer, {
            x: -scrollItemWidth,
            ease: "none",
            duration: 1,
            scrollTrigger: {
              trigger: sideScrollContainer,
              start: "center center",
              toggleActions: "play reverse reverse none",
              pin: true,
              end: () => "+=" + scrollItemWidth,
              // markers: true,
              scrub: true
            }
          })
        
      }
      sideScrollFunction()

      window.addEventListener("resize", function () {
        sideScrollFunction()
      })
    } else if (document.querySelector(".side-scroll") && isAndroid()) {
      const cardItem = gsap.utils.toArray(".side-scroll-item")
      const cardItemInner = gsap.utils.toArray(".side-scroll-item .inner")
      document.querySelector(".side-scroll").style.marginBottom = "35vh"
      if(document.querySelector(".service-detail.seo")) {
        document.querySelector(".side-scroll").style.marginBottom = "45vh"
      }
      //(nlPush)

      gsap.set(cardItem, {
        yPercent: (index) => {
          return (index + 1) * 10
        },
        scale: 1,
      })

      let mobileLifecycle = gsap.timeline({
        scrollTrigger: {
          trigger: ".side-scroll",
          start: "top top",
          end: "bottom -250%",
          toggleActions: "play pause play none",
          scrub: true,
          //markers: true,
          pin: ".side-scroll"
        }
      })

      mobileLifecycle.to(cardItem, {
        yPercent: (index) => {
          return -100 + ((index + 1) * 10)
        },
        scale: .9,
        stagger: .5,
        duration: .5,
        ease: "linear"
      })
      mobileLifecycle.to(cardItemInner, {
        backgroundColor: "#171A37",
        stagger: .5,
        duration: .5,
        ease: "linear"
      }, "<")
    }

    //================================================================
    // mask link animation
    //================================================================
    if (document.querySelector(".mask-link") && !isMobile()) {
      const maskLink = gsap.utils.toArray(".mask-link")
      maskLink.forEach(link => {
        const linkDot = link.querySelector(".dot")

        link.addEventListener("mouseenter", function () {
          const linkWidth = this.offsetWidth
          this.classList.add("hovered")

          gsap.to(linkDot, {
            x: -linkWidth,
            duration: .5,
            scale: 0,
            ease: "power4.inOut"
          })
        })

        link.addEventListener("mouseleave", function () {
          this.classList.remove("hovered")
          gsap.to(linkDot, {
            x: 0,
            duration: .5,
            scale: 1,
            ease: "power4.inOut"
          })
        })

      })
    }

    //================================================================
    // TEXT ANIMATIONS
    //================================================================
    // FONT VARS
    const fontLoadA = new FontFaceObserver('Suisse Intl');
    const fontLoadB = new FontFaceObserver('TT Tunnels Bold');
    Promise.all([fontLoadA.load(), fontLoadB.load()]).then(function () {

      // if (window.innerWidth > 767) {

        let splitChars = new SplitText(".split.chars", { type: "lines, chars" })
        let spitLines = new SplitText(".split.lines", { type: "lines" })
        gsap.set(".split", { perspective: 400, })

        // CHARS ANIMATION
        gsap.set(splitChars.chars, {
          transformOrigin: "0% 100%",
          y: "100%",
        })

        ScrollTrigger.batch(splitChars.chars, {
          start: "top 90%",
          onEnter: batch => gsap.to(batch, {
            transformOrigin: "0% 100%",
            duration: 1,
            stagger: {
              amount: .2
            },
            y: "0%",
            ease: customEaseA
          }),
          
        });
        // LINES ANIMATION
        gsap.set(spitLines.lines, {
          opacity: 0,
          y: "150%"
        })
        ScrollTrigger.batch(spitLines.lines, {
          start: "top 100%",
          toggleActions: "restart none none none",
          onEnter: batch => gsap.to(batch, {
              opacity: 1,
              duration: 1,
              y: 0,
              stagger: 0.03,
              ease: "expo.out"
          }),
          onLeaveBack: batch => gsap.to(batch, {
              opacity: 0,
              y: "150%",
              stagger: 0.03,
              ease: "power4"
          }),
      });


      // HERO ANIMATION AFTER PAGE TO PAGE TRANSITION ==================================================================================================
      // ================================================================================================== =============================================
      const heroHex = gsap.utils.toArray(".hero-hex polyline")
        gsap.set(heroHex, {
          drawSVG: "0% 0%"
        })
        const heroIn = gsap.utils.toArray(".hero-in")
        const heroTextIn = gsap.utils.toArray(".hero-in-text")
        let heroSplit = new SplitText(".hero-split.chars", { type: "lines, chars" })

        gsap.set(".hero-split", { perspective: 400, })
        gsap.set(heroSplit.chars, {
          transformOrigin: "0% 100%",
          scale: 6,
          opacity: 0,
          rotate: 45,
          y: window.innerHeight,
        })
        gsap.set(heroIn, {
          perspective: "400px",
          y: 30, 
          transformOrigin: "50% 100%",
          opacity: 0,
        })
        gsap.set(heroTextIn, {
          opacity: 0,
          y: 30,
        })
        if(!document.querySelector(".about")) {
          heroAnim.to(heroSplit.chars, {
            delay: .5,
            transformOrigin: "0% 100%",
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 1,
            delay: .8,
            stagger: {
              amount: .3,
            },
            y: 0,
            ease: CustomEase.create("custom", "M0,0 C0,0 0.076,0.578 0.226,0.826 0.324,0.989 0.599,0.986 0.66,0.989 0.791,0.997 1,1 1,1 ")
          })
          heroAnim.to(heroIn, {
            scale: 1,
            opacity: 1,
            transformOrigin: "50% 100%",
            y: 0,
            stagger: {
              amount: .2
            },
            duration: .6,
            ease: customEaseB
          }, "<.6")
          heroAnim.to(heroTextIn, {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: {
              amount: .3
            },
            ease: CustomEase.create("custom", "M0,0 C0,0 0.076,0.578 0.226,0.826 0.324,0.989 0.599,0.986 0.66,0.989 0.791,0.997 1,1 1,1 ")
          }, "<")
          heroAnim.to(".hero-hex polyline", {
            drawSVG: "0% 100%",
            duration: .5,
            stagger: .1,
            ease: "power4.in"
          }, "-=.7")
          heroAnim.to(".hero-hex polyline", {
            drawSVG: "100% 100%",
            duration: .5,
            stagger: .1,
            ease: "power4.out"
          })
          heroAnim.play()
        } else {
          heroAnim.to(heroIn, {
            scale: 1,
            opacity: 1,
            transformOrigin: "50% 100%",
            stagger: {
              amount: .2
            },
            duration: .6,
            ease: customEaseB
          })
          heroAnim.to(".hero-hex polyline", {
            drawSVG: "0% 100%",
            duration: .5,
            stagger: .1,
            ease: "power4.in"
          }, "-=.7")
          heroAnim.to(".hero-hex polyline", {
            drawSVG: "100% 100%",
            duration: .5,
            stagger: .1,
            ease: "power4.out"
          })
          heroAnim.play()
        }
        

        //================================================================
        // ANIMATE LINES ON VIEWPORT
        //================================================================
        const lineTag = gsap.utils.toArray(".line-anim")

        lineTag.forEach(line => {
          const shapeLeft = line.querySelector("svg:first-of-type")
          const shapeRight = line.querySelector("svg:nth-of-type(2)")
          const path = line.querySelector("div")
          const lineOffset = shapeRight.getBoundingClientRect().left

          const appearLine = gsap.timeline({
            scrollTrigger: {
              trigger: line,
              start: "top 80%",
            }
          })
          appearLine.from([shapeRight, shapeLeft], {
            opacity: 0,
            scale: 0,
            duration: .5,
            ease: customEaseB
          })
          appearLine.from(shapeRight, {
            x: -lineOffset,
            duration: 1,
            ease: customEaseB
          }, "-=.5")
          appearLine.from(path, {
            scaleX: 0,
            duration: 1,
            ease: customEaseB
          }, "-=1")

        })

      // }

    });


    //================================================================
    // TESTIMONIALS CONTENT
    //================================================================
    if (document.querySelector(".draggable")) {
      const dragSlider = document.querySelector(".draggable")
      const dragInner = document.querySelector(".draggable .slider-inner")
      const dragItems = gsap.utils.toArray(".draggable .slide-item")
      const dragItemWidth = dragItems[0].offsetWidth
      const dragLength = dragItems.length
      const dragWidth = dragItemWidth * dragLength
      let dragPush = dragWidth - window.innerWidth
      const dragProgress = document.querySelector(".drag-progress i")
      const dragCursor = document.querySelector("#drag-ico")
      const dgBg = document.querySelector("#drag-ico span")


      const dragSliderMargin = window.innerWidth - dragSlider.getBoundingClientRect().right

      dragInner.style.width = dragWidth + "px"

      // PUSH DRAG SLIDER FOR HOME PAGE TESTIMONIALS SECTION


      let currentPixel = dragInner.getBoundingClientRect().left
      let thisVal = -dragPush - dragSliderMargin + 10

      // CHECK SCROLL SPEED
      if(!isMobile()) {
        const dragEase = function () {
          // DRAG FOLLOW
          let distX = mouseX - ballX
          let distY = mouseY - ballY

          ballX = ballX + (distX * ballSpeed)
          ballY = ballY + (distY * ballSpeed)

          const centerHeight = dragCursor.offsetHeight / 2
          const centerWidth = dragCursor.offsetWidth / 2
          gsap.to(dragCursor, {
            y: ballY - centerHeight,
            x: ballX - centerWidth,
            ease: "none",
            duration: .15
          })
          


          const newPixel = dragInner.getBoundingClientRect().left
          const newVal = dragInner.getBoundingClientRect().left
          const diff = newPixel - currentPixel
          const speed = Math.abs(Math.round(diff * 1.75) / 100)
          const speedMax = Math.min(Math.max(speed, 0), 1);

          let dragPerc = (((newVal / thisVal) - 1) * -1).toFixed(2)

          // GET SCROLL DIRECTION
          gsap.to(dragItems, {
            scale: 1 - (speedMax / 5),
          })
          gsap.to(dragProgress, {
            scaleX: dragPerc,
          })

          currentPixel = newPixel

          requestAnimationFrame(dragEase)
        }
        dragEase()
      }

      // CREATE DRAGGABLE INSTANCE
      Draggable.create(".draggable .slider-inner", {
        type: "x",
        bounds: document.querySelector(".draggable"),
        inertia: true,
        edgeResistance: .95,
        snap: {
          x: function (endValue) {
            return Math.round(endValue / dragItemWidth) * dragItemWidth;
          }
        },
        onDragStart: function () {
          gsap.to(dragItems, {
            x: 0,
            stagger: .05
          })
          // gsap.to(dragProgress, {
          //     scaleX: dragPerc,
          // })
        },
        onDragEnd: function () {
          gsap.to(dragItems, {
            x: 0,
            stagger: .05
          })
        },
      });

      dragSlider.addEventListener("mouseenter", function () {
        dragCursor.classList.add("moving")
        gsap.to(dgBg, {
          scale: 1,
          duration: .4,
          ease: "power4"
        })
        bodyTag.style.setProperty("cursor", "none");
      })
      dragSlider.addEventListener("mousedown", function () {
        dragSlider.classList.add("down")
        dragCursor.classList.add("is-on")
        gsap.to(dgBg, {
          scale: .8,
          duration: .4,
          ease: "power4"
        })
      })
      dragSlider.addEventListener("mouseup", function () {
        dragSlider.classList.remove("down")
        dragCursor.classList.remove("is-on")
        gsap.to(dgBg, {
          scale: 1,
          duration: .4,
          ease: "power4"
        })
      })
      dragSlider.addEventListener("mouseleave", function () {
        //gsap.to(dragCursor, {opacity: 0, duration: .2, ease: "power2"})
        dragCursor.classList.remove("is-on")
        dragCursor.classList.remove("moving")
        gsap.to(dgBg, {
          scale: 0,
          delay: .1,
          duration: .3,
          ease: "power4"
        })
        bodyTag.style.setProperty("cursor", "auto");
      })
      dragSlider.addEventListener("mousemove", function (e) {
        mouseX = e.pageX
        mouseY = e.clientY
      })
    }


    //================================================================
    // ABOUT TIMELINE SCRIPT
    //================================================================
    if (document.querySelector(".timeline") && !isMobile()) {
      const numFirst = document.querySelector(".num-first-item")
      const numLast = document.querySelector(".num-last-item")
      const growthTag = document.querySelector(".big-num-wrap .font-acc")
      const tSide = document.querySelector(".timeline-side")
      const tSideItem = gsap.utils.toArray(".ts-item")

      const nfHeight = numFirst.offsetHeight
      const nlHeight = numLast.offsetHeight
      const nlWidth = numLast.offsetWidth / 2
      const nlPush = numLast.getBoundingClientRect().left + nlWidth

      numLast.style.transform = `translateX(${nlPush + "px"}) translateY(${nlHeight + "px"}) scale(.8)`;
      gsap.set(growthTag, {
        opacity: 0,
      })

      let thisPos = tSideItem[0].getBoundingClientRect().left

      
      const addScale = function () {

        const newPos = tSideItem[0].getBoundingClientRect().left
        const diff = newPos - thisPos
        const speed = Math.abs(Math.round(diff * 1.75) / 100)
        const speedMax = Math.min(Math.max(speed, 0), 1);

        gsap.to(".ts-item", {
          scale: 1 - (speedMax / 2),
          ease: "linear"
        })

        thisPos = newPos
        requestAnimationFrame(addScale)
      }
      addScale()

      // GET TOTAL WIDTH OF PARENT BY CALCULATING WIDTH OF INDIVIDUAL CHILD
      let totalWidth = 0;
      for (let i = 0; i < tSideItem.length; i++) {
        totalWidth += tSideItem[i].offsetWidth;
      }
      tSide.style.marginLeft = window.innerWidth + "px"
      let tw = totalWidth + window.innerWidth + (window.innerWidth / 24 * 2)
      //(tNumOffset)

      let tSideScroll = gsap.timeline({
        scrollTrigger: {
          trigger: ".timeline",
          id: "timelineScroll",
          start: "top top",
          end: "bottom -=9000",
          toggleActions: "play pause play none",
          scrub: true,
          //markers: true,
          pin: ".timeline"
        }
      })
      tSideScroll.to(numFirst, {
        y: nfHeight,
        x: "-20%",
        scale: .8,
        duration: .2,
        ease: "linear"
      })
      tSideScroll.to(numFirst, {
        x: -tw,
        duration: 2,
        ease: "linear"
      })
      tSideScroll.to(tSide, {
        x: -tw,
        duration: 2,
        ease: "linear"
      }, "-=2.12")
      tSideScroll.to(numLast, {
        x: 0,
        duration: .3,
        ease: "linear"
      }, "-=.5")
      tSideScroll.to(numLast, {
        y: 0,
        scale: 1,
        duration: .1,
        ease: "linear"
      }, "-=.3")
      tSideScroll.to(growthTag, {
        y: "60%",
        opacity: 1,
        duration: .1,
        ease: "linear"
      }, "-=.2")

    } else if (document.querySelector(".timeline") && isMobile()) {
      const numFirst = document.querySelector(".num-first-item")
      const nums = gsap.utils.toArray(".num-item")
      const numLast = document.querySelector(".num-last-item")
      const numContent = gsap.utils.toArray(".nc-push")
      const growthTag = document.querySelector(".big-num-wrap .font-acc")

      //(nlPush)
      gsap.set(growthTag, {
        opacity: 0,
      })
      gsap.set(numContent, {
        yPercent: (index) => {
          return ((index + 1) * 10) + 100
        },
        scale: .9
      })

      let tSideScroll = gsap.timeline({
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 10%",
          end: "bottom -250%",
          toggleActions: "play pause play none",
          scrub: true,
          //markers: true,
          pin: ".timeline"
        }
      })
      tSideScroll.to(numFirst, {
        opacity: 0,
        scale: .5,
        duration: .5,
        ease: "linear"
      })
      tSideScroll.to(nums, {
        transformOrigin: "top left",
        yPercent: -120,
        scale: 1.2,
        duration: 1,
        stagger: 1,
        ease: "linear"
      }, "<")
      tSideScroll.to(numContent, {
        yPercent: (index) => {
          return (index + 1) * 10
        },
        scale: 1,
        duration: 1,
        stagger: 1,
        ease: "linear"
      }, "<")
      tSideScroll.to(nums, {
        transformOrigin: "0% 0%",
        yPercent: -100,
        opacity: 0,
        scale: .5,
        duration: 1,
        stagger: 1,
        ease: "linear"
      }, "-=8")
      tSideScroll.to(numLast, {
        y: 0,
        scale: 1,
        duration: 1,
        ease: "linear"
      }, "-=.5")
      tSideScroll.to(growthTag, {
        opacity: 0,
        duration: .4
      }, "<")
    }

    //================================================================
    // PROJECT LIFECYCLE ANIMATION
    // ================================================================
    if (document.querySelector(".lifecycle") && window.innerWidth > 1024) {
      const lifecycleItem = gsap.utils.toArray(".fp-item")
      let bo = 0;

      lifecycleItem.forEach(item => {
        const lct = item.querySelector("h3")
        const lcc = item.querySelector(".self-end p")
        bo = lcc.offsetHeight * 2

        if (!item.classList.contains("active")) {
          gsap.to(lct, {
            rotation: -90,
            scale: .4,
            y: bo,
            transformOrigin: "0 0",
          })
          gsap.to(lcc, {
            x: 100,
            opacity: 0,
            transformOrigin: "0 0",
          })
        }
      })

      let i;

      for (i = 0; i < lifecycleItem.length; i++) {
        lifecycleItem[i].addEventListener('mouseenter', function () {

          const lcTitle = this.querySelector("h3")
          const lcCopy = this.querySelector(".self-end p")

          if (!this.classList.contains("active")) {
            let active = document.querySelectorAll(".fp-item.active");
            for (let j = 0; j < active.length; j++) {
              const activeTitle = active[j].querySelector("h3")
              const activeCopy = active[j].querySelector(".self-end p")
              bo = activeCopy.offsetHeight * 2

              active[j].classList.remove("active");
              gsap.to(activeTitle, {
                rotation: -90,
                scale: .4,
                y: bo,
                transformOrigin: "0 0",
                duration: .5,
                ease: "expo"
              })
              gsap.to(activeCopy, {
                x: 100,
                opacity: 0,
                transformOrigin: "0 0",
                duration: .5,
                ease: "expo"
              })
            }
          }

          this.classList.add("active");
          gsap.to(lcTitle, {
            rotation: 0,
            y: 0,
            scale: 1,
            transformOrigin: "0 0",
            duration: .5,
            ease: "expo"
          })
          gsap.to(lcCopy, {
            x: 0,
            opacity: 1,
            duration: .5,
            ease: "expo"
          })

        });
      }
    } else if (document.querySelector(".lifecycle") && window.innerWidth < 1024 && isAndroid()) {
      const cardItem = gsap.utils.toArray(".fp-item.stack")
      document.querySelector(".lifecycle").style.marginBottom = "35vh"

      //(nlPush)

      gsap.set(cardItem, {
        yPercent: (index) => {
          return (index + 1) * 10
        },
        scale: .9,
      })

      let mobileLifecycle = gsap.timeline({
        scrollTrigger: {
          trigger: ".flying-panes",
          start: "top 10%",
          end: "bottom -250%",
          toggleActions: "play pause play none",
          scrub: true,
          //markers: true,
          pin: ".lifecycle"
        }
      })

      mobileLifecycle.to(cardItem, {
        yPercent: (index) => {
          return -100 + ((index + 1) * 10)
        },
        scale: 1,
        stagger: .5,
        duration: .5,
        ease: "linear"
      })
    }

    //================================================================
    // SERVICES TIMELINE SCRIPT
    // ================================================================
    if (document.querySelector(".services .goal") && window.innerWidth > 768) {
      const goalItem = gsap.utils.toArray(".goal-boxes article")

      goalItem.forEach(gi => {
        const giContent = gi.querySelector(".inner")

        gi.addEventListener("mouseenter", function () {
          gsap.to(giContent, {
            height: "85%",
            duration: 1,
            ease: "elastic.out"
          })
        })
        gi.addEventListener("mouseleave", function () {
          gsap.to(giContent, {
            height: "100%",
            minHeight: 400,
            duration: 1,
            ease: "elastic.out"
          })
        })
      })

    }
    // ===============================================================================================================================
    // Inteligent form
    //=================================================================================================================================
    if(document.querySelector(".contact")) {
        const iButton = gsap.utils.toArray("#i-form button")
        const progressTag = document.querySelector(".progress-step div.active")
        const progressHex = document.querySelector(".progress-bar svg:nth-of-type(2) path")
        const stepBack = document.querySelector(".step-back")
        const newContainer = document.querySelector(".choice-selected")

        gsap.set(stepBack, { opacity: 0, pointerEvents: "none" })

        let prevTarget
        let nextTarget

        // CIRCLE BUTTON ARROW
        stepBack.addEventListener("mouseenter", function () {
          gsap.to(".step-back i", {
              scale: 1.25,
              duration: 1,
              ease: "elastic"
          })
        })
        stepBack.addEventListener("mouseleave", function () {
          gsap.to(".step-back i", {
              scale: 1,
              duration: 1,
              ease: "elastic"
          })
        })

        iButton.forEach(ib => {
        ib.addEventListener("click", function () {

            nextTarget = this.dataset.stepTarget // get new data for animating next step
            prevTarget = this.dataset.previous // get new data for animating previous step
            const thisWrap = ib.closest(".step-item") // Select this parent
            const newContainer = document.querySelector(".choice-selected") // new container buttons will travel to

            // FIND THIS TRAVEL BUTTON
            if (!ib.classList.contains("step-first")) {
              const buttonParent = ib.parentNode; // Current container holding the travel button
              buttonParent.setAttribute("data-btn-parent", `${prevTarget}`); // add track number to parent
              const travelButton = buttonParent.querySelector(".travel-btn") // select this travel button
              travelButton.setAttribute("data-btn-state", `${prevTarget}`);
              const state = Flip.getState(travelButton)

              setTimeout(function () {
                  (travelButton.parentNode === buttonParent ? newContainer : buttonParent).appendChild(travelButton)
                  Flip.from(state, {
                  duration: .5,
                  scale: true,
                  ease: "power4",
                  })
              }, 50)
            }

            stepBack.setAttribute("data-state", `${prevTarget}`); // add data attribute to btn so when we click we go step back in our screens
              gsap.to(stepBack, {
              opacity: 1,
              duration: .4,
              pointerEvents: "auto",
              ease : "power4"
            })
            // If we click we go to next screen
            if (thisWrap.classList.contains("active")) {
              thisWrap.classList.remove("active")
              const nextItem = document.querySelector('[data-step="' + nextTarget + '"]')
              nextItem.classList.add("active")
              //(prevTarget)
              }
              // progress bar
              gsap.to(progressTag, {
                scaleX: nextTarget * .2,
                duration: .4,
                ease: "power4"
              })

              // Check if is the last datastep
              if (document.querySelector('[data-step="5"]').classList.contains("active")) {
                progressHex.classList.add("last")
                gsap.to(".progress-total", { opacity: 1, duration: .4, ease: "power4" })
              }

          })
        })
        // STEP BUTTON CLICK END
        
        // RESET BUTTON CLICK =============================================================================
        document.querySelector("#resetForm").addEventListener("click", function () {

          location.reload()

        })

        // GO ONE SCREEN BACK
        stepBack.addEventListener("click", function () {
          prevTarget = this.dataset.state // previous data selected
          const currentItem = document.querySelector(".step-item.active") // select current active item
          let backValue = currentItem.dataset.previous
          currentItem.classList.remove("active") //  remove all active classes from items

          stepBack.setAttribute("data-state", `${backValue}`);
          let newItem = document.querySelector('[data-step="' + prevTarget + '"]') // find a new one with the back dataset and appear it in
  
          // RETURN THE TRAVEL BUTTON TO ITS ORIGINAL POSITION
          let stepBtn = document.querySelector('[data-btn-state="' + prevTarget + '"]') // select current last travel btn
          let originalContainer = document.querySelector('[data-btn-parent="' + prevTarget + '"]') // Select original travel button parent


          // ADDING ACTIVE CLASS TO NEW ITEM
          newItem.classList.add("active")

          if (!document.querySelector('[data-step="1"]').classList.contains("active")) {

              const state = Flip.getState(stepBtn)
              setTimeout(function () {
              (stepBtn.parentNode === originalContainer ? newContainer : originalContainer).appendChild(stepBtn)
              Flip.from(state, {
                  //paused: true,
                  scale: true,
                  duration: .5,
                  ease: "power4",
              })
              originalContainer.setAttribute("data-btn-parent", "0")
              }, 50)
          }


          if (document.querySelector('[data-step="1"]').classList.contains("active")) {
              gsap.to(stepBack, {
                opacity: 0,
                duration: .4,
                pointerEvents: "none",
                ease: "power4"
              })
          }
          if (!document.querySelector('[data-step="5"]').classList.contains("active")) {
              progressHex.classList.remove("last")
              gsap.to(".progress-total", { opacity: .3, duration: .4, ease: "power4" })
          }

          // progress bar
          gsap.to(progressTag, {
              scaleX: prevTarget * .2,
              duration: .4,
              ease: "power4"
          })

        })
        // GO ONE SCREEN BACK END
    }

    //================================================================
    // WORK THUMBNAIL SHAPE IMAGE ANIMATION
    // ================================================================
    if (document.querySelector(".work-listing")) {
      const workImg = document.querySelectorAll(".work-listing article:not(.selected)")

      workImg.forEach(wi => {
        const shapeContainer = wi.querySelector("figure i")
        const fig = wi.querySelector("figure:not(.nextP)")
        const link = wi.querySelector("a")
        let image = wi.querySelector(".work-listing article figure svg image")
        let boxAnim = wi.querySelector("svg mask path")
        gsap.set(image, {y: -40, filter: "brightness(10)"})
        
        // SET UP OUR SHAPES ///////////////
        const baseOverlay = "M0 20C0 8.95429 8.95431 0 20 0H640C651.046 0 660 8.95431 660 20V640C660 651.046 651.054 660 640.008 660C612.831 660 563.545 660 528 660C476.451 660 447.549 660 396 660C344.451 660 315.549 660 264 660C212.451 660 183.549 660 132 660C96.4552 660 47.169 660 19.9915 660C8.94585 660 0 651.046 0 640V20Z"
        const overlays = [
          "M0 20C0 8.95431 8.95431 0 20 0H640C651.046 0 660 8.95431 660 20V273.428C660 293.345 632.497 302.094 619.824 286.728C592.322 253.379 555.921 217 528 217C476.451 217 447.549 349.5 396 349.5C344.451 349.5 315.549 100 264 100C212.451 100 186.526 470 132 470C80.0222 470 7.19047 174.21 0.49727 146.566C0.130269 145.05 0 143.712 0 142.153V20Z", 
          "M0 20C0 8.95431 8.95431 0 20 0H640C651.046 0 660 8.95431 660 20V178.998C660 181.64 659.527 184.139 658.486 186.567C647.205 212.89 575.39 376 528 376C476.451 376 447.549 210.5 396 210.5C344.451 210.5 315.549 484 264 484C212.451 484 190 137.5 119 137.5C88.7592 137.5 62.6909 148.113 42.7269 160.298C26.6953 170.082 0 158.877 0 140.095V20Z", 
          "M0 20C0 8.95431 8.95431 0 20 0H640C651.046 0 660 8.95431 660 20V257.791C660 276.718 635.047 285.974 621.649 272.606C593.948 244.966 556.543 214 528 214C476.451 214 447.549 463.5 396 463.5C344.451 463.5 315.549 159 264 159C212.451 159 190 334.5 119 334.5C53.0114 334.5 6.89062 182.901 0.708624 161.5C0.213951 159.787 0 158.097 0 156.314V20Z", 
          "M0 20C0 8.95431 8.95431 0 20 0H640C651.046 0 660 8.95431 660 20V187.429C660 191.697 658.676 195.803 656.051 199.169C640.389 219.252 581.334 291 537 291C485.451 291 447.549 117 396 117C344.451 117 315.549 459 264 459C212.451 459 190 272 119 272C95.7351 272 74.9397 287.086 57.4934 307.37C42.755 324.507 0 314.697 0 292.095V20Z"
        ];
        let item = overlays[Math.floor(Math.random() * (overlays.length))];     
        
        // TIMELINE FOR ANIMATING THUMBNAILS
        let tl = gsap.timeline({paused: true})

        tl.to(boxAnim, {
          morphSVG: item,
          duration: .7,
          ease: "power4.in"
        })
        tl.to(image, {
          opacity: 1,
          y: 0,
          duration: 1.4,
          filter: "brightness(1)",
          ease: "power4.inOut"
        }, "<")
        tl.to(boxAnim, {
          morphSVG: baseOverlay,
          duration: .7,
          ease: "power4.out"
        }, "-=.7") 


        // SPLIT TITLE CHATS
        let thumbTitle = wi.querySelector(".thumb-title")

        const animFunction = function () {
          tl.play()
        }

        // MAKE THE SHAPE PLAY IN VIEWPORT
        let imgBgAnimation = gsap.timeline({
          scrollTrigger: {
            trigger: wi,
            start: "top 70%",
            //markers: true,
          }
        })

        imgBgAnimation.to(shapeContainer, {
          opacity: 1,
          duration: .01,
          onComplete: animFunction
        })

        // SPLIT TEXT HOVER ON THE HOME PAGE AND NOT MOBILE
        if(!isMobile()) {
          let titSplit = new SplitText(thumbTitle, { type: "chars" })
          gsap.set(titSplit.chars, {yPercent: 105})
          let animTitle = gsap.timeline({paused: true})
          animTitle.to(titSplit.chars, {
            yPercent: 0,
            stagger: {
              amount: .1
            },
            duration: .3,
            ease: "power4.inOut"
          })
          animTitle.to(fig, {
            y: -10,
            duration: .3,
            ease: "power4.inOut"
          }, "<")

          link.addEventListener("mouseenter", function() {
            if(animTitle.isActive()) {
              return
            }
            animTitle.restart()
          })
          link.addEventListener("mouseleave", function() {
            animTitle.reverse()
          })
        }

      })

    }

    // ========================================================================================================================
    // PLAY PAUSE VIDEO IN VIEWPORT 
    // ========================================================================================================================
    if (document.querySelector("video")) {
      function playPauseVideo() {
        let videos = document.querySelectorAll("video");
        videos.forEach((video) => {
          // We can only control playback without insteraction if video is mute
          video.muted = true;
          // Play is a promise so we need to check we have it
          let playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise.then((_) => {
              let observer = new IntersectionObserver(
                (entries) => {
                  entries.forEach((entry) => {
                    if (
                      entry.intersectionRatio !== 1 &&
                      !video.paused
                    ) {
                      video.pause();
                      // console.log("pause")
                    } else if (video.paused) {
                      video.play();
                      // console.log("play")
                    }
                  });
                }, {
                threshold: 0.2
              }
              );
              observer.observe(video);
            });
          }
        });
      }
      // And you would kick this off where appropriate with:
      playPauseVideo();
    }

    //================================================================
    // BIG FADE TEXT ANIMATION ON SCROLL
    //================================================================
    if (document.querySelector(".big-fade")) {

      const bfItem = gsap.utils.toArray(".big-fade")

      bfItem.forEach(bf => {
        let bigSplit = new SplitText(bf, { type: "chars" })

        let bfAnim = gsap.timeline({
          scrollTrigger: {
            trigger: bf,
            start: "top 90%",
            end: "top top",
            toggleActions: "play reverse reverse none",
            scrub: true,
            //markers: true,
          }
        })
        bfAnim.from(bigSplit.chars, {
          yPercent: 100,
          scale: 2,
          color: "#000",
          stagger: .1,
          duration: 1,
          ease: "power2",
        })
      })
    }

    //================================================================
    // AWARDS HOME SECTION
    //================================================================
    if (document.querySelector("#awards") && !isMobile()) {
      const awardsTag = document.querySelector("#awards")
      const spanTag = gsap.utils.toArray(".awards-scroll span")
      const imgSmall = gsap.utils.toArray(".awards-scroll .frame")
      const awdContent = document.querySelector("#awards .awards-content")
      gsap.set(awdContent, { y: "130%", })
      gsap.set(imgSmall, {
        rotate: function (i) {
          return (i * 0 + 1) * ((Math.random() < 0.5 ? -1 : 1) * 20)
        },
        scale: .8,
        y: function (i) {
          return 50 + (i * 20) + "vh"
        }
      })
      let awardScroll = gsap.timeline({
        scrollTrigger: {
          trigger: awardsTag,
          start: "top 80%",
          end: 'bottom -=200%',
          toggleActions: "play reverse play reverse",
          anticipatePin: 1,
          scrub: .2,
        }
      })

      ScrollTrigger.create({
        trigger: awardsTag,
        start: "top 20%",
        end: 'bottom -=200%',
        toggleActions: "play reverse play reverse",
        pin: true,
        scrub: false,
      })

      awardScroll.to(spanTag, {
        y: 0,
        color: "#171A37",
        scale: 1,
        duration: 4,
        stagger: {
          amount: 3,
        },
        ease: "power1.Out"
      })
      awardScroll.to(imgSmall, {
        y: "-85vh",
        duration: 4,
        scale: 1,
        rotate: function (i) {
          return (i * 0 + 1) * ((Math.random() < 0.5 ? -1 : 1) * 20)
        },
        stagger: {
          amount: 3
        },
        ease: "linear"
      }, "<")
      awardScroll.to(awdContent, {
        y: "0%",
        duration: 2,
        ease: "linear"
      }, "-=2")

    }

    // ===============================================================================================================================
    // WORK DETAIL =========================================================================================================
    // ===============================================================================================================================
    if (document.querySelector(".work")) {
      const workSlider = document.querySelector(".work-slider")
      const workSwitch = document.querySelector("#work-switch")
      const thumbItem = document.querySelectorAll(".layout-b article")
      const animateLayout = gsap.timeline()

      const closeIco = document.querySelector("#work-switch .close-icon")
      const ico1 = document.querySelector("#work-switch .icon")
      const icoDots = gsap.utils.toArray("#work-switch .icon > div:first-of-type i")

      // GET THE POSITION WHERE WE WANT OUR THUMBS TO SCALE IN
      const thumbAnim = function () {
        thumbItem.forEach(th => {
          const thisImg = th.querySelector("figure")
          const thisTitle = th.querySelector("h2")
          th.addEventListener("mouseenter", function () {
            th.classList.add("hovered")
            let thisID = th.dataset.thumb
            MainThreeScene.changeTexture(thisID, false)
            gsap.to(thisImg, { scale: 1, duration: .4, ease: "power4" })
            gsap.to(thisTitle, { opacity: 1, y: "135%", duration: .4, ease: "power4" })
          })
          th.addEventListener("mouseleave", function () {
            th.classList.remove("hovered")
            gsap.to(thisImg, { scale: .8, duration: .4, ease: "power4" })
            gsap.to(thisTitle, { opacity: 0, y: "160%", duration: .4, ease: "power4" })
          })
          th.addEventListener("click", function () {
            gsap.to(glContainer, {
              y: "0%",
              duration: 1,
              ease: customEaseC
            })
          })
        })
      }
      let targetX = window.innerWidth / 2
      let targetY = "4.5vw"
      window.addEventListener("resize", function () {
        let centerX = window.innerWidth
      })
      const thumbsIn = gsap.timeline({ paused: true })
      const thumbsOut = gsap.timeline({ paused: true })
      
      if(!isMobile()) {
        // THUMBS IN
        thumbsIn.fromTo(glContainer, {
          y: "0%",
          duration: 1,
          ease: customEaseC
        },{
          y: "-13%",
          duration: 1,
          ease: customEaseC
        })
        thumbsIn.to(".open-thumbs", {
          opacity: 0,
          y: "-1em",
          duration: 1,
          ease: customEaseC
        }, "<")
        thumbsIn.to(".close-thumbs", {
          opacity: 1,
          duration: 1,
          ease: customEaseC
        }, "<")
        thumbsIn.to(ico1, {
          height: "2.5em",
          duration: 1,
          ease: customEaseC
        }, "<")
        thumbsIn.to(".layout-b article", {
          x: 0,
          y: 0,
          transformOrigin: "50% 100%",
          stagger: {
            amount: .2,
            from: "center"
          },
          scale: 1,
          duration: 1,
          pointerEvents: "auto",
          ease: customEaseC,
        }, "<")
        thumbsIn.to(icoDots, {
          opacity: 0,
          y: 10,
          scale: 0,
          stagger: {
            amount: .1,
            from: "center"
          },
          duration: .5,
          ease: customEaseC,
        }, "<")
        thumbsIn.to(closeIco, {
          opacity: 1,
          rotateZ: -135,
          duration: .5,
          ease: customEaseC,
          onComplete: thumbAnim
        }, "<.2")

        // THUMBS OUT
        thumbsOut.to(glContainer, {
          y: "0%",
          duration: 1,
          ease: customEaseC
        })
        thumbsOut.to(".open-thumbs", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: customEaseC
        }, "<")
        thumbsOut.to(".close-thumbs", {
          opacity: 0,
          duration: 1,
          ease: customEaseC
        }, "<")
        thumbsOut.to(ico1, {
          height: "1.5em",
          duration: 1,
          ease: customEaseC
        }, "<")
        thumbsOut.to(".layout-b article", {
          x: (index, target) => {
            // console.log(index, target);
            return (targetX - target.getBoundingClientRect().left - (target.getBoundingClientRect().width / 2))
          },
          y: targetY,
          transformOrigin: "50% 100%",
          stagger: {
            amount: .2,
            from: "center"
          },
          scale: 0,
          pointerEvents: "none",
          duration: 1,
          ease: customEaseC
        }, "<")
        thumbsOut.to(closeIco, {
          opacity: 0,
          rotateZ: 90,
          duration: .5,
          ease: customEaseC,
        }, "<")
        thumbsOut.to(icoDots, {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: {
            amount: .1,
            from: "center"
          },
          duration: .5,
          ease: customEaseC,
        }, "<.2")
      } else {
        // THUMBS IN
        thumbsIn.to(glContainer, {
          y: "-13%",
          duration: 1,
          ease: customEaseC
        })
        thumbsIn.to(".open-thumbs", {
          opacity: 0,
          duration: 1,
          ease: customEaseC
        }, "<")
        thumbsIn.to(".close-thumbs", {
          opacity: 1,
          duration: 1,
          ease: customEaseC
        }, "<")
        thumbsIn.to(ico1, {
          height: "3em",
          duration: 1,
          ease: customEaseC
        }, "<")
        thumbsIn.to(".layout-b article", {
          x: 0,
          y: -50,
          transformOrigin: "50% 100%",
          stagger: {
            amount: .2,
            from: "center"
          },
          scale: 1,
          duration: 1,
          pointerEvents: "auto",
          ease: customEaseC,
        }, "<")
        thumbsIn.to(icoDots, {
          opacity: 0,
          y: 10,
          scale: 0,
          stagger: {
            amount: .1,
            from: "center"
          },
          duration: .5,
          ease: customEaseC,
        }, "<")
        thumbsIn.to(closeIco, {
          opacity: 1,
          rotateZ: -135,
          duration: .5,
          ease: customEaseC,
          onComplete: thumbAnim
        }, "<.2")

        // THUMBS OUT
        thumbsOut.to(glContainer, {
          y: "0%",
          duration: 1,
          ease: customEaseC
        })
        thumbsOut.to(".open-thumbs", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: customEaseC
        }, "<")
        thumbsOut.to(".close-thumbs", {
          opacity: 0,
          duration: 1,
          ease: customEaseC
        }, "<")
        thumbsOut.to(ico1, {
          height: "2em",
          duration: 1,
          ease: customEaseC
        }, "<")
        thumbsOut.to(".layout-b article", {
          x: (index, target) => {
            // console.log(index, target);
            return (targetX - target.getBoundingClientRect().left - (target.getBoundingClientRect().width / 2))
          },
          y: targetY,
          transformOrigin: "50% 100%",
          stagger: {
            amount: .2,
            from: "center"
          },
          scale: 0,
          pointerEvents: "none",
          duration: 1,
          ease: customEaseC
        }, "<")
        thumbsOut.to(closeIco, {
          opacity: 0,
          rotateZ: 90,
          duration: .5,
          ease: customEaseC,
        }, "<")
        thumbsOut.to(icoDots, {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: {
            amount: .1,
            from: "center"
          },
          duration: .5,
          ease: customEaseC,
        }, "<.2")
      }

      // SET THUMBS AS CLOSED BY DEFALULT /////////////////////////////////////////////////////////
      gsap.set(".layout-b article", {
        x: (index, target) => {
          // console.log(index, target);
          return (targetX - target.getBoundingClientRect().left - (target.getBoundingClientRect().width / 2))
        },
        y: targetY,
        scale: 0
      })

      const spreadThumbs = function () {
        thumbsIn.restart()
      }
      const closeThumbs = function () {
        thumbsOut.restart()
      }

      // VARS
      let curPage = 0
      let pageTotal = 9
      let slideCur = 0
      let slideNext = 0
      let slidePrev = 0

      // PAGER
      let itemCur = document.querySelector("#slide-cur")
      let itemNext = document.querySelector("#slide-next")
      let itemPrev = document.querySelector("#slide-prev")

      // titles
      let titleCur = document.querySelector("#curTitle")
      let titleNext = document.querySelector("#nextTitle")
      let titlePrev = document.querySelector("#prevTitle")
      let slideTitle = [
        "<a href='../work/slingshot' class='circle-link'><div class='circle-icon'><i></i><span><img src='../img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='../img/svg/arrow-hex.svg'></span></div>Sling Shot</a>",
        "<a href='../work/opositive' class='circle-link'><div class='circle-icon'><i></i><span><img src='../img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='../img/svg/arrow-hex.svg'></span></div>O Positive</a>",
        "<a href='../work/valaclava' class='circle-link'><div class='circle-icon'><i></i><span><img src='../img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='../img/svg/arrow-hex.svg'></span></div>Valaclava</a>",
        "<a href='../work/hoboken-yogi' class='circle-link'><div class='circle-icon'><i></i><span><img src='../img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='../img/svg/arrow-hex.svg'></span></div>Hoboken Yogi</a>",
        "<a href='../work/ocean-agency' class='circle-link'><div class='circle-icon'><i></i><span><img src='../img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='../img/svg/arrow-hex.svg'></span></div>Ocean Agency</a>",
        "<a href='../work/beemok' class='circle-link'><div class='circle-icon'><i></i><span><img src='../img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='../img/svg/arrow-hex.svg'></span></div>Beemok Col</a>",
        "<a href='../work/hudson-properties' class='circle-link'><div class='circle-icon'><i></i><span><img src='../img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='../img/svg/arrow-hex.svg'></span></div>Hudson Prop.</a>",
        "<a href='../work/helias' class='circle-link'><div class='circle-icon'><i></i><span><img src='../img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='../img/svg/arrow-hex.svg'></span></div>Helias Oils</a>",
        "<a href='../work/modern-md' class='circle-link'><div class='circle-icon'><i></i><span><img src='../img/svg/arrow-hex.svg' alt='arrow icon with hexagon tip'><img src='../img/svg/arrow-hex.svg'></span></div>Modern MD</a>"
      ]
      let serviceCur = document.querySelector("#curService")
      let serviceNext = document.querySelector("#nextService")
      let servicePrev = document.querySelector("#prevService")
      let slideService = [
        "<li>Website Design</li><li>Animations</li><li>Creative development</li><li>SEO</li> ",
        "<li>Website Design</li><li>Animations</li><li>Creative Development</li><li>SEO</li> ",
        "<li>Website Design</li><li>Development</li><li>Shopify</li><li>SEO</li> ",
        "<li>Website Design</li><li>Animations</li><li>Creative Development</li><li>SEO</li> ",
        "<li>Website Design</li><li>Animations</li><li>Creative Development</li><li>Marketing</li> ",
        "<li>Website Design</li><li>Development</li><li>SEO</li> ",
        "<li>Website Design</li><li>Animations</li> ",
        "<li>Website Design</li><li>Animations</li><li>Creative Development</li><li>Shopify</li> ",
        "<li>Website Design</li><li>Development</li><li>Marketing, SEO</li> ",
      ]

      let slideImg = gsap.utils.toArray(".work-slider .slider-inner figure img");
      let slideLeftAnim = gsap.timeline()
      let imgIn = gsap.timeline()
      let imgOut = gsap.timeline()

      const pagerUpdate = function () {
        itemPrev.innerHTML = "00" + slidePrev
        itemCur.innerHTML = "00" + slideCur
        itemNext.innerHTML = "00" + slideNext
        
      }

      const titleUpdate = function () {
        titlePrev.innerHTML = slideTitle[slidePrev - 1]
        titleCur.innerHTML = slideTitle[slideCur - 1]
        titleNext.innerHTML = slideTitle[slideNext - 1]

        // trigger hover
          let circleIcon = titleCur.querySelector(".circle-icon i")
          titleCur.addEventListener("mouseenter", function() {
            gsap.to(circleIcon, {
              scale: 1.25,
              duration: 1,
              ease: "elastic"
            })
          })
          titleCur.addEventListener("mouseleave", function() {
            gsap.to(circleIcon, {
              scale: 1,
              duration: 1,
              ease: "elastic"
            })
          })
      }

      const serviceUpdate = function () {
        servicePrev.innerHTML = slideService[slidePrev - 1]
        serviceCur.innerHTML = slideService[slideCur - 1]
        serviceNext.innerHTML = slideService[slideNext - 1]
      }

      // END VARS /////////////////////////////////////////////////////////////////////


      // SET PREVIOUS SLIDE/////////////////////////////////////////////////////////////////////////
      const prevSlide = function () {

        if (slideLeftAnim.isActive()) { return; } // DO NOT ANIMATE WHEN ANIMATION IS NOT COMPLETE

        // GET AND SET GLOBAL PAGE COUNT
        curPage = curPage - 1
        if (curPage < 0) {
          curPage = 8
        }

        // UPDATE PAGE IDs
        slidePrev = curPage
        slideCur = curPage + 1
        slideNext = curPage + 2
        if (slideNext > pageTotal) {
          slideNext = 1
        }
        if (slidePrev < 1) {
          slidePrev = 9
        }
        // console.log(slidePrev, slideCur, slideNext)

        // Change texture + do animation 
        MainThreeScene.changeTexture(curPage, true)

        // UPDATE LEFT PART //////////////////////////////
        const slideNo = function () {
          const updateSelf = function () {
            pagerUpdate()
            titleUpdate()
            serviceUpdate()
          }
          slideLeftAnim.to("#slide-count li", {
            y: "0%",
            duration: 0.001,
          })
          slideLeftAnim.to("#work-titles h2", {
            y: "0%",
            rotateZ: 0,
            duration: 0.001,
            // onComplete: updateSelf
          })
          slideLeftAnim.to("#work-titles h2", {
            y: "0%",
            rotateZ: 0,
            duration: 0.001,
            // onComplete: updateSelf
          })
          slideLeftAnim.to(".work-service ul", {
            y: "0%",
            duration: 0.001,
            onComplete: updateSelf
          })

        }

        // CHANGE IMG
        slideImg.forEach(ic => {
          let thisData = ic.dataset.page
          if (ic.classList.contains("selected")) {

            ic.classList.remove("selected")
            imgIn.to(ic, {
              zIndex: 1,
              transformOrigin: "50% 0%",
              duration: .001,
              ease: "none"
            })
            imgIn.to(ic, {
              scale: 1.5,
              opacity: 0,
              duration: 1,
              ease: "power4"
            })
            imgIn.to(ic, {
              scale: 1,
              duration: .001,
              ease: "linear"
            })
          }

          if (thisData == curPage) {
            ic.classList.add("selected")
            imgOut.to(ic, {
              transformOrigin: "50% 100%",
              opacity: 0,
              zIndex: 10,
              scale: 1.35,
              duration: .001,
              ease: "none"
            })
            imgOut.to(ic, {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power4"
            })
          }
        })

        // RUN ANIMATION
        slideLeftAnim.to("#work-titles h2", {
          y: "100%",
          duration: 1,
          ease: "power4",
        })
        slideLeftAnim.to("#work-titles h2 .circle-icon", {
          scale: 0,
          duration: .25,
          ease: "power4",
        }, "<")
        slideLeftAnim.to("#work-titles #curTitle", {
          transformOrigin: "0 0",
          rotateZ: 20,
          duration: 1,
          ease: "power4",
        }, "<")
        slideLeftAnim.fromTo("#work-titles #prevTitle", {
          transformOrigin: "0 0",
          rotateZ: -20,
        }, {
          transformOrigin: "0 0",
          rotateZ: 0,
          duration: 1,
          ease: "power4",
        }, "<")
        slideLeftAnim.to(".work-service ul", {
          y: "100%",
          duration: 1,
          ease: "power4"
        }, "<")
        slideLeftAnim.to("#slide-count li", {
          y: "100%",
          stagger: -.1,
          duration: 1,
          ease: "power4",
          onComplete: slideNo
        }, "<")
        slideLeftAnim.to("#work-titles h2 .circle-icon", {
          scale: 1,
          duration: .4,
          ease: "power4",
        },"-=.7")

      }

      // SET NEXT SLIDE///////////////////////////////////////////////////////////////////////////
      const nextSlide = function () {
        if (slideLeftAnim.isActive()) { return; }

        // GET CURRENT PAGE ID
        curPage = curPage + 1
        if (curPage > pageTotal - 1) {
          curPage = 0
        }

        // UPDATE PAGE IDs
        slidePrev = curPage
        slideCur = curPage + 1
        slideNext = curPage + 2
        if (slideNext > pageTotal) {
          slideNext = 1
        }
        if (slidePrev < 1) {
          slidePrev = 9
        }
        // console.log(slidePrev, slideCur, slideNext)

        // Change texture + do animation
        MainThreeScene.changeTexture(curPage, false)
        // UPDATE LEFT PART  ////////
        const slideNo = function () {
          const updateSelf = function () {
            pagerUpdate()
            titleUpdate()
            serviceUpdate()
          }
          slideLeftAnim.to("#slide-count li", {
            y: "0%",
            duration: 0.001,
          })
          slideLeftAnim.to("#work-titles h2", {
            y: "0%",
            rotateZ: 0,
            duration: 0.001,
          })
          slideLeftAnim.to(".work-service ul", {
            y: "0%",
            duration: 0.001,
            onComplete: updateSelf
          })
        }

        // CHANGE IMG
        slideImg.forEach(ic => {
          let thisData = ic.dataset.page
          if (ic.classList.contains("selected")) {

            ic.classList.remove("selected")
            imgIn.to(ic, {
              zIndex: 1,
              transformOrigin: "50% 100%",
              duration: .001,
              ease: "none"
            })
            imgIn.to(ic, {
              scale: 1.5,
              opacity: 0,
              duration: 1,
              ease: "power4"
            })
            imgIn.to(ic, {
              scale: 1,
              duration: .001,
              ease: "linear"
            })
          }

          if (thisData == curPage) {
            ic.classList.add("selected")
            imgOut.to(ic, {
              transformOrigin: "50% 0%",
              opacity: 0,
              zIndex: 10,
              scale: 1.35,
              duration: .001,
              ease: "none"
            })
            imgOut.to(ic, {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power4"
            })
          }
        })

        // RUN OUR ANIMATION /////////////////////
        slideLeftAnim.to("#work-titles h2", {
          y: "-100%",
          duration: 1,
          ease: "power4",
          // onComplete: slideNo
        })
        slideLeftAnim.to("#work-titles h2 .circle-icon", {
          scale: 0,
          duration: .25,
          ease: "power4",
        }, "<")
        slideLeftAnim.to("#work-titles #curTitle", {
          transformOrigin: "0 0",
          rotateZ: -20,
          duration: 1,
          ease: "power4",
          // onComplete: slideNo
        }, "<")
        slideLeftAnim.fromTo("#work-titles #nextTitle", {
          transformOrigin: "0 0",
          rotateZ: 20,
        }, {
          transformOrigin: "0 0",
          rotateZ: 0,
          duration: 1,
          ease: "power4",
        }, "<")
        slideLeftAnim.to(".work-service ul", {
          y: "-100%",
          duration: 1,
          ease: "power4"
        }, "<")
        slideLeftAnim.to("#slide-count li", {
          y: "-100%",
          // stagger: .1,
          duration: 1,
          ease: "power4",
          onComplete: slideNo
        }, "<")
        slideLeftAnim.to("#work-titles h2 .circle-icon", {
          scale: 1,
          duration: .4,
          ease: "power4",
        }, "-=.5")
      }

      // WHEEL DIRECTION SLIDE CHANGE //////////////////////////////////////////////////////////////////////

      window.addEventListener('wheel', function (event) {
        if (!workSlider.classList.contains("muted")) {
            
            // DO NOT TRACK MOUSE WHEEL ON OTHER PAGES
            if (!document.querySelector(".content").classList.contains("work")) {
              return;
            }

            // SCROLL UP//////////////
            if (event.deltaY < 0) {
              prevSlide()
             
            }

            // SCROLL DOWN ///////////
            else if (event.deltaY > 0) {
              nextSlide()
            }

        } else {
              return

        }
      });


      // TOUCH EVENT SLIDE CHANGE ///////////////////////////////////////////////////////////////////////////
      const slideWrap = document.querySelector(".work-slider")
      slideWrap.addEventListener('touchstart', handleTouchStart, false);
      slideWrap.addEventListener('touchmove', handleTouchMove, false);

      var xDown = null;
      var yDown = null;

      function getTouches(evt) {
        return evt.touches ||             // browser API
          evt.originalEvent.touches; // jQuery
      }

      function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
      };

      function handleTouchMove(evt) {
        if (!xDown || !yDown) {
          return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
          if (xDiff > 0) {
            nextSlide()
          } else {
            prevSlide()
          }
        } else {
          if (yDiff > 0) {
            /* up swipe */
          } else {
            /* down swipe */
          }
        }
        /* reset values */
        xDown = null;
        yDown = null;
      };


      // UPDATE ALL SLIDER ELEMENTS ON THUMBNAIL HOVER
      // HANDLE SWITCH LAYOUT FUNCTION /////////////////////////////////////////
      workSwitch.addEventListener("click", function () {
        if (thumbsIn.isActive()) { return; }

        if (this.classList.contains("switched")) {
          this.classList.remove("switched")
          workSlider.classList.remove("muted")
          closeThumbs()
          thumbsOut.to("[data-layout='1']", { opacity: 1, pointerEvents: "auto", duration: .5, ease: "power4.inOut" }, "<.65")
          
          // update our slide items
            MainThreeScene.changeTexture(curPage, false)

        } else {
          if (thumbsOut.isActive()) { return; }
          this.classList.add("switched")
          workSlider.classList.add("muted")
          animateLayout.to("[data-layout='1']", { opacity: 0, pointerEvents: "none", duration: .5, ease: "power4.inOut" })
          spreadThumbs()
        }


      })
    }


    // ===============================================================================================================================
    // WORK DETAIL PAGE SCRIPTS =========================================================================================================
    // ===============================================================================================================================
    if (document.querySelector(".work-detail")) {
        // HOVER ON THE NEXT PROJECT IN PROJECT DETAIL
        const nTitle = document.querySelector(".next-project h3 a")
        const nextImage = document.querySelector(".next-project figure")
        nTitle.addEventListener("mouseenter", function(){
          nextImage.classList.add("hovering")
          nTitle.classList.add("hovering")
          gsap.to(nextImage, {
            x: 10,
            duration: .5,
            ease: "power4"
          })
        })
        nTitle.addEventListener("mouseleave", function(){
          nextImage.classList.remove("hovering")
          nTitle.classList.remove("hovering")
          gsap.to(nextImage, {
            x: 0,
            duration: .5,
            ease: "power4"
          })
        })
        nextImage.addEventListener("mouseenter", function(){
          nextImage.classList.add("hovering")
          nTitle.classList.add("hovering")
          gsap.to(nextImage, {
            x: 10,
            duration: .5,
            ease: "power4"
          })
        })
        nextImage.addEventListener("mouseleave", function(){
          nextImage.classList.remove("hovering")
          nTitle.classList.remove("hovering")
          gsap.to(nextImage, {
            x: 0,
            duration: .5,
            ease: "power4"
          })
        })
      if (!isMobile()) {
        const splitArea = gsap.utils.toArray(".split-screens")
        const cursorTag = document.querySelector("#split-cursor")

        function splitCursor() {
          let distX = mouseX - ballX
          let distY = mouseY - ballY

          ballX = ballX + (distX * ballSpeed)
          ballY = ballY + (distY * ballSpeed)

          // const centerHeight = cursorTag.offsetHeight / 2
          // const centerWidth = cursorTag.offsetWidth / 2
          gsap.to(cursorTag, {
            y: ballY,
            x: ballX,
            ease: "none",
            duration: .15
          })
          requestAnimationFrame(splitCursor)
        }
        splitCursor()

        // SPLIT SCREEN CLICK FUNCTION ===========================================================
        splitArea.forEach(sa => {
          const splitItem = sa.querySelectorAll(".split-item")
          const splitLeft = sa.querySelector(".split-left")
          const splitRight = sa.querySelector(".split-right")

          splitItem.forEach(splitItem => {

            // APPEND CURSOR
            splitItem.addEventListener("mouseenter", function () {
              if (!this.classList.contains("disabled")) {
                cursorTag.classList.add("moving")
                splitItem.addEventListener("mousemove", function (e) {
                  mouseX = e.pageX
                  mouseY = e.clientY
                })
                gsap.to(cursorTag, { scale: 1, duration: .35, ease: "expo" })
              }

              if (!splitItem.classList.contains("selected")) {
                cursorTag.classList.remove("active")
              }
              else {
                cursorTag.classList.add("active")
              }
            })
            splitItem.addEventListener("mouseleave", function () {
              cursorTag.classList.remove("moving")
              gsap.to(cursorTag, { scale: 0, duration: .35, ease: "expo" })
            })

            const scrollTarget = splitItem.dataset.scroll
            //(scrollTarget)
            if (!splitItem.classList.contains("disabled")) {
              splitItem.addEventListener("click", function () {
                if (!splitItem.classList.contains("selected")) {
                  smoother.scrollTo('[data-target="' + scrollTarget + '"]', true, "top 15%")
                }
              })
            }
          })

          splitItem.forEach(si => {
            si.addEventListener("click", function () {
              const sl = si.closest(".split-left")
              const sr = si.closest(".split-right")

              if (!si.classList.contains("selected") && !si.classList.contains("disabled") && sl) {
                splitRight.classList.remove("selected")
                si.classList.add("selected")
                cursorTag.classList.add("active")

                // (sl)
                gsap.to(splitRight, {
                  x: "20.833vw",
                  duration: 1,
                  ease: customEaseC
                })
                gsap.to(sl, {
                  x: "20.833vw",
                  delay: .1,
                  duration: 1,
                  ease: customEaseC
                })
              } else if (si.classList.contains("selected") && !si.classList.contains("disabled") && sl) {
                si.classList.remove("selected")
                cursorTag.classList.remove("active")

                gsap.to(splitRight, {
                  x: "0",
                  delay: .1,
                  duration: 1,
                  ease: customEaseC
                })
                gsap.to(sl, {
                  x: "0",
                  duration: 1,
                  ease: customEaseC
                })
              }
              else if (!si.classList.contains("selected") && !si.classList.contains("disabled") && sr) {
                splitLeft.classList.remove("selected")
                si.classList.add("selected")
                cursorTag.classList.add("active")

                // (sr)
                gsap.to(splitLeft, {
                  x: "-20.833vw",
                  duration: 1,
                  ease: customEaseC
                })
                gsap.to(sr, {
                  x: "-20.833vw",
                  delay: .1,
                  duration: 1,
                  ease: customEaseC
                })
              } else if (si.classList.contains("selected") && !si.classList.contains("disabled") && sr) {
                si.classList.remove("selected")
                cursorTag.classList.remove("active")
                gsap.to(splitLeft, {
                  x: "0",
                  delay: .1,
                  duration: 1,
                  ease: customEaseC
                })
                gsap.to(sr, {
                  x: "0",
                  duration: 1,
                  ease: customEaseC
                })
              }

            })
          })
        })
      }

      // PROJECT GALLERY =====  ==================================================================
      // Base value for ongoing functions

      let pageLeftNum = 0
      let pageRightNum = 1

      const leftGallery = gsap.utils.toArray("#project-gallery figure")
      const galleryBtn = document.querySelector("#gallery-btn")
      const galleryBtnBg = document.querySelector("#gallery-btn i")
      let imgCount = leftGallery.length

      // (imgCount)

      // BTN HOVER ANIMAITON
      galleryBtn.addEventListener("mouseenter", function () {
        const btnHover = gsap.timeline()
        btnHover.to(galleryBtnBg, {
          scale: 1.1,
          duration: 1,
          ease: "elastic"
        })
      })
      galleryBtn.addEventListener("mouseleave", function () {
        const btnHover = gsap.timeline()
        btnHover.to(galleryBtnBg, {
          scale: 1,
          duration: 1,
          ease: "elastic"
        })
      })

      // Make next function to increase a page number
      const slideIn = gsap.timeline()
      const slideOut = gsap.timeline()
      const slideInRight = gsap.timeline()
      const slideOutRight = gsap.timeline()

      // change left slide
      function nextLeft(e) {

        // EXIT IF ANIMATION IS ACTIVE
        if (slideInRight.isActive()) { return; }
        if (slideOutRight.isActive()) { return; }

        // CLEAR TIMELINE
        slideIn.clear();
        slideOut.clear();

        // GET SLIDE ID
        pageLeftNum = pageLeftNum + 2
        if (pageLeftNum > imgCount - 1) {
          pageLeftNum = 0
        }

        // SELECT SLIDES
        let slideLeft = document.querySelectorAll(".pg-left [data-list]");

        //  SLIDE LEFT CONSTRUCTOR
        slideLeft.forEach(s => {
          let thisData = s.dataset.list
          if (s.classList.contains("selected")) {

            s.classList.remove("selected")
            slideIn.to(s, {
              zIndex: 1,
              duration: .001,
              ease: "none"
            })
            slideIn.to(s, {
              scale: 1.5,
              y: "75%",
              rotateZ: 15,
              duration: 1,
              ease: customEaseC
            })
            slideIn.to(s, {
              scale: 1,
              y: "-100%",
              rotateZ: 0,
              duration: .001,
              ease: "linear"
            })
          }

          if (thisData == pageLeftNum) {
            s.classList.add("selected")
            slideOut.to(s, {
              zIndex: 10,
              scale: 1.35,
              duration: .001,
              ease: "none"
            })
            slideOut.to(s, {
              y: 0,
              scale: 1,
              duration: 1,
              ease: customEaseC
            })
          }
        })
      }

      // CHANGE RIGHT SLIDE
      function nextRight(e) {

        // EXIT IF ANIMATION IS ACTIVE
        if (slideInRight.isActive()) { return; }
        if (slideOutRight.isActive()) { return; }

        // CLEAR TIMELINE
        slideInRight.clear();
        slideOutRight.clear();

        // GET SLIDE ID
        pageRightNum = pageRightNum + 2
        if (pageRightNum > imgCount - 1) {
          pageRightNum = 1
        }

        // SELECT SLIDES
        let slideRight = document.querySelectorAll(".pg-right [data-list]");

        //  SLIDE LEFT CONSTRUCTOR
        slideRight.forEach(s => {
          let thisData = s.dataset.list
          if (s.classList.contains("selected")) {

            s.classList.remove("selected")
            slideInRight.to(s, {
              zIndex: 1,
              duration: .001,
              ease: "none"
            })
            slideInRight.to(s, {
              scale: 1.5,
              y: "75%",
              rotateZ: 15,
              delay: .05,
              duration: 1,
              ease: customEaseC
            })
            slideInRight.to(s, {
              scale: 1,
              y: "-100%",
              rotateZ: 0,
              duration: .001,
              ease: "linear"
            })
          }

          if (thisData == pageRightNum) {
            s.classList.add("selected")
            slideOutRight.to(s, {
              zIndex: 10,
              scale: 1.35,
              duration: .001,
              ease: "none"
            })
            slideOutRight.to(s, {
              y: 0,
              scale: 1,
              delay: .05,
              duration: 1,
              ease: customEaseC
            })
          }
        })
      }

      // SET UP TIMELINE FOR SLIDE CHANGE
      // CHANGE SLIDES

      // TRIGGER SLIDE CHANGE
      galleryBtn.addEventListener('click', () => {
        nextLeft()
        nextRight()
      })
    }

    // FORM ===========================================================================================================
    if(document.querySelector("#intake-form")) {

        // handle form animation
        let tl = gsap.timeline({paused: true})
        const resetBtn = document.querySelector("#resetForm")
        resetBtn.addEventListener("click", function() {
          tl.reverse()
        })
        gsap.set("#success-message", {y: -100})

        tl.to("#i-form", {opacity: 0, y: 100, pointerEvents: "none", duration: 1, ease: "expo.inOut"})
        tl.to("#success-message", {opacity: 1, y: 0, pointerEvents: "auto", duration: 1, ease: "expo.inOut"}, "-=.95")

        const form = document.getElementById('intake-form'),
        submitButton = document.getElementById('submit');

        submitButton.addEventListener('click', function(event) {
  
          // Prevent the default form submit action
          event.preventDefault();

          // validation
            if (!form.checkValidity()) {
                form.reportValidity();
                return; // Exit and show message to EU
            }

          submitButton.disabled = true;
          submitButton.style.backgroundColor = '#D62E49';
          submitButton.value = 'Sending...';
          // Create a FormData object from the form
          var formData = new FormData(form);
          
          // Get the text content of the spans and append them to the FormData object
          for (let i = 1; i <= 3; i++) {
              var span = document.querySelector('span[data-flip-id="auto-' + i + '"]');
              formData.append('span-' + i, span.textContent);
          }
  
          // Use fetch to send the form data to 'submission.php'
          fetch('submission.php', {
              method: 'POST',
              body: formData
          })
  
          .then(response => response.text())
          .then(data => {
              // get the response from the server 
              console.log(data); //woot
              submitButton.style.backgroundColor = '#D62E49';
              submitButton.value = 'Submit';
              submitButton.disabled = false;
              tl.play()
              form.reset(); 
          })
          .catch(error => {
              // Handle any errors that occurred during the send
              console.error('Error:', error); // sads...
          });
      });
    }
  }

  
}


//===========================================================================================================================
// CHANGE PAGE THEME
//===========================================================================================================================

const changeTheme = function () {
  themeTag = document.querySelector(".content")
  thisData = themeTag.dataset.work
  bodyTag.className = ""
  bodyTag.classList.add(thisData)
}
changeTheme()


// home //////////////////////////////////////////////////////////////////////////////////////////////
const glIn = function() {
  if (bodyTag.classList.contains("init") && !isMobile()) {
    MainThreeScene.start()
    gsap.set(glContainer, {
      y: (target) => "+=" + target.offsetHeight * -1,
      zIndex: 10,
    })
  }
  if (!bodyTag.classList.contains("init") && !bodyTag.classList.contains("root")  && !bodyTag.classList.contains("default") && !isMobile()) {
    MainThreeScene.start()
    gsap.set(glContainer, {
      y: (target) => "+=" + target.offsetHeight * -1,
      zIndex: 2,
    })
  }
  
}

const glOut = function() {
  if (bodyTag.classList.contains("init") && !isMobile()) {
    MainThreeScene.pause()
    gsap.set(glContainer, {
      y: (target) => "+=" + target.offsetHeight * -1,
      zIndex: 2,
    }) 
  }
  if (!bodyTag.classList.contains("init") && !bodyTag.classList.contains("root")  && !bodyTag.classList.contains("default") && !isMobile()) {
    MainThreeScene.pause()
    gsap.set(glContainer, {
      y: (target) => "+=" + target.offsetHeight * -1,
      zIndex: 10,
    })
  }
}

const glScroll = gsap.timeline({
  scrollTrigger: {
    id: "projectDetail",
    trigger: ".content",
    start: "top top",
    end: () => "+=" + window.innerHeight * .9,
    scrub: !isMobile(),
    toggleActions: "play pause play none",
    onEnterBack: glIn,
    onLeave: glOut,
    onRefresh: self => self.progress && self.animation.progress(1),

  }
})
if (!isMobile()) {
  glScroll.to("#webglBubble", {
    y: () => "+=" + window.innerHeight * -1,
    duration: .35,
    ease: "linear",
  })
} else {
  glScroll.to("#webglBubble", {
    y:"0",
    duration: .35,
    ease: "linear",
  })
}

  
let gl = ScrollTrigger.getById("projectDetail");

// General GL settings ////////////////////////////////////////////////////////////////////////////////////////////////
const updateGl = function() {
  let glCanvas = document.querySelector("#webglBubble canvas")
  if (bodyTag.classList.contains("root")) {
    MainThreeScene.pause()
    gl.disable()
  } else {
    gsap.to(glContainer, { zIndex: 2, opacity: 1, scale: .7, xPercent: 0, yPercent: 0, y: "0%",  duration: .75, ease: "power4.inOut" })
    MainThreeScene.start()
    gl.enable()
  }
  if (bodyTag.classList.contains("default")) {
    gsap.to(glContainer, { zIndex: 999, opacity: 1, scale: .7, xPercent: 0, yPercent: 0, y: "0%", x: 0,  duration: .75, ease: "power4.inOut" })
  }  
  if (bodyTag.classList.contains("init")) {
    gsap.to(glContainer, { zIndex: 10, opacity: 1, scale: .7, xPercent: -20, yPercent: 17, y: "0%", x: 0, duration: .75, ease: "power4.inOut" })
  }
  if (!bodyTag.classList.contains("init") && !bodyTag.classList.contains("default") && !bodyTag.classList.contains("root") && !isMobile()) {
    gsap.to(glContainer, { zIndex: 2, opacity: 1, scale: .9, xPercent: 0, yPercent: 0, y: "0%", duration: .75, ease: "power4.inOut" })
  }
  
  if (!bodyTag.classList.contains("init") && !bodyTag.classList.contains("default") && !bodyTag.classList.contains("root") && isMobile()) {
    gsap.to(glContainer, { zIndex: 2, scale: 1, xPercent: 0, yPercent: 0, y: "0vh", duration: .75, ease: "power4.inOut" })
    gsap.to(glCanvas, {y: "10vh"})
  }
  if (bodyTag.classList.contains("init") && isMobile()) {
    gsap.to(glContainer, { zIndex: 2, opacity: 1, scale: 1, xPercent: 0, yPercent: 0, y: "0vh", duration: .75, ease: "power4.inOut" })
    gl.enable()
    gsap.to(glCanvas, {y: "0vh"})
    MainThreeScene.start()
  } 
  if (bodyTag.classList.contains("default") && isMobile()) {
    gsap.to(glContainer, { zIndex: 999, opacity: 1, scale: 1, opacity: 1, xPercent: 0, yPercent: 0, y: "0vh", duration: .75, ease: "power4.inOut" })
    gl.disable()
    gsap.to(glCanvas, {y: "0vh"})
    MainThreeScene.start()
  }
}
updateGl()

// ===================================================================================================F============================================
// SET WEBGL PARAMS FOR PROJECT DETAILS =========================================================================================================
const changeTexture = function () {
  if (bodyTag.classList.contains("default")) {
    MainThreeScene.changeTexture(0, false)
    MainThreeScene.setParams({
      mainBall: {
        reflectionColor: 0x1D2145
      }
    })
  }
  if (bodyTag.classList.contains("ssi")) {
    MainThreeScene.changeTexture(0)
    MainThreeScene.setParams({
      mainBall: {
        reflectionColor: 0xffffff
      }
    })
  }
  if (bodyTag.classList.contains("op")) {
    MainThreeScene.changeTexture(1)
    MainThreeScene.setParams({
      mainBall: {
        reflectionColor: 0x686363
      }
    })
  }
  if (bodyTag.classList.contains("va")) {
    MainThreeScene.changeTexture(2)
    MainThreeScene.setParams({
      mainBall: {
        reflectionColor: 0xEDECE2
      }
    })
  }
  if (bodyTag.classList.contains("hy")) {
    MainThreeScene.changeTexture(3)
    MainThreeScene.setParams({
      mainBall: {
        reflectionColor: 0xEDECE2
      }
    })
  }
  if (bodyTag.classList.contains("oa")) {
    MainThreeScene.changeTexture(4)
    MainThreeScene.setParams({
      mainBall: {
        reflectionColor: 0xEBEFF3
      }
    })
  }
  if (bodyTag.classList.contains("be")) {
    MainThreeScene.changeTexture(5)
    MainThreeScene.setParams({
      mainBall: {
        reflectionColor: 0x5F716D
      }
    })
  }

  if (bodyTag.classList.contains("hp")) {
    MainThreeScene.changeTexture(6)
    MainThreeScene.setParams({
      mainBall: {
        reflectionColor: 0xEEEDE9
      }
    })
  }
  if (bodyTag.classList.contains("ho")) {
    MainThreeScene.changeTexture(7)
    MainThreeScene.setParams({
      mainBall: {
        reflectionColor: 0xEBF2DE
      }
    })
  }
  if (bodyTag.classList.contains("md")) {
    MainThreeScene.changeTexture(8)
    MainThreeScene.setParams({
      mainBall: {
        reflectionColor: 0xEEF6FF
      }
    })
  }
  if (bodyTag.classList.contains("init")) {
    MainThreeScene.changeTexture(9, false)
    MainThreeScene.setParams({
      mainBall: {
        reflectionColor: 0x363D77
      }
    })
  }
}
changeTexture()

// INTRO LOAD AND THEN LOAD REST OF THE SCRIPTS ======================================================================================================
const startScripts = function() {
    PageInits.lazyLoad()
    PageInits.mainScripts()
}

// SET UP INTRO ANIMATION ===========================================================================================================================
let introAnim = gsap.timeline({paused: true})
const introBg = document.querySelector("#loading-overlay"),
  introPaths = gsap.utils.toArray("#loading-overlay svg .pathAnim"),
  introSVG = document.querySelector("#loading-overlay svg"),
  introSpan = document.querySelector("#loading-overlay span")


  introAnim.set(introPaths, { drawSVG: "0% 0%"})
  introAnim.set(introSVG, { opacity: 0})
  introAnim.set(introBg, { opacity: 1})
  introAnim.set(introBg, { opacity: 1})
  introAnim.set(["#logo", "#usp", "#fixed-cta", "#hamburger"], { opacity: 0})

  introAnim.to(introBg, {opacity: 1, duration: .6, ease: "power4"})
  introAnim.to(introSVG, {opacity: 1, scale: 1, duration: 1, ease: "power4"}, "-=.2")
  introAnim.to(introSpan, {opacity: 1, y: 0, duration: 1, ease: "power4"}, "-=.6")
  introAnim.to(introPaths, {drawSVG: "0 100%", duration: 1, stagger: {amount: .6}, ease: "power4"}, "-=.5")
  introAnim.to(introPaths, {drawSVG: "100% 100%", stagger: {amount: .2}, duration: 1, ease: "power4.inOut"})
  introAnim.to(introSVG, {opacity: 0, scale: .9, duration: .6, ease: "power4"},"-=.5")
  introAnim.to(introSpan, {opacity: 0, y: "-100%", duration: .6, ease: "power4"}, "<")
  introAnim.to(introBg, {width: window.innerWidth - 20, height: window.innerHeight - 20, y: 10, x: 10, borderRadius: 30, duration: .6, ease: "power4.inOut"});
  introAnim.to(introBg, {opacity: 0, duration: 1, pointerEvents: "none", ease: "power4.inOut", onStart: startScripts, onComplete: () => {
    if(!isMobile()) {smoother.paused(false)}
    introBg.remove()
  }
}, "-=.5")
  introAnim.to(["#logo", "#usp", "#hamburger", "#fixed-cta"], {opacity: 1, delay: .6,duration: .6, stagger: .1, ease: "power4.inOut"})


function introLoading() {
  if(!isMobile()) {
    smoother.paused(true)
  }
  introAnim.play()
}
if (bodyTag.classList.contains("init")) {
  introLoading()
} else {
  startScripts()
}


// startScripts()

// MAILING LIST %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function newsletter() {
  // Event delegation: Add click event listener to the entire document body
  document.body.addEventListener('click', function(event) {
      // Check if the clicked element is the submit button
      if (event.target && event.target.id === 'nl-submit') {
          // console.log("mailing list submitted");
          event.preventDefault();

          const nForm = document.querySelector("#newsletter form")
          if (!nForm.checkValidity()) {
            nForm.reportValidity();
            return; // Exit and show message to EU
          }

          var emailInput = document.querySelector('#newsletter input[type=email]');
          if (!emailInput) return; // Exit if no email input is found

          var email = emailInput.value;
          var formData = new FormData();
          formData.append('mail', email);

          fetch('submission.php', {
              method: 'POST',
              body: formData
          })
          .then(response => response.text())
          .then(data => {
              document.querySelector('#newsletter input[type=email]').value = "Wonderful! Check your inbox!";
              // console.log("success! " + data);

              var svgContainer = document.querySelector('.arrow-link');
              var check = '<svg width="31" height="20" viewBox="0 0 31 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 8.5C1.8 9.3 8.33333 15.8333 11.5 19C18.5294 11.9706 22.4706 8.02944 29.5 1" stroke="#EEEEF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

              event.target.disabled = true;
              emailInput.readOnly = true;
              svgContainer.innerHTML = check;
          })
          .catch(error => {
              console.error('Error:', error);
          });
      }
  });
}
newsletter()


// RESIZE EVEN SCRIPTS ////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function resizedw(){
//   // Haven't resized in 100ms!
// }

// let doit;
// window.onresize = function(){
//   clearTimeout(doit);
//   doit = setTimeout(resizedw, 200);
// };

///////////////////////////////////////////////////////
//////////////////// SMOOTHSTATE ///////////////////////////

//Outter link click
$('.nav-link').click(function (e) {
  e.preventDefault();
  var content = $('#smooth-wrapper').smoothState().data('smoothState');
  var href = $(this).attr('href');
  content.load(href);
});


// DURATION OF ANIMATION

// Smoothstate function
$(function () {
  'use strict';

    var options = {
    prefetch: false,
    cacheLength: 2,
    onStart: {
        duration: 1100, // Duration of our animation
        render: function ($container) {
        // Add your CSS animation reversing class
        $container.addClass('is-exiting');
        // Restart your animation
        smoothState.restartCSSAnimations();
        if(!isMobile()) {
            setTimeout(function () {
              smoother.kill()
            }, 300)
        }

        if (hamburger.classList.contains("active")) {
            hambIcon.reverse()
            menuBgAnim.reverse().delay(.1)
            menuInner.reverse()
            hamburger.classList.remove("active")
            
            gsap.to(".page-to-page svg:first-of-type", {opacity: 1, duration: .5, delay: 1})
        } else {
            pageMaster.restart().timeScale(1.2)
        }
        if(document.querySelector(".home") && !isMobile()) {
            let attScroll = ScrollTrigger.getById("attScroll");
            let clientPin = ScrollTrigger.getById("clientPin");
            attScroll.kill()
            clientPin.kill()
        }
        if(document.querySelector(".about") && !isMobile()) {
            let aboutTl = ScrollTrigger.getById("timelineScroll");
            aboutTl.kill()
        }

        if(bodyTag.classList.contains("init")) {
          gsap.to(glContainer, {xPercent: 0, yPercent: 0, y: "0%", duration: .75, ease: "power4.inOut"})
        }

        // PAGE ANIMATION
        }
    },
    onReady: {
        render: function ($container, $newContent) {
          // Remove your CSS animation reversing class
          $container.removeClass('is-exiting pending');
          $container.addClass('is-animating');

          // Inject the new content
          $container.html($newContent);
          bodyTag.classList.remove(thisClass)
          if(bodyTag.classList.contains("init")) {
                gsap.to(glContainer, {
                y: "0%",
                duration: 1,
                ease: customEaseC
              })
          }
        }
    },
    onAfter: function ($container, $newContent) {
        $container.removeClass('is-animating');


        if(document.querySelector(".work") && isMobile()) {
          const setHeight = () => {
              document.querySelector("body").style.minHeight = window.innerHeight + "px"
              document.querySelector("#smooth-wrapper").style.minHeight = window.innerHeight + "px"
              document.querySelector(".content.work").style.height = window.innerHeight + "px"
          };
          let deviceWidth = window.matchMedia("(max-width: 1024px)");
          if (deviceWidth.matches) {
              window.addEventListener("resize", setHeight);
              setHeight();
          }
        } else {
          document.querySelector("body").style.minHeight = "auto"
        }

        if(document.querySelector(".about") && !isMobile()) {
          triggerDotAnim()
        } else {
          let lettering = new SplitText(".about #hero h1", { type: "lines, chars" })
          gsap.set(".about #hero h1", { perspective: 400, })
          gsap.set(lettering.chars, {
            transformOrigin: "0% 100%",
            scale: 6,
            opacity: 0,
            rotate: 45,
            y: window.innerHeight,
          })
          gsap.to(lettering.chars, {
            transformOrigin: "0% 100%",
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 1,
            delay: .8,
            stagger: {
              amount: .3,
            },
            y: 0,
            ease: CustomEase.create("custom", "M0,0 C0,0 0.076,0.578 0.226,0.826 0.324,0.989 0.599,0.986 0.66,0.989 0.791,0.997 1,1 1,1 "),
          })
        }

        // RERUN SCRIPTS
        logo.classList.remove("active")
        smoothScroll()
        PageInits.lazyLoad()
        PageInits.mainScripts()
        // SET UP A SMOOTH SCROLLING
        // GSAP SMOOTH SCROLL /=============================================================================================================
        //===================================================================================================================================
        setTimeout(function() {
        ScrollTrigger.refresh()
        }, 1000)

        // REVERSE PAGE BG
        pageMaster.reverse().timeScale(-99)


        const scrollTo = gsap.utils.toArray(".scroll-to")
        scrollTo.forEach(st => {
          const scrollTarget = st.dataset.scroll
          //(scrollTarget)
          st.addEventListener("click", function () {
              smoother.scrollTo("." + scrollTarget, true, "top 20%")
          })
        })
        contentTag.style.pointerEvents = "auto"

        // END GSAP SMOOTH SCROLL /=============================================================================================================

        changeTheme()

        if(!bodyTag.classList.contains("default") && !bodyTag.classList.contains("init") && !bodyTag.classList.contains("root")) {
        setTimeout(function() {
            updateGl()
            changeTexture()
        }, 600)
        } else {
          updateGl()
          changeTexture()
          gsap.to(".blur-circle", {scale: 1, opacity: .3, delay: .35, duration: 1, ease: "power4.inOut"})
        }

    },
    },
    smoothState = $('#smooth-wrapper').smoothState(options).data('smoothState');
});

