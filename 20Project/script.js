// don't write onClick event in html tag

// document.getElementById('owl').onclick = ()=>{
//     alert("owl clciked")
// }

// above code give you less feature 

// attachEvent
// jQuery - .on

// event
//  type, timestamp, defaultPrevented
//  target, toElement, currentTarget
//  clientX, clientY, screenX, screenY
// altKey, ctrlKey, shiftKey, keyCode 


document.getElementById('images').addEventListener('click',(e)=>{
     console.log('code clicked');
},false)

document.getElementById('owl').addEventListener('click',(e)=>{
     console.log('owl clicked');
     e.stopPropagation()
},false)