import {
  LayoutDashboard,
  Clock4,
  BarChart2,
  ClipboardList,
  AlertTriangle,
  Heart,
  Bell,
} from 'lucide-react';
import { elder, guardian } from '../data/mockData';

const tabs = [
  { id: 'dashboard', label: 'Home',     icon: LayoutDashboard },
  { id: 'timeline',  label: 'Timeline', icon: Clock4 },
  { id: 'insights',  label: 'Insights', icon: BarChart2 },
  { id: 'careplan',  label: 'Care Plan', icon: ClipboardList },
];

export function MobileHeader({ onSimulateEmergency }) {
  return (
    <header className="md:hidden sticky top-0 z-30 bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-700/50">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow shadow-blue-500/30">
          <Heart size={15} className="text-white fill-white" />
        </div>
        <div>
          <p className="text-white font-bold text-sm leading-none">Saarthi</p>
          <p className="text-slate-400 text-xs">Guardian Dashboard</p>
        </div>
      </div>

      {/* Elder chip + emergency */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 bg-slate-800 border border-slate-700 rounded-full px-2.5 py-1">
          <span className="live-dot" style={{ width: 6, height: 6 }} />
          <span className="text-white text-xs font-medium">
            {elder.name.replace('Mr. ', '')}
          </span>
        </div>
        <button
          onClick={onSimulateEmergency}
          className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition-colors"
          title="Simulate Emergency"
        >
          <AlertTriangle size={15} />
        </button>
        <button className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 relative">
          <Bell size={15} />
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-amber-400 text-slate-900 text-[9px] font-bold rounded-full flex items-center justify-center">3</span>
        </button>
      </div>
    </header>
  );
}

export function MobileBottomNav({ activeTab, setActiveTab }) {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t border-slate-200 safe-area-pb">
      <div className="flex items-stretch">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center gap-1 py-2.5 transition-colors relative ${
                isActive ? 'text-blue-600' : 'text-slate-400'
              }`}
            >
              {isActive && (
                <span className="absolute top-0 inset-x-3 h-0.5 bg-blue-600 rounded-b-full" />
              )}
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
              <span className={`text-[10px] font-medium leading-none ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
