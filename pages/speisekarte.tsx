

export default function Speisekarte() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Leichter Hintergrund-Effekt */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black pointer-events-none" />

      {/* Inhalt */}
      <div className="relative z-10 flex flex-col items-center">
        {["/speisekarte1.jpeg", "/speisekarte2.jpeg", "/speisekarte3.jpeg", "/speisekarte4.jpeg"].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Speisekarte ${i + 1}`}
            className="w-full max-w-5xl object-cover"
          />
        ))}
      </div>
    </div>
  );
}