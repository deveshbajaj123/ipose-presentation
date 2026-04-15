import { useState } from 'react';
import {
  Home,
  Activity,
  Pill,
  Coffee,
  Dumbbell,
  Sun,
  UtensilsCrossed,
  Moon,
  AlertTriangle,
  Heart,
  Phone,
  Tv,
  Filter,
  Flag,
  Clock,
} from 'lucide-react';
import { timelineEntries } from '../data/mockData';

const iconMap = {
  Home,
  Activity,
  Pill,
  Coffee,
  Dumbbell,
  Sun,
  UtensilsCrossed,
  Moon,
  AlertTriangle,
  Heart,
  Phone,
  Tv,
};

const categoryConfig = {
  health: {
    color: 'bg-saarthi-secondary text-saarthi-primary',
    label: 'Health / Vitals',
    dot: 'bg-saarthi-accent',
  },
  medication: {
    color: 'bg-saarthi-primary text-white',
    label: 'Medications',
    dot: 'bg-saarthi-primary',
  },
  daily: {
    color: 'bg-saarthi-accent text-white',
    label: 'Daily Life',
    dot: 'bg-saarthi-accent',
  },
};

const filters = [
  { id: 'all', label: 'All' },
  { id: 'health', label: 'Health / Vitals' },
  { id: 'medication', label: 'Medications' },
  { id: 'daily', label: 'Daily Life' },
];

function TimelineEntry({ entry, isLast }) {
  const Icon = iconMap[entry.icon] || Activity;
  const catCfg = categoryConfig[entry.category] || categoryConfig.daily;

  return (
    <div className="relative flex gap-4">
      {/* Vertical connector */}
      {!isLast && (
        <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-gradient-to-b from-saarthi-secondary/50 to-transparent" />
      )}

      {/* Icon bubble */}
      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-sm ${catCfg.color}`}>
        <Icon size={18} />
      </div>

      {/* Content */}
      <div className={`flex-1 mb-5 rounded-2xl p-4 border transition-all duration-150 ${
        entry.flag
          ? 'bg-amber-50 border-amber-200 shadow-sm shadow-amber-100'
          : 'bg-white border-saarthi-secondary/20 hover:border-saarthi-secondary/50 hover:shadow-md hover:shadow-saarthi-primary/5'
      }`}>
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-slate-800 font-semibold text-sm">{entry.title}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${catCfg.color}`}>
              {categoryConfig[entry.category]?.label || entry.category}
            </span>
            {entry.flag && (
              <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-semibold bg-amber-200 text-amber-800">
                <Flag size={10} />
                Observational Flag
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-slate-400 flex-shrink-0">
            <Clock size={12} />
            <span className="text-xs font-medium">{entry.time}</span>
          </div>
        </div>
        <p className={`text-sm mt-2 leading-relaxed ${entry.flag ? 'text-amber-900' : 'text-slate-600'}`}>
          {entry.description}
        </p>
      </div>
    </div>
  );
}

export default function CareTimeline() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? timelineEntries
    : timelineEntries.filter(e => e.category === activeFilter);

  const flagCount = timelineEntries.filter(e => e.flag).length;

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h2 className="text-slate-800 font-bold text-xl">Care Timeline</h2>
          <p className="text-slate-500 text-sm mt-0.5">Today's chronological activity log · Tuesday, 15 April 2026</p>
        </div>
        {flagCount > 0 && (
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold px-3 py-2 rounded-xl">
            <Flag size={14} />
            {flagCount} Observational {flagCount === 1 ? 'Flag' : 'Flags'} today
          </div>
        )}
      </div>

      {/* Filter buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
        <Filter size={14} className="text-slate-400 flex-shrink-0" />
        {filters.map(f => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`flex-shrink-0 text-sm font-bold px-4 py-1.5 rounded-full transition-all duration-150 ${
              activeFilter === f.id
                ? 'bg-saarthi-primary text-white shadow-lg shadow-saarthi-primary/20'
                : 'bg-white border border-saarthi-secondary/30 text-saarthi-primary/60 hover:border-saarthi-accent hover:text-saarthi-primary'
            }`}
          >
            {f.label}
            {f.id !== 'all' && (
              <span className={`ml-1.5 text-xs ${activeFilter === f.id ? 'text-blue-200' : 'text-slate-400'}`}>
                {timelineEntries.filter(e => e.category === f.id).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Observational Flags callout */}
      {(activeFilter === 'all' || filtered.some(e => e.flag)) && flagCount > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-1">
            <Flag size={14} className="text-amber-600" />
            <p className="text-amber-800 font-semibold text-sm">Observational Flags Detected</p>
          </div>
          <p className="text-amber-700 text-sm">
            Anjali has flagged {flagCount} observations today that may warrant attention. These are highlighted in the timeline below. Our companions are trained to notice subtle changes in behavior and health indicators.
          </p>
        </div>
      )}

      {/* Timeline */}
      <div className="bg-white rounded-2xl border border-slate-100 p-5">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            <Activity size={32} className="mx-auto mb-2 opacity-40" />
            <p className="text-sm">No entries for this category yet.</p>
          </div>
        ) : (
          <div>
            {filtered.map((entry, idx) => (
              <TimelineEntry key={entry.id} entry={entry} isLast={idx === filtered.length - 1} />
            ))}
          </div>
        )}

        {/* End of log note */}
        {filtered.length > 0 && (
          <div className="flex items-center gap-3 mt-2">
            <div className="w-10 flex-shrink-0 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full border-2 border-slate-300 bg-white" />
            </div>
            <p className="text-slate-400 text-xs italic">Shift in progress · Next update expected around 7:30 PM</p>
          </div>
        )}
      </div>
    </div>
  );
}
