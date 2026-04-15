import {
  TrendingUp,
  TrendingDown,
  CheckCircle,
  AlertTriangle,
  Brain,
  UtensilsCrossed,
  Minus,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { bpTrendData, adherenceData, aiWeeklySummary, riskIndicators } from '../data/mockData';

const riskIconMap = {
  Brain,
  UtensilsCrossed,
  TrendingUp,
};

const riskSeverityConfig = {
  medium: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    badge: 'bg-amber-100 text-amber-800',
    icon: 'text-amber-500',
    label: 'Medium Risk',
  },
  low: {
    bg: 'bg-saarthi-secondary/20',
    border: 'border-saarthi-secondary/40',
    badge: 'bg-saarthi-secondary text-saarthi-primary',
    icon: 'text-saarthi-accent',
    label: 'Low Risk',
  },
  high: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    badge: 'bg-red-100 text-red-800',
    icon: 'text-red-500',
    label: 'High Risk',
  },
};

const CustomBPTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-3">
        <p className="text-slate-700 font-semibold text-sm mb-2">{label}</p>
        {payload.map(p => (
          <p key={p.dataKey} className="text-xs" style={{ color: p.color }}>
            {p.name}: <strong>{p.value} mmHg</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const CustomAdherenceTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl shadow-lg p-3">
        <p className="text-slate-700 font-semibold text-sm mb-1">{label}</p>
        <p className="text-xs text-violet-600">
          Adherence: <strong>{payload[0].value}%</strong>
        </p>
        {payload[0].value < 100 && (
          <p className="text-xs text-amber-600 mt-0.5">1 missed dose</p>
        )}
      </div>
    );
  }
  return null;
};

export default function Insights() {
  const weeklyAdherence = Math.round(
    adherenceData.reduce((s, d) => s + d.adherence, 0) / adherenceData.length
  );

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Page Header */}
      <div>
        <h2 className="text-slate-800 font-bold text-xl">Insights & Weekly Report</h2>
        <p className="text-slate-500 text-sm mt-0.5">AI-synthesised summary · Week of 9 – 15 April 2026</p>
      </div>

      {/* AI Weekly Summary */}
      <div className="glass-card rounded-2xl border border-saarthi-secondary/30 overflow-hidden shadow-xl shadow-saarthi-primary/5">
        <div className="bg-gradient-to-r from-saarthi-primary to-saarthi-accent px-5 py-3 flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-[10px] font-black tracking-tighter">AI</div>
          <p className="text-white font-bold text-sm">AI Weekly Summary — Mr. Ramesh Sharma</p>
          <span className={`ml-auto text-[10px] font-bold px-2.5 py-1 rounded-full ${
            aiWeeklySummary.overallStatus === 'Stable'
              ? 'bg-white/20 text-white'
              : 'bg-amber-400/20 text-white'
          }`}>
            {aiWeeklySummary.overallStatus}
          </span>
        </div>
        <div className="p-5">
          <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">{aiWeeklySummary.summary}</p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {aiWeeklySummary.highlights.map((h, i) => {
              const isPositive = h.type === 'positive';
              return (
                <div key={i} className={`flex items-start gap-2.5 p-2.5 rounded-xl ${isPositive ? 'bg-emerald-50' : 'bg-amber-50'}`}>
                  {isPositive
                    ? <CheckCircle size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    : <AlertTriangle size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  }
                  <p className={`text-xs font-medium ${isPositive ? 'text-emerald-800' : 'text-amber-800'}`}>{h.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* BP Trend Chart */}
        <div className="glass-card rounded-2xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-slate-800 font-bold text-sm">7-Day Blood Pressure Trend</h3>
            <span className="text-xs text-slate-400">Mon – Sun</span>
          </div>
          <p className="text-slate-400 text-xs mb-4">Systolic &amp; Diastolic (mmHg)</p>
          <ResponsiveContainer width="100%" height={190}>
            <LineChart data={bpTrendData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis domain={[70, 155]} tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomBPTooltip />} />
              <Legend
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }}
              />
              <ReferenceLine y={130} stroke="#f59e0b" strokeDasharray="4 4" label={{ value: 'Target Systolic', position: 'insideTopRight', fontSize: 10, fill: '#f59e0b' }} />
              <ReferenceLine y={80} stroke="#3b82f6" strokeDasharray="4 4" label={{ value: 'Target Diastolic', position: 'insideTopRight', fontSize: 10, fill: '#3b82f6' }} />
              <Line type="monotone" dataKey="systolic" name="Systolic" stroke="#ef4444" strokeWidth={2.5} dot={{ r: 4, fill: '#ef4444', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="diastolic" name="Diastolic" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Medication Adherence */}
        <div className="glass-card rounded-2xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-slate-800 font-bold text-sm">Medication Adherence</h3>
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${weeklyAdherence >= 95 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
              Weekly Avg: {weeklyAdherence}%
            </span>
          </div>
          <p className="text-slate-400 text-xs mb-4">% of scheduled medications taken on time per day</p>
          <ResponsiveContainer width="100%" height={190}>
            <BarChart data={adherenceData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} tickFormatter={v => `${v}%`} />
              <Tooltip content={<CustomAdherenceTooltip />} />
              <ReferenceLine y={100} stroke="#e2e8f0" />
              <Bar dataKey="adherence" name="Adherence" radius={[6, 6, 0, 0]}
                fill="#2d6a4f"
                label={false}
              />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-slate-400 mt-2 text-center">
            Wednesday: 67% — 1 missed Metformin evening dose
          </p>
        </div>
      </div>

      {/* Emerging Risk Indicators */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <TrendingDown size={16} className="text-amber-500" />
          <h3 className="text-slate-800 font-bold text-base">Emerging Risk Indicators</h3>
          <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded-full ml-1">
            Last 14 days
          </span>
        </div>
        <p className="text-slate-500 text-sm mb-4">
          Our system continuously analyses patterns across vitals, behaviour, and medication data. The following trends have been detected.
        </p>
        <div className="space-y-3">
          {riskIndicators.map(risk => {
            const RiskIcon = riskIconMap[risk.icon] || AlertTriangle;
            const cfg = riskSeverityConfig[risk.severity] || riskSeverityConfig.low;
            return (
              <div key={risk.id} className={`rounded-2xl p-4 border ${cfg.bg} ${cfg.border} flex items-start gap-4 transition-all hover:shadow-md`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${cfg.badge} border border-saarthi-secondary/20`}>
                  <RiskIcon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p className="text-slate-800 font-semibold text-sm">{risk.title}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${cfg.badge}`}>{cfg.label}</span>
                    <span className="text-slate-400 text-xs">· {risk.detectedOn}</span>
                  </div>
                  <p className="text-slate-600 text-sm">{risk.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
