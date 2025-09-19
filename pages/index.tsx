import Head from "next/head";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Ichi Restaurant Saarlouis</title>
        <meta
          name="description"
          content="Ichi Restaurant in Saarlouis – Asiatische Spezialitäten, Sushi und All-you-can-eat Buffet."
        />
      </Head>

      {/* Hintergrund mit Farbverlauf und asiatischem Muster */}
      <div className="relative min-h-screen font-serif text-gray-300 overflow-x-hidden">
        {/* Asiatisches Muster als SVG-Overlay */}
        <div
          className="fixed inset-0 pointer-events-none z-0"
          aria-hidden="true"
          style={{ opacity: 0.2 }}
        >
          {/*
          <svg width="100%" height="100%">
            <defs>
              <pattern id="waves" patternUnits="userSpaceOnUse" width="80" height="80">
                <path
                  d="M 0 40 Q 20 0, 40 40 T 80 40"
                  fill="none"
                  stroke="#eab308"
                  strokeWidth="3"
                  opacity="0.8"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
          */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="w-full h-full animate-pulse">
              {[...Array(30)].map((_, i) => (
                <span
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-95 sparkle shadow-lg shadow-yellow-500/70"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 5}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Sanfter Hintergrund-Farbverlauf */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />

        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md shadow-lg z-50 transition-all">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-2">
            <img
              src="/ichi-logo.png"
              alt="Ichi Logo"
              className="h-20 w-auto"
            />
            <nav className="space-x-8 hidden md:flex">
              <a href="#hero" className="hover:text-red-500 transition-colors duration-200">Home</a>
              <a href="/speisekarte.tsx" className="hover:text-red-500 transition-colors duration-200">Speisekarte</a>
              <a href="#about" className="hover:text-red-500 transition-colors duration-200">Über uns</a>
              <a href="#gallery" className="hover:text-red-500 transition-colors duration-200">Galerie</a>
              <a href="#contact" className="hover:text-red-500 transition-colors duration-200">Kontakt</a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center reveal"
          style={{
            backgroundImage: "url('/restaurant-hero.jpg')",
          }}
        >
          {/* Overlay mit dunklem Farbverlauf und Muster entfernt */}
          {/* Eleganter Koi im Hintergrund */}
          <div className="absolute -bottom-40 right-0 pointer-events-none z-20">
            <img
              src="/koi.png"
              alt="Koi"
              className="w-96 max-w-sm md:max-w-md lg:max-w-lg opacity-70 mix-blend-screen drop-shadow-[0_0_25px_rgba(255,215,0,0.35)]"
            />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center w-full">
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-gray-800 via-gray-900 to-black border border-gray-700/50 rounded-3xl shadow-2xl shadow-black/70 px-12 py-14 text-center">
              <h2
                className="text-5xl md:text-6xl font-extrabold relative mb-4 drop-shadow-lg"
              >
                <span className="block text-transparent bg-clip-text gradient-shine-metal hover:brightness-125 hover:scale-105 transition-transform duration-300">
                  Willkommen im Ichi
                </span>
              </h2>
              <p className="text-lg md:text-xl mb-8 text-gray-300 font-medium">
                Authentische asiatische Küche, Sushi & All-you-can-eat Buffet in Saarlouis.
              </p>
              <a
                href="/speisekarte.tsx"
                className="inline-block px-10 py-4 rounded-full text-black font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 btn-glow-red btn-gradient-animate"
              >
                Speisekarte
              </a>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-24 bg-gray-900/50 backdrop-blur-md relative reveal">
          <h2 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-red-600 via-amber-500 to-pink-500 bg-clip-text text-transparent mb-14 drop-shadow-lg">
            Unsere Spezialitäten
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-6">
            {[
              { name: "Sushi Variation", desc: "Frisch zubereitet, bunt & vielfältig", img: "/sushi.jpeg" },
              { name: "Garnelen", desc: "Knackig und frisch zubereitet", img: "/Garnelen.jpeg" },
              { name: "Frite Sushi", desc: "Knusprig, goldbraun & zart", img: "/frite-sushi.jpeg" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-800 via-gray-900 to-black backdrop-blur-lg rounded-2xl shadow-lg border border-gray-700/40 hover:shadow-2xl hover:scale-105 transition-all duration-300 p-7 text-center flex flex-col items-center"
              >
                <div className="h-40 w-full flex items-center justify-center rounded-xl mb-4 shadow-inner overflow-hidden">
                  <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-red-500 via-amber-500 to-pink-500 bg-clip-text text-transparent mb-2 drop-shadow">
                  {item.name}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 max-w-4xl mx-auto text-center px-6 relative reveal">
          <div className="absolute -left-57 top-10 z-30 pointer-events-none">
            <img
              src="/drache.png"
              alt="Drache"
              className="w-[420px] max-w-md opacity-80 mix-blend-screen drop-shadow-[0_0_35px_rgba(255,215,0,0.35)] transform scale-x-100"
            />
          </div>
          <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black backdrop-blur-lg rounded-2xl shadow-lg p-10 transition-all duration-500">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 via-amber-500 to-pink-500 bg-clip-text text-transparent mb-6 drop-shadow-lg">
              Über uns
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 font-medium">
              Seit vielen Jahren verwöhnen wir unsere Gäste mit einer großen
              Auswahl an asiatischen Köstlichkeiten. Unser Restaurant verbindet
              traditionelle Rezepte mit einem modernen Ambiente. Genießen Sie
              ein stilvolles Erlebnis mit Familie und Freunden.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="py-24 bg-gray-900/50 backdrop-blur-md relative reveal">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 via-amber-500 to-pink-500 bg-clip-text text-transparent text-center mb-14 drop-shadow-lg">
            Ein Einblick
          </h2>
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
            <img
              src="/bild1.jpeg"
              alt="Impression 1"
              className="h-56 w-full object-cover rounded-2xl shadow-inner hover:shadow-xl hover:scale-105 transition-all duration-300"
            />
            <img
              src="/bild2.jpeg"
              alt="Impression 2"
              className="h-56 w-full object-cover rounded-2xl shadow-inner hover:shadow-xl hover:scale-105 transition-all duration-300"
            />
            <img
              src="/bild3.jpeg"
              alt="Impression 3"
              className="h-56 w-full object-cover rounded-2xl shadow-inner hover:shadow-xl hover:scale-105 transition-all duration-300"
            />
          </div>
        </section>

        {/* Kontakt */}
        <section id="contact" className="py-24 max-w-5xl mx-auto px-6 reveal">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 via-amber-500 to-pink-500 bg-clip-text text-transparent text-center mb-14 drop-shadow-lg">
            Kontakt & Reservierung
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black backdrop-blur-lg p-10 rounded-2xl shadow-lg border border-gray-700/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-red-500 via-amber-500 to-pink-500 bg-clip-text text-transparent drop-shadow">
                Adresse
              </h3>
              <p>Silberherzstraße 19</p>
              <p>66740 Saarlouis</p>
              <p>Tel: 06831 8936588</p>
              <p className="mt-4 text-sm text-gray-400">
                Mo – Sa: 12:00 – 15:00 Uhr | 18:00 – 23:30 Uhr <br />
                Dienstag: Ruhetag (außer Feiertage)
              </p>
            </div>
            <form className="bg-gradient-to-br from-gray-800 via-gray-900 to-black backdrop-blur-lg p-10 rounded-2xl shadow-lg border border-gray-700/40 space-y-5 transition-all duration-300">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-700/40 rounded-lg focus:border-red-400 outline-none bg-black/40 backdrop-blur placeholder-gray-500 text-gray-300 transition-all duration-200"
              />
              <input
                type="email"
                placeholder="E-Mail"
                className="w-full px-4 py-3 border border-gray-700/40 rounded-lg focus:border-red-400 outline-none bg-black/40 backdrop-blur placeholder-gray-500 text-gray-300 transition-all duration-200"
              />
              <textarea
                placeholder="Nachricht"
                className="w-full px-4 py-3 border border-gray-700/40 rounded-lg focus:border-red-400 outline-none bg-black/40 backdrop-blur placeholder-gray-500 text-gray-300 transition-all duration-200"
                rows={4}
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 via-orange-400 to-pink-500 hover:from-pink-600 hover:to-red-500 text-white py-3 rounded-lg font-semibold text-lg shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Absenden
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/90 backdrop-blur text-gray-300 text-center py-6 mt-10 rounded-t-2xl shadow-inner">
          <p>© {new Date().getFullYear()} Ichi Restaurant Saarlouis</p>
        </footer>
      </div>
      <style jsx global>{`
        @keyframes gradient-shine {
          0% {
            background-position: 200% center;
          }
          100% {
            background-position: -200% center;
          }
        }
        .btn-glow-red {
          box-shadow: 0 0 6px rgba(248, 113, 113, 0.6), 0 0 12px rgba(251, 113, 133, 0.5);
          transition: box-shadow 0.3s ease;
        }
        .btn-glow-red:hover {
          box-shadow: 0 0 10px rgba(248, 113, 113, 0.7), 0 0 20px rgba(251, 113, 133, 0.6);
        }
        .btn-gradient-animate {
          background-image: linear-gradient(270deg, #f87171, #fb7185, #fbbf24, #fb7185);
          background-size: 400% 400%;
          animation: gradient-shine 8s ease infinite;
        }
        .gradient-shine-metal {
          background-image: linear-gradient(
            270deg,
            #ff0000,
            #ff4d00,
            #ff9900,
            #ffcc00,
            #ffff66,
            #ff0000
          );
          background-size: 400% 400%;
          animation: gradient-shine 15s ease-in-out infinite;
        }
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .reveal.visible {
          opacity: 1;
          transform: none;
        }
        @keyframes floatSpark {
          0% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { transform: translateY(-20px) scale(1.5); opacity: 1; filter: drop-shadow(0 0 6px gold); }
          100% { transform: translateY(0) scale(1); opacity: 0.7; }
        }
        .sparkle {
          animation: floatSpark 4s infinite ease-in-out;
        }
      `}</style>
    </>
  );
}