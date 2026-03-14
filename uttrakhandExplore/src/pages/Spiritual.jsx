import { useState } from "react";

const charDham = [
  {
    name: "Kedarnath",
    deity: "Lord Shiva",
    altitude: "3,583 m",
    bestTime: "May – June, Sep – Oct",
    image: "https://images.unsplash.com/photo-1698574996391-73f103113f60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtlZGFybmF0aHxlbnwwfHwwfHx8MA%3D%3D",
    desc: "One of the twelve Jyotirlingas and the most revered abode of Lord Shiva, Kedarnath sits perched amid eternal snow and glaciers. Its ancient stone temple has stood for over a thousand years, a silent witness to countless pilgrimages and prayers.",
  },
  {
    name: "Badrinath",
    deity: "Lord Vishnu",
    altitude: "3,133 m",
    bestTime: "May – June, Sep – Nov",
    image: "https://images.unsplash.com/photo-1601821139990-9fc929db79ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFkcmluYXRofGVufDB8fDB8fHww",
    desc: "Flanked by the Nar and Narayan mountain ranges beside the Alaknanda River, Badrinath is the supreme abode of Lord Vishnu and the most visited of the four Dhams, drawing millions of pilgrims every year.",
  },
  {
    name: "Gangotri",
    deity: "Goddess Ganga",
    altitude: "3,100 m",
    bestTime: "May – June, Sep – Oct",
    image: "https://imgs.search.brave.com/ckufwurLmBHUaSii0N3wupfQ1C-yMH2tK7CvMR6OKMQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/MTk5MTE4Mi9waG90/by90aGUtZ2FuZ290/cmktdGVtcGxlLWlz/LXNpdHVhdGVkLWlu/LXRoZS11dHRhcmth/c2hpLWRpc3RyaWN0/LW9mLXV0dGFyYW5j/aGFsLXRoZS1ob2x5/LXNocmluZS1vZi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/c0RZMDY2MVMxMzBi/NWZ0V3pXRV9VMGdp/Q0xJUnlmTlVDcnVC/M2p3ZHNlUT0",
    desc: "The spiritual source of the sacred Bhagirathi River, which flows down to become the Ganga. Surrounded by deodar forests and towering Himalayan peaks, Gangotri is where India's holiest river begins its divine journey.",
  },
  {
    name: "Yamunotri",
    deity: "Goddess Yamuna",
    altitude: "3,293 m",
    bestTime: "May – June, Sep – Oct",
    image: "https://imgs.search.brave.com/Dw3an6oZdml-27eXEBLgSHFUuYI_pJNtJ6dgdLBqF0Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvOTM3/ODgzMS5qcGc",
    desc: "The westernmost shrine of Char Dham, Yamunotri marks the origin of the Yamuna River. Pilgrims trek through stunning mountain terrain and cook rice in natural hot springs as an offering to the goddess.",
  },
];

const sacredSites = [
  {
    name: "Haridwar",
    subtitle: "Gateway to the Gods",
    highlight: "Ganga Aarti at Har Ki Pauri",
    image: "https://images.unsplash.com/photo-1653392083932-d5e9e7d2ccd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D",
    desc: "Where the Ganga descends from the mountains onto the plains, Haridwar is one of the seven holiest cities in Hinduism. The evening Ganga Aarti at Har Ki Pauri — thousands of oil lamps floating on the sacred river — is one of the most moving spiritual experiences in India.",
  },
  {
    name: "Rishikesh",
    subtitle: "World Capital of Yoga",
    highlight: "Yoga, Meditation & Ashrams",
    image: "https://images.unsplash.com/photo-1607406374368-809f8ec7f118?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Nestled where the Himalayan foothills meet the Ganga, Rishikesh is the global center of yoga, meditation, and Ayurveda. Ancient ashrams, temples, and the sound of Sanskrit chants fill every corner of this serene and sacred town.",
  },
  {
    name: "Jageshwar",
    subtitle: "Valley of 124 Temples",
    highlight: "Ancient Nagara architecture",
    image: "https://imgs.search.brave.com/d11Z8tv2dR1VR5_hQywCGr2CCzx6aT4Xp3YSpuoERkE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubmF0aXZlcGxh/bmV0LmNvbS9oaS9p/bWcvMjAyMy8xMC9q/YWdlc2h3YXItZGhh/bS1hbG1vcmEtdXR0/YXJha2hhbmQtMTY5/NzE4ODU1Ny5qcGc",
    desc: "Hidden in a dense deodar cedar forest near Almora, Jageshwar is a remarkable complex of 124 ancient stone temples dedicated to Lord Shiva. Dating to the 7th–12th centuries, this UNESCO-recognised heritage site is a place of extraordinary peace and history.",
  },
  {
    name: "Tungnath",
    subtitle: "Highest Shiva Temple on Earth",
    highlight: "Panch Kedar pilgrimage circuit",
    image: "https://images.unsplash.com/photo-1692759873514-6514e8b7696d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHR1bmduYXRofGVufDB8fDB8fHww",
    desc: "At 3,680 metres, Tungnath holds the distinction of being the highest Shiva temple in the world. Part of the sacred Panch Kedar circuit, the trek to this ancient temple passes through beautiful rhododendron meadows with sweeping Himalayan views.",
  },
];
const temples = [
    {
      id: 1,
      name: "Kedarnath",
      tag: "Jyotirlinga",
      deity: "Lord Shiva",
      altitude: "3,583 m",
      bestTime: "May – Jun | Sep – Oct",
      description:
        "Perched amid eternal snow and glaciers, Kedarnath is one of the twelve Jyotirlingas and one of the most revered abodes of Lord Shiva. Its ancient stone temple has stood for over a thousand years.",
      image:
        "https://images.unsplash.com/photo-1649147313351-c86537fda0eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2VkYXJuYXRofGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Badrinath",
      tag: "Divya Desam",
      deity: "Lord Vishnu",
      altitude: "3,133 m",
      bestTime: "May – Oct",
      description:
        "Badrinath Temple is dedicated to Lord Vishnu and is part of the sacred Char Dham pilgrimage. Surrounded by the Nar and Narayan mountain ranges.",
      image:
        "https://images.unsplash.com/photo-1729409141463-3dfbf786e756?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFkcmluYXRofGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Gangotri",
      tag: "Source of Ganga",
      deity: "Goddess Ganga",
      altitude: "3,415 m",
      bestTime: "May – Oct",
      description:
        "Gangotri marks the origin of the holy river Ganga. The temple dedicated to Goddess Ganga is one of the most sacred pilgrimage sites in India.",
      image:
        "https://images.unsplash.com/photo-1630307357687-8222c5ac88dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FuZ290cml8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      name: "Yamunotri",
      tag: "Source of Yamuna",
      deity: "Goddess Yamuna",
      altitude: "3,293 m",
      bestTime: "May – Oct",
      description:
        "Yamunotri is the origin of the Yamuna river and an important pilgrimage site surrounded by scenic Himalayan landscapes.",
      image:
        "https://imgs.search.brave.com/Y_Mn3V_Rq9r4EvcX52voxmHzpZd4H2YNEK6_lskX40Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjIx/NjYxMDcwMi9waG90/by95YW11bm90cmkt/ZGhhbS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Qy1MZmlw/NzdKRlBUem1RcnQt/ZkRhU3pSb3l0Uk1Q/dXp2UDBzY0cwMnBY/ST0",
    },
  ];

const traditions = [
  { icon: "🪔", name: "Ganga Aarti", desc: "Every evening at dusk, priests perform an elaborate fire ritual on the banks of the Ganga — offering flames, incense, and mantras to the goddess river in a spectacle of pure devotion." },
  { icon: "🔔", name: "Temple Bells", desc: "The ringing of bells across Uttarakhand is believed to ward off evil and invite divine presence. In remote mountain shrines, this sound echoes through valleys for miles." },
  { icon: "📿", name: "Jagar Ritual", desc: "An ancient night-long devotional ritual where a jagaria invokes local deities through song and trance — a living connection to Uttarakhand's pre-Vedic mountain spirituality." },
  { icon: "🌺", name: "Phool Dei", desc: "Children collect wildflowers at dawn to place on doorsteps as offerings to Mother Earth, welcoming the spring season with purity and gratitude." },
  { icon: "🏔️", name: "Mountain Reverence", desc: "Peaks like Nanda Devi and Shivling are considered divine manifestations. Many summits are never climbed — held eternally sacred out of spiritual respect." },
  { icon: "🌊", name: "Holy Dips", desc: "Sacred bathing at river confluences, especially Devprayag where the Bhagirathi and Alaknanda meet to form the Ganga, is believed to cleanse sins across lifetimes." },
];

const panchPrayag = [
  { name: "Vishnuprayag", rivers: "Alaknanda + Dhauliganga" },
  { name: "Nandprayag",   rivers: "Alaknanda + Nandakini" },
  { name: "Karnaprayag",  rivers: "Alaknanda + Pindar" },
  { name: "Rudraprayag",  rivers: "Alaknanda + Mandakini" },
  { name: "Devprayag",    rivers: "Bhagirathi + Alaknanda → Ganga" },
];

export default function Spiritual() {
    const [activeTemple, setActiveTemple] = useState(temples[0]);
    return (
      <div className="
      bg-primary min-h-screen font-serif text-[#2a2a2a]">
  
        {/* HERO */}
        <div className="
        bg-[url('https://images.unsplash.com/photo-1708266942203-c731118e1f94?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
        bg-cover bg-center flex flex-col items-center justify-center
        py-27 px-6 text-center">
          <h1 className="text-7xl font-bold text-white">
            Spiritual Uttarakhand
          </h1>
          <p className=" mt-3 text-sm max-w-xl mx-auto bg-slate-300 opacity-60 text-black ">
            Where every river is sacred, every mountain is divine,
            and every path leads to something greater than oneself.
          </p>
        </div>
  
        <div className="max-w-6xl mx-auto px-6">
  
          {/* INTRO */}
          <div className="py-16 text-center max-w-2xl mx-auto">
            <p className="text-base leading-8 text-gray-700">
              Uttarakhand, known as <strong>Dev Bhoomi</strong> — the Land of Gods —
              is the spiritual heart of India. Home to the Char Dham, Panch Kedar,
              and Panch Prayag, it holds more sacred sites per square kilometre
              than anywhere else on Earth.
            </p>
          </div>
  
          {/* CHAR DHAM */}
        <section className="py-20 bg-[#f5f3ef] px-6">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold mb-2">Char Dham Yatra</h2>
        <p className="text-gray-500">
          Four divine shrines — one sacred journey through the Himalayas
        </p>
      </div>

      {/* Temple Selector */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {temples.map((temple) => (
          <button
            key={temple.id}
            onClick={() => setActiveTemple(temple)}
            className={`px-6 py-2 rounded-full border transition
              ${
                activeTemple.id === temple.id
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
          >
            {temple.id}. {temple.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={activeTemple.image}
            alt={activeTemple.name}
            className="w-full h-100 object-cover"
          />
        </div>

        {/* Info */}
        <div>
          <p className="text-sm tracking-widest text-gray-500 mb-2 uppercase">
            {activeTemple.tag}
          </p>

          <h3 className="text-4xl font-semibold mb-4">
            {activeTemple.name}
          </h3>

          <p className="text-gray-600 mb-6">
            {activeTemple.description}
          </p>

          <div className="border-t pt-6 grid grid-cols-3 gap-6 text-sm">

            {/* <div>
              <p className="text-gray-500 uppercase">Deity</p>
              <p className="font-medium">{activeTemple.deity}</p>
            </div> */}

            <div>
              <p className="text-gray-500 uppercase">Altitude</p>
              <p className="font-medium">{activeTemple.altitude}</p>
            </div>

            <div>
              <p className="text-gray-500 uppercase">Best Time</p>
              <p className="font-medium">{activeTemple.bestTime}</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  
          <hr className="border-gray-300 my-10" />
  
          {/* SACRED SITES */}
          <section>
            <h2 className="text-center text-3xl font-bold mb-2">
              Other Sacred Sites
            </h2>
            <p className="text-center text-gray-500 text-sm mb-12">
              Uttarakhand's spiritual geography extends far beyond the four Dhams.
            </p>
  
            {sacredSites.map((s, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center gap-10 mb-16`}
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="md:w-1/2 h-70 object-cover rounded-lg"
                />
  
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                    {s.subtitle}
                  </p>
  
                  <h3 className="text-2xl font-bold text-[#525451] mb-4">
                    {s.name}
                  </h3>
  
                  <p className="text-gray-700 leading-7 mb-4">
                    {s.desc}
                  </p>
  
                  <p className="text-sm text-[#6b6b5e] border-l-4 border-[#c8b89a] pl-3">
                    {/* ✦ {s.highlight} */}
                  </p>
                </div>
              </div>
            ))}
          </section>
  
          <hr className="border-gray-300 my-10" />
  
          {/* SACRED TRADITIONS */}
          {/* <section className="pb-12">
            <h2 className="text-center text-3xl font-bold mb-2">
              Sacred Traditions
            </h2>
  
            <p className="text-center text-gray-500 text-sm mb-12">
              Spirituality in Uttarakhand flows through daily life.
            </p>
  
            <div className="grid md:grid-cols-3 gap-6">
              {traditions.map((t, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#e4ddd3] rounded-lg p-6"
                >
                  <span className="text-3xl block mb-4">{t.icon}</span>
  
                  <h3 className="text-lg font-bold text-[#4a5e3a] mb-2">
                    {t.name}
                  </h3>
  
                  <p className="text-sm text-gray-600 leading-7">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </section> */}
  
          {/* <hr className="border-gray-300 my-10" /> */}
  
          {/* PANCH PRAYAG */}
          <section className="text-center pb-16">
            <h2 className="text-3xl font-bold mb-2">Panch Prayag</h2>
  
            <p className="text-gray-500 text-sm max-w-xl mx-auto mb-10">
              Five sacred river confluences where Himalayan rivers merge.
            </p>
  
            <div className="flex flex-wrap justify-center items-center gap-3">
              {panchPrayag.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-white border rounded-lg px-6 py-4 text-center">
                    <p className="font-bold text-[#4a5e3a] text-sm">
                      {p.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {p.rivers}
                    </p>
                  </div>
  
                  {i < panchPrayag.length - 1 && (
                    <span className="text-gray-400 text-xl">→</span>
                  )}
                </div>
              ))}
            </div>
  
            <p className="text-xs text-gray-400 mt-6 tracking-widest">
              All rivers ultimately flow into the sacred Ganga
            </p>
          </section>
  
        </div>
      </div>
    );
  }