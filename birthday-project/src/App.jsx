import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PASSWORD = "250512";

const slides = [
  {
    title: "Momen pertama kita ketemu",
    image: "foto1.jpeg",
    text: "aku ga ekspek kamu ternyata secakep itu jir kalo irl ><",
  },
  {
    title: "Foto pertama kamu yang aku ambil!!",
    image: "foto2.jpeg",
    text: "sumpah pertama kali kita ngedate aku ngerasa kamu itu orang yang spesial bangett, aku gamau kita pisah atau putus waktu itu <3",
  },
  {
    title: "Photbooth kitaaa!!!",
    image: "foto3.jpeg",
    text: "We are so sweet babe, kita harus foto-foto lagi yaa!",
  },
];

export default function BirthdayWebsite() {
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [showError, setShowError] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNumber = (num) => {
    if (input.length < 6) {
      setInput((prev) => prev + num);
    }
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const checkPassword = () => {
    if (input === PASSWORD) {
      setPage(2);
      setInput("");
    } else {
      setShowError(true);
      setInput("");

      setTimeout(() => {
        setShowError(false);
      }, 2500);
    }
  };

  const nextSlide = () => {
    setSlideIndex((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen bg-[#f8f3eb] text-[#5c544d] overflow-hidden relative">
      <style>{`
        body {
          margin: 0;
          background: #f8f3eb;
          font-family: 'Trebuchet MS', sans-serif;
        }

        .floaty {
          animation: floaty 3s ease-in-out infinite;
        }

        @keyframes floaty {
          0%,100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        .soft-card {
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255,255,255,0.5);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }

        .petal {
          position: absolute;
          top: -20px;
          animation: fall linear infinite;
          pointer-events: none;
          opacity: 0.8;
        }

        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
          }

          100% {
            transform: translateY(120vh) rotate(360deg);
          }
        }
      `}</style>

      {page === 1 && (
        <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full opacity-70 flex justify-center pointer-events-none">
            <img
              src="holymoly.jpeg"
              alt="cats"
              className="w-[900px] max-w-full"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="soft-card rounded-[35px] p-8 md:p-12 w-full max-w-xl relative z-10"
          >
            <div className="flex justify-center mb-6">
              <img
                src="https://media.tenor.com/iALgQGVcpz4AAAAi/scemer-staring-cat.gif"
                alt="cat"
                className="w-28 h-28 object-contain floaty"
              />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-center leading-snug mb-8 floaty">
              Hai Kame! Masukin Password dulu ya kalo mau liat isinya :3
            </h1>

            <div className="flex justify-center gap-3 mb-8">
              {[0,1,2,3,4,5].map((item) => (
                <div
                  key={item}
                  className="w-5 h-5 rounded-full bg-[#f4cfcf] shadow-inner overflow-hidden"
                >
                  {input[item] && (
                    <div className="w-full h-full bg-[#ff9f9f] rounded-full" />
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-[280px] mx-auto">
              {[1,2,3,4,5,6,7,8,9].map((num) => (
                <button
                  key={num}
                  onClick={() => handleNumber(String(num))}
                  className="bg-[#fff8f4] rounded-2xl py-4 text-xl shadow-md hover:scale-105 hover:bg-[#ffe2e2] transition-all duration-300"
                >
                  {num}
                </button>
              ))}

              <button
                onClick={handleDelete}
                className="bg-[#fff8f4] rounded-2xl py-4 text-xl shadow-md hover:scale-105 transition-all"
              >
                ←
              </button>

              <button
                onClick={() => handleNumber("0")}
                className="bg-[#fff8f4] rounded-2xl py-4 text-xl shadow-md hover:scale-105 transition-all"
              >
                0
              </button>

              <button
                onClick={checkPassword}
                className="bg-[#ffb8b8] text-white rounded-2xl py-4 text-xl shadow-md hover:scale-105 hover:bg-[#ff9d9d] transition-all"
              >
                OK
              </button>
            </div>
          </motion.div>

          <AnimatePresence>
            {showError && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed bottom-10 bg-[#ffb6b6] text-white px-6 py-4 rounded-2xl shadow-xl z-50"
              >
                <div className="flex items-center top-0">
                  <img
                    src="catbutt.jpeg"
                    alt="cat"
                    className="w-10 h-10 object-contain floaty"
                  />
                  <span className="ml-2 object-contain floaty">yah passwordnya salah, coba lagi ya!</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {page === 2 && (
        <div className="min-h-screen flex items-center justify-center px-6 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="soft-card rounded-[40px] p-8 w-full max-w-3xl relative"
          >
            <div className="absolute -top-8 left-6 text-5xl">🐱</div>

            <div className="flex items-center justify-between gap-4 mb-8">
              <button
                onClick={prevSlide}
                className="bg-white rounded-full w-14 h-14 shadow-md hover:scale-110 transition-all text-2xl"
              >
                ←
              </button>

              <h2 className="text-3xl md:text-4xl font-bold text-center floaty flex-1">
                {slides[slideIndex].title}
              </h2>

              <button
                onClick={nextSlide}
                className="bg-white rounded-full w-14 h-14 shadow-md hover:scale-110 transition-all text-2xl"
              >
                →
              </button>
            </div>

            <motion.img
              key={slideIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              src={slides[slideIndex].image}
              alt="slide"
              className="w-full max-w-sm h-[450px] object-cover rounded-[30px] shadow-xl mx-auto"
            />

            <motion.p
              key={slides[slideIndex].text}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-8 text-lg leading-relaxed max-w-xl mx-auto"
            >
              {slides[slideIndex].text}
            </motion.p>

            {slideIndex === slides.length - 1 && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setPage(3)}
                  className="bg-[#ffb8b8] text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:bg-[#ff9d9d] transition-all"
                >
                  Siap-siap buat liat yang terakhir 💌
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}

      {page === 3 && (
        <div className="min-h-screen px-6 py-16 relative overflow-hidden flex flex-col items-center">
          {[...Array(24)].map((_, index) => (
            <div
              key={index}
              className="petal"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 5}s`,
                fontSize: `${18 + Math.random() * 20}px`,
              }}
            >
              {index % 2 === 0 ? "🌸" : "💗"}
            </div>
          ))}

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-center mb-16 floaty"
          >
            Happy Relationship Anniversary, Kame! 🎉💕
          </motion.h1>

          <div className="relative w-[220px] h-[260px] md:w-[420px] md:h-[480px] mb-20">
            {/* <img
              src="https://placehold.co/240x300/png"
              alt="photo1"
              className="absolute left-0 top-12 rotate-[-10deg] rounded-[25px] border-8 border-white shadow-2xl"
            />

            <img
              src="https://placehold.co/250x320/png"
              alt="photo2"
              className="absolute right-0 top-0 rotate-[10deg] rounded-[25px] border-8 border-white shadow-2xl"
            /> */}

            <img
              src="birthdayphoto.jpg"
              alt="photo3"
              className="absolute left-1/2 -translate-x-1/2 top-[-50px] rounded-[25px] border-8 border-white shadow-2xl z-10"
            />
          </div>

          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="soft-card rounded-[35px] p-8 md:p-12 max-w-3xl w-full relative top-5"
          >
            <div className="absolute -top-5 right-5 text-4xl">🐾</div>

            <h2 className="text-3xl font-bold text-center mb-6">
              A little Note for My Little Kamee 💌
            </h2>

            <p className="text-lg leading-loose text-center">
              Sayang, aku cuma mau bilang makasih banyak udah jadi bagian dari hidup aku selama 1 tahun ini. Aku ga pernah nyangka bakal seberuntung ini bisa kenal dan deket sama kamu. Kamu itu orang yang super spesial buat aku, dan aku bener-bener bersyukur bisa punya kamu di sisi aku. Aku harap kita bisa terus bareng-bareng, ngelewatin semua suka duka, dan bikin banyak kenangan indah lagi ke depannya. I love you so much, Kame!
            </p>
            <p className="text-lg leading-loose text-center mt-4">
              Walaupun akhir-akhir ini kita banyak masalah, aku yakin kita bisa lewatin semua itu bareng-bareng. Aku percaya sama kita, dan aku yakin kita bisa jadi lebih kuat lagi setelah ini. Aku ga mau kehilangan kamu, dan aku ga mau kita putus cuma karena masalah kecil. Aku harap kamu juga ngerasa hal yang sama, dan kita bisa terus berjuang buat hubungan kita ini. Aku sayang kamu banget, Kame!
            </p>
          </motion.div>

          <div className="mt-10 w-full max-w-3xl">
            <h2 className="text-2xl font-bold text-center mb-5 floaty">
              A Playlist for You!! 🎵
            </h2>

            <div className="soft-card rounded-[30px] p-4">
              <iframe
                style={{ borderRadius: "20px" }}
                src="https://open.spotify.com/embed/playlist/2oaHuO2Wc0puRvOUXuaQP1?utm_source=generator&si=91f8f9fe6ab04aa0"
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Playlist"
              />
            </div>
      </div>

          {/* <iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4rNIY0fUp9cNrHAz1OFkHG?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}

          <div className="mt-16 opacity-70 text-center">
            <p className="floaty text-lg">
              made with love, hugs, and tiny cats 🐱
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
