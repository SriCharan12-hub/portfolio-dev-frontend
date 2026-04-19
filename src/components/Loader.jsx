import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = ({ onComplete }) => {
  const counterRef = useRef(null);
  const progressRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    const counter = { value: 0 };

    tl.to(counter, {
      value: 100,
      duration: 2.5,
      ease: 'power3.inOut',
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.innerText = Math.floor(counter.value) + '%';
        }
        if (progressRef.current) {
          progressRef.current.style.width = counter.value + '%';
        }
      }
    });

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'power2.out'
    });

  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--bg-dark)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        gap: '20px'
      }}
    >
      <div style={{
        fontSize: '4rem',
        fontWeight: '800',
        fontFamily: 'var(--font-heading)',
        background: 'var(--grad-main)',
        webkitBackgroundClip: 'text',
        webkitTextFillColor: 'transparent',
      }} ref={counterRef}>
        0%
      </div>
      <div style={{
        width: '200px',
        height: '2px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div 
          ref={progressRef}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '0%',
            backgroundColor: 'var(--primary-neon)',
            boxShadow: '0 0 20px var(--primary-neon)'
          }}
        />
      </div>
      <div style={{
        color: 'var(--text-muted)',
        letterSpacing: '4px',
        textTransform: 'uppercase',
        fontSize: '0.8rem'
      }}>
        Loading Portfolio
      </div>
    </div>
  );
};

export default Loader;
