AOS.init({
  duration: 800,       // Durasi animasi (ms)
  easing: 'ease-out-cubic', // Gaya pantulan transisi lebih natural
  once: true,          // Animasi cuma jalan 1x (biar gak pusing kalau user scroll naik turun)
  offset: 100          // Jarak sebelum elemen muncul
});

    window.addEventListener("scroll", function () {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
    });

    function kirimDoaWA() {
        const nomorWA = "6281289799085"; // ganti dengan nomor WhatsApp kamu

        const nama = document.getElementById("namaPengirim").value.trim();
        const doa = document.getElementById("isiDoa").value.trim();

        if (nama === "" || doa === "") {
            alert("Isi nama dan doa terlebih dahulu.");
            return;
        }

        const pesan = 
        `Assalamualaikum, saya ${nama}... Saya mau kirim doa terbaik untuk Muhammad Althaf Diandra: "${doa}" Aamiin.`;

        const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
        window.open(url, "_blank");
    }

    const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

bgMusic.volume = 0.45;

function toggleMusic() {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.innerHTML = "🔊 Music";
  } else {
    bgMusic.pause();
    musicBtn.innerHTML = "🔇 Music";
  }
}

// Musik dicoba menyala setelah user klik area web pertama kali
document.addEventListener("click", function autoPlayMusic() {
  bgMusic.play()
    .then(() => {
      musicBtn.innerHTML = "🔊 Music";
    })
    .catch(() => {
      musicBtn.innerHTML = "🔇 Music";
    });

  document.removeEventListener("click", autoPlayMusic);
}, { once: true });

const themeBtn = document.getElementById("themeBtn");

function toggleTheme() {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeBtn.innerHTML = "🌙 Dark";
    localStorage.setItem("theme", "light");
  } else {
    themeBtn.innerHTML = "☀ Light";
    localStorage.setItem("theme", "dark");
  }
}

window.addEventListener("load", function () {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeBtn.innerHTML = "🌙 Dark";
  } else {
    document.body.classList.remove("light-mode");
    themeBtn.innerHTML = "☀ Light";
  }
});

// =========================
// COUNTDOWN TIMER LOGIC
// =========================
// Atur tanggal acara di sini (Bulan Tanggal, Tahun Jam:Menit:Detik)
const targetDate = new Date("May 23, 2026 11:00:00").getTime();

const cdTimer = setInterval(function() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Jika waktu acara sudah lewat, timer berhenti di 00
  if (distance < 0) {
    clearInterval(cdTimer);
    document.getElementById("cd-hari").innerText = "00";
    document.getElementById("cd-jam").innerText = "00";
    document.getElementById("cd-menit").innerText = "00";
    document.getElementById("cd-detik").innerText = "00";
    return;
  }

  // Perhitungan matematika untuk waktu
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Menampilkan ke HTML (ditambah padStart agar formatnya selalu 2 digit, misal '09' bukan '9')
  document.getElementById("cd-hari").innerText = days.toString().padStart(2, '0');
  document.getElementById("cd-jam").innerText = hours.toString().padStart(2, '0');
  document.getElementById("cd-menit").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("cd-detik").innerText = seconds.toString().padStart(2, '0');
}, 1000);

// =========================
// GAME PRELOADER LOGIC
// =========================
// Menunggu semua aset (gambar, font, dll) selesai dimuat
window.addEventListener("load", function () {
  const loader = document.getElementById("game-loader");
  
  // Kasih delay sedikit (2.5 detik) biar animasi bar-nya selesai dan terasa nge-game banget
  setTimeout(function() {
    loader.classList.add("loader-hidden");
    
    // Opsional: Coba play musik saat loading selesai
    const bgMusic = document.getElementById("bgMusic");
    const musicBtn = document.getElementById("musicBtn");
    
    // Play musik (browser biasanya butuh interaksi, tapi kita coba pancing)
    bgMusic.play().then(() => {
      musicBtn.innerHTML = "🔊 Music";
    }).catch(() => {
      console.log("User harus klik layar dulu untuk play musik");
    });

  }, 2500); 
});

// =========================
// FLOATING AURA / XP ON CLICK
// =========================
document.addEventListener('click', function(e) {
  // Jangan munculin efek kalau yang diklik itu tombol atau input form
  if(e.target.closest('a') || e.target.closest('button') || e.target.closest('input') || e.target.closest('textarea')) return;

  const floatText = document.createElement('div');
  const catchphrases = ["+999 Aura 🌟", "GGWP! 🎮", "No Cap! 🧢", "Epic Drop! 💎", "Level Up! 📈"];
  
  floatText.innerText = catchphrases[Math.floor(Math.random() * catchphrases.length)];
  
  // Styling langsung via JS biar instan
  Object.assign(floatText.style, {
    position: 'absolute',
    left: `${e.pageX - 30}px`,
    top: `${e.pageY - 20}px`,
    color: '#ffd84d',
    fontWeight: '900',
    fontFamily: "'Bungee', cursive",
    fontSize: '1.2rem',
    textShadow: '0 4px 10px rgba(0,0,0,0.8)',
    pointerEvents: 'none',
    zIndex: '99999',
    transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
    opacity: '1'
  });

  document.body.appendChild(floatText);

  // Animasi melayang ke atas dan menghilang
  requestAnimationFrame(() => {
    floatText.style.transform = `translateY(-60px) scale(1.2)`;
    floatText.style.opacity = '0';
  });

  // Bersihkan elemen dari HTML setelah animasi selesai biar gak membebani memori
  setTimeout(() => floatText.remove(), 800);
});

// Munculin badge saat scroll ke section Lokasi
let badgeTriggered = false;

window.addEventListener('scroll', () => {
  const lokasiSection = document.getElementById("lokasi");
  if(!lokasiSection || badgeTriggered) return;

  const sectionTop = lokasiSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight - 100;

  if (sectionTop < triggerPoint) {
    badgeTriggered = true;
    const badge = document.getElementById("rbx-badge");
    badge.classList.add("show");
    
    // Play sound keberhasilan kalau ada
    // if(sfxClick) sfxClick.play();

    // Sembunyikan badge setelah 4 detik
    setTimeout(() => {
      badge.classList.remove("show");
    }, 4000);
  }
});

function showChat() {
  const chat = document.getElementById("avatar-chat");
  const sfxClick = document.getElementById("sfx-click"); // Opsional kalau udah pasang SFX
  
  if(sfxClick) sfxClick.play();
  
  chat.classList.add("show");
  
  // Hilang lagi setelah 3 detik
  setTimeout(() => {
    chat.classList.remove("show");
  }, 3000);
}

// =========================
// ROBLOX ESC MENU LOGIC
// =========================
function toggleRbxMenu() {
  const menu = document.getElementById("rbx-esc-menu");
  menu.classList.toggle("hidden");
}

function resetCharacter() {
  // Panggil suara OOF kalau ada
  const oofSound = document.getElementById("sfx-oof");
  if(oofSound) {
    oofSound.currentTime = 0;
    oofSound.play();
  }
  
  // Efek mati (layar merah) lalu refresh page
  document.body.style.background = "red";
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s";
  
  setTimeout(() => {
    window.scrollTo(0,0);
    location.reload();
  }, 1000);
}

function leaveServer() {
  if(confirm("Are you sure you want to leave the experience?")) {
    // Kalau di klik leave, alihkan ke google atau tutup tab (tergantung browser)
    window.location.href = "https://www.google.com";
  }
}
