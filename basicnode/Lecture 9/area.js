function square(a) {
    return console.log("Area:", a * a, "Perimeter:", 4 * a)
}
function reactangle(a,b) {
    return console.log("Area:", a * b, "Perimeter:", 2*(a+b))
}
function triangle(a,b,c) {
    return console.log("Area:", 0.5*a*b, "Perimeter:",a+b+c)
}
function circle(a) {
    return console.log("Area:",3.14*a*a, "Perimeter:",2*3.14*a)
}
module.exports={square,triangle,reactangle,circle}