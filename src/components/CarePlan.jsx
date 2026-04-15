import {
  CheckCircle,
  Circle,
  AlertTriangle,
  Hospital,
  Phone,
  User,
  MapPin,
  Pill,
  Clock,
  ShieldCheck,
  Activity,
  Coffee,
  Heart,
} from 'lucide-react';
import { carePlan } from '../data/mockData';

const categoryStyle = {
  health: { color: 'bg-blue-100 text-blue-600', icon: Activity },
  daily: { color: 'bg-amber-100 text-amber-700', icon: Coffee },
  medication: { color: 'bg-violet-100 text-violet-600', icon: Pill },
};

function TaskRow({ task }) {
  const cfg = categoryStyle[task.category] || categoryStyle.daily;
  const CatIcon = cfg.icon;
  return (
    <div className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-colors ${task.done ? 'bg-slate-50' : 'bg-white hover:bg-slate-50'} border ${task.done ? 'border-slate-100' : 'border-slate-200'}`}>
      {task.done
        ? <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
        : <Circle size={18} className="text-slate-300 flex-shrink-0" />
      }
      <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${cfg.color}`}>
        <CatIcon size={13} />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium ${task.done ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
          {task.task}
        </p>
      </div>
      <div className="flex items-center gap-1 text-slate-400 flex-shrink-0">
        <Clock size={12} />
        <span className="text-xs">{task.time}</span>
      </div>
    </div>
  );
}

function ContactCard({ name, phone, detail, type, icon: Icon, accent }) {
  return (
    <div className={`rounded-xl p-3.5 border ${accent} flex items-start gap-3`}>
      <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
        <Icon size={16} className="text-slate-500" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-slate-800 font-semibold text-sm leading-tight">{name}</p>
        {detail && <p className="text-slate-500 text-xs mt-0.5">{detail}</p>}
        <a href={`tel:${phone}`} className="text-blue-600 text-sm font-medium mt-1 block hover:underline">
          {phone}
        </a>
      </div>
    </div>
  );
}

export default function CarePlan() {
  const ep = carePlan.emergencyProtocols;
  const done = carePlan.dailyTasks.filter(t => t.done).length;
  const total = carePlan.dailyTasks.length;
  const pct = Math.round((done / total) * 100);

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Header */}
      <div>
        <h2 className="text-slate-800 font-bold text-xl">Care Plan & Logistics</h2>
        <p className="text-slate-500 text-sm mt-0.5">Clinical routines, prescriptions, and emergency protocols for Mr. Ramesh Sharma</p>
      </div>

      {/* Daily Task Checklist */}
      <div className="glass-card rounded-2xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h3 className="text-slate-800 font-bold text-base">Daily Task Checklist</h3>
            <p className="text-slate-500 text-sm mt-0.5">Tuesday, 15 April 2026</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-slate-800 font-bold text-xl leading-none">{done}/{total}</p>
              <p className="text-slate-400 text-xs">tasks done</p>
            </div>
            <div className="w-12 h-12 flex-shrink-0">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e2e8f0" strokeWidth="3.5" />
                <circle
                  cx="18" cy="18" r="15.9"
                  fill="none"
                  stroke={pct === 100 ? '#10b981' : '#3b82f6'}
                  strokeWidth="3.5"
                  strokeDasharray={`${pct} ${100 - pct}`}
                  strokeDashoffset="0"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 bg-slate-100">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>

        <div className="p-4 space-y-2">
          {carePlan.dailyTasks.map(task => (
            <TaskRow key={task.id} task={task} />
          ))}
        </div>
      </div>

      {/* Prescriptions */}
      <div className="glass-card rounded-2xl border border-slate-200 p-5">
        <div className="flex items-center gap-2 mb-4">
          <Pill size={16} className="text-violet-500" />
          <h3 className="text-slate-800 font-bold text-base">Active Prescriptions</h3>
        </div>
        <div className="space-y-3">
          {carePlan.prescriptions.map((rx, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-violet-50 border border-violet-100">
              <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center flex-shrink-0">
                <Pill size={14} className="text-violet-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-800 font-semibold text-sm leading-tight">{rx.drug}</p>
                <p className="text-violet-700 text-xs mt-0.5 font-medium">{rx.frequency}</p>
                <p className="text-slate-400 text-xs mt-0.5">Prescribed by: {rx.prescribedBy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Protocols */}
      <div className="glass-card rounded-2xl border border-red-100 overflow-hidden">
        <div className="bg-red-50 px-5 py-3 border-b border-red-100 flex items-center gap-2">
          <ShieldCheck size={16} className="text-red-600" />
          <h3 className="text-slate-800 font-bold text-base">Emergency Protocols</h3>
          <span className="ml-auto text-xs text-red-500 font-semibold">Keep accessible</span>
        </div>

        <div className="p-5 space-y-5">

          {/* Preferred Hospital */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Hospital size={12} />Preferred Hospital
            </p>
            <div className="rounded-xl p-4 bg-red-50 border border-red-200">
              <p className="text-slate-800 font-bold text-sm">{ep.preferredHospital.name}</p>
              <div className="flex items-start gap-1.5 mt-1.5">
                <MapPin size={12} className="text-slate-400 mt-0.5 flex-shrink-0" />
                <p className="text-slate-500 text-xs">{ep.preferredHospital.address} · {ep.preferredHospital.distance}</p>
              </div>
              <a href={`tel:${ep.preferredHospital.phone}`} className="flex items-center gap-1.5 mt-2 text-red-600 font-bold text-sm hover:underline">
                <Phone size={13} />
                {ep.preferredHospital.phone}
              </a>
            </div>
          </div>

          {/* Ambulance Services */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <AlertTriangle size={12} />Ambulance Services
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ep.ambulanceServices.map((svc, i) => (
                <ContactCard
                  key={i}
                  name={svc.name}
                  phone={svc.number}
                  detail={svc.type}
                  icon={Phone}
                  accent="border-red-100 bg-red-50"
                />
              ))}
            </div>
          </div>

          {/* Neighbors */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <User size={12} />Neighbor Contacts
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ep.neighborContacts.map((n, i) => (
                <ContactCard
                  key={i}
                  name={n.name}
                  phone={n.phone}
                  detail={n.relation}
                  icon={User}
                  accent="border-slate-200 bg-slate-50"
                />
              ))}
            </div>
          </div>

          {/* Family Contacts */}
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Heart size={12} />Family Contacts
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ep.familyContacts.map((f, i) => (
                <ContactCard
                  key={i}
                  name={f.name}
                  phone={f.phone}
                  detail={null}
                  icon={Heart}
                  accent="border-blue-100 bg-blue-50"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
