const quizAnswers  = { q1: 'orange', q2: 'autumn', q3: 'wavy', q4: 'hawk', q5: 'water' };
const quizSelected = {};

function pick(btn, qid) {
  document.querySelectorAll('#' + qid + ' .opt').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  quizSelected[qid] = btn.dataset.val;
}

function checkQuiz() {
  let score = 0;
  const total = Object.keys(quizAnswers).length;

  Object.keys(quizAnswers).forEach(qid => {
    document.querySelectorAll('#' + qid + ' .opt').forEach(b => {
      b.disabled = true;
      b.classList.remove('correct', 'wrong');
      if (b.dataset.val === quizAnswers[qid])      b.classList.add('correct');
      else if (b.classList.contains('selected'))   b.classList.add('wrong');
    });
    if (quizSelected[qid] === quizAnswers[qid]) score++;
  });

  const msgs = [
    { title: "Who is Wasim? 👀",          body: "You don't know him at all! Check the green answers and learn about the city boy." },
    { title: "Barely acquainted 🌱",       body: "1 out of 5 — you've maybe seen him once in the hallway." },
    { title: "Getting there 🌙",           body: "2 out of 5! You know a little. Still a lot to learn about Wasim though." },
    { title: "You know some things ⭐",    body: "3 out of 5! Decent. A couple slipped past you though." },
    { title: "Almost a bestie 🔥",         body: "4 out of 5! You clearly know Wasim well — one sneaky one got you." },
    { title: "You KNOW Wasim! 🏙️",        body: "Perfect score! You really know the city boy — respect 💙" }
  ];

  document.getElementById('result-score').textContent = score + '/' + total;
  document.getElementById('result-title').textContent = msgs[score].title;
  document.getElementById('result-body').textContent  = msgs[score].body;

  const card = document.getElementById('result');
  card.style.display = 'block';
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function retryQuiz() {
  Object.keys(quizAnswers).forEach(qid => {
    document.querySelectorAll('#' + qid + ' .opt').forEach(b => {
      b.disabled = false;
      b.classList.remove('selected', 'correct', 'wrong');
    });
    delete quizSelected[qid];
  });
  document.getElementById('result').style.display = 'none';
}

function checkQuiz() {
  const total = Object.keys(quizAnswers).length;
  let score = 0;

  Object.keys(quizAnswers).forEach(qid => {
    document.querySelectorAll('#' + qid + ' .opt').forEach(b => {
      b.disabled = true;
      b.classList.remove('correct', 'wrong');
      if (b.dataset.val === quizAnswers[qid])      b.classList.add('correct');
      else if (b.classList.contains('selected'))   b.classList.add('wrong');
    });
    if (quizSelected[qid] === quizAnswers[qid]) score++;
  });

  const msgs = [
    { title: "Stranger alert 👀",        body: "You don't know Hala at all! Check the green answers and go learn about her 😭" },
    { title: "Barely acquainted 🌱",     body: "1 out of 5 — you've maybe heard her name once. Check the green ones!" },
    { title: "Getting there 🌙",         body: "2 out of 5! You know a little. Still a lot to learn about Hala though." },
    { title: "You know some things ⭐",  body: "3 out of 5! Solid, but a couple slipped past you." },
    { title: "Almost perfect 🔥",        body: "4 out of 5! You clearly know Hala well — just one sneaky one got you." },
    { title: "You KNOW Wasim! 🎯",        body: "Perfect score! You really know her well — honorary best friend status unlocked 💜" }
  ];

  document.getElementById('result-score').textContent = score + '/' + total;
  document.getElementById('result-title').textContent = msgs[score].title;
  document.getElementById('result-body').textContent  = msgs[score].body;

  const card = document.getElementById('result');
  card.style.display = 'block';
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function retryQuiz() {
  Object.keys(quizAnswers).forEach(qid => {
    document.querySelectorAll('#' + qid + ' .opt').forEach(b => {
      b.disabled = false;
      b.classList.remove('selected', 'correct', 'wrong');
    });
    delete quizSelected[qid];
  });
  document.getElementById('result').style.display = 'none';
}
