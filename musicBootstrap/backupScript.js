// Sidebar Toggle for Mobile
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

if (sidebarToggle) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

// Active Navigation Link
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove active class from all links
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        // Add active class to clicked link
        e.currentTarget.classList.add('active');
    });
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// Navigation Content Switching
const homeContent = document.getElementById('homeContent');
const settingsContent = document.getElementById('settingsContent');
const myanmarSongsContent = document.getElementById('myanmarSongsContent');
const lofiSongsContent = document.getElementById('lofiSongsContent');
const hipHopSongsContent = document.getElementById('hipHopSongsContent');
const classicalSongsContent = document.getElementById('classicalSongsContent');

navLinks.forEach(link => {

    link.addEventListener('click', (e) => {
        e.preventDefault();
        const linkText = e.currentTarget.querySelector('span').textContent;
        
        // Hide all content sections
        homeContent.style.display = 'none';
        settingsContent.style.display = 'none';
        myanmarSongsContent.style.display = 'none';
        lofiSongsContent.style.display = 'none';
        hipHopSongsContent.style.display ='none';
        classicalSongsContent.style.display = 'none';

        // Show the appropriate content
        if (linkText === 'Setting') {
            settingsContent.style.display = 'block';
        } else if (linkText === 'Myanmar Songs') {
            myanmarSongsContent.style.display = 'block';
        } else if (linkText === 'Hip-Hop&Pop'){
            hipHopSongsContent.style.display = 'block';
        } else if (linkText === 'Lofi'){
            lofiSongsContent.style.display = 'block';
        }else if (linkText ==="Classical"){
            classicalSongsContent.style.display = 'block';
        }else {
            homeContent.style.display = 'block';
        }

    });
});

// Theme Switching
const themeButtons = document.querySelectorAll('.btn-theme');
const body = document.body;

themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.getAttribute('data-theme');
        
        // Remove all theme classes
        body.classList.remove('light-mode', 'blue-mode', 'creamy-mode', 'purple-mode');
        
        // Add the selected theme class
        if (theme !== 'dark') {
            body.classList.add(theme + '-mode');
        }
    });
});

// music player functions 

// Myanmar Songs Data
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
            title: "ဆွေးတယ်",
            artist: "ထူအင်းသင်",
            src: "audios/Myanmar Songs/ထူအင်းသင်/ထူးအိမ်သင် - ဆွေးတယ် (Lyric Video).mp3",
            cover: "images/ထူးအင်သင်.jpg"
        },
        {
            title: "နွေဦးကံ့ကော်",
            artist: "ထူအင်သင်",
            src: "audios/Myanmar Songs/ထူအင်းသင်/ထူးအိမ်သင် - နွေဦးကံ့ကော် (Lyric Video).mp3",
            cover: "images/ထူးအင်သင်.jpg"
        },
        {
            title: "အချစ်ဆိုသည်မှာ",
            artist: "ထူအင်သင်",
            src: "audios/Myanmar Songs/ထူအင်းသင်/ထူးအိမ်သင် - အချစ်ဆိုသည်မှာ (Lyric Video).mp3",
            cover: "images/ထူးအင်သင်.jpg"
        },
        {
            title: "အဓိပတိလမ်းကခြေရာများ",
            artist: "ထူအင်သင်",
            src: "audios/Myanmar Songs/ထူအင်းသင်/ထူးအိမ်သင် - အဓိပတိလမ်းကခြေရာများ (Lyric Video).mp3",
            cover: "images/ထူးအင်သင်.jpg"
        },
        {
            title: "အမေ့အိမ်",
            artist: "ထူအင်သင်",
            src: "audios/Myanmar Songs/ထူအင်းသင်/အမေ့အိမ် - ထူးအိမ်သင် (Lyrics Song).mp3",
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
            title: "မြေပြန့်သူလေး",
            artist: "ဘိုဖြူ",
            src: "audios/Myanmar Songs/ဘိုဖြူ/မြေပြန့်သူလေး (Myay Pyant Thu Lay) -  ဘိုဖြူ (Bo Phyu).mp3",
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

// hip hop songs playlist
const hipHopSongs = {
    GoldenSongs: [
        {
            title:"Faded",
            artist: "Alan Walker",
            src:"audios/Hip-hops/GoldenAgeSongs/Alan Walker - Faded.mp3",
            cover:"images/alanWalker.jpg"
        },
        {
            title:"Sky High",
            artist:"Elektronomia",
            src:"audios/Hip-hops/GoldenAgeSongs/Elektronomia - Sky High  Progressive House  NCS - Copyright Free Music.mp3",
            cover:"images/skyHigh.jpg"
        },
        {
            title:"Fly Away",
            artist:"The Fat Rat",
            src:"audios/Hip-hops/GoldenAgeSongs/TheFatRat - Fly Away feat. Anjulie.mp3",
            cover:"images/flyAway.jpg"
        },
        {
            title:"Alone",
            artist:"Marshmello",
            src:"audios/Hip-hops/GoldenAgeSongs/Marshmello - Alone (Official Music Video).mp3",
            cover:"images/marshmello.jpg"
        },
        {
            title:"Monody",
            artist:"The Fat Rat",
            src:"audios/Hip-hops/GoldenAgeSongs/TheFatRat - Monody (feat. Laura Brehm).mp3",
            cover:"images/monody.jpg"
        },
        {
            title:"Candy Land",
            artist:"Tobu",
            src:"audios/Hip-hops/GoldenAgeSongs/Tobu - Candyland.mp3",
            cover:"images/candy.jpg"
        }
    ],
    TikTokSongs: [
        {
            title:"Espresso",
            artist: "Sabrina Carpenter",
            src:"audios/Hip-hops/TikTokSongs/Sabrina Carpenter - Espresso.mp3",
            cover:"images/expresso.jpg"
        },
        {
            title:"From the islands",
            artist:"Jason Derulo, Frozy Tomo",
            src:"audios/Hip-hops/TikTokSongs/Jason Derulo, Frozy  Tomo - From The Islands (Kompa Passion) (Official Music Video).mp3",
            cover:"images/island.jpg"
        },
        {
            title:"Cake by the ocean",
            artist:"DNCE",
            src:"audios/Hip-hops/TikTokSongs/DNCE - Cake By The Ocean (Lyrics).mp3",
            cover:"images/DNCE.jpg"
        },
        {
            title:"Y Que Fue",
            artist:"Don Miguelo",
            src:"audios/Hip-hops/TikTokSongs/Don Miguelo - Y Que Fue.mp3",
            cover:"images/yamal.jpg"
        },
        {
            title:"Blue",
            artist:"Yung Kai",
            src:"audios/Hip-hops/TikTokSongs/yung kai - blue (Lyrics).mp3",
            cover:"images/sky.jpg"
        },
        {
            title:"Love Nwantiti",
            artist: "Ckay",
            src:"audios/Hip-hops/TikTokSongs/CKay - Love Nwantiti (Lyrics).mp3",
            cover:"images/catWithHeadphones.jpg"
        },
        {
            title:"Girls like you",
            artist: "Maroon",
            src:"audios/Hip-hops/TikTokSongs/Maroon 5 - Girls Like You ft. Cardi B (Official Music Video).mp3",
            cover:"images/girls.jpg"
        },
        ,
        {
            title:"OddLoop",
            artist:"Frederic",
            src:"audios/Hip-hops/TikTokSongs/フレデリック「オドループ」Music Video  Frederic oddloop.mp3",
            cover:"images/oddloop.jpg"
        },
        {
            title:"Dancin",
            artist: "Aaron Smith",
            src:"audios/Hip-hops/TikTokSongs/Aaron Smith - Dancin (KRONO Remix) - Lyrics.mp3",
            cover:"images/Dancin.jpg"
        },
        {
            title:"Sushi don't lie",
            artist:"Skai is your god",
            src:"audios/Hip-hops/TikTokSongs/揽佬 SKAI ISYOURGOD—八方来财·因果（Official Music Video）.mp3",
            cover:"images/chinaDrip.jpg"
        },
        {
            title:"Great Ambition",
            artist:"Skai is your god",
            src:"audios/Hip-hops/TikTokSongs/揽佬SKAI ISYOURGOD-《大展鸿图》ft.AR刘夫阳 Official Music Video.mp3",
            cover:"images/kingChinaDrip.jpg"
        },
        {
            title:"Shake it to the max",
            artist:"Moliy, Silent Addy, Skillibeng, Shenseea",
            src:"audios/Hip-hops/TikTokSongs/MOLIY  Silent Addy, Skillibeng, Shenseea - SHAKE IT TO THE MAX (REMIX) OFFICIAL AUDIO.mp3",
            cover:"images/money.jpg"
        }
    ],
    PopularSongs: [
        {
            title:"Despacito",
            artist:"Luis Fonsi",
            src:"audios/Hip-hops/TopSongs/Luis Fonsi - Despacito ft. Daddy Yankee.mp3",
            cover:"images/beach.jpg"
        },
        {
            title:"Shape of you",
            artist:"Ed Sheeran",
            src:"audios/Hip-hops/TopSongs/Ed Sheeran - Shape of You (Official Music Video).mp3",
            cover:"images/ronaldo.jpg"
        },
        {
            title:"SunFlower",
            artist:"Post Malone, Swan Lee",
            src:"audios/Hip-hops/TopSongs/Post Malone, Swae Lee - Sunflower (Spider-Man Into the Spider-Verse) (Official Video).mp3",
            cover:"images/spiderMan.jpg"
        },
        {
            title:"Gangnam style",
            artist:"PSY",
            src:"audios/Hip-hops/TopSongs/PSY - GANGNAM STYLE(강남스타일) MV.mp3",
            cover:"images/oppaCat.jpg"
        },
        {
            title:"Waka Waka",
            artist:"Shakira",
            src:"audios/Hip-hops/TopSongs/Shakira - Waka Waka (This Time for Africa) (The Official 2010 FIFA World Cup™ Song).mp3",
            cover:"images/worldCup2010.jpg"
        },
        {
            title:"Uptown Funk",
            artist:"Mark Ronson",
            src:"audios/Hip-hops/TopSongs/Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars.mp3",
            cover:"images/coolCat.jpg"
        },
        {
            title:"See you again",
            artist:"Wiz Khalifa",
            src: "audios/Hip-hops/TopSongs/Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack.mp3",
            cover:"images/cat.jpg"
        }
    ]
};
// lofi songs playlist
const lofiSongs = {
    lofi: [
        {
            title:"sunset",
            artist: "lukrembo",
            src:"audios/LOFI/Lofi/lukrembo - sunset (no copyright music).mp3",
            cover:"images/sunset.jpg"
        },
        {
            title:"cute",
            artist: "cute",
            src:"audios/LOFI/Lofi/[no copyright music] Loading cute background music.mp3",
            cover:"images/cute.jpg"
        },
        {
            title:"whistle",
            artist: "alex productions",
            src:"audios/LOFI/Lofi/😙 Vlog  Happy Lofi (Music For Videos) - Whistle by Alex Productions 🇮🇹.mp3",
            cover:"images/lofiGirl.jpg"
        },
        {
            title:"bread",
            artist: "lukrembo",
            src:"audios/LOFI/Lofi/lukrembo - bread (no copyright music).mp3",
            cover:"images/bread.jpg"
        },
        {
            title:"space",
            artist: "lofi studying",
            src:"audios/LOFI/Lofi/Space Aquarium - Lofi Study  Relaxation Music for Deep Focus.mp3",
            cover:"images/space.jpg"
        }
    
    ],
    jazz: [
        {
            title:"one summer'eve",
            artist: "tokyo walkers",
            src:"audios/LOFI/Jazz/☎️ On Hold  Elevator (Free Music) - ONE SUMMER’S EVE by Tokyo Music Walker 🇯🇵.mp3",
            cover:"images/jazzMan.jpg"
        },
        {
            title:"Jazz comedy retro",
            artist: "infraction",
            src:"audios/LOFI/Jazz/Jazz Comedy Retro Music by Infraction [No Copyright Music]  Cocktail.mp3",
            cover:"images/jazzComedy.jpg"
        },
        {
            title:"detective story",
            artist: "infraction",
            src:"audios/LOFI/Jazz/Upbeat Jazz Comedy by Infraction [No Copyright Music]  Detective Story.mp3",
            cover:"images/jazzMan.jpg"
        },
        {
            title:"jazz club",
            artist: "infraction",
            src:"audios/LOFI/Jazz/Upbeat Comedy Jazz by Infraction [No Copyright Music]  Jazz Club.mp3",
            cover:"images/jazzClub.jpg"
        } 
    ]
};
//classical songs playlist
const classicalSongs ={
    mozart: [
        {
            title:"Lacrimosa",
            artist:"Mozart",
            src:"audios/Classical Songs/Mozart/Mozart - Lacrimosa.mp3",
            cover: "images/mozart.jpg"
        },
        {
            title:"Eine Kleine Nachtmusik",
            artist:"Mozart",
            src:"audios/Classical Songs/Mozart/Eine Kleine Nachtmusik - Mozart.mp3",
            cover: "images/mozart.jpg"
        },
        {
            title:"Mozart Symphony 40, Molto Allegro",
            artist:"Mozart",
            src:"audios/Classical Songs/Mozart/Mozart Symphony 40 in G Minor, K 550 - 1. Molto Allegro.mp3",
            cover: "images/mozart.jpg"
        },
        {
            title:"Woldgang Amadeus",
            artist:"Mozart",
            src:"audios/Classical Songs/Mozart/Wolfgang Amadeus Mozart - Piano Concerto No. 21 - Andante.mp3",
            cover: "images/mozart.jpg"
        }

    ],
    beethoven:[
        {
            title:"Moonlight Sonata",
            artist:"Beethoven",
            src:"audios/Classical Songs/Beethoven/Beethoven - Moonlight Sonata (FULL).mp3",
            cover:"images/beethoven.jpg"
        },
        {
            title:"Symphony 7",
            artist:"Beethoven",
            src:"audios/Classical Songs/Beethoven/Beethoven - Symphony No.7 in A major op.92 - II, Allegretto.mp3",
            cover:"images/beethoven.jpg"
        },
        {
            title:"Ludwig Van Symphony 9",
            artist:"Beethoven",
            src:"audios/Classical Songs/Beethoven/Ludwig Van Beethovens Ninth Symphony.mp3",
            cover:"images/beethoven.jpg"
        },
        {
            title:"",
            artist:"Beethoven",
            src:"",
            cover:"images/beethoven.jpg"
        },
        {
            title:"Symphony 5",
            artist:"Beethoven",
            src:"audios/Classical Songs/Beethoven/Beethovens 5th Symphony.mp3",
            cover:"images/beethoven.jpg"
        },
        {
            title:"",
            artist:"Beethoven",
            src:"",
            cover:"images/beethoven.jpg"
        },
        {
            title:"",
            artist:"Beethoven",
            src:"",
            cover:"images/beethoven.jpg"
        }
    ]
};

// Modal player elements
const musicPlayerModalElement = document.getElementById('musicPlayerModal');
const modalAudio = document.getElementById('modalAudio');
const modalAlbumArt = document.getElementById('modalAlbumArt');
const modalSongTitle = document.getElementById('modalSongTitle');
const modalSongArtist = document.getElementById('modalSongArtist');
const modalCurrentTime = document.getElementById('modalCurrentTime');
const modalDuration = document.getElementById('modalDuration');
const modalProgressBar = document.getElementById('modalProgressBar');
const modalVolumeBar = document.getElementById('modalVolumeBar');
const modalPlayPauseBtn = document.getElementById('modalPlayPauseBtn');
const modalPlayPauseIcon = document.getElementById('modalPlayPauseIcon');


let musicPlayerModal = null;
let currentSongIndex = -1;

if (musicPlayerModalElement && typeof bootstrap !== 'undefined') {
    musicPlayerModal = new bootstrap.Modal(musicPlayerModalElement);

    // Pause audio when modal is closed
    musicPlayerModalElement.addEventListener('hidden.bs.modal', () => {
        if (modalAudio) {
            modalAudio.pause();
            if (modalPlayPauseIcon) {
                modalPlayPauseIcon.classList.remove('bi-pause-fill');
                modalPlayPauseIcon.classList.add('bi-play-fill');
            }
        }
    });
}

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

// load hip hop songs into categories
function loadHipHopSongs(){
    const tiktokContainer = document.getElementById('tiktokSongs');
    const popularContainer = document.getElementById('popularSongs');
    const goldenContainer = document.getElementById('goldenSongs');

    if(!goldenContainer || ! popularContainer || !tiktokContainer) return;

    //golden songs
    hipHopSongs.GoldenSongs.forEach(song =>{
        const songCard = createSongCard(song);
        goldenContainer.append(songCard);
    });

    // tik tok songs
    hipHopSongs.TikTokSongs.forEach(song =>{
        const songCard = createSongCard(song);
        tiktokContainer.append(songCard);
    });

    //popular songs
    hipHopSongs.PopularSongs.forEach(song =>{
        const songCard = createSongCard(song);
        popularContainer.append(songCard);
    });
}
// load lofi songs into categories 
function loadLofiSongs(){
    const lofiContainer = document.getElementById('lofiSongs');
    const jazzContainer = document.getElementById('jazzSongs');

    if(!lofiContainer || !jazzContainer) return;

    lofiSongs.lofi.forEach(song =>{
        const songCard = createSongCard(song);
        lofiContainer.append(songCard);
    });
    lofiSongs.jazz.forEach(song =>{
        const songCard = createSongCard(song);
        jazzContainer.append(songCard);
    });
}
// load classical songs into categories
function loadClassicalSongs(){
    const mozartContainer = document.getElementById('mozartSongs');
    const beethovenContainer = document.getElementById('beethovenSongs');

    if(!mozartContainer || !beethovenContainer) return;

    classicalSongs.mozart.forEach(song =>{
        const songCard = createSongCard(song);
        mozartContainer.append(songCard);
    });

    classicalSongs.beethoven.forEach(song =>{
        const songCard = createSongCard(song);
        beethovenContainer.append(songCard);
    });
}
// create Bootstrap song card
function createSongCard(song) {
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-md-4 col-lg-3';

    col.innerHTML = `
        <div class="card h-100 bg-dark text-white" style:"height:100%; margin:20px auto">
            <img src="${song.cover}" class="card-img-top" style="height:200px;object-fit:cover;" alt="${song.title}>
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
        openSongInModal(song);
    });

    return col;
}

// opening a song in the modal player
function openSongInModal(song) {
    if (!modalAudio || !musicPlayerModal) return;

    if (modalSongTitle) modalSongTitle.textContent = song.title;
    if (modalSongArtist) modalSongArtist.textContent = song.artist;
    if (modalAlbumArt) {
        modalAlbumArt.src = song.cover;
        modalAlbumArt.alt = song.title;
    }

    modalAudio.pause();
    modalAudio.src = song.src;
    modalAudio.load();
    modalAudio.play().catch(() => {});

    if (modalPlayPauseIcon) {
        modalPlayPauseIcon.classList.remove('bi-play-fill');
        modalPlayPauseIcon.classList.add('bi-pause-fill');
    }

    // adjust volume matches slider on first play
    if (modalVolumeBar) {
        modalAudio.volume = modalVolumeBar.value / 100;
    }

    musicPlayerModal.show();
}

// Time/progress updates
if (modalAudio && modalProgressBar && modalCurrentTime && modalDuration) {
    modalAudio.addEventListener('timeupdate', () => {
        if (!modalAudio.duration) return;

        const progress = (modalAudio.currentTime / modalAudio.duration) * 100;
        modalProgressBar.value = progress;
        modalCurrentTime.textContent = formatTime(modalAudio.currentTime);
        modalDuration.textContent = formatTime(modalAudio.duration);
    });
}

// Seek within track
if (modalProgressBar && modalAudio) {
    modalProgressBar.addEventListener('input', () => {
        if (!modalAudio.duration) return;
        const seekTime = (modalProgressBar.value / 100) * modalAudio.duration;
        modalAudio.currentTime = seekTime;
    });
}

// Volume control
if (modalVolumeBar && modalAudio) {
    modalVolumeBar.addEventListener('input', () => {
        modalAudio.volume = modalVolumeBar.value / 100;
    });

    // Default volume
    modalVolumeBar.value = 70;
    modalAudio.volume = 0.7;
}

// Play / pause button
if (modalPlayPauseBtn && modalAudio) {
    modalPlayPauseBtn.addEventListener('click', () => {
        if (modalAudio.paused) {
            modalAudio.play().catch(() => {});
            if (modalPlayPauseIcon) {
                modalPlayPauseIcon.classList.remove('bi-play-fill');
                modalPlayPauseIcon.classList.add('bi-pause-fill');
            }
        } else {
            modalAudio.pause();
            if (modalPlayPauseIcon) {
                modalPlayPauseIcon.classList.remove('bi-pause-fill');
                modalPlayPauseIcon.classList.add('bi-play-fill');
            }
        }
    });
}


// Simple time formatter
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Initialize songs grids
loadMyanmarSongs();
loadLofiSongs();
loadHipHopSongs();
loadClassicalSongs();
