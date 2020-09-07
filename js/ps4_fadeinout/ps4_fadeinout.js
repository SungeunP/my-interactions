const blockOverlay = async () => {
  const _ps4Overlay = document.getElementById('PS4_Overlay')
  _ps4Overlay.style.display = 'block'
}

// const MS_FOR_ANIMATION = 500

// // let ps4Background_scale = 1.3
// let start = null

// let ps4Overlay = null
// window.onload = () => {
//   ps4Overlay = document.getElementById('PS4_Overlay')
// }

// let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
//                             window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
// let cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

// let fadeInReq = null
// let fadeOutReq = null

// const quad = (progress) => {
//   return Math.pow(progress, 2)
// }
// const circ = (progress) => {
//   console.log('Math.acos(progress) :>> ', Math.acos(progress));
//   console.log('Math.sin(Math.acos(progress)) :>> ', Math.sin(Math.acos(progress)));
//   return 1.3 - Math.sin(Math.acos(progress))
// }

// const fadeInFrame = (timeStamp) => {
//   if (!start) start = timeStamp
//   let progress = timeStamp - start
//   console.log('Before progress :>> ', progress);
//   progress = circ(progress)
//   console.log('progress :>> ', progress);
//   console.log('progress / 1400 :>> ', progress / 1400);
//   // scale 1.3 -> 1.0
//   ps4Overlay.style.transform = 'scale('+ Math.max(1.3 - progress / 1400, 1) +')'
//   // rgba(0, 0, 0, 0) -> rgba(0, 0, 0, 0.7)
//   ps4Overlay.style.backgroundColor = 'rgba(0, 0, 0, '+ Math.min(progress / 650, 0.7) +')'
//   // ps4Overlay.style.setProperty('transform', 'scale('+ Math.min(progress / 350, 1.3) +'px)')
//   if (progress < MS_FOR_ANIMATION) {
//     window.requestAnimationFrame(fadeInFrame)
//   } else {
//     // console.log('Start time set null')
//     // console.log('start :>> ', start);
//     start = null
//   }
// }

// const fadeOutFrame = (timeStamp) => {
//   if (!start) start = timeStamp
//   let progress = timeStamp - start
//   console.log('progress :>> ', progress);
//   // scale 1.3 -> 1.0
//   ps4Overlay.style.transform = 'scale('+ Math.min(1.0 + progress / 1500, 1.3) +')'
//   // console.log('Math.min(0.7 - progress / 700, 0) :>> ', Math.min(0.7 - progress / 700, 0));
//   // rgba(0, 0, 0, 0) -> rgba(0, 0, 0, 0.7)
//   ps4Overlay.style.backgroundColor = 'rgba(0, 0, 0, '+ Math.max(0.7 - progress / 700, 0) +')'
//   // ps4Overlay.style.setProperty('transform', 'scale('+ Math.min(progress / 350, 1.3) +'px)')
//   if (progress < MS_FOR_ANIMATION) {
//     window.requestAnimationFrame(fadeOutFrame)
//   } else {
//     // console.log('Start time set null')
//     // console.log('start :>> ', start);
//     start = null
//   }
// }

// const ps4FadeIn = () => {
//   console.log('Fade in')
//   const { classList } = ps4Overlay
  
//   ps4Overlay.style.display = 'block'
//   classList.add('show')
//   fadeInReq = requestAnimationFrame(fadeInFrame)
  
//   if (classList.contains('init')) {
//     classList.remove('init')
//   }
// }

// const ps4FadeOut = () => {
//   console.log('Fade out')
//   const ps4Overlay = document.getElementById('PS4_Overlay')
//   const { classList } = ps4Overlay
  
//   fadeOutReq = requestAnimationFrame(fadeOutFrame)
  
//   if (classList.contains('show')) {
//     classList.remove('show')
//   }
  
//   setTimeout(() => {
//     ps4Overlay.style.display = 'none'
//   }, MS_FOR_ANIMATION)
// }

// const initRoot = 5
// let root = initRoot

// const fadeInFrame = (timeStamp) => {
//   if (!start) start = timeStamp
//   let progress = timeStamp - start
//   let progress_rooted = progress * root
//   // console.log('progress :>> ', progress);
//   console.log('progress_rooted / 1400 :>> ', progress_rooted / 1400);
//   // scale 1.3 -> 1.0
//   ps4Overlay.style.transform = 'scale('+ Math.max(1.3 - progress_rooted / 1400, 1) +')'
//   // rgba(0, 0, 0, 0) -> rgba(0, 0, 0, 0.7)
//   ps4Overlay.style.backgroundColor = 'rgba(0, 0, 0, '+ Math.min(progress_rooted / 650, 0.7) +')'
//   // ps4Overlay.style.setProperty('transform', 'scale('+ Math.min(progress / 350, 1.3) +'px)')
//   if (progress_rooted < MS_FOR_ANIMATION) {
//     window.requestAnimationFrame(fadeInFrame)
//     if (root >= 1) {
//       console.log('root minus result:>>', root)
//       root -= 0.05 // 마이너스 폭을 늘릴수록 애니메이션이 빨라진다.
//     }
//   } else {
//     // console.log('Start time set null')
//     // console.log('start :>> ', start);
//     start = null
//     root = initRoot
//   }
// }