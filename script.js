const playerWindow = document.getElementById("players");
const audio = document.getElementById("audio");
const name = document.getElementById("name");
const category = document.getElementById("category");
const thumbnail = document.getElementById("thumbnail");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const ttview = document.getElementById("ttview");
const tcview = document.getElementById("tcview");
const volumeBar = document.getElementById("volumeBar");

const musicList = document.getElementById("music-list");
const body = document.querySelector("body");
// variable
let musicData = [
  {
    id: 1,
    category: "GORD X ROHIT",
    name: "Aaj Phir Tum Pe",
    src: "songs/Aaj_Phir_Tum_Pe.mp3",
    image:
      "images/IMG_20220116_153005.jpg",
  },
  {
    id: 2,
    category: "GORD X ROHIT",
    name: "Ae Mere Humsafar",
    src: "songs/Ae_Mere_Humsafar.mp3",
    image:
      "images/IMG_20220116_152953.jpg",
  },
  {
    id: 3,
    category: "GORD X ROHIT",
    name: "Are Jane Kaise Kab Kahan Iqrar",
    src: "songs/Are_Jane_Kaise_Kab_Kahan_Iqrar.mp3",
    image:
      "images/IMG_20220116_153016.jpg",
  },
  {
    id: 4,
    category: "GORD X ROHIT",
    name: "Baar Baar Dekho Hazar Baar Dekho",
    src: "songs/Baar_Baar_Dekho_Hazar_Baar_Dekho.mp3",
    image:
      "images/IMG_20220116_152624.jpg",
  },
  {
    id: 5,
    category: "GORD X ROHIT",
    name: "Chura Liya Hai Tumne Jo Dil Ko",
    src: "songs/Chura_Liya_Hai_Tumne_Jo_Dil_Ko.mp3",
    image:
      "images/IMG_20220116_153140.jpg",
  },
  {
    id: 6,
    category: "GORD X ROHIT",
    name: "Gazab Ka Hai Din",
    src: "songs/Gazab_Ka_Hai_Din.mp3",
    image:
      "images/IMG_20220116_153046.jpg",
  },
  {
    id: 7,
    category: "GORD X ROHIT",
    name: "Gulabi Ankhen",
    src: "songs/Gulabi_Ankhen___From__The_Train_.mp3",
    image:
      "images/IMG_20220116_152529.jpg",
  },
  {
    id: 8,
    category: "GORD X ROHIT",
    name: "Hum Tum Ek Kamre Mein",
    src: "songs/Hum_Tum_Ek_Kamre_Mein.mp3",
    image:
      "images/IMG_20220116_152541.jpg",
  },
  {
    id: 9,
    category: "GORD X ROHIT",
    name: "Jaan E Jigar Jaaneman",
    src: "songs/Jaan___E___Jigar_Jaaneman.mp3",
    image:
      "images/IMG_20220116_153037.jpg",
  },
  {
    id: 10,
    category: "GORD X ROHIT",
    name: "Jeena Yahan Marna Yahan",
    src: "songs/Jeena_Yahan_Marna_Yahan.mp3",
    image:
      "images/IMG_20220116_152613.jpg",
  },
  {
    id: 11,
    category: "GORD X ROHIT",
    name: "Jooma Chumma De De",
    src: "songs/Jooma_Chumma_De_De__Pt__3.mp3",
    image:
      "images/IMG_20220116_152835.jpg",
  },
  {
    id: 12,
    category: "GORD X ROHIT",
    name: "Karvaten Badalte Rahe",
    src: "songs/Karvaten_Badalte_Rahe.mp3",
    image:
      "images/IMG_20220116_152454.jpg",
    papular: 15,
  },
  {
    id: 13,
    category: "GORD X ROHIT",
    name: "Kisi Ki Muskurahaton Se",
    src: "songs/Kisi_Ki_Muskurahaton_Se.mp3",
    image:
      "images/IMG_20220116_152747.jpg",
  },
  {
    id: 14,
    category: "GORD X ROHIT",
    name: "Kya Khoob Lagti Ho",
    src: "songs/Kya_Khoob_Lagti_Ho.mp3",
    image:
      "images/IMG_20220116_152711.jpg",
  },
  {
    id: 15,
    category: "GORD X ROHIT",
    name: "Likhe Jo Khat Tujhe",
    src: "songs/Likhe_Jo_Khat_Tujhe.mp3",
    image:
      "images/IMG_20220116_153151.jpg",
  },
  {
    id: 16,
    category: "GORD X ROHIT",
    name: "Mera Juta Hai Japani",
    src: "songs/Mera_Juta_Hai_Japani__From__Shri_420____1955_.mp3",
    image:
      "images/IMG_20220116_152735.jpg",
  },
  {
    id: 17,
    category: "GORD X ROHIT",
    name: "Mere Angne Mein",
    src: "songs/Mere_Angne_Men.mp3",
    image:
      "images/IMG_20220116_153025.jpg",
  },
  {
    id: 18,
    category: "GORD X ROHIT",
    name: "Mere Mehboob Qayamat Hogi",
    src: "songs/Mere_Mehboob_Qayamat_Hogi__Pt__1__From__Mr__X_in_Bombay__.mp3",
    image:
      "images/IMG_20220116_152723.jpg",
  },
  {
    id: 19,
    category: "GORD X ROHIT",
    name: "Mere Naseeb Mein Naseeb",
    src: "songs/Mere Naseeb Mein Naseeb",
    image:
      "images/IMG_20220116_152507.jpg",
  },
  {
    id: 20,
    category: "GORD X ROHIT",
    name: "Mere Sapnon Ki Rani",
    src: "songs/Mere_Sapnon_Ki_Rani__From__Aradhana__.mp3",
    image:
      "images/IMG_20220116_152858.jpg",
  },
  {
    id: 21,
    category: "GORD X ROHIT",
    name: "Nazar Ke Samne",
    src: "songs/Nazar_Ke_Samne.mp3",
    image:
      "images/IMG_20220116_152912.jpg",
  },
  {
    id: 22,
    category: "GORD X ROHIT",
    name: "Neele Ambar Par",
    src: "songs/Neele_Ambar_Par.mp3",
    image:
      "images/IMG_20220116_153107.jpg",
  },
  {
    id: 23,
    category: "GORD X ROHIT",
    name: "O Mere Dil Ke Chain",
    src: "songs/O_Mere_Dil_Ke_Chain__From__Mere_Jeevan_Saathi__.mp3",
    image:
      "images/IMG_20220116_152823.jpg",
  },
  {
    id: 24,
    category: "GORD X ROHIT",
    name: "Roop Tera Mastana",
    src: "songs/Roop_Tera_Mastana__From__Aradhana__.mp3",
    image:
      "images/IMG_20220116_152845.jpg",
  },
  {
    id: 25,
    category: "GORD X ROHIT",
    name: "Saagar Jaisi Aankhonwali",
    src: "songs/Saagar_Jaisi_Aankhonwali___Saagar___Soundtrack_Version.mp3",
    image:
      "images/IMG_20220116_153057.jpg",
  },
  {
    id: 26,
    category: "GORD X ROHIT",
    name: "Suhana Safar Aur Yeh Mausam",
    src: "songs/Suhana_Safar_Aur_Yeh_Mausam.mp3",
    image:
      "images/IMG_20220116_152641.jpg",
  },
  {
    id: 27,
    category: "GORD X ROHIT",
    name: "Taarif Karoon",
    src: "songs/Taarif_Karoon.mp3",
    image:
      "images/IMG_20220116_153130.jpg",
  },
  {
    id: 28,
    category: "GORD X ROHIT",
    name: "Zindagi Ek Safar Hai Suhana",
    src: "songs/Zindagi_Ek_Safar_Hai_Suhana__From__Andaz__.mp3",
    image:
      "images/IMG_20220116_152519.jpg",
  },


];
let repeatMusic = false;
let index = 1;
let songs = musicData;

const elc = musicList.getElementsByClassName("equalize")[index - 1];

const showMusicList = () => {
  document.querySelector(".sec-1").classList.add("hide");
  document.querySelector(".sec-2").classList.remove("hide");
};
const darkMood = () => {
  body.classList.toggle("dark");
};

const setActive = (i) => {
  setEqualizer();
  let a = musicList.querySelector(".active");
  if (a !== null) {
    a.classList.remove("active");
  }
  const ele = document.getElementsByClassName("music")[i - 1];
  ele.classList.add("active");
};

const setData = (data) => {
  name.textContent = data.name;
  category.textContent = data.category;
  thumbnail.src = data.image;
};

const playMusic = async (i) => {
  if (i == 18 || i == 10) {
    body.classList.toggle("dark");
    setTimeout(() => body.classList.toggle("dark"), 7000);
  }
  let data = musicData.find((m) => m.id === i) || musicData[1];
  setActive(i);
  setData(data);
  playBtn.textContent = "pause";
  audio.src = data.src;
  await audio.load();
  audio.play();
};

const playPause = (e) => {
  if (audio.paused) {
    playBtn.textContent = "pause";
    audio.play();
    setEqualizer();
  } else {
    playBtn.textContent = "play_arrow";
    audio.pause();
    setEqualizer(true);
  }
};

const showplayer = () => {
  playerWindow.classList.toggle("active");
};
const equalizerBtn = (e) => {
  e.target.classList.toggle("active");
  document.querySelector(".thumbnail").classList.toggle("spin");
};
const addFvt = (e) => {
  e.target.classList.toggle("active");
};
const repeat = (e) => {
  e.target.classList.toggle("active");
  repeatMusic = !repeatMusic;
  audio.loop = repeatMusic;
};
const volumeBox = (e) => {
  e.target.classList.toggle("active");
  document.querySelector(".volume-box").classList.toggle("show");
};
const nextPlay = () => {
  index++;
  if (index > musicData.length) {
    index = 1;
  }
  playMusic(index);
};
const prevPlay = () => {
  index--;
  if (index <= 0) {
    index = musicData.length;
  }
  playMusic(index);
};
// eventListners
audio.addEventListener("ended", () => {
  nextPlay();
});
audio.onloadeddata = () => {
  progress.max = audio.duration;
  const ds = parseInt(audio.duration % 60);
  const dm = parseInt((audio.duration / 60) % 60);
  ttview.textContent = dm + ":" + ds;
};
audio.ontimeupdate = () => {
  progress.value = audio.currentTime;
};
audio.addEventListener(
  "timeupdate",
  () => {
    //progress.value = audio.currentTime;
    var cs = parseInt(audio.currentTime % 60);
    var cm = parseInt((audio.currentTime / 60) % 60);
    ctview.textContent = cm + ":" + cs;
  },
  false
);

const changeProgressBar = () => {
  audio.currentTime = progress.value;
};

/* volume control */
const volumeDown = () => {
  volumeBar.value = Number(volumeBar.value) - 20;
  audio.volume = volumeBar.value / 100;
};
const volumeUp = () => {
  volumeBar.value = Number(volumeBar.value) + 20;
  audio.volume = volumeBar.value / 100;
};

const addList = (data) => {
  let div = document.createElement("div");
  div.classList.add("music");
  div.setAttribute("data-id", data.id);
  let html = `
   <div class="list-thumbnail" >
    <img src="${data.image}" alt="" >
   </div>
   <div class="list-content" >
   <h3>${data.name}</h3>
   <small>${data.category}</small>
   </div>
   <button class="list-btn" >
   <i class="material-icons">play_arrow</i>
    <div class="equalize">
    <span></span>
    <span></span>
    <span></span>
   </div>
   </button>`;
  div.innerHTML = html;
  musicList.append(div);
  div.addEventListener("click", () => {
    playMusic(data.id);
    playerWindow.classList.add("active");
    index = data.id;
  });
};

const setMusicList = () => {
  songs.forEach((song) => addList(song));
};

const FirstSetUp = () => {
  audio.src = musicData[index - 1].src;
  setData(musicData[index - 1]);
  setMusicList();
};
FirstSetUp();

const filterCat = (cat) => {
  songs = musicData.filter((song) => song.category == cat);
  while (musicList.hasChildNodes()) {
    musicList.removeChild(musicList.firstChild);
  }
  setMusicList();
};
const filterAll = () => {
  songs = musicData;
  while (musicList.hasChildNodes()) {
    musicList.removeChild(musicList.firstChild);
  }
  setMusicList();
};
function setEqualizer(action = false) {
  const elc = musicList.getElementsByClassName("equalize")[index - 1];
  const thumb = document.querySelector(".thumbnail");
  if (elc.classList.contains("pause")) {
    elc.classList.remove("pause");
  } else {
    if (action) {
      elc.classList.add("pause");
    }
  }
  if (thumb.classList.contains("spin") && audio.paused && action) {
    thumb.classList.add("pause");
  } else if (thumb.classList.contains("spin") && !audio.paused) {
    thumb.classList.remove("pause");
  }
}
