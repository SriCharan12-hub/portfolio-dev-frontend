import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Public Repos', value: '200+' },
    { label: 'Yearly Commits', value: '300+' },
    { label: 'Tech Stack', value: '15+' },
    { label: 'GitHub Achievements', value: '3+' },
  ];

  return (
    <section id="about" style={{ padding: '100px 0', background: 'var(--bg-dark)' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>About Me</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              I am a second-year student at the <strong>NxtWave Institute of Advanced Technologies (NIAT)</strong>, deeply passionate about <strong>full-stack development, AI, and cybersecurity</strong>.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              My philosophy revolves around building systems that are not just functional but also secure, predictable, and scalable. I am an active member of the "Build in Public" community, where I share my journey in software architecture and secure implementation.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass"
                style={{ padding: '30px', textAlign: 'center' }}
              >
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '800', 
                  background: 'var(--grad-main)', 
                  webkitBackgroundClip: 'text', 
                  webkitTextFillColor: 'transparent',
                  marginBottom: '5px' 
                }}>
                  {stat.value}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
