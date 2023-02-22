const articlesFromAPI = [
  {
    id: 0,
    title: "Что такое дружба?",
    summary:
      "Радость от того, что рядом есть близкий тебе человек, который поможет советом, всегда выслушает и непременно поддержит во всем. ",
    src: "./assets/images/1.jpg",
  },
  {
    id: 1,
    title: "Что такое счастье?",
    summary:
      "Счастье – это внутреннее состояние человека, когда он полностью удовлетворен своей жизнью и рад любому ее проявлению.",
    src: "./assets/images/2.png",
  },
  {
    id: 2,
    title: "И напоследок)",
    summary:
      "Не знаю, будет ли проверена моя данная работа и прочтены эти строки. Но, все равно, спасибо за этот курс! Каждой Аружан огромнейшее RAHMET",
    src: "./assets/images/3.jpg",
  },
];

let article = `
  <div class="article">
      <div class="article-text">

      <p> Смайл Смайл Смайл </p>

      <p class="article-title"></p>

      <p class="article-summary"></p>
  </div>

  <img class="article-image" src="" alt="article_img"/>
  </div>
`;

const articles = document.getElementById("articles");

articlesFromAPI.forEach((item) => {
  let newArticle = article.replace(
    `class="article-title">`,
    `class="article-title"><a href="./next.html">${item.title}</a>`
  );
  newArticle = newArticle.replace(
    `class="article-summary">`,
    `class="article-summary">${item.summary}`
  );

  newArticle = newArticle.replace(`src=""`, `src="${item.src}"`);
  console.log(newArticle);
  articles.innerHTML += newArticle;
});
