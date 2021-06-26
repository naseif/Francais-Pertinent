export interface Reponse {
    id: number;
    text: string;
    correct: boolean;
}

export interface Question {
    id: number;
    theme: string;
    question: string;
    reponses : Reponse[];
  }
  
  export const products = [
    {
        id: 1,
        theme: "Avoir ou être",
        question: "Repondre en français: How old are you?",
        reponse: [
            {id: 1, text: "Je suis ...", correct: false},
            {id: 2, text: "Je serai ...", correct: false},
            {id: 3, text: "J'ai ...", correct: true},
            {id: 4, text: "J'aurai ...", correct: false}
        ]
    },
    {
        id: 2,
        theme: "Avoir ou être",
        question: "You have arrived at the destination.",
        reponse: [
            {id: 1, text: "Vous avez arrivé à destination.", correct: false},
            {id: 2, text: "Tu as arrivé à destination.", correct: false},
            {id: 3, text: "Vous etes arrivé à destination.", correct: true},
            {id: 4, text: "Vous n'avez pas arrivé à destination.", correct: false}
        ]
    },
    {
        id: 3,
        theme: "Avoir ou être",
        question: "'I went' in french is ...",
        reponse: [
            {id: 1, text: "J'ai allé.", correct: false},
            {id: 2, text: "Je suis allé.", correct: true}
        ]
    }
  ];
