var contactHome = document.getElementById("contactHome");
var contactHome2 = document.getElementById("contactHome2");
var buttonCombo1 = document.getElementById("buttonCombo1");
var buttonCombo2 = document.getElementById("buttonCombo2");
var buttonCombo3 = document.getElementById("buttonCombo3");
var buttonCombo4 = document.getElementById("buttonCombo4");

buttonCombo1.addEventListener("click", function () { btnSwitch(0) });
buttonCombo2.addEventListener("click", function () { btnSwitch(1) });
buttonCombo3.addEventListener("click", function () { btnSwitch(2) });
buttonCombo4.addEventListener("click", function () { btnSwitch(3) });
contactHome.addEventListener("click", function () { btnSwitch(3) });
contactMenu.addEventListener("click", function () { btnSwitch(3) });

buttonCombo1.className = "buttonCombo--styleSelected";
document.getElementById("contB__contDisplay1").style.display = "block";
document.getElementById("contFooter__comnboA").style.display = "flex";



function btnSwitch(option) {
    buttonCombo1.className = "buttonCombo--style";
    buttonCombo2.className = "buttonCombo--style";
    buttonCombo3.className = "buttonCombo--style";
    buttonCombo4.className = "buttonCombo--style";

    document.getElementById("contB__contDisplay1").style.display = "none";
    document.getElementById("contB__contDisplay2").style.display = "none";
    document.getElementById("contB__contDisplay3").style.display = "none";
    document.getElementById("contB__contDisplay4").style.display = "none";

    document.getElementById("contFooter__comnboA").style.display = "none";
    document.getElementById("contFooter__comnboB").style.display = "none";
    document.getElementById("contFooter__comnboC").style.display = "none";
    document.getElementById("contFooter__comnboD").style.display = "none";

    switch (option) {
        case 0:
            buttonCombo1.className = "buttonCombo--styleSelected";
            document.getElementById("contB__contDisplay1").style.display = "block";
            document.getElementById("contFooter__comnboA").style.display = "none";
            setTimeout(function () { document.getElementById("contFooter__comnboA").style.display = "flex"; blackBg(); }, 500);
            break;
        case 1:
            buttonCombo2.className = "buttonCombo--styleSelected";
            document.getElementById("contB__contDisplay2").style.display = "block";
            document.getElementById("contFooter__comnboB").style.display = "none";
            setTimeout(function () { document.getElementById("contFooter__comnboB").style.display = "flex"; blackBg(); }, 500);
            break;
        case 2:
            buttonCombo3.className = "buttonCombo--styleSelected";
            document.getElementById("contB__contDisplay3").style.display = "block";
            document.getElementById("contFooter__comnboC").style.display = "none";
            blackBg();
            setTimeout(function () { document.getElementById("contFooter__comnboC").style.display = "flex"; blackBg(); }, 500);
            break;
        case 3:
            buttonCombo4.className = "buttonCombo--styleSelected";
            document.getElementById("contB__contDisplay4").style.display = "block";
            document.getElementById("contFooter__comnboD").style.display = "none";
            blackBg();
            setTimeout(function () { document.getElementById("contFooter__comnboD").style.display = "flex"; blackBg(); }, 500);
            break;
    }
    blackBg();
}

function blackBg() {
    contB.style.animation = "blackBackground 0.2s normal 1";
    setTimeout(function () { contB.style.animation = ""; }, 150);
}


contactHome.addEventListener("click", function () { menuDisplay() });
contactHome2.addEventListener("click", function () { menuDisplay() });
menuTV.addEventListener("click", function () { menuHide() });

function menuDisplay() {
   document.getElementById("contA").style.display = "none";
    document.getElementById("contB").style.display = "none";
    document.getElementById("contC").style.display = "none";
    document.getElementById("contD").style.display = "flex";
    document.getElementById("footer").style.display = "none";

}
function menuHide() {
   //document.getElementById("contA").style.display = "flex";
    document.getElementById("contB").style.display = "block";
    document.getElementById("contC").style.display = "block";
    document.getElementById("contD").style.display = "none";
    document.getElementById("footer").style.display = "block";
}

