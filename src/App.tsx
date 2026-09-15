import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { MyDashboardPage } from '@/pages/my-dashboard.page';
import { MeetingSchedulePage } from '@/pages/meeting-schedule.page';
import { QuickActionModal } from '@/components/common/QuickActionModal';

export function App() {
  const [activeRoute, setActiveRoute] = useState('#meeting-scheduling');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderActivePage = () => {
    switch (activeRoute) {
      case '#meeting-scheduling':
        return <MeetingSchedulePage />;
      case '#overview':
      default:
        return <MyDashboardPage />;
    }
  };

  return (
    <>
      <Layout
        activeRoute={activeRoute}
        setActiveRoute={setActiveRoute}
      >
        {renderActivePage()}
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
