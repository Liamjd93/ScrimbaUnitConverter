const convertBtn = document.getElementById("convert-btn")
const m2ft = 3.281
const l2g = 0.264
const kg2p = 2.204
const ft2m = 0.305
const g2l = 4.546
const p2kg = 0.454

convertBtn.addEventListener("click", function(){
    clear()
    let numInput = document.getElementById("num-input").value
    document.getElementById("top-result").innerHTML +=`
    <p>
        ${numInput} meters = ${(numInput * m2ft).toFixed(3)} feet | ${numInput} feet = ${(numInput * ft2m).toFixed(3)} meters
    </p>`
    document.getElementById("mid-result").innerHTML +=`
    <p>
        ${numInput} liters = ${(numInput * l2g).toFixed(3)} gallons | ${numInput} gallons = ${(numInput * g2l).toFixed(3)} liters
    </p>`
    document.getElementById("bottom-result").innerHTML +=`
    <p>
        ${numInput} kilograms = ${(numInput * kg2p).toFixed(3)} pounds | ${numInput} pounds = ${(numInput * p2kg).toFixed(3)} kilograms
    </p>`
})

function clear() {
    document.getElementById("top-result").innerHTML = `<h6>Length (Meter/Feet)</h6>`
    document.getElementById("mid-result").innerHTML = `<h6>Volume (Liters/Gallons)</h6>`
    document.getElementById("bottom-result").innerHTML = `<h6>Mass (Kilograms/Pounds)</h6>`
}
