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
    category: "Dance",
    name: "Ae_Mere_Humsafarr",
    src: "Ae_Mere_Humsafar.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoGWmS7kOCnkLAvH9g0_fZMdKW0d-l6P-H3yZaDokzVPZ4Y4bY&usqp=CAU",
  },
  {
    id: 2,
    category: "Love",
    name: "Are_Jane_Kaise_Kab_Kahan_Iqrar",
    src: "Are_Jane_Kaise_Kab_Kahan_Iqrar.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQk-rT8uIudDAvN1p7qGBpyuLLF8DWwA_4ta7Oxtw5k6397rn2P&usqp=CAU",
  },
  {
    id: 3,
    category: "Sad",
    name: "Chura Liya Hai Tumne Jo Dil Ko",
    src: "Chura_Liya_Hai_Tumne_Jo_Dil_Ko.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuZEhM4JWi0kLeHFQlnineERhaNlvCbjpwoHDTnemesNm5XtSh&usqp=CAU",
  },
  {
    id: 4,
    category: "Love",
    name: "Tum hi ho",
    src: "https://quz1yp-a.akamaihd.net/downloads/ringtones/files/mp3/tujhe-zindagi-du-freemaza-1387.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRdF1EyT4zeHHIcicA4wA8uMjxoGAblXsTIiXPhdTCzbG1YI18&usqp=CAU",
  },
  {
    id: 5,
    category: "Love",
    name: "kaho na pyar hai",
    src: "https://quz1yp-a.akamaihd.net/downloads/ringtones/files/mp3/ringtone-kaho-naa-pyaar-hai-50104.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ91A18HUFoYk2KmejbAnT_ULfxbYI5I-eJtqjsQmvPVghpxac7&usqp=CAU",
  },
  {
    id: 6,
    category: "Love",
    name: "Love me like do",
    src: "https://quz1yp-a.akamaihd.net/downloads/ringtones/files/mp3/lovemelikeyoudonotification-9607.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJhlenOe3XhPmFaVhs7k5LPnTdITSaNgwkJGulEoiZXMn8U5_V&usqp=CAU",
  },
  {
    id: 7,
    category: "Dance",
    name: "Stereo Love",
    src: "https://quz1yp-a.akamaihd.net/downloads/ringtones/files/mp3/stereoloveringtone-5231.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSG0JnTUjKBjO-2Kg3cxd3hF5N-4pLe3F7fPGq0Z43D96mTqY0N&usqp=CAU",
  },
  {
    id: 8,
    category: "Love",
    name: "Radhakrishn fluit",
    src: "https://quz1yp-a.akamaihd.net/downloads/ringtones/files/mp3/radhakrishnaringtone-43687.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZgjJ5H3VZ78EkG88xYmNiOmONJnTUwtPRm82re6WOqfiEgMOF&usqp=CAU",
  },
  {
    id: 9,
    category: "Love",
    name: "Radhakrishn Love",
    src: "https://quz1yp-a.akamaihd.net/downloads/ringtones/files/mp3/best-ringtone-krishn-70be80cb-1d27-4382-80d0-4972c8679083-45110.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-_7hrwqXewwE_ZOCmcf3aWwExxE1SI9HCTDai9qZPkwf7LkIu&usqp=CAU",
  },
  {
    id: 10,
    category: "Sad",
    name: "Jab bna uska bna",
    src: "https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/uska-17223.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfJZeLuouw9kuPTZvxXsWvIJNVKWeJWGOHW_xEewWWXLg-85Dl&usqp=CAU",
  },
  {
    id: 11,
    category: "Sad",
    name: "khamoshiya Aawaj hai",
    src: "https://quz1yp-a.akamaihd.net/downloads/ringtones/files/mp3/khamoshiyan-aavaj-hai-pagalworld-com-28786.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq4Gx1TKbTydT1veGl6c2AFYpf4Wras6x-cRCKdX9MOXaZSIZZ&usqp=CAU",
  },
  {
    id: 12,
    category: "Dance",
    name: "I am a Rider",
    src: "https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/rider-mobile-ringtone-46241.mp3",
    image:
      "https://avatars.sololearn.com/d447897c-b803-4e6e-bd74-8ab8966ba711.jpg",
    papular: 15,
  },
  {
    id: 13,
    category: "Dance",
    name: "Otilia Bilioner",
    src: "https://quz1yp-a.akamaihd.net/downloads/ringtones/files/mp3/otiliabilioneraradioeditringtone-27801.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRb2Qec75WQvDv_lrJ1PHIqaWx8Ylyo7Gkpxu_ZbIEcy5yhY6on&usqp=CAU",
  },
  {
    id: 14,
    category: "Love",
    name: "Tu meri Dost",
    src: "https://quz1yp-a.akamaihd.net/downloads/ringtones/files/mp3/tumeridosthainsongspkringtone-8802.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2X15hbWDrbxuMSJCR5-taAnulozr6FAcaoS0y-3Shjrf95X51&usqp=CAU",
  },
  {
    id: 15,
    category: "Sad",
    name: "milne hai mujhe aayi",
    src: "https://quz1yp-a.akamaihd.net/downloads/ringtones/files/mp3/milne-hai-mujhse-aayi-aashiqui-2-ringtone-pagalworld-com-1454.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyPB-mPN8VBVx98-GDHwiNfiTOsg-T4j4CUsylLfRSIyhZAd6K&usqp=CAU",
  },
  {
    id: 16,
    category: "Romantic",
    name: "O Khuda - hero",
    src: "https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/o-khuda-hero-ringtone-14026.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVbAjmIEeDVpuIxdLKwF-e37K-4wx0EU51kIYUvV7XFTJ2P4Oj&usqp=CAU",
  },
  {
    id: 17,
    category: "Dance",
    name: "Carryminati - UTuber",
    src: "https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/carryminati-50296.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMq9PEkWr1vaFG8e2rUyiQHeaUlaimA3JAqbOnZeU2SwilniD3&usqp=CAU",
  },
  {
    id: 18,
    category: "Horror",
    name: "i am coming",
    src: "https://quz1yp-a.akamaihd.net/downloads/ringtones/files/mp3/witch-laugh-28505.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpQhKCoX7BNDq3wUcsWEx-uJTmGVYjntpGQWIkpwymAnQKZQW3&usqp=CAU",
  },
  {
    id: 19,
    category: "My Crush 😍😍😘😘",
    name: "Befikra - Disha pathani",
    src: "https://quz1yp-a.akamaihd.net/downloads/ringtones/files/mp3/2befikrapagalworldinforingtone-21189.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgBnbu64XmbZ9q27ZFpfuzzoFC0V3uJVXX9Q&usqp=CAU",
  },
  {
    id: 20,
    category: "Romantic",
    name: "Aap mujhe achhe lgne",
    src: "https://loverays.com/ringtones/Aap_Mujhe_Achay_Lagne_Lage.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROp4dF8PpIKNahtjyjhbpmNP8KBYFA7ZDhzILmwNonnFsVY_BK&usqp=CAU",
  },
  {
    id: 21,
    category: "Romantic",
    name: "Saanson ko - zid",
    src: "https://quz1yp-a.akamaihd.net/downloads/ringtones/files/mp3/saanson-ko-zid-arijit-singh-ringtone-4555.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqc_tcDOpYPHeqelLmzH9F8L-O2oLgTfi2g4sCORIDAIK0pPZA&usqp=CAU",
  },
  {
    id: 22,
    category: "Dance",
    name: "English medium",
    src: "https://quz1yp-a.akamaihd.net/downloads/ringtones/files/mp3/tu-chij-lajawab-tera-koi-na-jawab-status-ringtone-sapna-choudhary-39997.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmEd4bLIhrHXQj0dbB0w-5LUoZaPvpbdnC6Q&usqp=CAU",
  },
  {
    id: 23,
    category: "Love",
    name: "deewana Kar Raha - Raaz ",
    src: "https://d6cp9b00-a.akamaihd.net/downloads/ringtones/files/mp3/deewana-kar-raha-hai-5617.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrqZ9q-RsTZO7cOgXA0IQe-IT-yclLI9lXUFoqDlIBKWqEnoHn&usqp=CAU",
  },
  {
    id: 24,
    category: "Dance",
    name: "Let me love you",
    src: "https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/letmeloveyoudjsnakeftjustinbieberdjjohalcomringtoneringtone-38476.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2ULdnCNnlxZvQNkduuTVHZjKK1yHOSFZzGZSB__hw6LMJ4XlM&usqp=CAU",
  },
  {
    id: 25,
    category: "Sad",
    name: "Bhula Dena",
    src: "https://quz1yp-a.akamaihd.net/downloads/ringtones/files/mp3/bhula-dena-muskurahat-com-7597.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhCfKXq4F7khZwqD4nsj68JHXLVNo5WUJSq3FgogLcuW5d5-aF&usqp=CAU",
  },
  {
    id: 26,
    category: "Dance",
    name: "Sunny Sunny",
    src: "https://2u039f-a.akamaihd.net/downloads/ringtones/files/mp3/sunnysunny-vtaujyk4-2058.mp3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq1F69qRL2WPJ3j6fTPEyIrhB6W1rVr9t8gQ&usqp=CAU",
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