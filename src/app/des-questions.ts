export interface Reponse {
    id: number;
    text: string;
    correct: boolean;
    selectionne: boolean;
}

export interface Question {
    id: number;
    theme: string;
    question: string;
    reponses: Reponse[];
}

const tousDesQuestions = [
  {
    id: 1,
    theme: "Avoir ou Être",
    question: "Repondre en français: How old are you?",
    reponses: [
      { id: 1, text: "Je suis ...", correct: false, selectionne: false },
      { id: 2, text: "Je serai ...", correct: false, selectionne: false },
      { id: 3, text: "J'ai ...", correct: true, selectionne: false },
      { id: 4, text: "J'aurai ...", correct: false, selectionne: false }
    ]
  },
  {
    id: 2,
    theme: "Avoir ou Être",
    question: "You have arrived at the destination.",
    reponses: [
      { id: 1, text: "Vous avez arrivé à destination.", correct: false, selectionne: false },
      { id: 2, text: "Tu as arrivé à destination.", correct: false, selectionne: false },
      { id: 3, text: "Vous etes arrivé à destination.", correct: true, selectionne: false },
      { id: 4, text: "Vous n'avez pas arrivé à destination.", correct: false, selectionne: false }
    ]
  },
  {
    id: 3,
    theme: "Avoir ou Être",
    question: "'I went' in french is ...",
    reponses: [
      { id: 1, text: "J'ai allé.", correct: false, selectionne: false },
      { id: 2, text: "Je suis allé.", correct: true, selectionne: false }
    ]
  },
  {
    id : 4,
    theme: "Être ou Aller",
    question: "Most of the people are on holidays.",
    reponses: [
      { id: 1, text: "La pluparts des gens vont en vacances.", correct: false, selectionne: false },
      { id: 2, text: "La pluparts des gens sont en vacances.", correct: true, selectionne: false },
      { id: 3, text: "La pluparts des gens est en vacances.", correct: false, selectionne: false }
    ]
  },
  {
    id : 5,
    theme: "Être ou Aller",
    question: "I hope that you are ok/are doing well.",
    reponses: [
      { id: 1, text: "J'espere que tu es bien.", correct: false, selectionne: false },
      { id: 2, text: "J'espere que tu vas bien.", correct: true, selectionne: false }
    ]
  },
  {
    id : 6,
    theme: "Temps",
    question: "Time flies.",
    reponses: [
      { id: 1, text: "Le temps passe vite.", correct: true, selectionne: false },
      { id: 2, text: "La temps passe vite.", correct: false, selectionne: false },
      { id: 3, text: "Le temps court vite.", correct: false, selectionne: false },
    ]
  },
  {
    id : 7,
    theme: "Feminin / Masculin",
    question: "question",
    reponses: [
      { id: 1, text: "une", correct: true, selectionne: false },
      { id: 2, text: "un", correct: false, selectionne: false }
    ]
  },
  {
    id : 8,
    theme: "Feminin / Masculin",
    question: "table",
    reponses: [
      { id: 1, text: "la", correct: true, selectionne: false },
      { id: 2, text: "le", correct: false, selectionne: false }
    ]
  },
  {
    id : 9,
    theme: "Feminin / Masculin",
    question:  "I make a lot of mistakes.",
    reponses: [
      { id: 1, text: "Je fais beaucoup d'erreurs.", correct: true, selectionne: false },
      { id: 2, text: "Je fais plusieurs erreurs.", correct: false, selectionne: false },
      { id: 3, text: "Je fais beaucoup des erreurs.", correct: false, selectionne: false },
      { id: 4, text: "Je fais beaucoup de erreurs.", correct: false, selectionne: false }
    ]
  },
  {
    id : 10,
    theme: "Autre choses",
    question:  "I am going to ...",
    reponses: [
      { id: 1, text: "Je va ...", correct: false, selectionne: false },
      { id: 2, text: "Je vais ...", correct: true, selectionne: false },
      { id: 3, text: "Je vas ...", correct: false, selectionne: false },
      { id: 4, text: "Je suis ...", correct: false, selectionne: false },
    ]
  }
];

export async function tousDesQuestions2(
  request: RequestInfo
): Promise<any> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

const data = tousDesQuestions2("http://scaling-giggle-api.duckdns.org:8080/training/cd46bbcc-764c-4ee4-b91f-4528e8f95604").then((data) => console.log(data))

function shuffle(a : any[]) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function QuestionsReponsesAleatoires() {
  let resultat = [];

  resultat = shuffle(tousDesQuestions);

  for (let i = 0; i < resultat.length; i++) {
    resultat[i].reponses = shuffle(resultat[i].reponses);
  }

  return resultat;
}


export const questions = QuestionsReponsesAleatoires();
