
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        :root {
          --bg-ivory: #F6F2EC;
          --text-charcoal: #111111;
          --accent-gold: #D9BCA9;
          --highlight-blue: #CFE4EE;
        }
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
      <main>
        {children}
      </main>
    </div>
  );
}
