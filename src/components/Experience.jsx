import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "TechUp High",
    role: "Production Developer",
    period: "2024 - Present",
    description: "Applying advanced technical skills in a professional environment, focusing on production-level development and secure software architecture."
  },
  {
    company: "NIAT - NxtWave Institute",
    role: "Full Stack Development Student",
    period: "2023 - Present",
    description: "Deep-diving into MERN stack, AI integration, and cybersecurity principles while building industry-ready applications."
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: '100px 0', background: 'var(--bg-dark)' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>My Journey</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--grad-main)', margin: '0 auto' }}></div>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {/* Central Line */}
          <div style={{ 
            position: 'absolute', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            height: '100%', 
            width: '2px', 
            background: 'linear-gradient(to bottom, var(--primary-neon), var(--secondary-neon), transparent)' 
          }} />

          {experiences.map((exp, index) => (
            <div key={index} style={{ 
              display: 'flex', 
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end', 
              marginBottom: '50px', 
              width: '100%',
              position: 'relative'
            }}>
              {/* Dot */}
              <div style={{ 
                position: 'absolute', 
                left: '50%', 
                top: '0', 
                transform: 'translate(-50%, 0)', 
                width: '16px', 
                height: '16px', 
                borderRadius: '50%', 
                background: 'var(--bg-dark)', 
                border: '3px solid var(--primary-neon)',
                boxShadow: '0 0 10px var(--primary-neon)',
                zIndex: 2
              }} />

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass"
                style={{ 
                  width: '45%', 
                  padding: '30px',
                  textAlign: index % 2 === 0 ? 'right' : 'left'
                }}
              >
                <div style={{ color: 'var(--primary-neon)', fontWeight: '700', marginBottom: '5px' }}>{exp.period}</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '5px' }}>{exp.role}</h3>
                <div style={{ color: 'var(--text-muted)', fontWeight: '600', marginBottom: '15px' }}>{exp.company}</div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>{exp.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
