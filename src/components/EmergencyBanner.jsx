import { AlertTriangle, X, Phone, MapPin } from 'lucide-react';

export default function EmergencyBanner({ onDismiss }) {
  return (
    <div className="emergency-banner fixed inset-x-0 top-0 z-50 bg-red-600 text-white shadow-2xl">
      <div className="max-w-full px-6 py-4">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
              <AlertTriangle size={22} className="text-white" />
            </div>
            <div className="min-w-0">
              <p className="font-bold text-lg leading-tight">
                🚨 CRITICAL ALERT: Fall Detected / Abnormal Vitals
              </p>
              <p className="text-red-100 text-sm mt-0.5">
                Triggered at 6:42 PM · Mr. Ramesh Sharma · C-14, Sector 18, Noida
              </p>
            </div>
          </div>
          <button
            onClick={onDismiss}
            className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            aria-label="Dismiss alert"
          >
            <X size={16} />
          </button>
        </div>

        {/* Status row */}
        <div className="mt-3 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white/15 rounded-lg px-3 py-2">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-sm font-semibold">Area Care Manager Dispatched</span>
            <span className="text-red-200 text-xs">· Dr. Priya Nair en route</span>
          </div>
          <div className="flex items-center gap-2 bg-white/15 rounded-lg px-3 py-2">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-sm font-semibold">Ambulance on Standby</span>
            <span className="text-red-200 text-xs">· Medulance notified</span>
          </div>
          <div className="flex items-center gap-2 bg-white/15 rounded-lg px-3 py-2">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-sm font-semibold">Companion Anjali with Elder</span>
            <span className="text-red-200 text-xs">· Situation being monitored</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-3 flex flex-wrap gap-2">
          <button className="flex items-center gap-2 bg-white text-red-600 font-bold text-sm px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
            <Phone size={14} />
            Call Dr. Priya Nair
          </button>
          <button className="flex items-center gap-2 bg-white/20 text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
            <MapPin size={14} />
            View on Map
          </button>
          <button
            onClick={onDismiss}
            className="flex items-center gap-2 bg-white/10 text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-white/20 transition-colors ml-auto"
          >
            Dismiss Simulation
          </button>
        </div>
      </div>

      {/* Blinking progress bar */}
      <div className="h-1 bg-red-800">
        <div className="h-full bg-white/60 animate-pulse" style={{ width: '60%' }} />
      </div>
    </div>
  );
}
