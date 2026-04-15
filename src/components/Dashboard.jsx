import {
  Activity,
  Droplets,
  Heart,
  Wind,
  MessageCircle,
  Phone,
  AlertCircle,
  Star,
  Shield,
  Clock,
  Languages,
  CheckCircle,
  ChevronRight,
  User,
} from 'lucide-react';
import { liveShift, companion, acm, vitals, elder } from '../data/mockData';

const vitalIconMap = {
  Activity,
  Droplets,
  Heart,
  Wind,
};

const statusConfig = {
  green: {
    bg: 'bg-saarthi-secondary/20',
    border: 'border-saarthi-secondary/50',
    dot: 'bg-saarthi-accent',
    text: 'text-saarthi-primary',
    badge: 'bg-saarthi-secondary text-saarthi-primary',
  },
  yellow: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    dot: 'bg-amber-500',
    text: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-700',
  },
  red: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    dot: 'bg-red-500',
    text: 'text-red-700',
    badge: 'bg-red-100 text-red-700',
  },
};

function VitalCard({ vital }) {
  const Icon = vitalIconMap[vital.icon] || Activity;
  const cfg = statusConfig[vital.status];
  return (
    <div className={`glass-card rounded-2xl p-4 border ${cfg.border} ${cfg.bg} transition-all duration-200 hover:shadow-md`}>
      <div className="flex items-start justify-between mb-3">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${cfg.badge}`}>
          <Icon size={18} />
        </div>
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${cfg.badge}`}>
          {vital.statusLabel}
        </span>
      </div>
      <p className="text-slate-500 text-xs font-medium mb-1">{vital.label}</p>
      <p className="text-slate-800 text-2xl font-bold leading-none">
        {vital.value}
        <span className="text-sm font-normal text-slate-400 ml-1">{vital.unit}</span>
      </p>
      <div className="mt-2 flex items-center gap-1 text-slate-400">
        <Clock size={11} />
        <span className="text-xs">Checked {vital.lastChecked}</span>
      </div>
      <p className="text-xs text-slate-400 mt-1">Normal: {vital.normal}</p>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">

      {/* Live Shift Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-saarthi-primary to-saarthi-accent p-4 shadow-xl shadow-saarthi-primary/20 text-white">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0">
              <span className="live-dot" style={{ width: 12, height: 12 }} />
            </div>
            <div>
              <p className="font-bold text-base">
                LIVE: Companion {liveShift.companionName} is currently at the home
              </p>
              <p className="text-emerald-100 text-sm mt-0.5">
                Shift: {liveShift.shiftStart} – {liveShift.shiftEnd} &nbsp;·&nbsp; Checked in at {liveShift.checkInTime} &nbsp;·&nbsp; {liveShift.startedAgo}
              </p>
            </div>
          </div>
          <span className="flex items-center gap-1.5 bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            <CheckCircle size={12} />
            All Clear
          </span>
        </div>
      </div>

      {/* Companion + ACM row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* Companion Card */}
        <div className="glass-card rounded-2xl p-5 border border-saarthi-secondary/30">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-saarthi-primary to-saarthi-accent flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-saarthi-primary/20 flex-shrink-0">
              {companion.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-slate-800 font-bold text-base">{companion.name}</p>
                <span className="bg-violet-100 text-violet-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                  {companion.role}
                </span>
              </div>
              <p className="text-slate-500 text-sm mt-0.5">{companion.experience} experience · {companion.shiftsCompleted} shifts</p>

              {/* Languages */}
              <div className="flex items-center gap-1.5 mt-2">
                <Languages size={13} className="text-slate-400" />
                <div className="flex gap-1 flex-wrap">
                  {companion.languages.map(lang => (
                    <span key={lang} className="bg-slate-100 text-slate-600 text-xs px-2 py-0.5 rounded-full">{lang}</span>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2">
                {[1,2,3,4,5].map(i => (
                  <Star
                    key={i}
                    size={13}
                    className={i <= Math.floor(companion.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}
                  />
                ))}
                <span className="text-slate-600 text-xs ml-1 font-semibold">{companion.rating}</span>
              </div>
            </div>
          </div>

          <p className="text-slate-600 text-sm mt-3 leading-relaxed line-clamp-3">{companion.bio}</p>

          <div className="mt-4 flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 bg-saarthi-primary text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-saarthi-accent transition-colors shadow-sm shadow-saarthi-primary/10">
              <MessageCircle size={15} />
              Message {companion.name.split(' ')[0]}
            </button>
            <button className="flex items-center justify-center gap-2 bg-saarthi-secondary/50 text-saarthi-primary text-sm font-semibold py-2.5 px-4 rounded-xl hover:bg-saarthi-secondary transition-colors">
              <Phone size={15} />
              Call
            </button>
          </div>
        </div>

        {/* ACM Card */}
        <div className="glass-card rounded-2xl p-5 border border-saarthi-secondary/30">
          <div className="flex items-center gap-2 mb-3">
            <Shield size={15} className="text-saarthi-accent" />
            <p className="text-xs font-bold text-saarthi-accent uppercase tracking-wider">Supervisory Layer</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-saarthi-accent to-saarthi-primary flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-saarthi-accent/20 flex-shrink-0">
              {acm.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-slate-800 font-bold text-base">{acm.name}</p>
              <p className="text-slate-500 text-sm">{acm.qualification}</p>
              <p className="text-slate-500 text-xs mt-0.5">Zone: {acm.zone}</p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Clock size={13} className="text-slate-400 flex-shrink-0" />
              <span>Office Hours: {acm.officeHours}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <AlertCircle size={13} className="text-emerald-500 flex-shrink-0" />
              <span>Emergency response: <strong className="text-emerald-600">{acm.respondsIn}</strong></span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-saarthi-secondary/20 rounded-xl border border-saarthi-secondary/40 text-center">
            <p className="text-xs text-saarthi-primary font-semibold">
              The ACM is your clinical point of contact. Escalate if you notice concerns not addressed by the companion.
            </p>
          </div>

          <button className="mt-4 w-full flex items-center justify-center gap-2 bg-saarthi-accent/10 border border-saarthi-accent/30 text-saarthi-primary text-sm font-bold py-2.5 rounded-xl hover:bg-saarthi-accent/20 transition-colors">
            <Phone size={15} />
            Escalate to Care Manager
          </button>
        </div>
      </div>

      {/* Today's Vital Snapshot */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-slate-800 font-bold text-base">Today's Vital Snapshot</h2>
            <p className="text-slate-500 text-xs mt-0.5">Latest readings for {elder.name}</p>
          </div>
          <button className="flex items-center gap-1 text-saarthi-accent text-sm font-bold hover:underline">
            View full history <ChevronRight size={14} />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
          {vitals.map(vital => (
            <VitalCard key={vital.id} vital={vital} />
          ))}
        </div>
      </div>

      {/* Elder Quick Profile */}
      <div className="glass-card rounded-2xl p-5 border border-slate-200">
        <div className="flex items-center gap-2 mb-3">
          <User size={15} className="text-slate-400" />
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Elder Profile</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-xs text-slate-400 mb-0.5">Blood Group</p>
            <p className="text-slate-800 font-semibold text-sm">{elder.bloodGroup}</p>
          </div>
          <div>
            <p className="text-xs text-slate-400 mb-0.5">Age</p>
            <p className="text-slate-800 font-semibold text-sm">{elder.age} years</p>
          </div>
          <div className="col-span-2">
            <p className="text-xs text-slate-400 mb-1">Active Conditions</p>
            <div className="flex flex-wrap gap-1.5">
              {elder.conditions.map(c => (
                <span key={c} className="bg-orange-50 border border-orange-100 text-orange-700 text-xs px-2 py-0.5 rounded-full">{c}</span>
              ))}
            </div>
          </div>
          <div className="col-span-2">
            <p className="text-xs text-slate-400 mb-1">Known Allergies</p>
            <div className="flex flex-wrap gap-1.5">
              {elder.allergies.map(a => (
                <span key={a} className="bg-red-50 border border-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full">{a}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
