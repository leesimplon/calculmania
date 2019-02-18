//SOMME
function somme() {
    var onemember = document.getElementById("one");
    var twomember = document.getElementById("two");
    var result = document.getElementById("resultat");
    var input1 = document.getElementById("inputone");
    var sommeerreur = document.getElementById("erreursomme");

    inputone.innerHTML = "";
    if (onemember.value == "" || twomember.value == "") {
        sommeerreur.innerHTML = "Veuillez inserer un nombre";
    } else {
        sommeerreur.innerHTML = "";
        var addition = parseInt(onemember.value) + parseInt(twomember.value);
        result.innerHTML = addition;

    }
}

//MULTIPLICATION
function produit() {
    var onemember = document.getElementById("isa");
    var twomember = document.getElementById("roa");
    var result = document.getElementById("valiny");
    var multiplication = parseInt(onemember.value) * parseInt(twomember.value);
    result.innerHTML = multiplication;
}

//NPP
var nom = document.getElementById("nombre");
var nomb = document.getElementById("nomb");
var prem = document.getElementById("prem");
var pair = document.getElementById("pair");
var error = document.getElementById("erreur");

function npp() {
    nomb.innerHTML = "";
    prem.innerHTML = "";
    pair.innerHTML = "";
    var estPrem = true;
    if (nom.value == "") {
        error.innerHTML = "Veuillez inserer un nombre";
        return;
    } else {
        error.innerHTML = "";
        if (isNaN(nom.value)) {
            nomb.innerHTML = "*  " + nom.value + " n'est pas un nombre";
        } else {
            nomb.innerHTML = "*  " + nom.value + " est un nombre";
            for (var j = 2; j < nom.value; j++) {
                if (nom.value % j == 0) estPrem = false;
            }

            function premier() {
                if (estPrem) {
                    prem.innerHTML = "*  " + nom.value + " est premier";
                } else {
                    prem.innerHTML = "*  " + nom.value + " n'est pas premier";
                }
            }
            premier();

            function parete() {
                if (nom.value % 2 == 0) {
                    pair.innerHTML = "*  " + nom.value + " est paire";
                } else {
                    pair.innerHTML = "*  " + nom.value + " est impaire";
                }
            }
            parete();

        }
    }
}

//AFFICHE 1 2 +
var un = document.getElementById("un");
var deux = document.getElementById("deux");
var plus = document.getElementById("plus");

function afficheun() {
    var one = 1;
    entre.innerHTML += one;
}

function affichedeux() {
    var two = 2;
    entre.innerHTML += two;
}

function afficheplus() {
    var signe = "+";
    entre.innerHTML += signe;
}