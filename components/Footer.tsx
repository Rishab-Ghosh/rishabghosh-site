export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--px-panel-dark)',
      borderTop: '3px solid var(--px-border)',
      boxShadow: '0 -3px 0px var(--px-dark)',
      padding: '28px 24px',
      marginRight: '80px',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '8px',
          color: 'var(--px-border-light)',
          marginBottom: '10px',
          letterSpacing: '1px',
        }}>
          © 2024 RISHAB GHOSH
        </p>
        <p style={{
          fontFamily: 'VT323, monospace',
          fontSize: '18px',
          color: 'var(--px-border)',
          marginBottom: '14px',
        }}>
          built with next.js · typescript · too much celsius
        </p>
        <div style={{
          fontFamily: '"Press Start 2P", monospace',
          fontSize: '7px',
          color: 'var(--px-amber)',
          animation: 'blink 2s steps(1) infinite',
          letterSpacing: '2px',
        }}>
          — INSERT COIN TO CONTINUE —
        </div>
      </div>
    </footer>
  );
}
