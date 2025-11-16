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

// Search Bar Focus Animation
const searchInput = document.querySelector('.search-bar input');

if (searchInput) {
    searchInput.addEventListener('focus', () => {
        searchInput.parentElement.style.transform = 'scale(1.02)';
    });
    
    searchInput.addEventListener('blur', () => {
        searchInput.parentElement.style.transform = 'scale(1)';
    });
}

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

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const linkText = e.currentTarget.querySelector('span').textContent;
        
        // Hide all content sections
        homeContent.style.display = 'none';
        settingsContent.style.display = 'none';
        myanmarSongsContent.style.display = 'none';
        
        // Show the appropriate content
        if (linkText === 'Setting') {
            settingsContent.style.display = 'block';
        } else if (linkText === 'Myanmar Songs') {
            myanmarSongsContent.style.display = 'block';
        } else {
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
const modalShuffleBtn = document.getElementById('modalShuffleBtn');

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

// Open a song in the modal player
function openSongInModal(song) {
    if (!modalAudio || !musicPlayerModal) return;

    currentSongIndex = allMyanmarSongs.indexOf(song);

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

    // Ensure volume matches slider on first play
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

// Random button: play a random Myanmar song
if (modalShuffleBtn) {
    modalShuffleBtn.addEventListener('click', () => {
        if (!allMyanmarSongs.length) return;

        let randomIndex = Math.floor(Math.random() * allMyanmarSongs.length);
        if (allMyanmarSongs.length > 1 && randomIndex === currentSongIndex) {
            randomIndex = (randomIndex + 1) % allMyanmarSongs.length;
        }

        const randomSong = allMyanmarSongs[randomIndex];
        openSongInModal(randomSong);
    });
}

// Simple time formatter
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

