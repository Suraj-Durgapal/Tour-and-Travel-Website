import React from "react";

const dances = [
  {
    name: "Garhwali Dance",
    region: "Garhwal",
    image: "https://staticimg.amarujala.com/assets/images/2016/04/18/uttrakhand-folk-dance_1460977339.jpeg?w=674&dpr=1.0&q=80",
  },
  {
    name: "Kumaoni Dance",
    region: "Kumaon",
    image: "https://imgs.search.brave.com/dlnX1bBJJGVwsaWPFywHnc5urnZb9kcCbLQOM0bPeDw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXN0/b3JpZmllZC5pbi93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8x/Mi9tYXhyZXNkZWZh/dWx0LTItODUweDU2/MC5qcGc",
  },
  {
    name: "Chholiya",
    region: "Kumaon",
    image: "https://imgs.search.brave.com/MftDplml0w8z7tLJixeCEhjiC9hHdhaN6KjWqomcl9U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z29zYWhpbi5jb20v/Z28vcC9lL3QxLzE1/NDEyNzA1OTNfQ2ho/b2xpeWEtRGFuY2Ut/Rm9ybTEuanBn",
  },
  {
    name: "Jhora",
    region: "Both",
    image: "https://imgs.search.brave.com/QSMEyyufNVVnf44bL0bQKuoVgF1ic02_HoEJf9FQhRY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91a2Rp/Z2l0YWwuaW4vd3At/Y29udGVudC91cGxv/YWRzL3dwZm9yby9k/ZWZhdWx0X2F0dGFj/aG1lbnRzLzE2MTQw/NTkzMjctamhvcmEt/ZGFuY2UuanBn ",
  },
  {
    name: "Langvir Nritya",
    region: "Garhwal",
    image: "https://static.toiimg.com/img/75626840/Master.jpg",
  },
];

const cuisine = [
  "Bal Mithai",
  "Singori",
  "Kafuli",
  "Chainsoo",
  "Bhang ki Chutney",
  "Gahat Dal",
  "Buransh Juice",
];

const Culture = () => {
  return (
    <div className="bg-[#f8f6f2] text-gray-800">

      {/*  HERO */}
      <section className="h-85 relative 
       bg-[url('https://cdn.pixabay.com/photo/2020/04/17/15/37/ramadan-5055672_1280.jpg')]
       bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Culture of Devभूमि
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            Where mountains echo devotion, traditions breathe through every valley,
            and heritage lives in everyday life.
          </p>
        </div>
      </section>

      {/*  KUMAON & GARHWAL – ZIGZAG */}
      <section className="py-24 px-6 md:px-20 space-y-24">

        {/* Kumaon */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://cdn.pixabay.com/photo/2021/12/16/15/47/instrument-6874760_1280.jpg"
            className="rounded-2xl shadow-xl h-100 w-full"
          />
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-green-800">
              Kumaon
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Kumaon is known for its vibrant festivals, colorful attire, and rich
              artistic traditions. The region reflects joy, simplicity, and a
              strong connection with nature. Folk music, dance, and community
              celebrations form the heart of Kumaoni culture.
            </p>
          </div>
        </div>

        {/* Garhwal */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-green-800">
              Garhwal
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Garhwal carries deep spiritual roots and is closely connected to
              ancient temples and rituals. Devotional music, sacred pilgrimages,
              and mountain traditions shape the Garhwali way of life.
            </p>
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2023/09/12/11/02/ai-generated-8248592_1280.jpg"
            className="rounded-2xl shadow-xl h-100 w-full"
          />
        </div>
      </section>

      {/*  FOLK DANCES – IMAGE OVERLAY GRID */}
      <section className="py-24 bg-white px-6 md:px-20">
        <h2 className="text-4xl font-serif font-bold text-center mb-16">
          Folk Dances
        </h2>

        <div className="grid md:grid-cols-3 gap-8 ">
          {dances.map((dance, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={dance.image}
                alt={dance.name}
                className="w-full h-100 object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/50  hover:bg-black/0 group-hover:opacity-100 transition flex flex-col justify-end p-6 ">
                <h3 className="text-white text-2xl font-semibold">
                  {dance.name}
                </h3>   
                <p className="text-gray-200">Region: {dance.region}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRADITIONAL Cusine */}
      <section className="py-24 px-6 md:px-20">
        <h2 className="text-4xl font-serif font-bold text-center mb-16">
          Traditional Cuisine
        </h2>

        <div className="flex gap-8 overflow-x-auto pb-4">
          {cuisine.map((item, index) => (
            <div
              key={index}
              className="min-w-62.5 bg-green-800 text-white p-10 rounded-2xl text-center hover:scale-105 transition duration-300 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </section>       

      {/*  ART & CRAFT – MINIMAL GRID */}
      <section className="py-24 bg-white px-6 md:px-20">
  <h2 className="text-4xl font-serif font-bold text-center mb-16">
    Art & Craft of Uttarakhand
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

    {[
      {
        name: "Aipan Art",
        img: "https://imgs.search.brave.com/W2KxqPWqDmmo5GBlmPLFyiAiNB365eatWZtEN2HCf50/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9haXBh/bmthcmkuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzEw/L3doYXQtaXMtYWlw/YW4ud2VicA",
      },
      {
        name: "Ringal Craft (Bamboo)",
        img: "https://imgs.search.brave.com/0rilqBtuimMxpIhdh7-Gpg11JidonPMZp2aAqot3dKY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kaWdp/dGFsaW5kaWFuLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wNC8wNC0yLmpw/Zw",
      },
      {
        name: "Woolen / Pashmina",
        img: "https://imgs.search.brave.com/4cpsQhO9WTO1EGm8JaVoQXvSamfBhG8TS8ukjjzNYxk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YXllc2hhcy1jb2xs/ZWN0aW9uLmNvbS9j/ZG4vc2hvcC9hcnRp/Y2xlcy9Ib3dfYXJl/X1Bhc2htaW5hX1No/YXdsc19NYWRlX2Vj/OTVjZjg1LTUyYjkt/NGI1OC1hMWQwLWJh/MTNjZmExNzUyYy5q/cGc_dj0xNzM4NzQx/Nzc5JndpZHRoPTEx/MDA",
      },
      {
        name: "Wood Carving",
        img: "https://imgs.search.brave.com/c7Q6JX730YKKIStSBgOVMIBB8s1uopGGH1eoQE02fPQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzMv/OTUwLzE4My9zbWFs/bC9jbG9zZS11cC1j/YXJwZW50ZXItd29y/a2luZy1jYXJ2aW5n/LXdvb2QtYWktZ2Vu/ZXJhdGl2ZS1mcmVl/LXBob3RvLmpwZw",
      },
      {
        name: "Copper Craft of Almora",
        img: "https://imgs.search.brave.com/THuCQGFVSOHxw41KBWwaGxrVmZFbXQTe37PX2e9bTww/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92aWxs/YWdlc3F1YXJlLmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzEwL0xlYWQtMDEt/Y29wcGVyLTguanBn",
      },
    ].map((item, index) => (
      <div key={index} className="text-center group">
        
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-64 object-cover rounded-xl 
          group-hover:scale-105 transition duration-300"
        />

        <p className="mt-4 font-medium text-lg">
          {item.name}
        </p>

      </div>
    ))}

  </div>
</section>

      {/* CUISINE – HORIZONTAL SCROLL */}
      {/* <section className="py-24 px-6 md:px-20">
        <h2 className="text-4xl font-serif font-bold text-center mb-16">
          Traditional Cuisine
        </h2>

        <div className="flex gap-8 overflow-hidden pb-4">
          {cuisine.map((item, index) => (
            <div>
                <li
                key={index}
                className="min-w-62.5 bg-green-800 text-white p-10 rounded-2xl text-center hover:scale-105 transition duration-300 cursor-pointer"
                >
                {item}
                </li>
            </div>
          ))}
        </div>
      </section> */}

    </div>
  );
};

export default Culture;