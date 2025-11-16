// Myanmar Songs data and grid rendering (no player logic)

const myanmarSongs = {
    htooEainThin: [
        {
            title: "Ta Nay Nay Tot Chit Lar Late Myi",
            artist: "ထူအင်းသင်",
            src: "audios/Myanmar Songs/ထူအင်းသင်/Htoo Eain Thin - Ta Nay Nay Tot Chit Lar Late Myi - တစ်နေ့နေ့တော့ချစ်လာလိမ့်မည်.mp3",
            cover: "images/ထူးအင်သင်.jpg"
        },
        {
            title: "ကြယ်တွေစုံတဲ့ည",
            artist: "ထူအင်းသင်",
            src: "audios/Myanmar Songs/ထူအင်းသင်/ကြယ်တွေစုံတဲ့ည(Lyrics).mp3",
            cover: "images/ထူးအင်သင်.jpg"
        },
        {
            title: "ဆွေးတည်",
            artist: "ထူအင်းသင်",
            src: "audios/Myanmar Songs/ထူအင်းသင်/ထူးအိမ်းသင် - ဆွေးတည် (Lyric Video).mp3",
            cover: "images/ထူးအင်သင်.jpg"
        },
        {
            title: "နွေဧူကံ့ကော်",
            artist: "ထူအင်းသင်",
            src: "audios/Myanmar Songs/ထူအင်းသင်/ထူးအိမ်းသင် - နွေဧူကံ့ကော် (Lyric Video).mp3",
            cover: "images/ထူးအင်သင်.jpg"
        },
        {
            title: "အချစ်ဆိုသည်မှာ",
            artist: "ထူအင်းသင်",
            src: "audios/Myanmar Songs/ထူအင်းသင်/ထူးအိမ်းသင် - အချစ်ဆိုသည်မှာ (Lyric Video).mp3",
            cover: "images/ထူးအင်သင်.jpg"
        },
        {
            title: "အဓိပတိလမ်းကခြေရာများ",
            artist: "ထူအင်းသင်",
            src: "audios/Myanmar Songs/ထူအင်းသင်/ထူးအိမ်းသင် - အဓိပတိလမ်းကခြေရာများ (Lyric Video).mp3",
            cover: "images/ထူးအင်သင်.jpg"
        },
        {
            title: "အမေ့အိမ်",
            artist: "ထူအင်းသင်",
            src: "audios/Myanmar Songs/ထူအင်းသင်/အမေ့အိမ် - ထူးအိမ်းသင် (Lyrics Song).mp3",
            cover: "images/ထူးအင်သင်.jpg"
        }
    ],
    boPhyu: [
        {
            title: "Sat Yat Ma",
            artist: "ဘိုဖြူ",
            src: "audios/Myanmar Songs/ဘိုဖြူ/ဘိုဖြူ - ဆက်ရက်မ  Bo Phyu - Sat Yat Ma (Lyric Video).mp3",
            cover: "images/ဘိုဖြူ.jpg"
        },
        {
            title: "မြေနီလမ်း",
            artist: "ဘိုဖြူ",
            src: "audios/Myanmar Songs/ဘိုဖြူ/မြေနီလမ်း - ဘိုဖြူ ( Bo Phyu )  Lyrics.mp3",
            cover: "images/ဘိုဖြူ.jpg"
        },
        {
            title: "Myay Pyant Thu Lay",
            artist: "ဘိုဖြူ",
            src: "audios/Myanmar Songs/ဘိုဖြူ/မြေပြန့်သုလေး (Myay Pyant Thu Lay) -  ဘိုဖြူ (Bo Phyu).mp3",
            cover: "images/ဘိုဖြူ.jpg"
        },
        {
            title: "Lat Thee",
            artist: "ဘိုဖြူ",
            src: "audios/Myanmar Songs/ဘိုဖြူ/လက်တီး - ဘိုဖြူ  Lat Thee - Bo Phyu [4K Quality].mp3",
            cover: "images/ဘိုဖြူ.jpg"
        },
        {
            title: "Eain Mat Phaung Gyi",
            artist: "ဘိုဖြူ",
            src: "audios/Myanmar Songs/ဘိုဖြူ/အိပ်မက်ဖောင်ကြီး -ဘိုဖြူ   Eain Mat Phaung Gyi - Bo Phyu [Official MV] [4K Quality].mp3",
            cover: "images/ဘိုဖြူ.jpg"
        }
    ]
};

// Combined list for random play (used by generic player logic in script.js)
const allMyanmarSongs = [
    ...myanmarSongs.htooEainThin,
    ...myanmarSongs.boPhyu
];

// Load Myanmar Songs into categories as Bootstrap card grid
function loadMyanmarSongs() {
    const htooEainThinContainer = document.getElementById('htooEainThinSongs');
    const boPhyuContainer = document.getElementById('boPhyuSongs');

    if (!htooEainThinContainer || !boPhyuContainer) return;

    // ထူအင်းသင် songs
    myanmarSongs.htooEainThin.forEach(song => {
        const songCard = createSongCard(song);
        htooEainThinContainer.appendChild(songCard);
    });

    // ဘိုဖြူ songs
    myanmarSongs.boPhyu.forEach(song => {
        const songCard = createSongCard(song);
        boPhyuContainer.appendChild(songCard);
    });
}

// Create Bootstrap-based song card (calls global openSongInModal from script.js)
function createSongCard(song) {
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-md-4 col-lg-3';

    col.innerHTML = `
        <div class="card h-100 bg-dark text-white">
            <img src="${song.cover}" class="card-img-top" alt="${song.title}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${song.title}</h5>
                <p class="card-text text-secondary mb-3">${song.artist}</p>
                <button type="button" class="btn btn-success mt-auto">
                    <i class="bi bi-play-circle me-1"></i> Play
                </button>
            </div>
        </div>
    `;

    const playButton = col.querySelector('button');
    playButton.addEventListener('click', () => {
        if (typeof openSongInModal === 'function') {
            openSongInModal(song);
        }
    });

    return col;
}

// Initialize Myanmar songs grid
loadMyanmarSongs();