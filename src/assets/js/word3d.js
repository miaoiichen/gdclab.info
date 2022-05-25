
/****TICKET CIRCLE WORD *****/

const node = document.getElementById('letters')
const textInput = document.getElementById('text')


let content = 'WE MAKE DIGITAL GROOOOOOVY'
let radius = 110


function generateLetters(text) {
  node.innerHTML = ''
  const letters = text.split('')
  const step = 360 / letters.length
  letters.forEach((l, i) => {
    const span = document.createElement('span')
    span.textContent = l
    const deg = step * i
    span.style.transform = transform(deg, radius)
    node.append(span)
  })
}

function transform(deg, radius = 110) {
  return `rotateY(${deg}deg) translateZ(${radius}px)`
}

generateLetters(content);

