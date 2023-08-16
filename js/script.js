// const tinggiInput = prompt('Enter the base of a triangle: ')
// const alasInput = prompt('Enter the height of a triangle: ')

// calculate the area
// const luas = () => {
//   let tinggi = document.getElementById('tinggi-input').value
//   let alas = document.getElementById('alas-input').value
//   return (alas*tinggi) / 2
// }

function submit() {
  let tinggi = document.getElementById('tinggi-input').value
  let alas = document.getElementById('alas-input').value
  document.getElementById('luas').value = (alas*tinggi) / 2;

  let sisiA = document.getElementById('sisiA').value
  let sisiB = document.getElementById('sisiB').value
  let sisiC = document.getElementById('sisiC').value
  document.getElementById('keliling').value = (parseInt(sisiA) + parseInt(sisiB) + parseInt(sisiC))
}
function reset(){  
  document.getElementById("luas").value = null
  document.getElementById("keliling").value = null
}   

