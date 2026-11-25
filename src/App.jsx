import { useState } from "react";
import {
  MessageSquarePlus, Bell, ChevronDown, Inbox, ClipboardList, CheckCircle2, Lightbulb,
  TrendingUp, Landmark, ListPlus, Timer, Wrench, ThumbsUp, ArrowRight, PlayCircle,
  ShieldCheck, Clock, EyeOff, Signal, Building2, Phone, Mail, MapPin,
} from "lucide-react";
import "./App.css";

/* Taruh foto hasil export Figma di folder public/img/ dengan nama di bawah ini */
const IMG = {
  hero: "/img/hero.jpg",
  laporan1: "/img/laporan-1.jpg",
  laporan2: "/img/laporan-2.jpg",
  laporan3: "/img/laporan-3.jpeg",
};
const bg = (src, fallback) => ({ backgroundImage: `url(${src}), ${fallback}` });

const NAV = ["Beranda", "Cara Melapor", "Pantau Laporan", "Tentang Kami"];

const STATS = [
  { label: "Total Pengaduan Warga", value: "1.428", icon: Inbox, tone: "green", foot: <><TrendingUp size={13} /> +12 laporan minggu ini</> },
  { label: "Sedang Ditindaklanjuti", value: "34", icon: ClipboardList, tone: "orange", foot: <><i className="dot" /> Dalam penanganan tim teknis</> },
  { label: "Selesai Ditangani", value: "1.382", icon: CheckCircle2, tone: "green", foot: <><CheckCircle2 size={13} /> Tingkat penyelesaian 96,8%</> },
  { label: "Aspirasi Terkumpul", value: "286", icon: Lightbulb, tone: "green", foot: <><Landmark size={13} /> Agenda Musrenbangdes 2024</> },
];

const STEPS = [
  { n: 1, cls: "dark", title: "Tulis Laporan", desc: "Ceritakan kendala jalan rusak, irigasi mampet, tumpukan sampah, atau ide fasilitas umum secara jelas melalui formulir daring.", foot: <><ListPlus size={13} /> Bisa lampirkan foto kendala</> },
  { n: 2, cls: "light", title: "Verifikasi Cepat", desc: "Aparatur desa dan ketua RW setempat memverifikasi keabsahan laporan dalam waktu maksimal 1x24 jam kerja.", foot: <><Timer size={13} /> Status via SMS & Portal</> },
  { n: 3, cls: "yellow", title: "Tindak Lanjut Nyata", desc: "Tim teknis desa bersama pamong langsung turun ke lapangan membawa alat material untuk tindakan perbaikan.", foot: <><Wrench size={13} /> Gotong royong teknis desa</>, orange: true },
  { n: 4, cls: "dark", title: "Selesai & Transparan", desc: "Foto bukti hasil penyelesaian diunggah ke publik, anggaran dijelaskan, dan warga dapat memberi ulasan kepuasan.", foot: <><CheckCircle2 size={13} /> Akuntabel & Terbuka</> },
];

const REPORTS = [
  { cat: "Infrastruktur", status: "Selesai", st: "done", tiket: "#SD-2024-0412", ago: "3 hari lalu", title: "Perbaikan Penerangan Jalan RT 04 Dusun Krajan", desc: "Lampu penerangan jalan utama dekat tikungan makam mati selama 2 minggu, telah diganti dengan", img: IMG.laporan1, caption: "Bukti Selesai Tim Teknis", fb: "linear-gradient(135deg,#1e3a5f,#2f5d46)", votes: 42, loc: "RW 04 Dusun Krajan" },
  { cat: "Lingkungan", status: "Sedang Diproses", st: "proc", tiket: "#SD-2024-0518", ago: "1 jam lalu", title: "Pengadaan Bank Sampah Terpadu RW 02", desc: "Warga mengusulkan tempat pemilahan sampah organik dan anorganik terpadu guna mencegah…", img: IMG.laporan2, caption: "Koordinasi Dinas LH", fb: "linear-gradient(135deg,#8a6a3b,#4b6b3a)", votes: 89, loc: "RW 02 Sukamaju" },
  { cat: "Usulan Aspirasi", status: "Terverifikasi", st: "ver", tiket: "#SD-2024-0604", ago: "5 jam lalu", title: "Pelatihan Digital Marketing UMKM Keripik Singkong", desc: "Pemberdayaan kelompok ibu-ibu PKK dan pemuda karang taruna untuk pemasaran produk olahan…", img: IMG.laporan3, caption: "Masuk RKPDes 2025", fb: "linear-gradient(135deg,#7a4b2a,#c08a4d)", votes: 115, loc: "Karang Taruna RW 01" },
];

const FAQS = [
  { q: "Apakah identitas dan data pribadi saya aman saat melapor?", a: "Ya. Data pribadi hanya dipakai untuk verifikasi dan tidak ditampilkan di laporan publik.", icon: ShieldCheck },
  { q: "Berapa lama proses verifikasi laporan saya berlangsung?", a: "Verifikasi dilakukan maksimal 1x24 jam kerja setelah laporan masuk.", icon: Clock },
  { q: "Apakah laporan bisa diajukan secara rahasia untuk kendala sensitif?", a: "Bisa. Pilih opsi laporan rahasia pada formulir agar identitasmu disembunyikan.", icon: EyeOff },
  { q: "Bagaimana cara melampirkan foto jika sambungan internet pedukuhan lemah?", a: "Kamu bisa mengirim laporan teks dahulu lalu menambahkan foto saat sinyal membaik, atau melapor lewat SMS.", icon: Signal },
];

export default function App() {
  const [open, setOpen] = useState(null);

  return (
    <div className="page">
      {/* NAVBAR */}
      <nav className="nav">
        <div className="brand">
          <strong>SuaraDesa</strong>
          <small>Portal Aspirasi Warga</small>
        </div>
        <ul className="menu">
          {NAV.map((m, i) => (
            <li key={m} className={i === 0 ? "active" : ""}>{m}</li>
          ))}
        </ul>
        <div className="nav-right">
          <button className="round" aria-label="Buat laporan"><MessageSquarePlus size={18} /></button>
          <span className="bell"><Bell size={18} /><i className="ping" /></span>
          <div className="user">
            <span className="avatar" />
            <div><b>Pak Joko</b><small>Warga RW 03</small></div>
            <ChevronDown size={14} />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" style={bg(IMG.hero, "linear-gradient(135deg,#2c3a2e,#1c2a22 60%,#3b4a35)")}>
        <h1>Suara Warga,<br /><span className="hl">Langkah Nyata</span> untuk Desa</h1>
        <p>Sampaikan aspirasi pembangunan dan pengaduan fasilitas lingkungan Anda dengan mudah, aman, dan transparan. Bersama wujudkan desa yang maju, tanggap, dan berdaya.</p>
        <div className="hero-btns">
          <button className="btn primary"><MessageSquarePlus size={16} /> Buat Laporan Sekarang</button>
          <button className="btn ghost"><PlayCircle size={16} /> Lihat Alur Kerja & Verifikasi</button>
        </div>
      </header>

      {/* CAPAIAN */}
      <section className="section wrap">
        <div className="head-row">
          <div>
            <span className="eyebrow">TRANSPARANSI KINERJA PUBLIK</span>
            <h2>Capaian Aspirasi & Penanganan</h2>
          </div>
          <p className="side-note">Semua catatan laporan masuk, verifikasi berkas, dan anggaran perbaikan dicatat secara terbuka dan dapat dipantau seluruh rukun warga.</p>
        </div>
        <div className="stats">
          {STATS.map((s) => (
            <div className="card stat" key={s.label}>
              <div className="stat-top">
                <span>{s.label}</span>
                <span className={"ico " + s.tone}><s.icon size={16} /></span>
              </div>
              <b className={"num " + s.tone}>{s.value}</b>
              <small className="foot">{s.foot}</small>
            </div>
          ))}
        </div>
      </section>

      {/* 4 LANGKAH */}
      <section className="section wrap center bordered">
        <span className="eyebrow">LANGKAH PRAKTIS</span>
        <h2>4 Langkah Mudah Pengaduan Warga</h2>
        <p className="sub">Proses penyampaian kendala dan usulan dirancang ramah bagi seluruh warga tanpa birokrasi rumit.</p>
        <div className="steps">
          {STEPS.map((s) => (
            <div className="card step" key={s.n}>
              <span className={"stepnum " + s.cls}>{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <small className={"foot" + (s.orange ? " orange" : "")}>{s.foot}</small>
            </div>
          ))}
        </div>
      </section>

      {/* ASPIRASI TERKINI */}
      <section className="section alt">
        <div className="wrap">
          <div className="head-row">
            <div>
              <span className="eyebrow">KETERBUKAAN PUBLIK</span>
              <h2>Aspirasi & Pengaduan Terkini</h2>
              <p className="sub left">Lihat perkembangan laporan warga yang sedang berlangsung dan berikan dukungan nyata.</p>
            </div>
            <a className="link" href="#semua">Lihat Semua 1.428 Laporan <ArrowRight size={14} /></a>
          </div>
          <div className="reports">
            {REPORTS.map((r) => (
              <article className="card report" key={r.tiket}>
                <div className="rtop">
                  <span className="tag">{r.cat}</span>
                  <span className={"badge " + r.st}><i className="dot" /> {r.status}</span>
                </div>
                <small className="tiket">Tiket {r.tiket} • {r.ago}</small>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <div className="photo" style={bg(r.img, r.fb)}><span>{r.caption}</span></div>
                <div className="rfoot">
                  <b><ThumbsUp size={15} /> {r.votes} Warga Mendukung</b>
                  <small>{r.loc}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section wrap center">
        <span className="eyebrow">TANYA JAWAB WARGA</span>
        <h2>Pertanyaan yang Sering Diajukan</h2>
        <p className="sub">Pelajari lebih lanjut mengenai hak kerahasiaan, alur peninjauan, dan ketentuan penyampaian laporan di Desa Sukamaju.</p>
        <div className="faq">
          {FAQS.map((f, i) => (
            <div className={"faq-item" + (open === i ? " open" : "")} key={f.q}>
              <button onClick={() => setOpen(open === i ? null : i)}>
                <f.icon size={16} />
                <span>{f.q}</span>
                <ChevronDown size={16} className="chev" />
              </button>
              {open === i && <p>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap fgrid">
          <div>
            <h4 className="fbrand"><Building2 size={26} /> Pemerintah Desa Sukamaju Berseri</h4>
            <p>Sistem saluran aspirasi dan pengaduan terintegrasi, transparan, dan terpercaya bagi kemajuan masyarakat rukun warga dan pedukuhan se-Desa Sukamaju.</p>
          </div>
          <div>
            <h4>Layanan Aduan & Kontak</h4>
            <p className="line"><Phone size={14} /> Call Center: 0812-3456-7890</p>
            <p className="line"><Mail size={14} /> aduan@sukamaju.desa.id</p>
            <p className="line"><MapPin size={14} /> Jl. Raya Desa Sukamaju No. 12</p>
          </div>
          <div>
            <h4>Jam Pelayanan Balai Desa</h4>
            <p className="hours"><b>Senin - Kamis:</b><span>08.00 - 15.30 WIB</span></p>
            <p className="hours"><b>Jumat:</b><span>08.00 - 11.30 WIB</span></p>
            <p className="hours"><b>Sabtu - Minggu:</b><span>Tutup (Online Aktif)</span></p>
          </div>
          <div>
            <h4>Navigasi Cepat</h4>
            <ul className="flinks">
              {["Beranda Utama", "Pedoman Pengaduan", "Tracking Status Laporan", "Musrenbang & Usulan", "Profil Perangkat Desa"].map((l) => <li key={l}>{l}</li>)}
            </ul>
          </div>
        </div>
        <div className="wrap copy">
          <span>© 2025 Pemerintah Desa Sukamaju Berseri. Hak Cipta Dilindungi Undang-Undang.</span>
          <span><a href="#privasi">Kebijakan Privasi</a><a href="#info">Keterbukaan Informasi Publik</a></span>
        </div>
      </footer>
    </div>
  );
}