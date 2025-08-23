"use client";

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function WorkPage() {
  const router = useRouter();
  return (
    <div style={{width: '100vw', height: '100vh', background: '#590d22', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed', top: 0, left: 0, margin: 0, padding: 0}}>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.35 }}
        onClick={() => router.back()}
        style={{ position: 'fixed', top: '20px', right: '20px', background: 'transparent', border: '1px solid #ffccd5', color: '#ffccd5', padding: '8px 16px', fontSize: '14px', cursor: 'pointer', zIndex: 100, borderRadius: '4px', transition: 'all 0.08s ease' }}
        whileHover={{ backgroundColor: '#ffccd5', color: '#590d22', transition: { duration: 0.03 } }}
      >
        BACK
      </motion.button>
      <h1 style={{color: '#ff4d6d', fontSize: '4rem', fontWeight: 'bold'}}>WORK</h1>
    </div>
  );
}
