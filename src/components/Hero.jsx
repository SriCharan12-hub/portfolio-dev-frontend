import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';

function ParticleBackground(props) {
  const ref = useRef();
  const [sphere] = useMemo(() => [random.inSphere(new Float32Array(5000), { radius: 1.5 })], []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f2ff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const Hero = () => {
  return (
    <section id="home" style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
      {/* 3D Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <ParticleBackground />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '0 20px',
        textAlign: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span style={{
            color: 'var(--primary-neon)',
            textTransform: 'uppercase',
            letterSpacing: '5px',
            fontSize: 'var(--fs-xs)',
            fontWeight: '600',
            marginBottom: '1rem',
            display: 'block'
          }}>Full Stack Developer & AI Enthusiast</span>
          
          <h1 style={{
            fontSize: 'clamp(3rem, 10vw, 6rem)',
            lineHeight: '1',
            marginBottom: '1.5rem',
            background: 'var(--grad-main)',
            webkitBackgroundClip: 'text',
            webkitTextFillColor: 'transparent',
            letterSpacing: '-2px'
          }}>
            Palem Sri Charan
          </h1>

          <p style={{
            color: 'var(--text-main)',
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto 2.5rem',
            lineHeight: '1.6',
            fontWeight: '500'
          }}>
            Embracing the Tech Journey | Committed to Excellence in Full Stack Development, AI, and Cybersecurity | NIAT Student
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                border: 'none',
                background: 'var(--grad-main)',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 10px 20px rgba(0, 242, 255, 0.3)'
              }}
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                border: '1px solid var(--glass-border)',
                background: 'transparent',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text-muted)'
        }}
      >
        <div style={{
          width: '2px',
          height: '40px',
          background: 'linear-gradient(to bottom, var(--primary-neon), transparent)'
        }} />
      </motion.div>
    </section>
  );
};

export default Hero;
