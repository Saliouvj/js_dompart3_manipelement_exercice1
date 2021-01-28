//1 Récupère le h2 dont la valeur est "Exercice" et affiche uniquement le text
let selectH2 = document.querySelector('h2');
console.log(selectH2.innerText);

//2 Trouve le moyen de modifier sa valeur par "Exercice 1"
selectH2.innerText = "Exercice 1"

//3 Récupère l'élément p juste en dessous ce h2 et rajoute y la ligne js utilisé pour résoudre l'exercice 2.

selectH2.nextElementSibling.innerHTML = "exercice 1"

// 4 Récupère la première section et trouve le moyen d'affiche juste le nom de l'id dans la console

let selectSection = document.querySelector('section');
console.log(selectSection.id);

// 5 Récupère le premier h1 et trouve le moyen d'afficher juste le nom de la class dans la console ( attention il existe deux propriétés pour afficher les class, fait l'exercice avec l'une et puis avec l'autre !)
let selectTitre = document.querySelector('h1');
console.log(selectTitre.className);
console.log(selectTitre.classList);

// 6. Avec l'aide d'un forEach affiche le nom de class de chaque h1

let allH1 = document.querySelectorAll('h1');

let tab = Array.from(allH1);

tab.forEach(element => {
    console.log(element.className);
});

// 7 Trouve une propriété pour afficher tous les attributs du premier input

let selectInput = document.querySelector('input');
console.log(selectInput.attributes);


// 8 Trouve le moyen de récupérer la valeur dans l'attribut type du premier input
console.log(selectInput.getAttribute('type'));

// 9 Récupère l'input dont l'id est "inputPassword3" et ajoute lui un attribut "type" dont la valeur est "password"

let exo9 = document.querySelector('input#inputPassword3');
exo9.setAttribute('type','password')

// 10
let exo10 = document.querySelectorAll('input')[0];
exo10.setAttribute('type', 'color')