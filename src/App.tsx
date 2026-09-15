import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { DashboardPage } from '@/pages/Dashboard.page';
import { QuickActionModal } from '@/components/common/QuickActionModal';

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
        <DashboardPage
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
