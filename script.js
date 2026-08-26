const DATA = [
  // KEP. NUSA TENGGARA
  {region:"KEP. NUSA TENGGARA", province:"Bali", cities:"Kab. Jembrana, Kab. Buleleng", area:"Area 1"},
  {region:"KEP. NUSA TENGGARA", province:"Bali", cities:"Kab. Badung, Kab. Bangli, Kab. Gianyar, Kab. Karangasem, Kab. Klungkung, Kab. Tabanan, Kota Denpasar", area:"Area 2"},
  {region:"KEP. NUSA TENGGARA", province:"Nusa Tenggara Barat", cities:"Kab. Dompu, Kab. Lombok Barat, Kab. Lombok Tengah, Kab. Lombok Timur, Kab. Lombok Utara, Kab. Sumbawa, Kab. Sumbawa Barat, Kota Bima, Kota Mataram", area:"Area 2"},
  {region:"KEP. NUSA TENGGARA", province:"Nusa Tenggara Barat", cities:"Kab. Bima", area:"Area 4"},
  {region:"KEP. NUSA TENGGARA", province:"Nusa Tenggara Timur", cities:"Kab. Alor, Kab. Belu, Kab. Ende, Kab. Flores Timur, Kab. Kupang, Kab. Lembata, Kab. Malaka, Kab. Manggarai, Kab. Manggarai Barat, Kab. Manggarai Timur, Kab. Nagekeo, Kab. Ngada, Kab. Rote Ndao, Kab. Sabu Raijua, Kab. Sikka, Kab. Sumba Barat, Kab. Sumba Barat Daya, Kab. Sumba Tengah, Kab. Sumba Timur, Kab. Timor Tengah Selatan, Kab. Timor Tengah Utara, Kota Kupang", area:"Area 4"},

  // MALUKU
  {region:"MALUKU", province:"Maluku", cities:"Kab. Buru, Kab. Buru Selatan, Kab. Kepulauan Aru, Kab. Maluku Barat Daya, Kab. Maluku Tengah, Kab. Maluku Tenggara, Kab. Maluku Tenggara Barat, Kab. Seram Bagian Barat, Kab. Seram Bagian Timur, Kota Ambon, Kota Tual", area:"Area 1"},
  {region:"MALUKU", province:"Maluku Utara", cities:"Kab. Halmahera Barat, Kab. Halmahera Selatan, Kab. Halmahera Tengah, Kab. Halmahera Timur, Kab. Halmahera Utara, Kab. Kepulauan Sula, Kab. Pulau Morotai, Kab. Pulau Taliabu, Kota Ternate, Kota Tidore Kepulauan", area:"Area 1"},

  // PAPUA
  {region:"PAPUA", province:"Papua", cities:"Kab. Asmat, Kab. Biak Numfor, Kab. Boven Digoel, Kab. Deiyai, Kab. Dogiyai, Kab. Intan Jaya, Kab. Jayapura, Kab. Jayawijaya, Kab. Keerom, Kab. Kepulauan Yapen, Kab. Lanny Jaya, Kab. Mamberamo Raya, Kab. Mamberamo Tengah, Kab. Mappi, Kab. Merauke, Kab. Mimika, Kab. Nabire, Kab. Nduga, Kab. Paniai, Kab. Pegunungan Bintang, Kab. Puncak, Kab. Puncak Jaya, Kab. Sarmi, Kab. Supiori, Kab. Tolikara, Kab. Waropen, Kab. Yahukimo, Kab. Yalimo, Kota Jayapura", area:"Area 1"},
  {region:"PAPUA", province:"Papua Barat", cities:"Kab. Fak Fak, Kab. Kaimana, Kab. Manokwari, Kab. Manokwari Selatan, Kab. Maybrat, Kab. Pegunungan Arfak, Kab. Raja Ampat, Kab. Sorong, Kab. Sorong Selatan, Kab. Tambrauw, Kab. Teluk Bintuni, Kab. Teluk Wondama, Kota Sorong", area:"Area 1"},

  // PULAU SULAWESI
  {region:"PULAU SULAWESI", province:"Gorontalo", cities:"Kab. Boalemo, Kab. Bone Bolango, Kab. Gorontalo, Kab. Gorontalo Utara, Kab. Pahuwato, Kota Gorontalo", area:"Area 4"},
  {region:"PULAU SULAWESI", province:"Sul Barat", cities:"Kab. Majene, Kab. Mamuju Tengah, Kab. Polewali Mandar", area:"Area 2"},
  {region:"PULAU SULAWESI", province:"Sul Barat", cities:"Kab. Mamuju Utara", area:"Area 3"},
  {region:"PULAU SULAWESI", province:"Sul Barat", cities:"Kab. Mamasa, Kab. Mamuju", area:"Area 4"},
  {region:"PULAU SULAWESI", province:"Sul Selatan", cities:"Kab. Barru, Kab. Pinrang, Kota Pare Pare", area:"Area 2"},
  {region:"PULAU SULAWESI", province:"Sul Selatan", cities:"Kab. Bantaeng, Kab. Sinjai, Kab. Wajo, Kab. Enrekang, Kab. Sidenreng Rappang, Kab. Luwu Timur, Kab. Soppeng, Kab. Tana Toraja", area:"Area 3"},
  {region:"PULAU SULAWESI", province:"Sul Selatan", cities:"Kab. Bone, Kab. Luwu, Kab. Luwu Utara, Kota Palopo, Kab. Toraja Utara, Kab. Kepulauan Selayar, Kab. Takalar, Kab. Jeneponto, Kab. Bulukumba, Kab. Pangkajene Kepulauan, Kota Makassar, Kab. Gowa, Kab. Maros", area:"Area 4"},
  {region:"PULAU SULAWESI", province:"Sul Tengah", cities:"Kab. Banggai, Kab. Banggai Kepulauan, Kab. Banggai Laut, Kab. Donggala, Kab. Morowali, Kab. Morowali Utara, Kab. Parigi Moutong, Kab. Poso, Kab. Sigi, Kab. Tojo UnaUna, Kab. ToliToli, Kota Palu", area:"Area 3"},
  {region:"PULAU SULAWESI", province:"Sul Tengah", cities:"Kab. Buol", area:"Area 4"},
  {region:"PULAU SULAWESI", province:"Sul Tenggara", cities:"Kab. Buton Utara, Kab. Konawe Kepulauan, Kab. Konawe Utara, Kab. Wakatobi", area:"Area 2"},
  {region:"PULAU SULAWESI", province:"Sul Tenggara", cities:"Kota Bau Bau, Kab. Muna, Kab. Buton Selatan, Kab. Buton Tengah, Kab. Muna Barat", area:"Area 3"},
  {region:"PULAU SULAWESI", province:"Sul Tenggara", cities:"Kab. Kolaka, Kab. Kolaka Utara, Kab. Konawe, Kab. Konawe Selatan, Kota Kendari, Kab. Kolaka Timur, Kab. Buton, Kab. Bombana", area:"Area 4"},
  {region:"PULAU SULAWESI", province:"Sul Utara", cities:"Kab. Bolaang Mongondow, Kab. Bolaang Mongondow Selatan, Kab. Bolaang Mongondow Timur, Kota Kotamobagu, Kab. Minahasa Selatan, Kab. Minahasa Tenggara, Kab. Bolaang Mongondow Utara, Kota Tomohon, Kab. Minahasa, Kota Manado, Kab. Minahasa Utara, Kota Bitung, Kab. Kepulauan Sangihe, Kab. Kepulauan Talaud, Kab. Siau Tagulandang Biaro", area:"Area 4"},

  // PULAU KALIMANTAN
  {region:"PULAU KALIMANTAN", province:"Kalimantan Barat", cities:"Kab. Kayong Utara, Kab. Ketapang, Kab. Sekadau, Kab. Kapuas Hulu, Kab. Sintang, Kab. Bengkayang, Kab. Melawi, Kab. Sambas, Kab. Sanggau, Kab. Kubu Raya, Kota Pontianak, Kab. Landak, Kab. Mempawah, Kota Singkawang", area:"Area 4"},
  {region:"PULAU KALIMANTAN", province:"Kalimantan Selatan", cities:"Kab. Balangan, Kab. Banjar, Kab. Barito Kuala, Kab. Hulu Sungai Selatan, Kab. Hulu Sungai Tengah, Kab. Hulu Sungai Utara, Kab. Kotabaru, Kab. Tabalong, Kab. Tanah Bumbu, Kab. Tanah Laut, Kab. Tapin, Kota Banjarbaru, Kota Banjarmasin", area:"Area 2"},
  {region:"PULAU KALIMANTAN", province:"Kalimantan Tengah", cities:"Kab. Kapuas, Kab. Pulang Pisau, Kota Palangkaraya", area:"Area 2"},
  {region:"PULAU KALIMANTAN", province:"Kalimantan Tengah", cities:"Kab. Katingan, Kab. Murung Raya, Kab. Barito Timur, Kab. Barito Utara, Kab. Barito Selatan, Kab. Gunung Mas, Kab. Seruyan, Kab. Kotawaringin Barat, Kab. Kotawaringin Timur, Kab. Sukamara, Kab. Lamandau", area:"Area 4"},
  {region:"PULAU KALIMANTAN", province:"Kalimantan Timur", cities:"Kab. Kutai Kartanegara, Kota Samarinda, Kota Bontang, Kab. Berau, Kab. Kutai Timur, Kab. Kutai Barat, Kab. Mahakam Ulu", area:"Area 4"},
  {region:"PULAU KALIMANTAN", province:"Kalimantan Utara", cities:"Kab. Tana Tidung, Kab. Malinau, Kab. Bulungan, Kota Tarakan, Kab. Nunukan, Kab. Penajam Paser Utara, Kab. Paser, Kota Balikpapan", area:"Area 4"},

  // PULAU SUMATERA
  {region:"PULAU SUMATERA", province:"Aceh", cities:"Kab. Aceh Barat, Kab. Aceh Barat Daya, Kab. Aceh Besar, Kab. Aceh Jaya, Kab. Aceh Selatan, Kab. Aceh Tenggara, Kota Sabang, Kab. Nagan Raya, Kota Banda Aceh, Kab. Gayo Lues", area:"Area 2"},
  {region:"PULAU SUMATERA", province:"Aceh", cities:"Kab. Aceh Tengah, Kab. Aceh Utara, Kota Lhokseumawe, Kab. Pidie, Kab. Aceh Timur, Kab. Bireuen, Kab. Pidie Jaya", area:"Area 3"},
  {region:"PULAU SUMATERA", province:"Aceh", cities:"Kab. Aceh Singkil, Kab. Aceh Tamiang, Kota Subulussalam, Kab. Bener Meriah, Kab. Simeulue, Kota Langsa", area:"Area 4"},
  {region:"PULAU SUMATERA", province:"Bengkulu", cities:"Kab. Seluma, Kab. Bengkulu Tengah, Kota Bengkulu, Kab. Bengkulu Utara, Kab. Kepahiang", area:"Area 3"},
  {region:"PULAU SUMATERA", province:"Bengkulu", cities:"Kab. Bengkulu Selatan, Kab. Kaur, Kab. Lebong, Kab. Rejang Lebong, Kab. Muko Muko", area:"Area 4"},
  {region:"PULAU SUMATERA", province:"Jambi", cities:"Kab. Batanghari, Kab. Muaro Jambi, , Kab. Tanjung Jabung Barat, Kota Jambi", area:"Area 2"},
  {region:"PULAU SUMATERA", province:"Jambi", cities:"Kab. Tebo, Kab. Sarolangun, Kab. Bungo", area:"Area 3"},
  {region:"PULAU SUMATERA", province:"Jambi", cities:"Kab. Tanjung Jabung Timur, Kota Sungai Penuh, Kab. Kerinci, Kab. Merangin", area:"Area 4"},
  {region:"PULAU SUMATERA", province:"Kepulauan Bangka Belitung", cities:"Kab. Bangka, Kab. Bangka Barat, Kab. Bangka Selatan, Kab. Bangka Tengah, Kota Pangkal Pinang, Kab. Belitung, Kab. Belitung Timur", area:"Area 2"},
  {region:"PULAU SUMATERA", province:"Kepulauan Riau", cities:"Kab. Bintan, Kab. Karimun, Kota Tanjung Pinang, Kota Batam", area:"Area 2"},
  {region:"PULAU SUMATERA", province:"Kepulauan Riau", cities:"Kab. Kepulauan Anambas, Kab. Lingga, Kab. Natuna", area:"Area 4"},
  {region:"PULAU SUMATERA", province:"Lampung", cities:"Kab. Lampung Selatan, Kab. Pesawaran, Kota Bandar Lampung", area:"Area 2"},
  {region:"PULAU SUMATERA", province:"Lampung", cities:"Kab. Lampung Tengah, Kab. Pringsewu, Kota Metro", area:"Area 3"},
  {region:"PULAU SUMATERA", province:"Lampung", cities:"Kab. Lampung Timur, Kab. Tulang Bawang Barat, Kab. Tulang Bawang, Kab. Mesuji, Kab. Lampung Barat, Kab. Way Kanan, Kab. Tanggamus, Kab. Pesisir Barat, Kab. Lampung Utara", area:"Area 4"},
  {region:"PULAU SUMATERA", province:"Riau", cities:"Kab. Bengkalis, Kab. Indragiri Hulu, Kab. Kampar, Kab. Kepulauan Meranti, Kab. Kuantan Singingi, Kab. Pelalawan, Kab. Rokan Hilir, Kab. Siak, Kota Dumai, Kota Pekanbaru", area:"Area 2"},
  {region:"PULAU SUMATERA", province:"Riau", cities:"Kab. Rokan Hulu, Kab. Indragiri Hilir", area:"Area 4"},
  {region:"PULAU SUMATERA", province:"Sumatera Barat", cities:"Kab. Agam, Kab. Kepulauan Mentawai, Kab. Lima Puluh Kota, Kab. Padang Pariaman, Kab. Pasaman, Kab. Pasaman Barat, Kab. Pesisir Selatan, Kab. Sijunjung, Kab. Solok, Kab. Solok Selatan, Kab. Tanah Datar, Kota Bukittinggi, Kota Padang, Kota Padang Panjang, Kota Pariaman, Kota Payakumbuh, Kota Solok", area:"Area 2"},
  {region:"PULAU SUMATERA", province:"Sumatera Barat", cities:"Kab. Dharmas raya, Kota Sawah lunto", area:"Area 4"},
  {region:"PULAU SUMATERA", province:"Sumatera Selatan", cities:"Kab. Banyuasin,Kab. Musi Banyuasin, Kab. Ogan Ilir, Kab. Ogan Komering Ilir, Kota Palembang", area:"Area 2"},
  {region:"PULAU SUMATERA", province:"Sumatera Selatan", cities:"Kab. Ogan Komering Ulu Timur, Kab. Musi Rawas, Kab. Musi Rawas Utara, Kab. Empat Lawang, Kota Pagar Alam, Kota Lubuk Linggau, Kab. Penukal Abab Lematang Ilir, Kab. Muara Enim, Kab. Lahat, Kota Prabumulih", area:"Area 3"},
  {region:"PULAU SUMATERA", province:"Sumatera Selatan", cities:"Kab. Ogan Komering Ulu, Kab. Ogan Komering Ulu Selatan", area:"Area 4"},
  {region:"PULAU SUMATERA", province:"Sumatera Utara", cities:"Kota Binjai, Kota Tebing Tinggi, Kab. Karo, Kab. Serdang Bedagai, Kab. Langkat, Kota Medan, Kab. Dairi, Kab. Deli Serdang, Kab. Batu Bara, Kota Tanjung Balai, Kab. Asahan", area:"Area 2"},
  {region:"PULAU SUMATERA", province:"Sumatera Utara", cities:"Kab. Mandailing Natal, Kota Padangsidimpuan, Kab. Tapanuli Selatan, Kab. Labuhanbatu, Kab. Tapanuli Utara, Kab. Padang Lawas Utara, Kab. Simalungun, Kab. Toba Samosir, Kota Pematangsiantar, Kab. Tapanuli Tengah, Kab. Samosir, Kota Sibolga, Kota Gunungsitoli, Kab. Nias Barat, Kab. Nias Selatan, Kab. Nias Utara", area:"Area 3"},
  {region:"PULAU SUMATERA", province:"Sumatera Utara", cities:"Kab. Padang Lawas, Kab. Labuhan batu Selatan, Kab. Labuhan batu Utara, Kab. Humbang Hasundutan, Kab. Nias, Kab. Pakpak Bharat", area:"Area 4"},

  // PULAU JAWA
  {region:"PULAU JAWA", province:"Banten", cities:"Kab. Lebak, Kab. Pandeglang, Kab. Serang, Kota Cilegon, Kota Serang, Kota Tangerang Selatan, Kota Tangerang, Kab. Tangerang", area:"Area 2"},
  {region:"PULAU JAWA", province:"Banten", cities:"Kota Jakarta Barat, Kota Jakarta Pusat, Kota Jakarta Selatan, Kota Jakarta Timur, Kota Jakarta Utara", area:"Area 2"},
  {region:"PULAU JAWA", province:"Banten", cities:"Kab. Kepulauan Seribu", area:"Area 3"},
  {region:"PULAU JAWA", province:"Jawa Barat", cities:"Kab. Bandung, Kab. Bandung Barat, Kab. Kuningan, Kab. Majalengka, Kab. Purwakarta, Kota Cimahi, Kota Bandung, Kab. Subang", area:"Area 1"},
  {region:"PULAU JAWA", province:"Jawa Barat", cities:"Kab. Garut, Kab. Cirebon, Kota Cirebon, Kab. Indramayu", area:"Area 2"},
  {region:"PULAU JAWA", province:"Jawa Barat", cities:"Kab. Ciamis, Kab. Pangandaran, Kab. Tasikmalaya, Kota Banjar, Kota Tasikmalaya, Kota Depok, Kab. Sumedang, Kab. Bogor, Kota Bogor, Kota Bekasi, Kab. Bekasi", area:"Area 3"},
  {region:"PULAU JAWA", province:"Jawa Barat", cities:"Kab. Cianjur, Kab. Karawang, Kota Sukabumi, Kab. Sukabumi", area:"Area 4"},
  {region:"PULAU JAWA", province:"Jawa Tengah", cities:"Kab. Boyolali, Kota Surakarta, Kab. Cilacap, Kab. Kebumen, Kota Semarang, Kota Salatiga, Kab. Tegal, Kab. Semarang, Kota Tegal, Kab. Brebes, Kab. Pemalang, Kab. Kendal", area:"Area 2"},
  {region:"PULAU JAWA", province:"Jawa Tengah", cities:"Kab. Grobogan, Kab. Blora, Kab. Rembang", area:"Area 3"},
  {region:"PULAU JAWA", province:"Jawa Tengah", cities:"Kab. Sukoharjo, Kab. Purbalingga, Kab. Klaten, Kab. Wonogiri, Kab. Banyumas, Kab. Sragen, Kab. Karanganyar, Kota Pekalongan, Kab. Pekalongan, Kab. Batang, Kab. Kudus, Kota Magelang, Kab. Magelang, Kab. Temanggung, Kab. Banjarnegara, Kab. Wonosobo, Kab. Jepara, Kab. Demak, Kab. Purworejo, Kab. Pati", area:"Area 4"},
  {region:"PULAU JAWA", province:"Jawa Timur", cities:"Kab. Bangkalan, Kab. Pamekasan, Kab. Sampang, Kab. Sumenep, Kab. Sidoarjo, Kota Surabaya, Kab. Banyuwangi, Kab. Probolinggo, Kota Probolinggo, Kab. Pacitan", area:"Area 2"},
  {region:"PULAU JAWA", province:"Jawa Timur", cities:"Kab. Lumajang", area:"Area 3"},
  {region:"PULAU JAWA", province:"Jawa Timur", cities:"Kab. Blitar, Kota Blitar, Kab. Jombang, Kab. Kediri, Kota Kediri, Kab. Lamongan, Kab. Ngawi, Kab. Mojokerto, Kota Mojokerto, Kab. Magetan, Kab. Gresik, Kab. Tulungagung, Kab. Nganjuk, Kota Pasuruan, Kab. Pasuruan, Kab. Bojonegoro, Kab. Madiun, Kab. Bondowoso, Kab. Tuban, Kota Madiun, Kab. Situbondo, Kab. Jember, Kota Malang, Kab. Malang, Kab. Ponorogo, Kota Batu, Kab. Trenggalek", area:"Area 4"},
  {region:"PULAU JAWA", province:"Yogyakarta", cities:"Kab. Bantul, Kab. Gunungkidul, Kab. Kulon Progo, Kab. Sleman, Kota Yogyakarta", area:"Area 1"}
];

const searchInput = document.getElementById("searchInput");
const regionFilter = document.getElementById("regionFilter");
const areaFilter = document.getElementById("areaFilter");
const clearBtn = document.getElementById("clearBtn");
const tables = document.getElementById("tables");
const emptyState = document.getElementById("emptyState");
const summary = document.getElementById("summary");

const regionOrder = [...new Set(DATA.map(x => x.region))];

regionOrder.forEach(region => {
  const option = document.createElement("option");
  option.value = region;
  option.textContent = region;
  regionFilter.appendChild(option);
});

function normalize(text) {
  return text
    .toLocaleLowerCase("id-ID")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, c => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[c]));
}

function highlight(text, query) {
  const safe = escapeHtml(text);
  if (!query.trim()) return safe;
  const words = query.trim().split(/\s+/).filter(Boolean).sort((a,b)=>b.length-a.length);
  let result = safe;
  words.forEach(word => {
    const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    result = result.replace(new RegExp(`(${escaped})`, "gi"), "<mark>$1</mark>");
  });
  return result;
}

function render() {
  const query = normalize(searchInput.value.trim());
  const selectedRegion = regionFilter.value;
  const selectedArea = areaFilter.value;

  const filtered = DATA.filter(row => {
    const haystack = normalize(`${row.region} ${row.province} ${row.cities} ${row.area}`);
    return (!query || query.split(/\s+/).every(word => haystack.includes(word)))
      && (!selectedRegion || row.region === selectedRegion)
      && (!selectedArea || row.area === selectedArea);
  });

  tables.innerHTML = "";

  regionOrder.forEach(region => {
    const rows = filtered.filter(row => row.region === region);
    if (!rows.length) return;

    const section = document.createElement("section");
    section.className = "region";
    section.innerHTML = `
      <h2 class="region-title">${escapeHtml(region)}</h2>
      <div class="table-card">
        <div class="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Provinsi</th>
                <th>Kota/Kabupaten</th>
                <th>Area</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(row => `
                <tr>
                  <td class="province">${highlight(row.province, searchInput.value)}</td>
                  <td class="cities">${highlight(row.cities, searchInput.value)}</td>
                  <td class="area">${highlight(row.area, searchInput.value)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
    tables.appendChild(section);
  });

  emptyState.hidden = filtered.length !== 0;

  const provinceCount = new Set(filtered.map(x => x.province)).size;
  summary.textContent = `${filtered.length} baris • ${provinceCount} provinsi • ${DATA.length} total baris`;
}

searchInput.addEventListener("input", render);
regionFilter.addEventListener("change", render);
areaFilter.addEventListener("change", render);

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  regionFilter.value = "";
  areaFilter.value = "";
  searchInput.focus();
  render();
});

render();
