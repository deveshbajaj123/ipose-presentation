import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CareTimeline from './components/CareTimeline';
import Insights from './components/Insights';
import CarePlan from './components/CarePlan';
import EmergencyBanner from './components/EmergencyBanner';

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
    <div className="flex w-full min-h-screen bg-slate-50">
      {/* Emergency overlay banner */}
      {emergencyActive && (
        <EmergencyBanner onDismiss={() => setEmergencyActive(false)} />
      )}

      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSimulateEmergency={() => setEmergencyActive(true)}
      />

      {/* Main content */}
      <main
        className="flex-1 overflow-y-auto"
        style={{ marginTop: emergencyActive ? '160px' : 0, transition: 'margin-top 0.3s ease' }}
      >
        <div className="max-w-5xl mx-auto px-6 py-7">
          <ActiveView />
        </div>
      </main>
    </div>
  );
}
