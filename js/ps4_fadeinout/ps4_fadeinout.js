const MS_FOR_ANIMATION = 500

// let ps4Background_scale = 1.3
let start = null

let ps4Overlay = null
window.onload = () => {
  ps4Overlay = document.getElementById('PS4_Overlay')
}

let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
let cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

let fadeInReq = null
let fadeOutReq = null

const fadeInFrame = (timeStamp) => {
  if (!start) start = timeStamp
  let progress = timeStamp - start

  // scale 1.3 -> 1.0
  ps4Overlay.style.transform = 'scale('+ Math.max(1.3 - progress / 1400, 1) +')'
  // rgba(0, 0, 0, 0) -> rgba(0, 0, 0, 0.7)
  ps4Overlay.style.backgroundColor = 'rgba(0, 0, 0, '+ Math.min(progress / 650, 0.7) +')'
  // ps4Overlay.style.setProperty('transform', 'scale('+ Math.min(progress / 350, 1.3) +'px)')
  if (progress < MS_FOR_ANIMATION) {
    window.requestAnimationFrame(fadeInFrame)
  } else {
    console.log('Start time set null')
    console.log('start :>> ', start);
    start = null
  }
}

const fadeOutFrame = (timeStamp) => {
  if (!start) start = timeStamp
  let progress = timeStamp - start

  // scale 1.3 -> 1.0
  ps4Overlay.style.transform = 'scale('+ Math.min(1.0 + progress / 1500, 1.3) +')'
  console.log('Math.min(0.7 - progress / 700, 0) :>> ', Math.min(0.7 - progress / 700, 0));
  // rgba(0, 0, 0, 0) -> rgba(0, 0, 0, 0.7)
  ps4Overlay.style.backgroundColor = 'rgba(0, 0, 0, '+ Math.max(0.7 - progress / 700, 0) +')'
  // ps4Overlay.style.setProperty('transform', 'scale('+ Math.min(progress / 350, 1.3) +'px)')
  if (progress < MS_FOR_ANIMATION) {
    window.requestAnimationFrame(fadeOutFrame)
  } else {
    console.log('Start time set null')
    console.log('start :>> ', start);
    start = null
  }
}

const ps4FadeIn = () => {
  console.log('Fade in')
  const { classList } = ps4Overlay
  
  ps4Overlay.style.display = 'block'
  classList.add('show')
  fadeInReq = requestAnimationFrame(fadeInFrame)

  if (classList.contains('init')) {
    classList.remove('init')
  }
}

const ps4FadeOut = () => {
  console.log('Fade out')
  const ps4Overlay = document.getElementById('PS4_Overlay')
  const { classList } = ps4Overlay
  
  fadeOutReq = requestAnimationFrame(fadeOutFrame)

  if (classList.contains('show')) {
    classList.remove('show')
  }

  setTimeout(() => {
    ps4Overlay.style.display = 'none'
  }, MS_FOR_ANIMATION)
}