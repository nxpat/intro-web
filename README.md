# Travail  à faire

Modifier la page `playground.html` à votre goût en y ajoutant du contenu, formaté avec des balises **HTML** et stylé avec **CSS**. Vous pouvez aussi ajouter des événements traités avec **Javascript**.

# L'architecture du Web  

Le _Web_ est un service qui fonctionne sur le réseau _Internet_ qui permet à des _clients_ (notamment les navigateurs Web tels que Firefox, DuckDuckGo, Safari, Chrome, etc.) d'accéder des **ressources** sur des _serveurs_.

Ces ressources sont identifiées par des _URL_ (Uniform Resource Locator)

Une URL peut contenir plusieurs composantes, apr exemple :

  1. le protocole (_http_, _https_, _ftp_, ...).
  2. un non de machine (`localhost`), une addresse IP (`142.250.76.142`), l'adresse du serveur Web (`//fr.wikipedia.org`).
  3. un chemin d'accès sur le serveur (`/wiki/World_Wide_Web`)
  4. une ancre sur la page (`#Histoire`)
  5. une requête qui sera exécutée au moment où la ressource est demandée (`?q=informatique`)

Les deux premières composantes sont obligatoires.

La communication entre un client et un serveur Web peut utiliser le protocole _HTTP_ (Hypertext 
Transfer Protocol) ou sa version sécurisée _HTTPS_. 

Une requête _HTTP_ est constituée :
  1. d’une **méthode** qui indique l’opération souhaitée ;
  2. de l’**URL** de la ressource à laquelle on applique l’opération ;
  3. d’un ensemble d’**en-têtes** qui fournissent des informations complémentaires au serveur, par exemple le type de navigateur ;
  4. et d’un **contenu** éventuel.

Les principales méthodes sont :

- **GET** pour récupérer le contenu de la ressource spécifiée par l’URL ;
- **POST** pour modifier la ressource spécifiée par l’URL ;
- **PUT** pour créer ou remplacer le contenu de la ressource spécifiée par l’URL ;
- **DELETE** pour détruire la ressource spécifiée par l’URL.

La commande Linux `wget` permet d'effectuer des requêtes sur le Web comme un navigateur. 

Par exemple, la commande :
```bash
wget -d https://fr.wikipedia.org/wiki/World_Wide_Web
```

retourne (extraits) :

```
DEBUG output created by Wget 1.21.3 on linux-gnu.

URI encoding = ‘UTF-8’
Converted file name 'World_Wide_Web' (UTF-8) -> 'World_Wide_Web' (UTF-8)
--2023-02-14 21:42:26--  https://fr.wikipedia.org/wiki/World_Wide_Web
Certificates loaded: 358
Resolving fr.wikipedia.org (fr.wikipedia.org)... 103.102.166.224, 2001:df2:e500:ed1a::1
Caching fr.wikipedia.org => 103.102.166.224 2001:df2:e500:ed1a::1
Connecting to fr.wikipedia.org (fr.wikipedia.org)|103.102.166.224|:443... connected.
Created socket 3.
Releasing 0x0000559505afc2f0 (new refcount 1).

---request begin---
GET /wiki/World_Wide_Web HTTP/1.1
Host: fr.wikipedia.org
User-Agent: Wget/1.21.3
Accept: */*
Accept-Encoding: identity
Connection: Keep-Alive

---request end---
HTTP request sent, awaiting response... 
---response begin---
HTTP/1.1 200 OK
date: Mon, 13 Feb 2023 13:26:22 GMT
server: mw2311.codfw.wmnet
x-content-type-options: nosniff
content-language: fr
vary: Accept-Encoding,Cookie,Authorization
last-modified: Fri, 10 Feb 2023 21:40:09 GMT
content-type: text/html; charset=UTF-8
...
Length: 293872 (287K) [text/html]
Saving to: ‘World_Wide_Web’

World_Wide_Web         100%[==================================>] 286.98K   774KB/s    in 0.4s    

2023-02-14 21:42:27 (774 KB/s) - ‘World_Wide_Web’ saved [293872/293872]
```

# Les langages du Web

Bien que n’importe quel type de contenu puisse être géré par un serveur Web, la plupart des documents échangés sur le Web sont écrits en langage HTML. Les documents **HTML** peuvent inclure ou faire appel à des *feuilles de styles*, qui utilisent le langage **CSS** et du code **JavaScript**.

## Hypertext Markup Language (HTML)

Le langage HTML est un langage de **balises**. Les différentes parties du contenu du document sont organisées en éléments délimités par des **balises de début** et **de fin**, par exemple :
- `<p>` et `</p>` pour marquer le début et la fin d’un paragraphe ;
- `<a>` et `</a>` pour un lien hypertexte.

Les éléments peuvent avoir des **attributs**, qui sont spécifiés dans la balise de début sous la forme `attribut="valeur"`. 

Par exemple, l’attribut `href` de la balise `<a>` permet de préciser l’URL de destination du lien. 

Ainsi l’élément `<a href="https://start.duckduckgo.com/">Cherchez !</a>` affiche le texte `Cherchez !` et envoie sur la page du site [DuckDuckGo](https://start.duckduckgo.com/) si l’on clique dessus.

Un document HTML bien formé doit être constitué d’un élément `<html>`, contenant un élément `<head>` et un élément `<body>`. L’élément `<head>` contient des caractéristiques générales du document, tels que des mots-clés utilisés par les moteurs de recherche, tandis que l’élément `<body>` contient le corps du document à proprement parler. 

**Exemple de structure de base :**

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">  <title>Ma première page Web</title>
  <link href="style.css" rel="stylesheet" type="text/css" />  </head>

<body>
  <p>Hello World !</p>
</body>

</html>
```

### Principales balises HTML

| Balises         | Description |
| --------------- | ----------- |
| `<h1>` à `<h6>` | en-tête de section de niveau 1 à 6 |
| `<p>`           | paragraphe |
| `<ol> <ul> <li>`| liste numérotée (ol) ou à puces (ul), élément de liste (li) |
| `<b> <i>`       | texte en gras ou en italiques |
| `<a>`           | lien vers une autre URL (spécifiée par l’attribut href) |
| `<img>`         | image (URL du contenu spécifiée par l’attribut src) |
| `<span>`        | identifie un élément de texte en ligne |
| `<div>`         | groupe des éléments HTML (bloc générique) |

**Insertion d'une image :** `<img src="image.jpg">`, ou avec dimensions `<img src="image.jpg" width="500" height="600">`.

### Les balises sémantiques (HTML5)

Plutôt que d'utiliser uniquement des balises `<div>` génériques, HTML5 a introduit des balises dites **sémantiques**. Elles n'ont pas d'impact visuel par défaut, mais elles aident les moteurs de recherche et les lecteurs d'écran à comprendre la structure de la page.

* `<header>` : En-tête de la page ou d'une section.
* `<nav>` : Menu de navigation principal.
* `<main>` : Contenu principal et unique de la page.
* `<section>` : Regroupement thématique de contenu.
* `<article>` : Contenu indépendant (un article de blog, une actualité).
* `<footer>` : Pied de page (droits d'auteur, liens légaux).

### Les Formulaires

Les formulaires permettent à l'utilisateur d'envoyer des données au serveur (très utile pour aborder les requêtes HTTP).

* `<form>` : Délimite le formulaire.
* `<input>` : Champ de saisie (texte, mot de passe, case à cocher, etc.).
* `<button>` : Bouton de validation.

**Exemple d'un formulaire simple :**
```html
<form action="/traitement" method="post">
  <label for="nom">Votre nom :</label>
  <input type="text" id="nom" name="utilisateur">
  <button type="submit">Envoyer</button>
</form>
```

### Attributs universels

La plupart des éléments acceptent les attributs suivants, qui sont notamment utilisés par les feuilles de style et les formulaires :

| Attributs | Description |
| --------- | ----------- |
| `id`      | identifiant unique de l’élément dans le document |
| `name`    | nom de l’élément (pas nécessairement unique) |
| `class`   | un ou plusieurs noms de classes pour la feuille de style |
| `href`    | hyperlien : `"https://www.w3schools.com"`, `"#id"`|
| `style`   | déclaration CSS en ligne. Ex : `<p style="color:red">`. Codes couleurs : `#FF0000`, `rgb(255,0,0)` |

La liste complète des balises est disponible sur la [page de référence des éléments HTML](https://developer.mozilla.org/fr/docs/Web/HTML/Element) du site de Mozilla, ainsi que la [liste des attributs universels](https://developer.mozilla.org/fr/docs/Web/HTML/Global_attributes).

---

## Cascading Style Sheets (CSS)

**Ressources pour l'inspiration et l'apprentissage :**
* [CSS Zen Garden](https://www.csszengarden.com/) : the beauty of CSS design.
* [Mozilla developer](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
* [W3Schools](https://www.w3schools.com/css/default.asp)
  
Le langage CSS permet de définir la présentation des éléments HTML, comme par exemple leur couleur, leur taille, la police de caractères utilisée. Une feuille de style est constituée d’un ensemble de règles. Chaque règle comporte un **sélecteur**, qui détermine quels éléments sont affectés, et des propriétés, qui spécifient les caractéristiques de présentation.

Un **sélecteur** peut cibler :
- l’ensemble des éléments d’un même type (exemple : `p`) ;
- l’ensemble des éléments dont l’attribut `class` contient un certain nom (exemple : `.important`) ;
- un unique élément par la valeur de son attribut `id` (exemple : `#note`).

On peut également combiner les sélecteurs, par exemple :

```css
p { color: blue; }
.important { border: 2px solid red; }
#note { background-color: yellow; }
ol.important li { font-weight: bold; }
```

### Principales propriétés CSS

| Propriétés           | Description |
| -------------------- | ----------- |
| `color`              | couleur du texte, ex: `red` |
| `background-color`   | couleur de fond, ex: `gray` |
| `border`             | épaisseur, style et couleur du bord, ex: `2px solid green` |
| `padding`            | espace interne entre le texte et la bordure |
| `border-radius`      | bords arrondis (rayon de courbure), ex: `12px` | 
| `width`              | largeur de l’élément, ex: `50%` |
| `font`               | raccourci pour la police de caractères, ex: `italic 12pt sans-serif` |
| `font-size`          | taille des caractères, ex: `12px`, `1.5em`, `50%` |
| `font-family`        | polices de caractères prioritaires |
| `text-align`         | alignement horizontal du texte, ex : `left`, `center`, `right` |

La feuille de style peut être déclarée "en ligne" dans la partie `<head>` du document HTML :
```html
<style>
h1 {
  color: #ff9966;
  font-size: small;
  text-align: center;
}

p {
  color: #cccccc;
  line-height: 24px;
  font-family: Monospace, monospace, "Lucida Console", Courier; 
  margin: 0;
}
</style>
```

Ou, de préférence, chargée depuis un fichier externe :
```html
<link href="style.css" rel="stylesheet" type="text/css" />
```

---

## Le modèle de boîte (Box Model)



Pour bien positionner des éléments en CSS, il faut comprendre que **chaque élément HTML est considéré comme une boîte rectangulaire**. Cette boîte est composée de 4 zones concentriques :

1.  **Le contenu (Content)** : Le texte ou l'image elle-même (défini par `width` et `height`).
2.  **L'espacement interne (Padding)** : L'espace transparent situé entre le contenu et la bordure.
3.  **La bordure (Border)** : La ligne qui entoure le padding et le contenu.
4.  **La marge externe (Margin)** : L'espace transparent à l'extérieur de la bordure, qui repousse et sépare cet élément des autres éléments autour de lui.

**Exemple d'application du modèle de boîte :**
```css
.boite {
  width: 200px;
  padding: 20px;       /* Espace à l'intérieur */
  border: 2px solid black; /* Bordure visible */
  margin: 15px;        /* Espace à l'extérieur */
}
```

---

## La mise en page avec CSS Flexbox



Historiquement, positionner des éléments côte à côte en CSS était complexe. Le modèle **Flexbox** (Flexible Box) a été créé pour faciliter l'alignement et la répartition de l'espace entre les éléments d'un conteneur, même lorsque leur taille est inconnue ou dynamique.

Le principe repose sur une relation **Conteneur** (le parent) et **Éléments** (les enfants). Pour activer Flexbox, il suffit d'appliquer `display: flex;` sur l'élément parent. Ses enfants directs deviennent alors des éléments flexibles.

### Les propriétés du conteneur (Parent)

* `display: flex;` : Active le mode Flexbox (par défaut, les enfants s'alignent en ligne).
* `flex-direction` : Définit l'axe principal (`row` pour aligner horizontalement de gauche à droite, `column` pour aligner verticalement de haut en bas).
* `justify-content` : Aligne les éléments sur **l'axe principal** (`flex-start`, `center`, `flex-end`, `space-between` pour répartir l'espace entre eux, ou `space-around` pour répartir l'espace autour d'eux).
* `align-items` : Aligne les éléments sur **l'axe secondaire** perpendiculaire (`stretch` pour étirer, `center` pour centrer, `flex-start` ou `flex-end`).

### Exemple complet : Une barre de navigation Flexbox

Voici comment créer facilement un menu aligné horizontalement, avec le logo à gauche et les liens à droite :

**Code HTML :**
```html
<nav class="menu">
  <div class="logo">MonSite</div>
  <ul class="liens">
    <li><a href="#">Accueil</a></li>
    <li><a href="#">Projets</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

**Code CSS :**
```css
/* Le conteneur principal */
.menu {
  display: flex;
  flex-direction: row;               /* Alignement horizontal */
  justify-content: space-between;    /* Pousse le logo à gauche et la liste à droite */
  align-items: center;               /* Centre verticalement */
  background-color: #333;
  color: white;
  padding: 10px 20px;
}

/* La liste à puce devient aussi un conteneur flex ! */
.liens {
  display: flex;                     
  list-style-type: none;             /* Enlève les puces */
  gap: 15px;                         /* Crée un espace de 15px entre chaque lien */
  margin: 0;
  padding: 0;
}

/* Style des liens */
.liens a {
  color: white;
  text-decoration: none;
}
```

-----

## JavaScript et la manipulation du DOM

**JavaScript** est un langage de programmation qui permet d’inclure des programmes dans les pages Web. Ces programmes peuvent d’une part réagir aux actions de l’utilisateur sur le contenu de la page Web (par exemple un clic sur un bouton), et d’autre part modifier le contenu et le style de la page en direct. Ils peuvent également communiquer avec un serveur.

**JavaScript** est similaire à **Python** par de nombreux aspects, mais utilise une syntaxe un peu différente. La table suivante indique les principaux types de données disponibles en **JavaScript**. La notion de **tuple** n’existe pas ; on utilise selon les cas des **tableaux** (listes en Python) ou des **dictionnaires**, mais ceux-ci sont des types **muables**.

### Le langage JavaScript

| Types         | Exemples |
| ------------- | ----------- |
| Nombres       | entiers (`123`) ou réels (`123.456`) |
| Chaînes       | `'texte'` ou `"texte"` ou `` `texte` `` |
| Booléens      | `true` ou `false` (attention, sans majuscule contrairement à Python) |
| Tableaux      | `t = [1, 2, 3]`, `t[1]`, `t.length` |
| Dictionnaires (Objets) | `d = {a: 1, b: 2, c: 3}`, `d.a` ou `d["a"]` |

La table suivante donne la liste des principales instructions. Comparé à Python, une différence importante est que les blocs d’instructions ne sont pas délimités par l’indentation, mais par des **accolades `{}`**.

| Instruction          | Commande |
| -------------------- | ----------- |
| Déclaration variable | `let variable = expression;` (variable modifiable)<br>`const constante = expression;` (valeur fixe) |  
| Affectation          | `variable = expression;` |
| Conditionnelle       | `if (expression) { instructions }` |
|                      | `if (expr) { instr } else { instr }` |
| Opérateurs logiques  | `==` ou `===` (égalité stricte), `||` (ou), `&&` (et), `!` (non) |
| Boucle bornée (Pour) | `for (let i = 0; i < n; i++) { instructions }` |
| Boucle non bornée (Tant que) | `while (expression) { instructions }` |
| Fonction             | `function f(parametres) { instructions }` |
| Valeur de retour     | `return expression;` |
| Commentaires         | `// commentaire sur une ligne`<br>`/* commentaire long */` |

> **Bonne pratique :** Aujourd'hui, on n'utilise presque plus le mot-clé `var`. On préfère `let` pour une variable qui va changer, et `const` pour une variable qui ne changera pas.

Les **expressions** sont similaires à celles de Python. Attention, la division entière n’existe pas directement (on utilise `Math.floor(a / b)`).

Toute **instruction** **JavaScript** se termine idéalement par un point-virgule `;`.

Le code **JavaScript** se place entre des balises `<script>`. Il est recommandé de les placer **à la toute fin de la section `<body>`**, juste avant la balise de fermeture `</body>`, pour s'assurer que la page HTML a fini de charger avant que le script ne s'exécute.

Dans cet exemple, le résultat n'est pas visible sur la page, mais dans la **Console** du navigateur (Touche F12 \> Console) :

```html
<script>
  let x = 5;    // déclaration et affectation
  let y = 6;
  let z = x + y; // la somme de x et y

  // console.log() est l'équivalent de print() en Python
  console.log("La valeur de z est " + z);
</script>
```

-----

### Le DOM (Document Object Model)

Pour écrire ou modifier la page Web en direct, JavaScript doit interagir avec le **DOM**. Le DOM est une représentation en arbre de tous les éléments HTML de la page.

Voici le même programme que précédemment, mais cette fois-ci le résultat s'affiche directement dans la page Web :

```html
<!DOCTYPE html>
<html>
<body>

  <h2>Programme JavaScript</h2>
  <p>Voici un petit exemple de <b>programme JavaScript</b> modifiant le HTML.</p>
  <p id="resultat">Le résultat s'affichera ici.</p>

  <script>
     let x = 5;
     let y = 6;
     let z = x + y;

     // On cible l'élément avec l'ID "resultat" et on modifie son contenu HTML
     document.getElementById("resultat").innerHTML = "La valeur de z est <strong>" + z + "</strong>.";
  </script>

</body>
</html>
```

### 1\. Sélectionner des éléments HTML

Pour modifier un élément, il faut d'abord le "récupérer" dans une variable JavaScript.

```javascript
// Sélectionner UN SEUL élément
const titre = document.getElementById("monTitre"); 
const premierParagraphe = document.querySelector("p"); // Prend le 1er <p> trouvé
const boutonAction = document.querySelector(".btn-action"); // Utilise les sélecteurs CSS

// Sélectionner PLUSIEURS éléments (renvoie une liste)
const tousLesParagraphes = document.getElementsByTagName("p"); 
const elementsRoses = document.getElementsByClassName("rose"); 
const tousLesElementsListe = document.querySelectorAll("li"); 

// Parcourir une liste d'éléments
document.querySelectorAll('li').forEach(function(elementLi) {
  elementLi.style.color = "blue"; // Met tous les <li> en bleu
});
```

### 2\. Modifier des éléments HTML

Une fois l'élément sélectionné, on peut modifier son contenu, ses attributs ou son style (CSS).

```javascript
const monElement = document.getElementById("resultat");

// Modifier le texte ou le HTML interne
monElement.textContent = "Nouveau texte simple";
monElement.innerHTML = "Texte avec du <b>HTML</b> inclus";

// Modifier ou ajouter une classe CSS (très utile pour activer des animations ou styles)
monElement.className = "nouvelle-classe"; // Écrase les anciennes classes
monElement.classList.add("important");    // Ajoute une classe
monElement.classList.remove("important"); // Retire une classe
monElement.classList.toggle("cache");     // Alterne : ajoute si absente, retire si présente

// Modifier directement le style CSS (équivalent à l'attribut style="")
monElement.style.color = 'red';
monElement.style.backgroundColor = 'yellow';
monElement.style.fontSize = '20px'; // Attention: font-size en CSS devient fontSize en JS

// Modifier des attributs HTML (src, href, etc.)
const img = document.querySelector('img');
img.setAttribute('src', 'nouveau_requin.png');
img.removeAttribute('alt'); 
```

#### Exemple : Créer et ajouter un nouvel élément (Une liste de tâches)

Pour ajouter un élément qui n'existe pas encore dans le HTML, il faut le créer, lui donner un contenu, puis l'insérer dans un parent (avec `appendChild`).

```javascript
// 1. On crée une nouvelle balise <li>
const nouvelItem = document.createElement('li');

// 2. On lui donne du texte
nouvelItem.textContent = "Faire les exercices de NSI";

// 3. On sélectionne la liste (<ul>) existante dans la page
const liste = document.getElementById("maListe");

// 4. On ajoute le nouveau <li> à la fin de la liste
liste.appendChild(nouvelItem);
```

-----

### 3\. Les Événements (Interactivité)

Le langage JavaScript permet de réagir aux actions de l'utilisateur (clics, frappes au clavier, survols).

Il existe de nombreux événements. Voici les plus utilisés :

| Événement | Condition de déclenchement |
| --------- | -------------------- |
| `click`, `dblclick` | Clic ou double-clic de la souris |
| `keydown`, `keyup` | Appui ou relâchement d’une touche du clavier |
| `mouseenter`, `mouseleave` | La souris entre ou sort de la zone de l’élément |
| `change` | Modification de valeur d’un champ de saisie (`<input>`) |
| `submit` | Envoi d’un formulaire (`<form>`) |
| `DOMContentLoaded` | Le HTML de la page est entièrement chargé et prêt |

#### Méthode 1 : Via les attributs HTML (Ancienne méthode, déconseillée pour les gros projets)

On peut associer une fonction directement dans la balise avec `on...` :

```html
<p onclick="alert('Salut !')">Cliquez-moi</p>
```

#### Méthode 2 : Avec `addEventListener` (Méthode moderne recommandée)

Il est préférable de séparer le HTML (la structure) du JavaScript (le comportement). La fonction `addEventListener('evenement', fonction)` "écoute" ce qu'il se passe.

**Exemple : Un bouton pour activer un "Mode Sombre"**

*HTML :*

```html
<button id="btnSombre">Activer le mode sombre</button>
<p>Ceci est une page de test.</p>
```

*JavaScript :*

```javascript
// On sélectionne le bouton et le corps de la page
const bouton = document.getElementById("btnSombre");
const corpsDePage = document.querySelector("body");

// On crée la fonction qui sera déclenchée
function basculerModeSombre() {
  // On utilise toggle pour ajouter/retirer une classe CSS "dark-mode"
  corpsDePage.classList.toggle("dark-mode");
}

// On attache l'écouteur d'événement
bouton.addEventListener("click", basculerModeSombre);
```

*(Il suffirait ensuite d'avoir une règle CSS `.dark-mode { background-color: black; color: white; }` pour que la magie opère).*

Pour plus d'informations (références W3C et Mozilla) :

  - [Modifier le DOM (MDN)](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
  - [Liste des balises interactives (W3Schools)](https://www.w3schools.com/html/default.asp)

-----
