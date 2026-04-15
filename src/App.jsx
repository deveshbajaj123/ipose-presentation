import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CareTimeline from './components/CareTimeline';
import Insights from './components/Insights';
import CarePlan from './components/CarePlan';
import EmergencyBanner from './components/EmergencyBanner';
import { MobileHeader, MobileBottomNav } from './components/MobileNav';

const tabComponents = {
  dashboard: Dashboard,
  timeline: CareTimeline,
  insights: Insights,
  careplan: CarePlan,
};

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [emergencyActive, setEmergencyActive] = useState(false);

  const ActiveView = tabComponents[activeTab] || Dashboard;

  return (
    <div className="flex w-full min-h-screen bg-saarthi-bg">
      {/* Emergency overlay banner */}
      {emergencyActive && (
        <EmergencyBanner onDismiss={() => setEmergencyActive(false)} />
      )}

      {/* Sidebar — desktop only */}
      <div className="hidden md:flex">
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onSimulateEmergency={() => setEmergencyActive(true)}
        />
      </div>

      {/* Mobile header + content + bottom nav */}
      <div className="flex-1 flex flex-col min-w-0">
        <MobileHeader onSimulateEmergency={() => setEmergencyActive(true)} />

        <main
          className="flex-1 overflow-y-auto"
          style={{
            marginTop: emergencyActive ? '160px' : 0,
            transition: 'margin-top 0.3s ease',
          }}
        >
          <div className="max-w-5xl mx-auto px-4 md:px-6 py-5 md:py-7 pb-24 md:pb-7">
            <ActiveView />
          </div>
        </main>

        <MobileBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}
