import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
  {
    title: "Building Scalable Microservices",
    issuer: "LinkedIn Learning",
    description: "Architecting microservices using TypeScript and Node.js for high availability."
  },
  {
    title: "Angular: Large Scale Applications",
    issuer: "LinkedIn Learning",
    description: "Mastering complex enterprise frontend architectures with Angular."
  },
  {
    title: "CSS for Developers",
    issuer: "LinkedIn Learning",
    description: "Advanced styling techniques and performance optimization for modern web."
  },
  {
    title: "CodeQuest 2026 Winner",
    issuer: "AI Innovators Hub",
    description: "Won first prize for developing a secure AI-driven automation tool."
  }
];

const Certifications = () => {
  return (
    <section id="certifications" style={{ padding: '80px 0', background: 'var(--bg-dark)' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Certifications & Honors</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--grad-main)', margin: '0 auto' }}></div>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '20px' 
        }}>
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass"
              style={{ padding: '30px', border: '1px solid rgba(188, 19, 254, 0.2)' }}
            >
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--secondary-neon)' }}><Award size={24} /></div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{cert.title}</h3>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>
                    {cert.issuer}
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {cert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
