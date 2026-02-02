const topics = [
  {
    title: "Noun",
    note: "Notes/Noun.html",
    quiz: "all_quiz.html?topic=noun"
  },
  {
    title: "Pronoun",
    note: "Notes/Pronoun.html",
    quiz: "all_quiz.html?topic=pronoun"
  },
  {
    title: "Verb",
    note: "Notes/Verb.html",
    quiz: "all_quiz.html?topic=verb"
  },
  {
    title: "Adjective",
    note: "Notes/Adjective.html",
    quiz: "all_quiz.html?topic=adjective"
  },
  {
    title: "Adverb",
    note: "Notes/Adverb.html",
    quiz: "all_quiz.html?topic=adverb"
  },
  {
    title: "Preposition",
    note: "Notes/Preposition.html",
    quiz: "all_quiz.html?topic=preposition"
  },
  {
    title: "Article",
    note: "Notes/Article.html",
    quiz: "all_quiz.html?topic=article"
  },
  {
    title: "Conjunction",
    note: "Notes/Conjunction.html",
    quiz: "all_quiz.html?topic=conjunction"
  },
  {
    title: "Interjection",
    note: "Notes/Interjection.html",
    quiz: "all_quiz.html?topic=interjection"
  },
  {
    title: "Sentence Formation",
    note: "Notes/Sentence_formation.html",
    quiz: "all_quiz.html?topic=sentence_formation"
  },
  {
    title: "Tense",
    note: "Notes/Tense.html",
    quiz: "all_quiz.html?topic=tense"
  }
];

const container = document.getElementById("topicsContainer");

let unlockedIndex = localStorage.getItem("unlockedIndex");
unlockedIndex = unlockedIndex ? parseInt(unlockedIndex) : 0;

topics.forEach((topic, index) => {
  const card = document.createElement("div");
  card.className = "topic-card";

  if (index <= unlockedIndex) {
    card.innerHTML = `
      <h3>${topic.title}</h3>
      <button onclick="location.href='${topic.note}'">📖 Learn</button>
      <button onclick="location.href='${topic.quiz}'">📝 Quiz</button>
    `;
  } else {
    card.innerHTML = `
      <h3>${topic.title}</h3>
      <p>🔒 Locked</p>
    `;
    card.classList.add("locked");
  }

  container.appendChild(card);
});


function openNotes(topic) {
  window.location.href = `notes/${capitalize(topic)}.html`;
}

function openQuiz(topic) {
  window.location.href = `all_quiz.html?topic=${topic}`;
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
