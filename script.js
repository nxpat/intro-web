//
// C'est dans ce script JS que toute la logique se trouve !
//

// --- DÉMONSTRATION 1 : Le Mode Sombre (toggle) ---

// 1. On sélectionne les éléments nécessaires
const btnSombre = document.getElementById("btnSombre");
const corpsDePage = document.querySelector("body");

// 2. On crée la fonction de bascule
function basculerModeSombre() {
    // toggle ajoute la classe si elle n'y est pas, et l'enlève si elle y est
    corpsDePage.classList.toggle("dark-mode");
    
    // On change aussi le texte du bouton pour que ce soit logique
    if (corpsDePage.classList.contains("dark-mode")) {
        btnSombre.textContent = "Désactiver le mode sombre";
    } else {
        btnSombre.textContent = "Activer le mode sombre";
    }
}

// 3. On ajoute l'écouteur d'événement au bouton
btnSombre.addEventListener("click", basculerModeSombre);


// --- DÉMONSTRATION 2 : Modifier du texte ---

const btnModifier = document.getElementById("btnModifier");
const paragrapheMessage = document.getElementById("message");

btnModifier.addEventListener("click", function() {
    paragrapheMessage.innerHTML = "Bravo ! Le <strong>DOM</strong> a été manipulé avec succès !";
    paragrapheMessage.style.color = "green"; // Modification du CSS en direct
});


// --- DÉMONSTRATION 3 : Ajouter des éléments (To-Do List) ---

const btnAjouter = document.getElementById("btnAjouter");
const inputTache = document.getElementById("nouvelleTache");
const liste = document.getElementById("maListe");

btnAjouter.addEventListener("click", function() {
    // On récupère le texte tapé dans le champ de saisie
    let texte = inputTache.value;

    // On vérifie que le champ n'est pas vide
    if (texte !== "") {
        // a. On crée un nouvel élément <li>
        let nouvelItem = document.createElement("li");
        
        // b. On lui ajoute le texte
        nouvelItem.textContent = texte;
        
        // c. On l'insère dans la page (à la fin de la balise <ul>)
        liste.appendChild(nouvelItem);
        
        // d. On vide le champ de saisie pour la prochaine tâche
        inputTache.value = "";
    } else {
        alert("Veuillez entrer une tâche avant d'ajouter !");
    }
});

// Petit bonus : afficher un message dans la console (F12)
console.log("Le script a été chargé avec succès ! Bonjour les élèves de NSI !");
