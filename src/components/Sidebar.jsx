import {
  LayoutDashboard,
  Clock4,
  BarChart2,
  ClipboardList,
  AlertTriangle,
  Heart,
  LogOut,
  Bell,
  ChevronRight,
} from 'lucide-react';
import { elder, guardian } from '../data/mockData';

const navItems = [
  { id: 'dashboard', label: 'Dashboard',        icon: LayoutDashboard, sublabel: 'Peace of Mind' },
  { id: 'timeline',  label: 'Care Timeline',    icon: Clock4,           sublabel: 'Today\'s Logs'  },
  { id: 'insights',  label: 'Insights & Reports', icon: BarChart2,      sublabel: 'Weekly Analysis' },
  { id: 'careplan',  label: 'Care Plan',         icon: ClipboardList,   sublabel: 'Logistics'      },
];

export default function Sidebar({ activeTab, setActiveTab, onSimulateEmergency }) {
  return (
    <aside className="w-64 flex-shrink-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex flex-col h-screen sticky top-0 overflow-y-auto">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
            <Heart size={18} className="text-white fill-white" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg leading-none" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Saarthi
            </h1>
            <p className="text-slate-400 text-xs mt-0.5">Guardian Dashboard</p>
          </div>
        </div>
      </div>

      {/* Elder Profile */}
      <div className="mx-4 mt-4 p-3 rounded-xl bg-slate-700/40 border border-slate-600/30">
        <p className="text-slate-400 text-xs mb-1 uppercase tracking-wider font-medium">Monitoring</p>
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm shadow">
            RS
          </div>
          <div className="min-w-0">
            <p className="text-white text-sm font-semibold leading-tight truncate">{elder.name}</p>
            <p className="text-slate-400 text-xs">{elder.age} yrs • Noida</p>
          </div>
        </div>
        <div className="mt-2.5 flex items-center gap-1.5">
          <span className="live-dot" style={{ width: 8, height: 8 }}></span>
          <span className="text-emerald-400 text-xs font-medium">Live monitoring active</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 mt-5 space-y-1">
        <p className="text-slate-500 text-xs uppercase tracking-wider px-3 mb-2 font-medium">Navigation</p>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group text-left
                ${isActive
                  ? 'bg-blue-600 shadow-lg shadow-blue-600/30 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
                }`}
            >
              <Icon size={18} className={isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-none">{item.label}</p>
                <p className={`text-xs mt-0.5 truncate ${isActive ? 'text-blue-200' : 'text-slate-500 group-hover:text-slate-400'}`}>
                  {item.sublabel}
                </p>
              </div>
              {isActive && <ChevronRight size={14} className="text-blue-200 flex-shrink-0" />}
            </button>
          );
        })}
      </nav>

      {/* Notifications Badge */}
      <div className="mx-4 mb-3">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500/20 transition-all duration-200">
          <Bell size={16} />
          <span className="text-sm font-medium flex-1 text-left">Notifications</span>
          <span className="bg-amber-400 text-slate-900 text-xs font-bold px-1.5 py-0.5 rounded-full">3</span>
        </button>
      </div>

      {/* Emergency Simulation Button */}
      <div className="px-4 pb-4 border-t border-slate-700/50 pt-3">
        <button
          id="btn-simulate-emergency"
          onClick={onSimulateEmergency}
          className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 hover:border-red-500/50 transition-all duration-200 group"
        >
          <AlertTriangle size={16} className="flex-shrink-0 group-hover:animate-pulse" />
          <span className="text-xs font-semibold text-left leading-tight">Simulate Emergency Alert</span>
        </button>

        {/* Guardian Info */}
        <div className="mt-3 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
            {guardian.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-slate-300 text-xs font-medium truncate">{guardian.name}</p>
            <p className="text-slate-500 text-xs">{guardian.location}</p>
          </div>
          <button className="text-slate-500 hover:text-slate-300 transition-colors">
            <LogOut size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
}
