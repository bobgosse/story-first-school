import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Framework from './pages/Framework';
import Disciplines from './pages/Disciplines';
import DisciplinePage from './pages/DisciplinePage';
import Reading from './pages/Reading';
import Practicums from './pages/Practicums';
import Voice from './pages/Voice';
import WhatChanges from './pages/WhatChanges';
import FAQ from './pages/FAQ';

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <Nav />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/framework" element={<PageWrapper><Framework /></PageWrapper>} />
            <Route path="/voice" element={<PageWrapper><Voice /></PageWrapper>} />
            <Route path="/disciplines" element={<PageWrapper><Disciplines /></PageWrapper>} />
            <Route path="/disciplines/:slug" element={<PageWrapper><DisciplinePage /></PageWrapper>} />
            <Route path="/what-changes" element={<PageWrapper><WhatChanges /></PageWrapper>} />
            <Route path="/reading" element={<PageWrapper><Reading /></PageWrapper>} />
            <Route path="/practicums" element={<PageWrapper><Practicums /></PageWrapper>} />
            <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
