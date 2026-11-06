

// Exercice 1 : Inverser une chaîne
function inverserChaine(chaine) {
    return chaine.split("").reverse().join("");
}

console.log("1. Inverser une chaîne :", inverserChaine("Bonjour"));


// Exercice 2 : Compter les caractères
function compterCaracteres(chaine) {
    return chaine.length;
}

console.log("2. Nombre de caractères :", compterCaracteres("Bonjour"));


// Exercice 3 : Mettre les mots en majuscules
function mettreMajuscule(phrase) {
    return phrase
        .split(" ")
        .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
        .join(" ");
}

console.log("3. Première lettre en majuscule :", mettreMajuscule("bonjour tout le monde"));


// Exercice 4 : Trouver le maximum et le minimum
function trouverMaximum(tableau) {
    return Math.max(...tableau);
}

function trouverMinimum(tableau) {
    return Math.min(...tableau);
}

let nombres = [12, 5, 28, 3, 17];

console.log("4. Maximum :", trouverMaximum(nombres));
console.log("   Minimum :", trouverMinimum(nombres));


// Exercice 5 : Calculer la somme d'un tableau
function sommeTableau(tableau) {
    let somme = 0;

    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }

    return somme;
}

console.log("5. Somme du tableau :", sommeTableau([10, 20, 30, 40]));


// Exercice 6 : Filtrer un tableau
function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
}

console.log(
    "6. Nombres supérieurs à 10 :",
    filtrerTableau([2, 5, 10, 15, 20], nombre => nombre > 10)
);


// Exercice 7 : Calculer la factorielle
function factorielle(nombre) {
    let resultat = 1;

    for (let i = 1; i <= nombre; i++) {
        resultat *= i;
    }

    return resultat;
}

console.log("7. Factorielle de 5 :", factorielle(5));


// Exercice 8 : Vérifier si un nombre est premier
function estPremier(nombre) {
    if (nombre <= 1) {
        return false;
    }

    for (let i = 2; i < nombre; i++) {
        if (nombre % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("8. Est-ce que 7 est premier ? :", estPremier(7));
console.log("   Est-ce que 10 est premier ? :", estPremier(10));


// Exercice 9 : Générer la suite de Fibonacci
function fibonacci(nombre) {
    if (nombre <= 0) {
        return [];
    }

    let suite = [0, 1];

    for (let i = 2; i < nombre; i++) {
        suite[i] = suite[i - 1] + suite[i - 2];
    }

    return suite.slice(0, nombre);
}

console.log("9. Suite de Fibonacci :", fibonacci(10));
