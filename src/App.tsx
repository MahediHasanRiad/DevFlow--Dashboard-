import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { MyDashboardPage } from '@/pages/my-dashboard.page';
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
        <MyDashboardPage />
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
