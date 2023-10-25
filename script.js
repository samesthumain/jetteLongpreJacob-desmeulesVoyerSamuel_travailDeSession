const body = document.querySelector("body");
const titreP1 = document.querySelector(".texteDeBienvenue");
const readyText = document.querySelector("#ready");
const departBouton = document.getElementById('depart');
const explications = document.querySelector(".explication");
const questions = document.querySelector(".questions");
const submit = document.querySelector("#submit");
const pokeball = document.querySelector('#pokeball');
const soumission = document.querySelector("#reponses");
const bonneReponse = ['vrai', 'vrai', 'vrai', 'vrai', 'vrai', 'vrai', 'vrai', 'vrai', 'vrai', 'vrai'];
const afficherVraiOuFaux = document.querySelector('#reponses');
const afficherCompteur = document.querySelector('#wrapperCompteur');

//code possible
/*
let value1 = document.querySelector("#types").value,
let value2 = document.querySelector("#starter").value,
let value3 = document.querySelector("#generation").value,
let value4 = document.querySelector("#creation").value,
let value5 = document.querySelector("#badges").value,
let value6 = document.querySelector("#criminelle").value,
let value7 = document.querySelector("#immunise").value,
let value8 = document.querySelector("#region").value,
let value9 = document.querySelector("#pierreEvo").value,
let value0 = document.querySelector("#evolution").value,
*/

//Bouton pour aller a la page 2 et afficher le nom Utilisateur
if (document.getElementById('page2')) {
  document.getElementById('page2').addEventListener('click', function () {
    //prendre le nom d'utilisateur et l'appliquer sur ''nom''
    let nom = document.getElementById('nomUtilisateur').value;
    setTimeout(function(){
      window.location.href = "page_2.html";
    }, 2000)
    setTimeout(function(){
      if(nom){
        //fonction superieure pour afficher le nom sur la page 1
      afficherMessage(nom, afficher);
      //code possible: transfert à la class
      //afficherMessageClass(nom, afficher);
      }
    }, 500)
  }
)
}
function afficherMessage(message, fonctionAppeler){
  let monMessage = "Chargement en cours, veuillez patienter Mr/Mme " + message;
  fonctionAppeler(monMessage);
}
function afficher(message){
  titreP1.textContent = message;
}
//--------------------


//retournez à la page 1 sans délai
if (document.getElementById('page1')) {
document.getElementById('page1').addEventListener('click', function () {
  window.location.href = "page_1.html";
})}
//------------------------

//Utilise les bonnes réponses pour comparer ceux de l'utilisateur afin de savoir si tout est vrai.
if (document.getElementById('submit')) {
  document.getElementById('submit').addEventListener('click', function () {
    const reponseUtilisateur = [
      document.querySelector("#types").value,
      document.querySelector("#starter").value,
      document.querySelector("#generation").value,
      document.querySelector("#creation").value,
      document.querySelector("#badges").value,
      document.querySelector("#criminelle").value,
      document.querySelector("#immunise").value,
      document.querySelector("#region").value,
      document.querySelector("#pierreEvo").value,
      document.querySelector("#evolution").value,

      //code possible
      /*
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8,
      value9,
      value0,
      */
    ];
    //Loop avec FOR OF afin de regarder chaque réponse si elle est bonne jusqu'a break si faux.
    let corrige = true;
    for (const [index, reponse] of reponseUtilisateur.entries()) {
      if (reponse !== bonneReponse[index]) {
        corrige = false;
        break;
      }
    }
    //affiche if else, if vrai, vrai, if faux, faux, voila
    if (corrige) {
      nbrEssais();
      afficherVraiOuFaux.textContent = "Toutes les réponses sont correctes (vrai)";
    } else {
      nbrEssais();
      afficherVraiOuFaux.textContent = "Au moins une réponse est incorrecte (faux)";
    }
  });
}
//compteur Fermeture afin de voir le compteur de la page
  const compteur = function () {
    let compte = 0;
  return function () {
  const compteurElement = document.getElementById('compteur');
  compte++;
  compteurElement.textContent = compte;
}
}
const nbrEssais = compteur()
//--------------------------------


//Retirer texte explications a l'aide du style ainsi que le DOM 
if (document.getElementById('depart')) {
document.getElementById('depart').addEventListener('click', function () {
    body.removeChild(readyText);
    body.removeChild(explications);
    body.removeChild(departBouton);
    questions.removeAttribute("style", "display: none");
    submit.removeAttribute("style", "display: none");
    afficherCompteur.removeAttribute("style", "display: none");
  }
  )
}
//-------------------------


//Rendre chose invisible jusqu'au changement
if(questions){
  questions.setAttribute("style", "display: none");
}

if(submit){
  submit.setAttribute("style", "display: none");
}

if(afficherCompteur){
  afficherCompteur.setAttribute("style", "display: none");
}
//------------------------


//IIFE ajouter class pour lancer animation Pokeball
if(pokeball){
  (function() {
    pokeball.classList.add('pokeball');
  })();
}
//----------------------


//ajouter trois class: 

//classe Utilisateur: on peu l'utiliser pour remplacer la fonction callback

class Utilisateur {
  constructor(nom){
    this.nom = nom;

    //peut-etre utilisé dans la sous-classe
    //this.motDePasse = motDePasse;
  }
}

const nomUtil = new Utilisateur(nom)

//class questions: on peu l'utiliser pour storer les values des questions (modifier la manière de vérifier les réponses)

class Question {
  constructor(q1, q2, q3, q4, q5, q6, q7, q8, q9, q0){
    this.q1 = q1;
    this.q2 = q2;
    this.q3 = q3;
    this.q4 = q4;
    this.q5 = q5;
    this.q6 = q6;
    this.q7 = q7;
    this.q8 = q8;
    this.q9 = q9;
    this.q0 = q0;
  }
}

//sous-class (elle doit hériter d'une des autres class) : 

class InfoUtilisateur extends Utilisateur{
  constructor(motDePasse){
    super(nom)
    this.motDePasse = motDePasse;
  }
}