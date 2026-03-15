import { useState, useEffect } from 'react';
import Home from './Home';
import HowWeGotHere from './HowWeGotHere';
import HowItWorks from './HowItWorks';
import Framework from './Framework';
import Voice from './Voice';
import Disciplines from './Disciplines';
import WhatChanges from './WhatChanges';
import Reading from './Reading';
import Practicums from './Practicums';
import FAQ from './FAQ';

const PASSWORD = 'Newfoundland12#';

export default function PrintView() {
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (authorized) {
      document.body.classList.add('print-authorized');
    }
    return () => {
      document.body.classList.remove('print-authorized');
    };
  }, [authorized]);

  if (!authorized) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--navy)',
        color: 'var(--white)',
        fontFamily: 'var(--font-body)',
      }}>
        <div style={{ textAlign: 'center', maxWidth: 400 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', marginBottom: '1.5rem' }}>
            Print Access
          </h2>
          <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
            Enter the password to access the printable version.
          </p>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (input === PASSWORD) {
              setAuthorized(true);
              setError(false);
            } else {
              setError(true);
            }
          }}>
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Password"
              style={{
                padding: '0.75rem 1rem',
                fontSize: '1rem',
                border: error ? '2px solid #c0392b' : '2px solid var(--gold)',
                borderRadius: 6,
                background: 'rgba(255,255,255,0.1)',
                color: 'var(--white)',
                width: '100%',
                marginBottom: '1rem',
                outline: 'none',
              }}
              autoFocus
            />
            {error && (
              <p style={{ color: '#e74c3c', marginBottom: '1rem', fontSize: '0.9rem' }}>
                Incorrect password.
              </p>
            )}
            <button
              type="submit"
              style={{
                padding: '0.75rem 2rem',
                fontSize: '1rem',
                background: 'var(--gold)',
                color: 'var(--navy)',
                border: 'none',
                borderRadius: 6,
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="print-view">
      <div className="print-only-header" style={{
        display: 'none',
      }}>
        <h1 style={{ fontFamily: 'var(--font-display)', textAlign: 'center', margin: '2rem 0' }}>
          A Story-First School — UNCSA School of Filmmaking
        </h1>
      </div>

      <div style={{
        background: 'var(--navy)',
        color: 'var(--white)',
        padding: '1rem 2rem',
        textAlign: 'center',
        fontFamily: 'var(--font-body)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
        className="no-print"
      >
        <button
          onClick={() => window.print()}
          style={{
            padding: '0.6rem 2rem',
            fontSize: '1rem',
            background: 'var(--gold)',
            color: 'var(--navy)',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontWeight: 600,
            marginRight: '1rem',
          }}
        >
          Print / Save as PDF
        </button>
        <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>
          Use Cmd+P or click the button above. Set margins to "None" for best results.
        </span>
      </div>

      <div className="print-pages">
        <div className="print-section"><Home /></div>
        <div className="print-section"><HowWeGotHere /></div>
        <div className="print-section"><HowItWorks /></div>
        <div className="print-section"><Framework /></div>
        <div className="print-section"><Voice /></div>
        <div className="print-section"><Disciplines /></div>
        <div className="print-section"><WhatChanges /></div>
        <div className="print-section"><Reading /></div>
        <div className="print-section"><Practicums /></div>
        <div className="print-section"><FAQ /></div>
      </div>
    </div>
  );
}
