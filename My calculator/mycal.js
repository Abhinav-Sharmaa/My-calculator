// console.log();
let inp = document.querySelector(".txt");
let btnget = document.querySelectorAll(".get");
let clean = document.querySelector(".clr");
let clear = document.querySelector(".less");
for (let i = 0; i < btnget.length; i++) {
    btnget[i].addEventListener("click", function btncheck() {
        inp.value += btnget[i].value;
        console.log(inp);
    });
}
let ansr = document.querySelector(".ans");
ansr.addEventListener("click", function getans() {
    if (inp.value) {
        document.querySelector(".txt").value = eval(inp.value);
    }
});
clean.addEventListener("click", () => {
    inp.value = "";
})
clear.addEventListener("click", () => {
    let inpval = inp.value;
    inp.value = inpval.substring(0, inpval.length - 1);
})