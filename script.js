function dis(val) {
    document.getElementById("disp").value += val;
}
function myfunction(event) {
    if (event.key == '1' || event.key == '2' ||event.key == '3' ||event.key == '4' ||event.key == '5' ||event.key == '6' ||event.key == '7' ||event.key == '8' ||event.key == '9' ||event.key == '+' ||event.key == '-' ||event.key == '*' || event.key == '/' ) {
         document.getElementById("disp").value += event.key;
    }
}
// var cal=document.getElementById("container");
// cal.onkeyup =function (event) {
//     if (event.keyup === 13) {
//     solve();
//     }
// }
function solve() {
    let x=document.getElementById("disp").value;
    let y=math.evaluate(x);
    console.log("done"+y); 
    document.getElementById("disp").value = y;
}
function clr() {
    document.getElementById("disp").value = "";
    
}