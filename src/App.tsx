import { useCallback, useEffect, useState } from 'react';
import { CareerExperience } from './components/CareerExperience';
import { ContactFooter } from './components/ContactFooter';
import { CoreCapabilities } from './components/CoreCapabilities';
import { Credentials } from './components/Credentials';
import { GovernanceSection } from './components/GovernanceSection';
import { Hero } from './components/Hero';
import { NAV_LINKS, Navbar } from './components/Navbar';
import { ResumeModal } from './components/ResumeModal';
import { Toast, type ToastMessage } from './components/Toast';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = useCallback((title: string, description?: string) => {
    setToast({ id: Date.now(), title, description });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 4000);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.id);
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection(sectionIds[0]);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900">
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <CoreCapabilities />
        <GovernanceSection />
        <CareerExperience />
        <Credentials />
        <ContactFooter
          onNotify={showToast}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </main>

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onDownloadNotify={() =>
          showToast('Resume download started', 'Dinesh_Kumar_Panneer_Resume.pdf')
        }
      />

      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}

export default App;
