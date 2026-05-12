AOS.init({
      duration: 900,
      once: false,
      offset: 90
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
        `Assalamualaikum, saya ${nama}... Saya mau kirim doa terbaik untuk Muhammad Althaf Diandra:
        "${doa}" Aamiin.`;

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
