import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, Cpu, Wifi, Database, Monitor, Pill,
  Activity, Thermometer, Heart, Eye, Zap, ChevronRight,
  CheckCircle, Clock, Users, Shield
} from 'lucide-react';

// ── Animated terminal line ────────────────────────────────────────────────────
const TerminalLine = ({ text, delay = 0, color = 'text-green-400' }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className={`font-mono text-sm transition-all duration-300 ${color} ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
    >
      {text}
    </div>
  );
};

// ── Sensor badge ──────────────────────────────────────────────────────────────
const SensorBadge = ({ icon: Icon, name, detail, address }) => (
  <div className="group relative flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/8 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300">
    <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 shrink-0">
      <Icon size={18} className="text-blue-400" />
    </div>
    <div>
      <div className="text-white font-bold text-sm">{name}</div>
      <div className="text-gray-400 text-xs mt-0.5">{detail}</div>
      {address && (
        <div className="mt-1.5 inline-block px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
          {address}
        </div>
      )}
    </div>
  </div>
);

// ── Flow step ─────────────────────────────────────────────────────────────────
const FlowStep = ({ step, title, desc, icon: Icon, isLast }) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
        <Icon size={18} className="text-white" />
      </div>
      {!isLast && <div className="w-px flex-1 bg-gradient-to-b from-blue-500/40 to-transparent mt-2" />}
    </div>
    <div className={`pb-6 ${isLast ? '' : ''}`}>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs font-black text-blue-400 tracking-widest">STEP {step}</span>
      </div>
      <div className="text-white font-bold mb-1">{title}</div>
      <div className="text-gray-400 text-sm leading-relaxed">{desc}</div>
    </div>
  </div>
);

// ── DB Table visual ───────────────────────────────────────────────────────────
const DBTable = ({ name, fields }) => (
  <div className="rounded-xl overflow-hidden border border-white/10">
    <div className="px-4 py-2.5 bg-blue-600/20 border-b border-white/10 flex items-center gap-2">
      <Database size={14} className="text-blue-400" />
      <span className="font-mono text-sm font-bold text-blue-300">{name}</span>
    </div>
    <div className="divide-y divide-white/5">
      {fields.map(({ col, type, note }) => (
        <div key={col} className="flex items-center justify-between px-4 py-2.5 hover:bg-white/3 transition-colors">
          <div className="flex items-center gap-3">
            {note === 'PK' && <span className="text-yellow-400 text-xs font-black">PK</span>}
            {note === 'FK' && <span className="text-purple-400 text-xs font-black">FK</span>}
            {!note && <span className="w-5" />}
            <span className="font-mono text-sm text-white">{col}</span>
          </div>
          <span className="font-mono text-xs text-gray-500">{type}</span>
        </div>
      ))}
    </div>
  </div>
);

// ── Portal card ───────────────────────────────────────────────────────────────
const PortalCard = ({ icon: Icon, title, color, fields, accent }) => (
  <div className={`rounded-2xl border ${accent} bg-white/2 overflow-hidden`}>
    <div className={`px-5 py-4 border-b ${accent} flex items-center gap-3`}>
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon size={18} className="text-white" />
      </div>
      <span className="font-black text-white tracking-wide">{title}</span>
    </div>
    <div className="p-5 space-y-2">
      {fields.map((f, i) => (
        <div key={i} className="flex items-center gap-2 text-sm">
          <CheckCircle size={14} className="text-emerald-400 shrink-0" />
          <span className="text-gray-300">{f}</span>
        </div>
      ))}
    </div>
  </div>
);

// ── Main component ────────────────────────────────────────────────────────────
const HealthKioskProject = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = ['overview', 'hardware', 'workflow', 'database', 'portals'];

  return (
    <div className="min-h-screen bg-[#050508] text-white">
      {/* ── Hero ── */}
      <div className="relative overflow-hidden border-b border-white/8">
        {/* Grid bg */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        {/* Glow */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          {/* Back */}
          <button
            onClick={() => onNavigate('projects')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold">Back to Projects</span>
          </button>

          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-widest uppercase mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Healthcare · IoT · Full Stack
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-none mb-4">
                AI-Powered<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Rural Health Kiosk
                </span>
              </h1>
              <p className="text-gray-400 max-w-xl text-base leading-relaxed">
                A low-cost, automated health screening system connecting patients,
                doctors, and pharmacies — designed for rural and low-resource environments.
              </p>
            </div>

            {/* Stat pills */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Users, label: 'Target Users', val: 'Rural Patients' },
                { icon: Cpu, label: 'Controller', val: 'Raspberry Pi 5' },
                { icon: Database, label: 'Database', val: 'Supabase' },
                { icon: Shield, label: 'Protocol', val: 'I2C Bus' },
              ].map(({ icon: Icon, label, val }) => (
                <div key={label} className="px-4 py-3 rounded-xl bg-white/4 border border-white/8 min-w-[140px]">
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
                    <Icon size={12} /> {label}
                  </div>
                  <div className="text-white font-bold text-sm">{val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="sticky top-0 z-30 bg-[#050508]/90 backdrop-blur-xl border-b border-white/8">
        <div className="max-w-6xl mx-auto px-6 flex gap-1 overflow-x-auto py-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-bold capitalize whitespace-nowrap transition-all ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-10 animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-white/8 bg-white/2 space-y-4">
                <h2 className="text-xl font-black text-white">Problem Statement</h2>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Rural communities face critical healthcare access gaps — limited doctors,
                  long travel distances, and overcrowded hospitals. Basic vitals screening
                  requires physical clinic visits, creating bottlenecks in the system.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 space-y-4">
                <h2 className="text-xl font-black text-white">Our Solution</h2>
                <p className="text-gray-400 leading-relaxed text-sm">
                  A self-service kiosk that measures vitals autonomously, uploads them to
                  the cloud, and connects the patient with a remote doctor — all without
                  needing a nurse or technician present.
                </p>
              </div>
            </div>

            {/* System architecture diagram */}
            <div>
              <h2 className="text-xl font-black text-white mb-6">System Architecture</h2>
              <div className="flex flex-wrap items-center justify-center gap-3 p-8 rounded-2xl border border-white/8 bg-white/2">
                {[
                  { label: 'Patient', sublabel: 'Kiosk (RPi 5)', icon: Cpu, color: 'bg-blue-600' },
                  null,
                  { label: 'Supabase', sublabel: 'PostgreSQL Cloud', icon: Database, color: 'bg-purple-600' },
                  null,
                  { label: 'Doctor', sublabel: 'Web Portal', icon: Monitor, color: 'bg-emerald-600' },
                  null,
                  { label: 'Pharmacy', sublabel: 'Web Portal', icon: Pill, color: 'bg-orange-600' },
                ].map((item, i) =>
                  item === null ? (
                    <div key={i} className="flex items-center gap-1 text-gray-600">
                      <ChevronRight size={20} />
                    </div>
                  ) : (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shadow-lg`}>
                        <item.icon size={24} className="text-white" />
                      </div>
                      <div className="text-center">
                        <div className="text-white font-bold text-sm">{item.label}</div>
                        <div className="text-gray-500 text-xs">{item.sublabel}</div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Key features */}
            <div>
              <h2 className="text-xl font-black text-white mb-4">Key Features</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: Zap, title: 'Zero-Staff Operation', desc: 'Fully autonomous vitals collection — no nurse or technician required.' },
                  { icon: Wifi, title: 'Real-Time Cloud Sync', desc: 'Data instantly uploaded to Supabase after each measurement.' },
                  { icon: Shield, title: 'Separated Interfaces', desc: 'Doctor and pharmacy portals are independently scoped for privacy.' },
                  { icon: Clock, title: 'Idle / Wake Cycle', desc: 'Touch-triggered wake with automatic return to sleep mode.' },
                  { icon: Activity, title: 'Multi-Vital Capture', desc: 'SpO₂, heart rate, temperature, and positioning in one session.' },
                  { icon: Cpu, title: 'Modular & Upgradeable', desc: 'Designed for voice input, local language support, and offline mode.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="p-5 rounded-xl border border-white/8 bg-white/2 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all group">
                    <Icon size={22} className="text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-white font-bold text-sm mb-1">{title}</div>
                    <div className="text-gray-500 text-xs leading-relaxed">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* HARDWARE */}
        {activeTab === 'hardware' && (
          <div className="space-y-10 animate-fadeIn">
            <div>
              <h2 className="text-xl font-black text-white mb-2">Hardware Stack</h2>
              <p className="text-gray-400 text-sm mb-6">All sensors communicate over I2C bus, minimizing wiring complexity.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <SensorBadge icon={Cpu} name="Raspberry Pi 5" detail="Main controller — runs all Python sensor logic and handles cloud upload" />
                <SensorBadge icon={Heart} name="MAX30102" detail="SpO₂ & Heart Rate sensor" />
                <SensorBadge icon={Thermometer} name="MLX90614" detail="Non-contact body temperature sensor via I2C" address="I2C: 0x5A" />
                <SensorBadge icon={Eye} name="VL53L0X" detail="Time-of-flight distance sensor for positioning check" />
                <SensorBadge icon={Zap} name="TTP223B" detail="Capacitive touch sensor — system wake trigger" />
                <SensorBadge icon={Monitor} name="20×4 I2C LCD" detail="User-facing display for status messages and vitals" address="I2C: 0x27" />
              </div>
            </div>

            {/* I2C wiring diagram text */}
            <div>
              <h2 className="text-xl font-black text-white mb-4">I2C Bus Map</h2>
              <div className="rounded-2xl border border-white/8 bg-[#0a0a10] p-6 font-mono text-sm overflow-x-auto">
                <TerminalLine text="$ i2cdetect -y 1" delay={0} color="text-gray-500" />
                <TerminalLine text="     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f" delay={200} color="text-gray-500" />
                <TerminalLine text="00:                         -- -- -- -- -- -- -- -- " delay={400} color="text-gray-600" />
                <TerminalLine text="10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- " delay={600} color="text-gray-600" />
                <TerminalLine text="20: -- -- -- -- -- -- -- 27 -- -- -- -- -- -- -- -- " delay={800} color="text-green-400" />
                <TerminalLine text="30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- " delay={1000} color="text-gray-600" />
                <TerminalLine text="50: -- -- -- -- -- -- -- -- -- -- 5a -- -- -- -- -- " delay={1200} color="text-green-400" />
                <TerminalLine text="57: 57 -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- " delay={1400} color="text-blue-400" />
                <TerminalLine text="" delay={1600} />
                <TerminalLine text="✓ 0x27  →  20×4 LCD Display" delay={1800} color="text-green-400" />
                <TerminalLine text="✓ 0x5A  →  MLX90614 Temp Sensor" delay={2000} color="text-green-400" />
                <TerminalLine text="✓ 0x57  →  MAX30102 SpO₂ / HR" delay={2200} color="text-blue-400" />
              </div>
            </div>

            {/* Tech notes */}
            <div className="p-5 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
              <div className="text-yellow-400 font-black text-sm mb-2">⚠ Implementation Notes</div>
              <ul className="space-y-1.5 text-sm text-gray-400">
                <li>• Uses <span className="text-white font-mono">smbus2</span> instead of Adafruit libraries to avoid installation issues on bare Pi OS</li>
                <li>• VL53L0X and MAX30102 libraries must be installed separately via pip</li>
                <li>• MLX90614 must be detected at I2C address <span className="font-mono text-yellow-300">0x5A</span> before boot proceeds</li>
                <li>• Distance threshold for valid positioning: <span className="font-mono text-yellow-300">&lt; 1 cm</span> from sensor face</li>
              </ul>
            </div>
          </div>
        )}

        {/* WORKFLOW */}
        {activeTab === 'workflow' && (
          <div className="space-y-10 animate-fadeIn">
            <div>
              <h2 className="text-xl font-black text-white mb-2">Kiosk Workflow</h2>
              <p className="text-gray-400 text-sm mb-8">End-to-end session from idle state to data upload.</p>
              <div className="max-w-lg">
                <FlowStep step={1} icon={Clock} title="Idle State" desc='LCD displays "SLEEP MODE". System draws minimal power, waiting for a touch event.' />
                <FlowStep step={2} icon={Zap} title="Touch Wake" desc='User touches TTP223B sensor. System wakes and LCD displays "NAMASTE" as a greeting.' />
                <FlowStep step={3} icon={Eye} title="Position Check" desc='VL53L0X measures distance to the user. If > 1 cm, LCD prompts "Come near sensor". Loops until valid position confirmed.' />
                <FlowStep step={4} icon={Activity} title="Vitals Measurement" desc='MLX90614 reads body temperature via I2C (smbus2). MAX30102 captures SpO₂ percentage and heart rate BPM.' />
                <FlowStep step={5} icon={Monitor} title="Display Results" desc='LCD shows all vitals: Temperature, SpO₂, Heart Rate, and Distance reading.' />
                <FlowStep step={6} icon={Users} title="Patient Data Entry" desc='Name, age, and gender collected. Currently via terminal input — designed to be replaced with voice/touchscreen UI.' />
                <FlowStep step={7} icon={Database} title="Cloud Upload" desc='Patient details written to Supabase `patients` table. Vitals written to `vitals` table with a foreign key link.' />
                <FlowStep step={8} icon={CheckCircle} title="Completion" desc='LCD shows "Data sent to DB". System waits 5 seconds, then returns to SLEEP MODE.' isLast />
              </div>
            </div>

            {/* LCD state machine */}
            <div>
              <h2 className="text-xl font-black text-white mb-4">LCD State Sequence</h2>
              <div className="flex flex-wrap gap-2 items-center">
                {[
                  'SLEEP MODE', 'NAMASTE', 'Come near sensor', 'Reading vitals…',
                  'Temp: 37.2°C\nSpO₂: 98%\nHR: 72 bpm', 'Uploading…', 'Data sent to DB', 'SLEEP MODE'
                ].map((msg, i, arr) => (
                  <React.Fragment key={i}>
                    <div className="px-3 py-2 rounded-lg bg-[#0a0a10] border border-white/10 font-mono text-xs text-green-400 whitespace-pre-line text-center">
                      {msg}
                    </div>
                    {i < arr.length - 1 && <ChevronRight size={14} className="text-gray-600 shrink-0" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* DATABASE */}
        {activeTab === 'database' && (
          <div className="space-y-10 animate-fadeIn">
            <div>
              <h2 className="text-xl font-black text-white mb-2">Supabase Schema</h2>
              <p className="text-gray-400 text-sm mb-6">PostgreSQL backend hosted on Supabase with two core tables linked by patient ID.</p>
              <div className="grid md:grid-cols-2 gap-6">
                <DBTable
                  name="patients"
                  fields={[
                    { col: 'id', type: 'uuid', note: 'PK' },
                    { col: 'name', type: 'text', note: '' },
                    { col: 'age', type: 'integer', note: '' },
                    { col: 'gender', type: 'text', note: '' },
                    { col: 'kiosk_id', type: 'text', note: '' },
                    { col: 'created_at', type: 'timestamptz', note: '' },
                  ]}
                />
                <DBTable
                  name="vitals"
                  fields={[
                    { col: 'id', type: 'uuid', note: 'PK' },
                    { col: 'patient_id', type: 'uuid', note: 'FK' },
                    { col: 'spo2', type: 'float', note: '' },
                    { col: 'heartrate', type: 'integer', note: '' },
                    { col: 'temperature', type: 'float', note: '' },
                    { col: 'distance', type: 'float', note: '' },
                    { col: 'recorded_at', type: 'timestamptz', note: '' },
                  ]}
                />
              </div>
            </div>

            {/* Relation note */}
            <div className="p-5 rounded-xl border border-purple-500/20 bg-purple-500/5 flex items-start gap-3">
              <Database size={18} className="text-purple-400 shrink-0 mt-0.5" />
              <div className="text-sm text-gray-400">
                <span className="text-purple-300 font-bold">One-to-Many Relation:</span> A single patient record can have multiple
                vitals entries over time (future revisit support). <span className="font-mono text-purple-300">vitals.patient_id</span> references <span className="font-mono text-purple-300">patients.id</span> with cascade delete.
              </div>
            </div>

            {/* Doctor-side additions */}
            <div>
              <h2 className="text-xl font-black text-white mb-4">Doctor Portal Data Fields</h2>
              <p className="text-gray-400 text-sm mb-4">These fields are filled by the doctor after reviewing auto-populated vitals:</p>
              <div className="flex flex-wrap gap-2">
                {['symptoms', 'diagnosis', 'prescribed_medicines', 'doctor_id', 'consultation_at'].map(f => (
                  <span key={f} className="px-3 py-1.5 rounded-lg bg-white/4 border border-white/10 font-mono text-sm text-white">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PORTALS */}
        {activeTab === 'portals' && (
          <div className="space-y-10 animate-fadeIn">
            <div>
              <h2 className="text-xl font-black text-white mb-2">Web Portals</h2>
              <p className="text-gray-400 text-sm mb-6">Two purpose-built portals with strictly scoped data access for security and simplicity.</p>
              <div className="grid md:grid-cols-2 gap-6">
                <PortalCard
                  icon={Monitor}
                  title="Doctor Portal"
                  color="bg-blue-600"
                  accent="border-blue-500/25"
                  fields={[
                    'Auto-filled vitals from kiosk (SpO₂, HR, Temp)',
                    'Patient name, age, gender',
                    'Symptoms input field',
                    'Diagnosis text area',
                    'Prescribed medicines entry',
                    'Submit → forwards to pharmacy view',
                  ]}
                />
                <PortalCard
                  icon={Pill}
                  title="Pharmacy Portal"
                  color="bg-orange-600"
                  accent="border-orange-500/25"
                  fields={[
                    'Patient name (read-only)',
                    'Age (read-only)',
                    'Symptoms summary (read-only)',
                    'Prescribed medicines list',
                    'No access to raw vitals or diagnosis notes',
                  ]}
                />
              </div>
            </div>

            {/* Future roadmap */}
            <div>
              <h2 className="text-xl font-black text-white mb-4">Planned Upgrades</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { title: 'Voice Input', desc: 'Replace terminal data entry with multilingual voice capture', status: 'Planned' },
                  { title: 'Local Language Support', desc: 'Hindi, Tamil, Bengali — LCD + voice in regional languages', status: 'Planned' },
                  { title: 'Offline-First', desc: 'Queue vitals locally when connectivity drops, sync on restore', status: 'Planned' },
                  { title: 'Touchscreen UI', desc: 'Replace 20×4 LCD with a small touchscreen for guided UX', status: 'Future' },
                  { title: 'Auth for Portals', desc: 'OTP / role-based access for doctor and pharmacy logins', status: 'In Progress' },
                  { title: 'Analytics Dashboard', desc: 'Aggregated health trends per kiosk and region', status: 'Future' },
                ].map(({ title, desc, status }) => (
                  <div key={title} className="p-4 rounded-xl border border-white/8 bg-white/2 hover:border-blue-500/30 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold text-sm">{title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                        status === 'In Progress' ? 'bg-yellow-500/15 text-yellow-400' :
                        status === 'Planned' ? 'bg-blue-500/15 text-blue-400' :
                        'bg-gray-500/15 text-gray-400'
                      }`}>{status}</span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.35s ease both; }
      `}</style>
    </div>
  );
};

export default HealthKioskProject;