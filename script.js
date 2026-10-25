const questions = [
  // Kelas 4 — Nomor 1–20
  {no:1, level:"LOTS", section:"LOTS · Nomor 1–20", q:"Gambar permukaan bumi yang dibuat pada bidang datar dengan skala tertentu disebut ....", options:["denah","peta","diagram","tabel"], answer:1},
  {no:2, level:"LOTS", section:"LOTS · Nomor 1–20", q:"Arah mata angin yang terletak di antara utara dan timur adalah ....", options:["barat laut","tenggara","timur laut","barat daya"], answer:2},
  {no:3, level:"LOTS", section:"LOTS · Nomor 1–20", q:"Berikut yang termasuk kenampakan alam adalah ....", options:["jembatan","waduk","gunung","jalan raya"], answer:2},
  {no:4, level:"LOTS", section:"LOTS · Nomor 1–20", q:"Contoh sumber daya alam yang dapat diperbarui adalah ....", options:["minyak bumi","batu bara","gas alam","tumbuhan"], answer:3},
  {no:5, level:"LOTS", section:"LOTS · Nomor 1–20", q:"Kegiatan menghasilkan barang atau jasa disebut ....", options:["konsumsi","produksi","distribusi","komunikasi"], answer:1},
  {no:6, level:"LOTS", section:"LOTS · Nomor 1–20", q:"Orang yang menyalurkan barang dari produsen kepada konsumen disebut ....", options:["distributor","konsumen","petani","pengrajin"], answer:0},
  {no:7, level:"LOTS", section:"LOTS · Nomor 1–20", q:"Kegiatan menggunakan barang atau jasa untuk memenuhi kebutuhan disebut ....", options:["produksi","distribusi","konsumsi","promosi"], answer:2},
  {no:8, level:"LOTS", section:"LOTS · Nomor 1–20", q:"Contoh kebutuhan pokok manusia adalah ....", options:["perhiasan","makanan","mainan mahal","barang koleksi"], answer:1},
  {no:9, level:"LOTS", section:"LOTS · Nomor 1–20", q:"Sikap yang tepat terhadap teman yang berbeda suku adalah ....", options:["menjauhinya","mengejek bahasanya","menghargai perbedaannya","memaksanya mengikuti kebiasaan kita"], answer:2},
  {no:10, level:"LOTS", section:"LOTS · Nomor 1–20", q:"Berikut yang merupakan contoh kearifan lokal adalah ....", options:["membuang sampah ke sungai","gotong royong membersihkan lingkungan","menebang semua pohon di hutan","menggunakan air secara berlebihan"], answer:1},
  {no:11, level:"MOTS", section:"MOTS · Nomor 1–20", q:"Rina ingin pergi dari rumah ke perpustakaan. Pada denah, perpustakaan berada di sebelah timur rumah. Rina harus berjalan ke arah ....", options:["barat","utara","selatan","timur"], answer:3},
  {no:12, level:"MOTS", section:"MOTS · Nomor 1–20", q:"Daerah tempat tinggal Beni memiliki tanah subur dan curah hujan yang cukup. Pekerjaan yang sesuai dengan kondisi tersebut adalah ....", options:["petani","nelayan laut","penambang minyak lepas pantai","pekerja pelabuhan"], answer:0},
  {no:13, level:"MOTS", section:"MOTS · Nomor 1–20", q:"Pak Darto menanam sayuran, kemudian menjual hasil panennya ke pasar. Kegiatan menanam sayuran termasuk ....", options:["konsumsi","produksi","distribusi","pertukaran"], answer:1},
  {no:14, level:"MOTS", section:"MOTS · Nomor 1–20", q:"Siti membeli buku di toko untuk belajar. Dalam kegiatan ekonomi tersebut, Siti berperan sebagai ....", options:["produsen","distributor","konsumen","pengangkut barang"], answer:2},
  {no:15, level:"MOTS", section:"MOTS · Nomor 1–20", q:"Warga desa membersihkan selokan bersama-sama agar tidak terjadi banjir. Manfaat utama kegiatan tersebut adalah ....", options:["mempererat kerja sama dan menjaga lingkungan","membuat warga saling bersaing","mengurangi kepedulian warga","menghambat kegiatan masyarakat"], answer:0},
  {no:16, level:"MOTS", section:"MOTS · Nomor 1–20", q:"Penduduk yang tinggal di daerah pantai banyak bekerja sebagai nelayan karena ....", options:["tanahnya selalu cocok untuk perkebunan teh","dekat dengan sumber daya laut","tidak memiliki sumber daya alam","jauh dari perairan"], answer:1},
  {no:17, level:"MOTS", section:"MOTS · Nomor 1–20", q:"Andi melihat temannya kesulitan memahami pelajaran. Sikap yang menunjukkan kepedulian sosial adalah ....", options:["membiarkannya","menertawakannya","membantu menjelaskan pelajaran","menyuruhnya berhenti belajar"], answer:2},
  {no:18, level:"MOTS", section:"MOTS · Nomor 1–20", q:"Warga menggunakan air sungai untuk kebutuhan sehari-hari. Agar air tetap tersedia dan bersih, tindakan yang tepat adalah ....", options:["membuang sampah ke sungai","membuang limbah ke sungai","menjaga kebersihan sungai","menutup semua aliran sungai"], answer:2},
  {no:19, level:"MOTS", section:"MOTS · Nomor 1–20", q:"Di suatu daerah terdapat tarian tradisional yang berbeda dengan tarian di daerah lain. Sikap yang tepat adalah ....", options:["menganggap tarian sendiri paling baik","menghargai tarian dari daerah lain","melarang orang mempelajari tarian lain","menolak semua budaya yang berbeda"], answer:1},
  {no:20, level:"MOTS", section:"MOTS · Nomor 1–20", q:"Keluarga Dika mencatat cerita tentang asal-usul keluarga dari kakek dan nenek. Kegiatan tersebut bermanfaat untuk ....", options:["mengetahui sejarah keluarga","menentukan harga barang","menghitung luas wilayah","mengetahui arah mata angin"], answer:0},

  // Kelas 5 — Nomor 21–50
  {no:21, level:"LOTS", section:"LOTS · Nomor 21–50", q:"Indonesia terletak di antara dua benua, yaitu ....", options:["Asia dan Afrika","Asia dan Australia","Australia dan Eropa","Eropa dan Amerika"], answer:1},
  {no:22, level:"LOTS", section:"LOTS · Nomor 21–50", q:"Indonesia juga terletak di antara dua samudra, yaitu ....", options:["Samudra Hindia dan Samudra Pasifik","Samudra Atlantik dan Samudra Arktik","Samudra Atlantik dan Samudra Hindia","Samudra Arktik dan Samudra Pasifik"], answer:0},
  {no:23, level:"LOTS", section:"LOTS · Nomor 21–50", q:"Salah satu manfaat peta adalah ....", options:["mengetahui lokasi suatu tempat","mengetahui rasa makanan","mengukur berat badan secara langsung","menentukan usia seseorang"], answer:0},
  {no:24, level:"LOTS", section:"LOTS · Nomor 21–50", q:"Kegiatan mengolah bahan mentah menjadi barang jadi disebut ....", options:["konsumsi","produksi","distribusi","transportasi"], answer:1},
  {no:25, level:"LOTS", section:"LOTS · Nomor 21–50", q:"Berikut yang termasuk kegiatan distribusi adalah ....", options:["petani menanam padi","pembeli memakan nasi","pedagang mengirim beras ke toko","pengrajin membuat meja"], answer:2},
  {no:26, level:"LOTS", section:"LOTS · Nomor 21–50", q:"Orang yang menggunakan barang atau jasa disebut ....", options:["produsen","distributor","konsumen","eksportir"], answer:2},
  {no:27, level:"LOTS", section:"LOTS · Nomor 21–50", q:"Kegiatan menjual barang ke luar negeri disebut ....", options:["impor","ekspor","konsumsi","produksi"], answer:1},
  {no:28, level:"LOTS", section:"LOTS · Nomor 21–50", q:"Kegiatan membeli barang dari luar negeri disebut ....", options:["ekspor","distribusi","impor","promosi"], answer:2},
  {no:29, level:"LOTS", section:"LOTS · Nomor 21–50", q:"Contoh sumber daya alam yang tidak dapat diperbarui adalah ....", options:["angin","sinar matahari","batu bara","tumbuhan"], answer:2},
  {no:30, level:"LOTS", section:"LOTS · Nomor 21–50", q:"Salah satu contoh peninggalan sejarah berupa bangunan adalah ....", options:["pasar modern","candi","pusat perbelanjaan","terminal bus"], answer:1},
  {no:31, level:"LOTS", section:"LOTS · Nomor 21–50", q:"Sikap yang tepat untuk menjaga persatuan dalam keberagaman adalah ....", options:["menghormati perbedaan","memaksakan pendapat","merendahkan budaya lain","memilih teman berdasarkan suku"], answer:0},
  {no:32, level:"LOTS", section:"LOTS · Nomor 21–50", q:"Salah satu cara menjaga kelestarian hutan adalah ....", options:["membakar hutan","menebang semua pohon","melakukan penanaman kembali","membuang sampah ke hutan"], answer:2},
  {no:33, level:"LOTS", section:"LOTS · Nomor 21–50", q:"Kegiatan mengubah bahan baku menjadi produk yang memiliki nilai guna disebut ....", options:["konsumsi","pengolahan","penggunaan","penghematan"], answer:1},
  {no:34, level:"LOTS", section:"LOTS · Nomor 21–50", q:"Berikut yang merupakan contoh interaksi sosial adalah ....", options:["seseorang tidur sendirian","siswa berdiskusi dalam kelompok","batu jatuh dari tebing","hujan turun di halaman"], answer:1},
  {no:35, level:"LOTS", section:"LOTS · Nomor 21–50", q:"Salah satu penyebab terjadinya perdagangan antardaerah adalah ....", options:["semua daerah menghasilkan barang yang sama","setiap daerah memiliki kebutuhan dan hasil produksi yang berbeda","setiap daerah tidak membutuhkan barang lain","semua penduduk tinggal di satu daerah"], answer:1},
  {no:36, level:"MOTS", section:"MOTS · Nomor 21–50", q:"Daerah A menghasilkan banyak sayuran, sedangkan daerah B menghasilkan banyak ikan. Kedua daerah saling menjual hasil produksinya. Manfaat kegiatan tersebut adalah ....", options:["kebutuhan kedua daerah dapat terpenuhi","hasil produksi kedua daerah akan hilang","penduduk tidak dapat memperoleh barang","kegiatan ekonomi menjadi terhenti"], answer:0},
  {no:37, level:"MOTS", section:"MOTS · Nomor 21–50", q:"Sebuah desa memiliki tanah subur dan sumber air yang cukup. Kegiatan ekonomi yang paling sesuai untuk dikembangkan adalah ....", options:["pertanian","penangkapan ikan laut","pertambangan minyak lepas pantai","pembuatan garam dari air laut"], answer:0},
  {no:38, level:"MOTS", section:"MOTS · Nomor 21–50", q:"Pak Hasan membuat sepatu di rumahnya. Ia kemudian mengirim sepatu tersebut ke toko untuk dijual. Urutan kegiatan ekonomi yang tepat adalah ....", options:["konsumsi–produksi–distribusi","produksi–distribusi–konsumsi","distribusi–konsumsi–produksi","produksi–konsumsi–distribusi"], answer:1},
  {no:39, level:"MOTS", section:"MOTS · Nomor 21–50", q:"Harga cabai meningkat karena hasil panen berkurang akibat cuaca buruk. Kesimpulan yang tepat adalah ....", options:["cuaca dapat memengaruhi hasil produksi dan harga barang","cuaca tidak berhubungan dengan kegiatan ekonomi","harga barang selalu tetap","hasil panen tidak memengaruhi persediaan barang"], answer:0},
  {no:40, level:"MOTS", section:"MOTS · Nomor 21–50", q:"Sebuah daerah memiliki hutan yang luas. Agar sumber daya alam tersebut tetap terjaga sekaligus bermanfaat bagi masyarakat, tindakan yang tepat adalah ....", options:["menebang seluruh pohon untuk dijual","mengelola hutan secara bijaksana dan melakukan reboisasi","mengubah seluruh hutan menjadi permukiman","membakar hutan untuk membuka lahan"], answer:1},
  {no:41, level:"MOTS", section:"MOTS · Nomor 21–50", q:"Warga suatu daerah memiliki tradisi kerja bakti yang dilakukan secara rutin. Tradisi tersebut dapat memperkuat ....", options:["persaingan antarwarga","perpecahan masyarakat","kebersamaan dan gotong royong","sikap mementingkan diri sendiri"], answer:2},
  {no:42, level:"MOTS", section:"MOTS · Nomor 21–50", q:"Banyak penduduk desa pindah ke kota untuk mencari pekerjaan. Peristiwa tersebut disebut ....", options:["urbanisasi","reboisasi","transmigrasi barang","distribusi"], answer:0},
  {no:43, level:"MOTS", section:"MOTS · Nomor 21–50", q:"Sebuah daerah wisata memiliki pantai yang indah. Agar wisata tetap berkembang dalam jangka panjang, masyarakat sebaiknya ....", options:["membuang sampah di pantai","menjaga kebersihan dan kelestarian pantai","mengambil seluruh biota laut","membangun bangunan di semua area pantai"], answer:1},
  {no:44, level:"MOTS", section:"MOTS · Nomor 21–50", q:"Pedagang menggunakan aplikasi digital untuk menjual produknya kepada pembeli dari berbagai daerah. Hal tersebut menunjukkan bahwa ....", options:["teknologi dapat memperluas jangkauan perdagangan","teknologi selalu mengurangi jumlah pembeli","perdagangan hanya dapat dilakukan secara langsung","barang tidak dapat dijual ke daerah lain"], answer:0},
  {no:45, level:"MOTS", section:"MOTS · Nomor 21–50", q:"Sebuah pabrik membuang limbah tanpa pengolahan ke sungai. Dampak yang paling mungkin terjadi adalah ....", options:["kualitas air meningkat","kehidupan makhluk air semakin terjaga","air tercemar dan ekosistem terganggu","persediaan air bersih bertambah"], answer:2},
  {no:46, level:"MOTS", section:"MOTS · Nomor 21–50", q:"Di sebuah daerah, dahulu masyarakat menggunakan alat pertanian sederhana. Sekarang sebagian petani menggunakan mesin modern. Perubahan tersebut menunjukkan ....", options:["perubahan cara kerja akibat perkembangan teknologi","hilangnya seluruh kegiatan pertanian","tidak adanya perubahan dalam masyarakat","berkurangnya manfaat teknologi"], answer:0},
  {no:47, level:"MOTS", section:"MOTS · Nomor 21–50", q:"Sebuah daerah menghasilkan kopi dalam jumlah besar, sedangkan daerah lain memiliki banyak pabrik pengolahan kopi. Kerja sama yang paling menguntungkan adalah ....", options:["daerah penghasil kopi menghentikan panen","kedua daerah bekerja sama dalam pengolahan dan pemasaran kopi","daerah pengolah kopi menolak semua bahan baku","kedua daerah berhenti melakukan perdagangan"], answer:1},
  {no:48, level:"MOTS", section:"MOTS · Nomor 21–50", q:"Saat mengunjungi museum, siswa menemukan benda peninggalan masa lalu. Tindakan yang tepat untuk menghargai peninggalan tersebut adalah ....", options:["menyentuh dan memindahkan semua benda","mencoret benda agar mudah dikenali","mematuhi aturan museum dan menjaga benda bersejarah","membawa pulang benda yang disukai"], answer:2},
  {no:49, level:"MOTS", section:"MOTS · Nomor 21–50", q:"Warga dari berbagai suku bekerja sama membangun fasilitas umum di lingkungan mereka. Perilaku tersebut menunjukkan bahwa ....", options:["perbedaan menghalangi kerja sama","kerja sama hanya dapat dilakukan oleh orang yang sama sukunya","keberagaman dapat menjadi kekuatan jika disertai sikap saling menghargai","setiap kelompok harus bekerja sendiri-sendiri"], answer:2},
  {no:50, level:"MOTS", section:"MOTS · Nomor 21–50", q:"Sebuah desa memiliki potensi pertanian, tetapi hasil panen sering rusak sebelum sampai ke pasar. Upaya yang paling tepat untuk mengatasi masalah tersebut adalah ....", options:["mengurangi jumlah petani","memperbaiki penyimpanan dan transportasi hasil panen","membuang hasil panen yang masih baik","menghentikan penjualan ke pasar"], answer:1}
];

let currentQuestion = 0;
let answers = Array(questions.length).fill(null);
let participantName = "";
let participantClass = "";

const $ = (id) => document.getElementById(id);

function renderQuestion() {
  const item = questions[currentQuestion];

  $("difficulty").textContent = item.level;
  $("questionCounter").textContent = `Soal ${item.no} dari ${questions.length}`;
  $("progressBar").style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  $("questionTag").textContent = item.section;
  $("questionText").textContent = `${item.no}. ${item.q}`;

  $("options").innerHTML = "";

  item.options.forEach((text, index) => {
    const label = document.createElement("label");
    label.className = "option";
    if (answers[currentQuestion] === index) label.classList.add("selected");

    label.innerHTML = `
      <input type="radio" name="answer" value="${index}" ${answers[currentQuestion] === index ? "checked" : ""}>
      <span class="option-label">${String.fromCharCode(65 + index)}.</span>
      <span class="option-text">${text}</span>
    `;

    label.addEventListener("click", () => {
      answers[currentQuestion] = index;
      document.querySelectorAll(".option").forEach(el => el.classList.remove("selected"));
      label.classList.add("selected");
    });

    $("options").appendChild(label);
  });

  $("prevBtn").disabled = currentQuestion === 0;
  $("nextBtn").classList.toggle("hidden", currentQuestion === questions.length - 1);
  $("submitBtn").classList.toggle("hidden", currentQuestion !== questions.length - 1);
}

$("startBtn").addEventListener("click", () => {
  participantName = $("nameInput").value.trim();
  participantClass = $("classInput").value.trim();

  if (!participantName || !participantClass) {
    $("identityError").textContent = "Nama dan kelas wajib diisi.";
    return;
  }

  $("identityError").textContent = "";
  $("participantName").textContent = participantName;
  $("participantClass").textContent = `Kelas: ${participantClass}`;

  $("identityPage").classList.add("hidden");
  $("quizPage").classList.remove("hidden");
  renderQuestion();
  window.scrollTo({top: 0, behavior: "smooth"});
});

$("nextBtn").addEventListener("click", () => {
  if (answers[currentQuestion] === null) {
    alert("Silakan pilih salah satu jawaban terlebih dahulu.");
    return;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
    window.scrollTo({top: 0, behavior: "smooth"});
  }
});

$("prevBtn").addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
    window.scrollTo({top: 0, behavior: "smooth"});
  }
});

$("submitBtn").addEventListener("click", () => {
  if (answers[currentQuestion] === null) {
    alert("Silakan pilih jawaban untuk soal terakhir terlebih dahulu.");
    return;
  }
  $("confirmModal").classList.remove("hidden");
});

$("cancelSubmitBtn").addEventListener("click", () => {
  $("confirmModal").classList.add("hidden");
});

$("confirmSubmitBtn").addEventListener("click", () => {
  $("confirmModal").classList.add("hidden");
  finishQuiz();
});

function finishQuiz() {
  let correct = 0;

  questions.forEach((item, index) => {
    if (answers[index] === item.answer) correct++;
  });

  const wrong = questions.length - correct;
  const score = Math.round((correct / questions.length) * 100);

  $("quizPage").classList.add("hidden");
  $("resultPage").classList.remove("hidden");

  $("resultGreeting").textContent =
    `Hasil kuis ${participantName} — Kelas ${participantClass}.`;

  $("score").textContent = score;
  $("correctCount").textContent = correct;
  $("wrongCount").textContent = wrong;

  if (score >= 90) {
    $("resultMessage").textContent = "Sangat baik! Pertahankan prestasimu.";
  } else if (score >= 75) {
    $("resultMessage").textContent = "Bagus! Terus tingkatkan hasil belajarmu.";
  } else if (score >= 60) {
    $("resultMessage").textContent = "Cukup baik. Mari belajar lagi agar hasilnya lebih baik.";
  } else {
    $("resultMessage").textContent = "Tetap semangat! Pelajari kembali materi dan coba lagi.";
  }

  window.scrollTo({top: 0, behavior: "smooth"});
}

$("restartBtn").addEventListener("click", () => {
  currentQuestion = 0;
  answers = Array(questions.length).fill(null);
  $("resultPage").classList.add("hidden");
  $("identityPage").classList.remove("hidden");
  $("nameInput").value = "";
  $("classInput").value = "";
  $("identityError").textContent = "";
  window.scrollTo({top: 0, behavior: "smooth"});
});
