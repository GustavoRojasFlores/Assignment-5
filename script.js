document.getElementById('calc').addEventListener('click', calculate)
document.getElementById('revertcirc').addEventListener('click', circumference)
document.getElementById('revertarea').addEventListener('click', area)

function calculate () {
  const diameter = document.getElementById('diameter').value * 1
  if (diameter * 0 === 0) {
    document.getElementById('circumference').innerHTML = 'Circumference: ' + diameter * Math.PI
    document.getElementById('area').innerHTML = 'Area: ' + (diameter / 2) * (diameter / 2) * Math.PI
  } else {
    alert('Please enter a valid numerical value into the input box.')
  }
}

function circumference () {
  const circ = document.getElementById('circarea').value * 1
  if (circ * 0 === 0) {
    document.getElementById('diameteroutput').innerHTML = 'Diameter: ' + circ / Math.PI
  } else {
    alert('Please enter a valid numerical value into the input box.')
  }
}

function area () {
  const ar = document.getElementById('circarea').value * 1
  if (ar * 0 === 0) {
    document.getElementById('diameteroutput').innerHTML = 'Diameter: ' + (Math.sqrt(ar / Math.PI)) * 2
  } else {
    alert('Please enter a valid numerical value into the input box.')
  }
}
