// ═══════════════════════════════════════════════════
//  MegaSkuci Manhunt – Video Story Engine
// ═══════════════════════════════════════════════════

// Videa: slozka "videos/" ve formatu MP4 (H.264)
// Hudba: slozka "music/" - pro kazdeho jina: intro.mp3, lucka.mp3, fleyz.mp3 atd.

const plans = [
  {
    id: "fleyz",
    name: "Fleyz",
    mc: "Fleyz",
    desc: "Dostat se do endu dříve než Skuci",
    color: "#fb923c"
  },
  {
    id: "ejdre",
    name: "Ejdre",
    mc: "Ejdre",
    desc: "Vzít armádu psů do Endu",
    color: "#f87171"
  },
  {
    id: "krsando",
    name: "Krsando",
    mc: "Krsando_",
    desc: "Překvapit Skuciho ve vesnici",
    color: "#4ade80"
  },
  {
    id: "eban",
    name: "Eban",
    mc: "EBAN92",
    desc: "Zabít Skuciho 1vs1",
    color: "#f472b6"
  },
  {
    id: "kaspr",
    name: "Kaspr",
    mc: "KasprTV",
    desc: "Podplatit Skuciho",
    color: "#38bdf8"
  },
  {
    id: "fatlaax",
    name: "fatlaax",
    mc: "fatlaax",
    desc: "Vzít Skuciho k soudu",
    color: "#fbbf24"
  },
  {
    id: "lucka",
    name: "Lucka",
    mc: "Lucynaa",
    desc: "Sílou přátelství zabít Skuciho",
    color: "#60a5fa"
  }
];

const stories = {
  lucka: {
    intro: "videos/lucka_intro.mp4",
    music: "music/lucka.mp3",
    choiceTitle: "Jakou verzi PVP?",
    choices: [
      {
        label: "Přepnout PVP na verzi 1.8",
        video: "videos/LuckaANO.mp4",
        endTitle: "Lucka vyhrála!",
        endText: "Lucka přepnula PVP na 1.8 a Skuciho porazila. Staré PVP stále funguje!",
        type: "win"
      },
      {
        label: "Nechat PVP tak jak je",
        video: "videos/LuckaNE.mp4",
        endTitle: "Skuci vyhrál",
        endText: "Novější PVP bylo pro Lucku moc. Skuci ji porazil.",
        type: "loss"
      }
    ]
  },
  fleyz: {
    intro: "videos/fleyz_intro.mp4",
    music: "music/fleyz.mp3",
    choiceTitle: "Co Fleyz udělá v Endu?",
    choices: [
      {
        label: "Počkat na Skuciho v Endu",
        video: "videos/FleyzANO.mp4",
        endTitle: "Fleyz vyhrál!",
        endText: "Fleyz počkal v Endu na Skuciho a zabil ho. Dokonalý plán.",
        type: "win"
      },
      {
        label: "Zabít draka dříve než Skuci",
        video: "videos/FleyzNE.mp4",
        endTitle: "Skuci vyhrál",
        endText: "Fleyz si řekl, že má dobrý pace, a zabil draka. Tím vlastně zařídil výhru Skucimu.",
        type: "loss"
      }
    ]
  },
  krsando: {
    intro: "videos/krsando_intro.mp4",
    music: "music/krsando.mp3",
    choiceTitle: "Jaký loot si Krsando vezme?",
    choices: [
      {
        label: "Vzít si špatný loot",
        video: "videos/KrsandoANO.mp4",
        endTitle: "Hunteři vyhráli!",
        endText: "Skuci zabil Krsanda, ale vypadlo z něj tolik bordelu, že Skuciho to zabilo.",
        type: "win"
      },
      {
        label: "Vzít si GOD loot",
        video: "videos/KrsandoNE.mp4",
        endTitle: "Skuci vyhrál",
        endText: "Skuci zabil Krsanda a dostal mega OP loot. GG.",
        type: "loss"
      }
    ]
  },
  eban: {
    intro: "videos/eban_intro.mp4",
    music: "music/eban.mp3",
    choiceTitle: "Co udělá Eban se skriptem?",
    choices: [
      {
        label: "Zahodit skript a neřídit se podle něj",
        video: "videos/EbanANO.mp4",
        endTitle: "Eban vyhrál!",
        endText: "Eban ignoroval skript, použil Crystal PVP (zakázané!) a zabil Skuciho.",
        type: "win"
      },
      {
        label: "Řídit se podle skriptu",
        video: "videos/EbanNE.mp4",
        endTitle: "Eban prohrál",
        endText: "Eban se řídil skriptem, odešel, nasadil elytru... ale Skuci natáhl spear a Eban se o ni zabil.",
        type: "loss"
      }
    ]
  },
  kaspr: {
    intro: "videos/kaspr_intro.mp4",
    music: "music/kaspr.mp3",
    choiceTitle: "Podaří se podplatit Skuciho?",
    choices: [
      {
        label: "Kasprovi se podaří Skuciho přesvědčit",
        video: "videos/KasprANO.mp4",
        endTitle: "Kaspr vyhrál!",
        endText: "Podplácení fungovalo. Skuci přijal a umřel. Money talks.",
        type: "win"
      },
      {
        label: "Skuci nabídku odmítne",
        video: "videos/KasprNE.mp4",
        endTitle: "Kaspr prohrál",
        endText: "Skuci odmítnul a odjel svoji Teslou. Kaspr zůstal sám.",
        type: "loss"
      }
    ]
  },
  fatlaax: {
    intro: "videos/fatlaax_intro.mp4",
    music: "music/fatlaax.mp3",
    choiceTitle: "Koho fatlaax předvolá jako svědka?",
    choices: [
      {
        label: "Předvolat Nether portál jako svědka",
        video: "videos/FatlaaxANO.mp4",
        endTitle: "fatlaax vyhrál!",
        endText: "Svědek Nether portál potvrdil nelegální strategie. Skuci zabit anvilkou. Spravedlnost!",
        type: "win"
      },
      {
        label: "Předvolat luk s punch 2 jako svědka",
        video: "videos/FatlaaxNE.mp4",
        endTitle: "fatlaax to vzdal... ale?",
        endText: "fatlaax předložil punch 2 bow, odešel, odpálil se ke drakovi a vyhrál jinak.",
        type: "loss"
      }
    ]
  },
  ejdre: {
    intro: "videos/ejdre_intro.mp4",
    music: "music/ejdre.mp3",
    choiceTitle: "Co udělá Ejdre?",
    choices: [
      {
        label: "Nemluvit a nechat psy ať se o Skuciho postarají",
        video: "videos/EjdreANO.mp4",
        endTitle: "Manhunt o ničem",
        endText: "Ejdre nechal vše na psech. Skuci řekl: \"Tento manhunt byl o ničem, musíme znovu.\"",
        type: "loss"
      },
      {
        label: "Začít mluvit",
        video: "videos/EjdreNE.mp4",
        endTitle: "Musí se točit znovu",
        endText: "Ejdre mluvil a říkal věci co na YT nepatří. Skuci řekl, že se musí točit znovu.",
        type: "loss"
      }
    ]
  }
};

// ═══════════════════════════════════════════════════
// CDN
// ═══════════════════════════════════════════════════
const CDN = "https://pub-c95c8129ce2748ec939a746808530b19.r2.dev";
Object.values(stories).forEach(s => {
  s.intro = CDN + "/" + s.intro.split("/").pop();
  s.music = CDN + "/" + s.music.split("/").pop();
  s.choices.forEach(c => { c.video = CDN + "/" + c.video.split("/").pop(); });
});

// ═══════════════════════════════════════════════════
// DOM
// ═══════════════════════════════════════════════════
const menuScreen   = document.getElementById("menu-screen");
const introScreen  = document.getElementById("intro-screen");
const introVideo   = document.getElementById("intro-video");
const planOverlay  = document.getElementById("plan-overlay");
const videoScreen  = document.getElementById("video-screen");
const endScreen    = document.getElementById("end-screen");
const planGrid     = document.getElementById("plan-grid");
const videoPlayer  = document.getElementById("video-player");
const videoOverlay = document.getElementById("video-overlay");
const overlayTitle = document.getElementById("overlay-title");
const overlayCh    = document.getElementById("overlay-choices");
const endTitleEl   = document.getElementById("end-title");
const endTextEl    = document.getElementById("end-text");
const endButtons   = document.getElementById("end-buttons");
const backBtn      = document.getElementById("back-btn");
const bgMusic      = document.getElementById("bg-music");
const clickSfx     = document.getElementById("click-sfx");

let currentPlan = null;

// ═══════════════════════════════════════════════════
// SOUND
// ═══════════════════════════════════════════════════
function playClick() {
  clickSfx.currentTime = 0;
  clickSfx.volume = 0.3;
  clickSfx.play().catch(() => {});
}

// ═══════════════════════════════════════════════════
// MUSIC
// ═══════════════════════════════════════════════════
function playMusic(src) {
  bgMusic.src = src;
  bgMusic.volume = 0.05;
  bgMusic.currentTime = 0;
  bgMusic.play().catch(() => {});
}

function stopMusic() {
  bgMusic.pause();
  bgMusic.currentTime = 0;
}

// ═══════════════════════════════════════════════════
// INTRO – hlavni intro video, pak vyber planu
// ═══════════════════════════════════════════════════
function playIntro() {
  showScreen("intro");
  planOverlay.classList.add("hidden");
  introVideo.src = CDN + "/intro.mp4";
  introVideo.load();
  introVideo.play();
  playMusic(CDN + "/intro.mp3");

  introVideo.onended = () => {
    stopMusic();
    showPlanOverlay();
  };
}

// ═══════════════════════════════════════════════════
// START SCREEN – vyber planu
// ═══════════════════════════════════════════════════
function buildPlanGrid() {
  planGrid.innerHTML = "";
  plans.forEach(plan => {
    const card = document.createElement("button");
    card.className = "plan-card";
    card.style.setProperty("--card-color", plan.color);
    card.innerHTML = `
      <img class="plan-head" src="https://mc-heads.net/avatar/${plan.mc}/80" alt="${plan.name}" />
      <span class="plan-name" style="color: ${plan.color}">${plan.name}</span>
      <span class="plan-desc">${plan.desc}</span>
    `;
    card.addEventListener("click", () => {
      playClick();
      startPlan(plan.id);
    });
    planGrid.appendChild(card);
  });
}

function showPlanOverlay() {
  showScreen("intro");
  planOverlay.classList.remove("hidden");
  playMusic(CDN + "/pozadi.mp3");
}

// ═══════════════════════════════════════════════════
// PLAY INTRO VIDEO -> SHOW CHOICES
// ═══════════════════════════════════════════════════
function startPlan(planId) {
  currentPlan = stories[planId];
  planOverlay.classList.add("hidden");
  showScreen("video");

  videoOverlay.classList.add("hidden");
  videoPlayer.src = currentPlan.intro;
  videoPlayer.load();
  videoPlayer.play();
  playMusic(currentPlan.music);

  videoPlayer.onended = () => {
    stopMusic();
    showChoices();
  };
}

function showChoices() {
  videoOverlay.classList.remove("hidden");
  overlayTitle.textContent = currentPlan.choiceTitle;
  overlayCh.innerHTML = "";

  currentPlan.choices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.label;
    btn.addEventListener("click", () => {
      playClick();
      playResult(i);
    });
    overlayCh.appendChild(btn);
  });
}

// ═══════════════════════════════════════════════════
// PLAY RESULT VIDEO -> END SCREEN
// ═══════════════════════════════════════════════════
function playResult(index) {
  const choice = currentPlan.choices[index];
  videoOverlay.classList.add("hidden");

  videoPlayer.src = choice.video;
  videoPlayer.load();
  videoPlayer.play();

  videoPlayer.onended = () => {
    showEnd(choice);
  };
}

function showEnd(choice) {
  showScreen("end");

  endTitleEl.className = choice.type === "win" ? "end-win" : "end-loss";
  endTitleEl.textContent = choice.endTitle;
  endTextEl.textContent = choice.endText;

  endButtons.innerHTML = "";

  const replayBtn = document.createElement("button");
  replayBtn.className = "choice-btn";
  replayBtn.textContent = "Hrát znovu";
  replayBtn.addEventListener("click", () => {
    playClick();
    showPlanOverlay();
  });
  endButtons.appendChild(replayBtn);
}

// ═══════════════════════════════════════════════════
// SCREEN SWITCH
// ═══════════════════════════════════════════════════
function showScreen(screen) {
  menuScreen.classList.toggle("hidden", screen !== "menu");
  introScreen.classList.toggle("hidden", screen !== "intro");
  videoScreen.classList.toggle("hidden", screen !== "video");
  endScreen.classList.toggle("hidden", screen !== "end");

  if (screen !== "video") {
    videoPlayer.pause();
    videoPlayer.removeAttribute("src");
    videoPlayer.load();
  }
  if (screen !== "video" && screen !== "intro") {
    stopMusic();
  }
}

backBtn.addEventListener("click", () => {
  playClick();
  showPlanOverlay();
});

// ═══════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════
buildPlanGrid();
document.getElementById("menu-start-btn").addEventListener("click", () => {
  playClick();
  playIntro();
});
