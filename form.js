document.getElementById("stForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const karakter = document.getElementById("karakter").value;
  const pesan = document.getElementById("pesan").value;
  const hasil = document.getElementById("hasil");

  if (nama === "" || email === "" || karakter === "" || pesan === "") {
    hasil.style.color = "red";
    hasil.textContent = "⚠️ Semua field harus diisi!";
  } else {
    hasil.style.color = "lime";
    hasil.textContent = "✔ Selamat datang di Upside Down, " + nama + "!";
    document.getElementById("stForm").reset();
  }

  
});
