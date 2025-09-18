import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Ichi Asia Restaurant Saarlouis</title>
        <meta
          name="description"
          content="All you can eat im Ichi Asia Restaurant Saarlouis. Frisches Buffet, Sushi & asiatische Spezialitäten."
        />
      </Head>

      <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans overflow-x-hidden">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            <div className="text-2xl font-bold text-red-500 tracking-wide">
              ICHI
            </div>
            <nav className="hidden md:flex space-x-8 text-lg">
              <a href="#hero" className="hover:text-red-500 transition">
                Home
              </a>
              <a href="#menu" className="hover:text-red-500 transition">
                Speisekarte
              </a>
              <a href="#about" className="hover:text-red-500 transition">
                Über uns
              </a>
              <a href="#contact" className="hover:text-red-500 transition">
                Kontakt
              </a>
            </nav>
            <button
              className="md:hidden text-2xl focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-black/90 px-6 py-4 space-y-4">
              <a
                href="#hero"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-red-500 transition"
              >
                Home
              </a>
              <a
                href="#menu"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-red-500 transition"
              >
                Speisekarte
              </a>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-red-500 transition"
              >
                Über uns
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-red-500 transition"
              >
                Kontakt
              </a>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section
          id="hero"
          className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-28"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-lg animate-fadeInUp">
            Willkommen im{" "}
            <span className="text-red-500">Ichi Asia Restaurant</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 animate-fadeInUp delay-200 max-w-2xl">
            Frisches Sushi, asiatische Spezialitäten & ein einzigartiges
            All-you-can-eat Erlebnis in Saarlouis.
          </p>
          <div className="mt-8 flex space-x-4 animate-fadeInUp delay-400">
            <a
              href="#menu"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-lg shadow-lg shadow-red-900"
            >
              Speisekarte ansehen
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 rounded-lg"
            >
              Reservieren
            </a>
          </div>
          <div className="absolute bottom-6 animate-bounce text-gray-400">
            ↓ Scroll
          </div>
        </section>

        {/* Specials / Menü Vorschau */}
        <section
          id="menu"
          className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black"
        >
          <h2 className="text-4xl font-bold text-center text-red-500 mb-12">
            Beliebte Gerichte
          </h2>
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { name: "Sushi Variation", img: "/sushi.jpg" },
              { name: "Gebratene Nudeln", img: "/noodles.jpg" },
              { name: "Tempura Garnelen", img: "/tempura.jpg" },
              { name: "Sushi Rolls", img: "/rolls.jpg" },
              { name: "Asia Buffet", img: "/buffet.jpg" },
              { name: "Yakitori Spieße", img: "/yakitori.jpg" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-500"
              >
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500">Bild: {item.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-sm">
                    Ein Klassiker aus unserer Küche – frisch zubereitet und
                    voller Geschmack.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Über uns */}
        <section
          id="about"
          className="py-20 px-6 max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-red-500 mb-8">Über uns</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Seit vielen Jahren verwöhnen wir unsere Gäste mit einer großen
            Auswahl an asiatischen Köstlichkeiten. Unser Ziel ist es, traditionelle
            Rezepte mit modernen Einflüssen zu verbinden und ein einzigartiges
            Geschmackserlebnis zu schaffen. Genießen Sie bei uns frisches Sushi,
            warme Spezialitäten und ein stilvolles Ambiente.
          </p>
        </section>

        {/* Infos */}
        <section className="py-20 px-6 bg-gray-900">
          <h2 className="text-4xl font-bold text-center text-red-500 mb-12">
            Informationen
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="text-2xl font-semibold text-red-400 mb-4">
                Adresse
              </h3>
              <p>Silberherzstraße 19</p>
              <p>66740 Saarlouis</p>
              <p>Tel: 06831 8936588</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="text-2xl font-semibold text-red-400 mb-4">
                Öffnungszeiten
              </h3>
              <p>Mo – Sa: 12:00 – 15:00 Uhr</p>
              <p>18:00 – 23:30 Uhr</p>
              <p className="mt-2">Dienstag: Ruhetag (außer Feiertage)</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="text-2xl font-semibold text-red-400 mb-4">
                All you can eat
              </h3>
              <p>Mittags: 12:00 – 15:00 Uhr · €18,80</p>
              <p>Abends: 18:00 – 23:30 Uhr · €30,80</p>
              <p>Fr – So & Feiertage: €32,80</p>
            </div>
          </div>
        </section>

        {/* Kontakt / Reservierung */}
        <section
          id="contact"
          className="py-20 px-6 bg-gradient-to-t from-black to-gray-900"
        >
          <h2 className="text-4xl font-bold text-center text-red-500 mb-12">
            Kontakt & Reservierung
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Reservieren</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Telefonnummer"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none"
                />
                <textarea
                  placeholder="Nachricht / Reservierungsdetails"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none"
                  rows={4}
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-lg shadow-lg shadow-red-900 transition"
                >
                  Anfrage senden
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hier finden Sie uns</h3>
              <div className="w-full h-64 bg-gray-700 flex items-center justify-center rounded-lg">
                <span className="text-gray-400">Google Maps Platzhalter</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-center py-10 text-gray-500 text-sm">
          <div className="space-y-2">
            <p>© {new Date().getFullYear()} Ichi Asia Restaurant Saarlouis</p>
            <p>
              Erstellt mit ❤️ von{" "}
              <a
                href="https://github.com/fynnschulz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:underline"
              >
                Fynn
              </a>
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </>
  );
}