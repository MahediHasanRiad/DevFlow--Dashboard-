import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Dashboard } from '@/pages/Dashboard';
import { QuickActionModal } from '@/components/QuickActionModal';

export function App() {
  const [activeRoute, setActiveRoute] = useState('#overview');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Layout
        activeRoute={activeRoute}
        setActiveRoute={setActiveRoute}
        onOpenQuickAction={() => setIsModalOpen(true)}
      >
        <Dashboard 
          activeRoute={activeRoute}
          onOpenQuickAction={() => setIsModalOpen(true)}
        />
      </Layout>

      <QuickActionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={(data) => {
          console.log('New project created:', data);
        }}
      />
    </>
  );
}

export default App;
