import React from 'react';

export default function Impressum() {
  return (
    <main style={{ backgroundColor: '#121212', minHeight: '100vh', padding: '2rem', color: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '800px', backgroundColor: '#1e1e1e', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Impressum</h1>
        <p>Angaben gemäß § 5 TMG:</p>
        <p>Max Mustermann<br />
        Musterstraße 1<br />
        12345 Musterstadt</p>

        <h2>Haftungsausschluss</h2>
        <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>

        <h2>Haftung für Links</h2>
        <p>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.</p>

        <h2>Urheberrecht</h2>
        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.</p>
      </div>
    </main>
  );
}
