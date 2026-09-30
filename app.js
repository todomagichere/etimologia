const challenges = [
  {
    word: "telemetría",
    definition: "Medición a distancia de magnitudes físicas.",
    parts: [
      { text: "tele", meaning: "lejos, a distancia", origin: "griego", original: "τῆλε", options: ["lejos, a distancia", "sonido", "luz", "movimiento"] },
      { text: "metría", meaning: "medida, arte de medir", origin: "griego", original: "μετρία", options: ["escritura", "medida, arte de medir", "observación", "tiempo"] }
    ]
  },
  {
    word: "microscopio",
    definition: "Instrumento para observar objetos demasiado pequeños para verse a simple vista.",
    parts: [
      { text: "micro", meaning: "pequeño", origin: "griego", original: "μικρός", options: ["pequeño", "rápido", "redondo", "antiguo"] },
      { text: "scopio", meaning: "mirar, observar", origin: "griego", original: "σκοπεῖν", options: ["escuchar", "mirar, observar", "ordenar", "guardar"] }
    ]
  },
  {
    word: "biblioteca",
    definition: "Lugar o colección organizada de libros.",
    parts: [
      { text: "biblio", meaning: "libro", origin: "griego", original: "βιβλίον", options: ["ciudad", "libro", "voz", "mano"] },
      { text: "teca", meaning: "depósito, caja", origin: "griego", original: "θήκη", options: ["camino", "depósito, caja", "casa", "imagen"] }
    ]
  },
  {
    word: "aeropuerto",
    definition: "Terreno destinado al despegue y aterrizaje de aeronaves.",
    parts: [
      { text: "aero", meaning: "aire", origin: "griego", original: "ἀήρ", options: ["mar", "aire", "fuego", "tierra"] },
      { text: "puerto", meaning: "paso, entrada", origin: "latín", original: "portus", options: ["paso, entrada", "vuelo", "distancia", "comercio"] }
    ]
  }
];

// Banco editorial de compuestos grecolatinos. Cada combinación conserva las dos raíces
// visibles para que el juego pueda explicar cómo se construye el término.
const technicalRoots = [
  ["aero", "aero", "aire", "ἀήρ", "el aire"], ["agro", "agro", "campo", "ἀγρός", "el campo"],
  ["antropo", "antropo", "ser humano", "ἄνθρωπος", "el ser humano"], ["arqui", "arqui", "origen, principio", "ἀρχή", "el origen"],
  ["astro", "astro", "estrella", "ἄστρον", "los astros"], ["auto", "auto", "uno mismo", "αὐτός", "uno mismo"],
  ["biblio", "biblio", "libro", "βιβλίον", "los libros"], ["bio", "bio", "vida", "βίος", "la vida"],
  ["cardio", "cardio", "corazón", "καρδία", "el corazón"], ["cito", "cito", "célula", "κύτος", "las células"],
  ["crono", "crono", "tiempo", "χρόνος", "el tiempo"], ["demo", "demo", "pueblo", "δῆμος", "el pueblo"],
  ["dermo", "dermo", "piel", "δέρμα", "la piel"], ["eco", "eco", "casa, entorno", "οἶκος", "el entorno"],
  ["electro", "electro", "ámbar, electricidad", "ἤλεκτρον", "la electricidad"], ["endo", "endo", "dentro", "ἔνδον", "el interior"],
  ["entomo", "entomo", "insecto", "ἔντομον", "los insectos"], ["etno", "etno", "pueblo, grupo", "ἔθνος", "los pueblos"],
  ["foto", "foto", "luz", "φῶς", "la luz"], ["fono", "fono", "sonido, voz", "φωνή", "el sonido"],
  ["fito", "fito", "planta", "φυτόν", "las plantas"], ["gastro", "gastro", "estómago", "γαστήρ", "el estómago"],
  ["geo", "geo", "tierra", "γῆ", "la Tierra"], ["geronto", "geronto", "anciano", "γέρων", "la vejez"],
  ["gineco", "gineco", "mujer", "γυνή", "la mujer"], ["helio", "helio", "sol", "ἥλιος", "el Sol"],
  ["hemo", "hemo", "sangre", "αἷμα", "la sangre"], ["hepato", "hepato", "hígado", "ἧπαρ", "el hígado"],
  ["hetero", "hetero", "diferente", "ἕτερος", "lo diferente"], ["hidro", "hidro", "agua", "ὕδωρ", "el agua"],
  ["ictio", "ictio", "pez", "ἰχθύς", "los peces"], ["icono", "icono", "imagen", "εἰκών", "las imágenes"],
  ["lexico", "lexico", "palabra", "λέξις", "las palabras"], ["lito", "lito", "piedra", "λίθος", "las piedras"],
  ["macro", "macro", "grande", "μακρός", "lo grande"], ["micro", "micro", "pequeño", "μικρός", "lo pequeño"],
  ["mito", "mito", "relato, mito", "μῦθος", "los mitos"], ["morfo", "morfo", "forma", "μορφή", "las formas"],
  ["nano", "nano", "muy pequeño", "νᾶνος", "lo diminuto"], ["neuro", "neuro", "nervio", "νεῦρον", "el sistema nervioso"],
  ["odonto", "odonto", "diente", "ὀδούς", "los dientes"], ["onco", "onco", "masa, tumor", "ὄγκος", "los tumores"],
  ["ornito", "ornito", "ave", "ὄρνις", "las aves"], ["orto", "orto", "recto, correcto", "ὀρθός", "lo correcto"],
  ["osteo", "osteo", "hueso", "ὀστέον", "los huesos"], ["paleo", "paleo", "antiguo", "παλαιός", "lo antiguo"],
  ["pato", "pato", "dolor, enfermedad", "πάθος", "la enfermedad"], ["psico", "psico", "mente, alma", "ψυχή", "la mente"],
  ["socio", "socio", "compañero, sociedad", "socius", "la sociedad", "latín"], ["tele", "tele", "lejos, a distancia", "τῆλε", "la distancia"],
  ["termo", "termo", "calor", "θέρμη", "el calor"], ["topo", "topo", "lugar", "τόπος", "los lugares"],
  ["toxico", "toxico", "veneno", "τοξικόν", "los venenos"], ["zoo", "zoo", "animal", "ζῷον", "los animales"]
];

const technicalEndings = [
  ["logía", "logía", "estudio, tratado", "λογία", (subject) => `Estudio de ${subject}.`],
  ["grafía", "grafía", "escritura, representación", "γραφία", (subject) => `Representación o descripción de ${subject}.`],
  ["metría", "metría", "medida", "μετρία", (subject) => `Medición relacionada con ${subject}.`],
  ["fobia", "fobia", "miedo, aversión", "φοβία", (subject) => `Miedo o aversión relacionado con ${subject}.`],
  ["filia", "filia", "afinidad, amor", "φιλία", (subject) => `Afinidad o interés por ${subject}.`],
  ["terapia", "terapia", "tratamiento", "θεραπεία", (subject) => `Tratamiento relacionado con ${subject}.`],
  ["patía", "patía", "afección, padecimiento", "πάθεια", (subject) => `Afección relacionada con ${subject}.`],
  ["nomía", "nomía", "norma, orden", "νομία", (subject) => `Conocimiento o sistema aplicado a ${subject}.`]
];

const rootMeaningPool = technicalRoots.map(([, , meaning]) => meaning);
const endingMeaningPool = technicalEndings.map(([, , meaning]) => meaning);
const optionsFor = (meaning, pool, offset) => [meaning, ...pool.filter((item) => item !== meaning).slice(offset % (pool.length - 3), (offset % (pool.length - 3)) + 3)];
const existingWords = new Set(challenges.map(({ word }) => word));
const generatedChallenges = technicalRoots.flatMap(([form, text, meaning, original, subject, origin = "griego"], rootIndex) => (
  technicalEndings.map(([endingForm, endingText, endingMeaning, endingOriginal, definitionFor], endingIndex) => ({
    word: `${form}${endingForm}`,
    definition: definitionFor(subject),
    parts: [
      { text, meaning, origin, original, options: optionsFor(meaning, rootMeaningPool, rootIndex + endingIndex) },
      { text: endingText, meaning: endingMeaning, origin: "griego", original: endingOriginal, options: optionsFor(endingMeaning, endingMeaningPool, rootIndex * 2 + endingIndex) }
    ]
  }))
)).filter(({ word }) => !existingWords.has(word)).slice(0, 396);

challenges.push(...window.createWordBank(challenges.map(({ word }) => word)));

const today = new Date();
const dailyIndex = Math.floor(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) / 86400000) % challenges.length;
let challenge = challenges[dailyIndex];
let score = 0;
let rootAnswers = [];
let rootSelections = [];
let dailyProgress = null;

const $ = (selector) => document.querySelector(selector);
const result = $("#result");
const rootsGrid = $("#roots-grid");
const hintButton = $("#hint-button");
const definition = $("#definition");
const statsKey = "etimologia-es-stats";
const dailyProgressKey = "etimologia-es-daily-progress";
const themeKey = "etimologia-es-theme";

function readStats() {
  try {
    const stored = JSON.parse(localStorage.getItem(statsKey) || "{}");
    return { played: 0, totalScore: 0, bestScore: 0, streak: 0, lastPlayed: null, history: [], ...stored, history: Array.isArray(stored.history) ? stored.history : [] };
  } catch {
    return { played: 0, totalScore: 0, bestScore: 0, streak: 0, lastPlayed: null, history: [] };
  }
}

function dateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function readDailyProgress() {
  try {
    const stored = JSON.parse(localStorage.getItem(dailyProgressKey) || "null");
    if (!stored || stored.date !== dateKey(today) || stored.word !== challenge.word || !Array.isArray(stored.selections)) return null;
    return { selections: stored.selections, hintShown: Boolean(stored.hintShown), completed: Boolean(stored.completed) };
  } catch {
    return null;
  }
}

function persistDailyProgress() {
  dailyProgress = {
    date: dateKey(today),
    word: challenge.word,
    selections: rootSelections.map((selection) => selection || null),
    hintShown: Boolean(dailyProgress?.hintShown),
    completed: Boolean(dailyProgress?.completed)
  };
  localStorage.setItem(dailyProgressKey, JSON.stringify(dailyProgress));
}

function restoreDailyProgress() {
  const stored = readDailyProgress();
  if (!stored) return;
  dailyProgress = stored;
  rootSelections = challenge.parts.map((part, index) => (
    typeof stored.selections[index] === "string" && part.options.includes(stored.selections[index]) ? stored.selections[index] : undefined
  ));
  rootAnswers = rootSelections.map((selection, index) => (
    selection === undefined ? undefined : selection === challenge.parts[index].meaning
  ));
  score = rootAnswers.filter(Boolean).length;
  if (stored.hintShown) {
    definition.hidden = false;
    definition.classList.add("is-revealed");
    hintButton.hidden = true;
  }
  renderRoots();
  if (rootAnswers.filter((answer) => answer !== undefined).length === challenge.parts.length) {
    window.setTimeout(() => showResult(), 0);
  }
}

function renderActivity(stats) {
  const chart = $("#stats-chart");
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    return date;
  });
  const history = new Map(stats.history.map((entry) => [entry.date, entry]));
  chart.innerHTML = "";
  days.forEach((date) => {
    const entry = history.get(dateKey(date));
    const played = entry?.played || 0;
    const correct = entry?.correct || 0;
    const possible = played * challenge.parts.length;
    const percent = possible ? Math.max(14, Math.round((correct / possible) * 100)) : 0;
    const day = document.createElement("div");
    day.className = `activity-day${played ? "" : " is-empty"}`;
    day.innerHTML = `<div class="activity-bar"><div class="activity-fill" style="--bar-height:${percent}%"></div><span class="activity-value">${played ? `${correct}/${possible}` : "·"}</span></div><span class="activity-label">${date.toLocaleDateString("es-ES", { weekday: "narrow" })}</span>`;
    chart.append(day);
  });
  const activeDays = stats.history.filter((entry) => entry.played > 0).length;
  $("#stats-active-days").textContent = `${activeDays} días activos`;
}

function updateStatsPanel() {
  const stats = readStats();
  const average = stats.played ? Math.round((stats.totalScore / (stats.played * challenge.parts.length)) * 100) : 0;
  $("#stats-played").textContent = stats.played;
  $("#stats-correct").textContent = stats.totalScore;
  $("#stats-average").textContent = `${average}%`;
  $("#stats-streak").textContent = stats.streak;
  renderActivity(stats);
}

function recordGame() {
  const stats = readStats();
  const today = dateKey(new Date());
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = dateKey(yesterdayDate);
  stats.played += 1;
  stats.totalScore += score;
  stats.bestScore = Math.max(stats.bestScore, score);
  const entry = stats.history.find((item) => item.date === today);
  if (entry) {
    entry.played += 1;
    entry.correct += score;
  } else {
    stats.history.push({ date: today, played: 1, correct: score });
    stats.history = stats.history.slice(-28);
  }
  if (stats.lastPlayed !== today) stats.streak = stats.lastPlayed === yesterday ? stats.streak + 1 : 1;
  stats.lastPlayed = today;
  localStorage.setItem(statsKey, JSON.stringify(stats));
  updateStatsPanel();
}

function shuffled(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function setChallenge(nextChallenge) {
  challenge = nextChallenge;
  score = 0;
  rootAnswers = [];
  rootSelections = [];
  dailyProgress = null;
  if (result.open) result.close();
  $("#share-status").textContent = "";
  definition.textContent = challenge.definition;
  definition.hidden = true;
  definition.classList.remove("is-revealed");
  hintButton.hidden = false;
  hintButton.disabled = false;
  hintButton.classList.remove("is-leaving");
  hintButton.textContent = "¿Necesitas una pista?";
  $("#max-score").textContent = challenge.parts.length;
  renderRoots();
}

function renderRoots() {
  $("#word").innerHTML = challenge.parts
    .map((wordPart) => `<span class="word-part">${wordPart.text}</span>`)
    .join("");
  rootsGrid.innerHTML = "";
  challenge.parts.forEach((part, rootIndex) => {
    const card = document.createElement("section");
    card.className = "root-card";
    card.tabIndex = 0;
    card.setAttribute("aria-label", `Raíz ${rootIndex + 1}: ${part.text}`);
    card.innerHTML = `
      <div class="root-name">${part.text}</div>
      <div class="root-facts" aria-label="Información etimológica de la raíz">
        <div class="root-fact"><strong class="origin-line"><span>Del ${part.origin}</span><em class="origin-term" lang="${part.origin === "griego" ? "el" : "la"}">${part.original}</em></strong></div>
      </div>
      <div class="answers" role="group" aria-label="Posibles significados de ${part.text}"></div>
      <div class="feedback" aria-live="polite"></div>`;

    const answersEl = card.querySelector(".answers");
    shuffled(part.options).forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "answer";
      button.type = "button";
      button.dataset.option = option;
      button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
      button.addEventListener("click", () => chooseAnswer(rootIndex, option, button));
      answersEl.append(button);
    });
    if (rootSelections[rootIndex] !== undefined) applyAnswerState(card, part, rootSelections[rootIndex]);
    card.addEventListener("pointerenter", () => highlightWordPart(rootIndex));
    card.addEventListener("pointerleave", clearWordHighlight);
    card.addEventListener("focusin", () => highlightWordPart(rootIndex));
    card.addEventListener("focusout", () => setTimeout(() => {
      if (!card.contains(document.activeElement)) clearWordHighlight();
    }, 0));
    rootsGrid.append(card);
  });
}

function highlightWordPart(rootIndex) {
  document.querySelectorAll(".word-part").forEach((wordPart, index) => wordPart.classList.toggle("is-highlighted", index === rootIndex));
}

function clearWordHighlight() {
  document.querySelectorAll(".word-part").forEach((wordPart) => wordPart.classList.remove("is-highlighted"));
}

function applyAnswerState(card, part, selectedOption) {
  const correct = selectedOption === part.meaning;
  card.querySelectorAll(".answer").forEach((button) => {
    button.disabled = true;
    if (button.dataset.option === part.meaning) button.classList.add("reveal");
    if (button.dataset.option === selectedOption) button.classList.add(correct ? "correct" : "wrong");
  });
  card.querySelector(".feedback").innerHTML = correct
    ? `<strong>¡Exacto!</strong> «${part.text}» significa «${part.meaning}».`
    : `Casi. «${part.text}» significa «${part.meaning}».`;
}

function chooseAnswer(rootIndex, option, selectedButton) {
  if (rootAnswers[rootIndex] !== undefined) return;
  const part = challenge.parts[rootIndex];
  const correct = option === part.meaning;
  rootAnswers[rootIndex] = correct;
  rootSelections[rootIndex] = option;
  if (correct) score += 1;
  persistDailyProgress();

  const card = selectedButton.closest(".root-card");
  applyAnswerState(card, part, option);
  const completedRoots = rootAnswers.filter((answer) => answer !== undefined).length;
  if (completedRoots === challenge.parts.length) {
    window.setTimeout(() => {
      if (rootAnswers.filter((answer) => answer !== undefined).length === challenge.parts.length) showResult();
    }, 550);
  }
}

function showResult() {
  $("#score").textContent = score;
  $("#result-title").textContent = `Etimología de ${challenge.word}`;
  const explanation = challenge.parts.map((part) => `«${part.text}» = «${part.meaning}»`).join(" + ");
  $("#result-definition").textContent = challenge.definition;
  const raeLink = $("#rae-link");
  raeLink.href = `https://dle.rae.es/${encodeURIComponent(challenge.word)}`;
  raeLink.textContent = `Ver «${challenge.word}» en el DLE`;
  $("#result-copy").textContent = `${challenge.word} se forma con ${explanation}.`;
  if (!result.open) result.showModal();
  if (!dailyProgress?.completed) {
    dailyProgress ??= {};
    dailyProgress.completed = true;
    persistDailyProgress();
    recordGame();
  }
}

$("#close-result").addEventListener("click", () => result.close());

function shareCopy() {
  return `He conseguido ${score}/${challenge.parts.length} en el reto de hoy de etimologia.es. ¿Puedes superarme? Juega y descubre el origen de las palabras.`;
}

function shareUrl(platform, campaign = "resultado") {
  const url = new URL("https://etimologia.es/");
  url.searchParams.set("utm_source", platform);
  url.searchParams.set("utm_medium", "social");
  url.searchParams.set("utm_campaign", campaign);
  return url.toString();
}

function reportShare(platform) {
  window.dataLayer?.push({ event: "share_result", platform, word: challenge.word, score, total: challenge.parts.length });
}

document.querySelectorAll(".share-option").forEach((button) => button.addEventListener("click", async () => {
  const platform = button.dataset.platform;
  const text = shareCopy();
  const url = shareUrl(platform);
  const status = $("#share-status");
  reportShare(platform);

  if (platform === "whatsapp") {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`, "_blank", "noopener,noreferrer");
    status.textContent = "Abriendo WhatsApp…";
    return;
  }
  if (platform === "telegram") {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    status.textContent = "Abriendo Telegram…";
    return;
  }
  if (platform === "linkedin") {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank", "noopener,noreferrer");
    status.textContent = "Abriendo LinkedIn…";
    return;
  }
  if (platform === "x") {
    window.open(`https://x.com/intent/post?text=${encodeURIComponent(`${text} ${url}`)}`, "_blank", "noopener,noreferrer");
    status.textContent = "Abriendo X…";
    return;
  }
  if (platform === "threads") {
    window.open(`https://www.threads.net/intent/post?text=${encodeURIComponent(`${text} ${url}`)}`, "_blank", "noopener,noreferrer");
    status.textContent = "Abriendo Threads…";
    return;
  }
  if (platform === "facebook") {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank", "noopener,noreferrer");
    status.textContent = "Abriendo Facebook…";
    return;
  }
  if (platform === "native") {
    try {
      if (navigator.share) {
        await navigator.share({ title: "etimologia.es", text, url });
        status.textContent = "Elige dónde compartir tu resultado.";
      } else {
        await navigator.clipboard.writeText(`${text} ${url}`);
        status.textContent = "Resultado y enlace copiados.";
      }
    } catch {
      status.textContent = "No se pudo abrir el menú de compartir.";
    }
  }
}));

document.querySelectorAll(".footer-share").forEach((button) => button.addEventListener("click", async () => {
  const platform = button.dataset.footerPlatform;
  const text = "Descubre etimologia.es: un juego diario para aprender de dónde vienen las palabras. ¿Te animas a jugar?";
  const url = shareUrl(platform, "visita");
  const status = $("#footer-share-status");
  window.dataLayer?.push({ event: "share_site", platform });

  if (platform === "whatsapp") {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`, "_blank", "noopener,noreferrer");
    return;
  }
  if (platform === "telegram") {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    return;
  }
  if (platform === "linkedin") {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank", "noopener,noreferrer");
    return;
  }
  if (platform === "x") {
    window.open(`https://x.com/intent/post?text=${encodeURIComponent(`${text} ${url}`)}`, "_blank", "noopener,noreferrer");
    return;
  }
  if (platform === "threads") {
    window.open(`https://www.threads.net/intent/post?text=${encodeURIComponent(`${text} ${url}`)}`, "_blank", "noopener,noreferrer");
    return;
  }
  if (platform === "facebook") {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank", "noopener,noreferrer");
    return;
  }
  if (platform === "native") {
    try {
      if (navigator.share) {
        await navigator.share({ title: "etimologia.es", text, url });
        status.textContent = "Menú de compartir abierto.";
      } else {
        await navigator.clipboard.writeText(`${text} ${url}`);
        status.textContent = "Enlace copiado.";
      }
    } catch {
      status.textContent = "No se pudo abrir el menú de compartir.";
    }
  }
}));

hintButton.addEventListener("click", () => {
  if (hintButton.disabled) return;
  hintButton.disabled = true;
  dailyProgress ??= {};
  dailyProgress.hintShown = true;
  persistDailyProgress();
  hintButton.classList.add("is-leaving");
  definition.hidden = false;
  definition.classList.add("is-revealed");
  window.setTimeout(() => { hintButton.hidden = true; }, 300);
});

const instructions = $("#instructions");
$("#how-to-play").addEventListener("click", () => instructions.showModal());
$("#close-instructions").addEventListener("click", () => instructions.close());
$("#start-button").addEventListener("click", () => instructions.close());
$("#stats-button").addEventListener("click", () => {
  updateStatsPanel();
  $("#stats-dialog").showModal();
});
$("#close-stats").addEventListener("click", () => $("#stats-dialog").close());

document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    const clickedBackdrop = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
    if (clickedBackdrop) dialog.close();
  });
});

const themeToggle = $("#theme-toggle");
function activeTheme() {
  return document.body.dataset.theme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}
function updateThemeButton() {
  const dark = activeTheme() === "dark";
  themeToggle.setAttribute("aria-label", dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
  themeToggle.title = dark ? "Modo claro" : "Modo oscuro";
  themeToggle.querySelector("span").textContent = dark ? "☼" : "◐";
}
const savedTheme = localStorage.getItem(themeKey);
if (savedTheme === "light" || savedTheme === "dark") document.body.dataset.theme = savedTheme;
updateThemeButton();
themeToggle.addEventListener("click", () => {
  const nextTheme = activeTheme() === "dark" ? "light" : "dark";
  document.body.dataset.theme = nextTheme;
  localStorage.setItem(themeKey, nextTheme);
  updateThemeButton();
});

updateStatsPanel();
setChallenge(challenge);
restoreDailyProgress();
