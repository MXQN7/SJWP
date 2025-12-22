function ohm() {
    let U = parseFloat(document.getElementById("u").value);
    let R = parseFloat(document.getElementById("r").value);
    let I = U / R;
    document.getElementById("rez1").innerHTML = "I = " + I.toFixed(2) + " A";
}

function djelilo() {
    let R1 = parseFloat(document.getElementById("r1").value);
    let R2 = parseFloat(document.getElementById("r2").value);
    let Vin = parseFloat(document.getElementById("vin").value);
    let Vout = Vin * R2 / (R1 + R2);
    document.getElementById("rez2").innerHTML = "Vout = " + Vout.toFixed(2) + " V";
}

function serijaR() {
    let R = parseFloat(document.getElementById("sr1").value) +
            parseFloat(document.getElementById("sr2").value) +
            parseFloat(document.getElementById("sr3").value) +
            parseFloat(document.getElementById("sr4").value);
    document.getElementById("rez3").innerHTML = "R = " + R.toFixed(2) + " Ω";
}

function paralelR() {
    let R1 = parseFloat(document.getElementById("pr1").value);
    let R2 = parseFloat(document.getElementById("pr2").value);
    let R3 = parseFloat(document.getElementById("pr3").value);
    let R4 = parseFloat(document.getElementById("pr4").value);
    let R = 1 / (1/R1 + 1/R2 + 1/R3 + 1/R4);
    document.getElementById("rez4").innerHTML = "R = " + R.toFixed(2) + " Ω";
}

function serijaC() {
    let C = 1 / (1/parseFloat(document.getElementById("sc1").value) +
                 1/parseFloat(document.getElementById("sc2").value) +
                 1/parseFloat(document.getElementById("sc3").value) +
                 1/parseFloat(document.getElementById("sc4").value));
    document.getElementById("rez5").innerHTML = "C = " + C.toFixed(6) + " F";
}

function paralelC() {
    let C = parseFloat(document.getElementById("pc1").value) +
            parseFloat(document.getElementById("pc2").value) +
            parseFloat(document.getElementById("pc3").value) +
            parseFloat(document.getElementById("pc4").value);
    document.getElementById("rez6").innerHTML = "C = " + C.toFixed(6) + " F";
}

function serijaL() {
    let L = parseFloat(document.getElementById("sl1").value) +
            parseFloat(document.getElementById("sl2").value) +
            parseFloat(document.getElementById("sl3").value) +
            parseFloat(document.getElementById("sl4").value);
    document.getElementById("rez7").innerHTML = "L = " + L.toFixed(2) + " H";
}

function paralelL() {
    let L = 1 / (1/parseFloat(document.getElementById("pl1").value) +
                 1/parseFloat(document.getElementById("pl2").value) +
                 1/parseFloat(document.getElementById("pl3").value) +
                 1/parseFloat(document.getElementById("pl4").value));
    document.getElementById("rez8").innerHTML = "L = " + L.toFixed(2) + " H";
}

function induktivitet() {
    let mu = parseFloat(document.getElementById("mu").value);
    let N = parseFloat(document.getElementById("n").value);
    let S = parseFloat(document.getElementById("s").value);
    let l = parseFloat(document.getElementById("l").value);
    let L = mu * N * N * S / l;
    document.getElementById("rez9").innerHTML = "L = " + L.toFixed(6) + " H";
}

function xl() {
    let w = parseFloat(document.getElementById("w").value);
    let L = parseFloat(document.getElementById("lx").value);
    let XL = w * L;
    document.getElementById("rez10").innerHTML = "Xₗ = " + XL.toFixed(2) + " Ω";
}

function xc() {
    let w = parseFloat(document.getElementById("w2").value);
    let C = parseFloat(document.getElementById("cx").value);
    let XC = 1 / (w * C);
    document.getElementById("rez11").innerHTML = "Xc = " + XC.toFixed(2) + " Ω";
}
