// Scripts pour calculatrice.html

// définit une variable globale
const res = document.getElementById("result");

// Ré-initilaise l'écran de résultat
function clearScreen() {
  document.getElementById("result").value = "";
}

// affichage des valeurs
function display(value) {
  document.getElementById("result").value += value;
}

// calcule l'expression entrée and retourne le résultat
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}

// écouteur d'événements : traitement de certaines touches clavier
document.addEventListener("keydown", keyboardInputHandler);

// traitement de certaines touches clavier
function keyboardInputHandler(e) {
  // corrige le comportement par défaut du navigateur
  e.preventDefault();

  // l'appui sur Entrée affiche le résultat
  if (e.key === "Enter") {
    calculate(result.value);
  }

  // appui sur Backspace supprime le dernier caractère
  if (e.key === "Backspace") {
    const resultInput = res.value;
    // supprime le dernier élément de la chaine de caractères
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}
