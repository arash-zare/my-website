import React from 'react';
import { useLanguage } from '@/i18n';
import { ExternalLink } from 'lucide-react';



const ChatBotBanner = () => (
  <svg
    viewBox="0 0 640 200"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden
    className="w-full h-full"
  >
    <defs>
      <linearGradient id="cbBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0a0f1e" />
        <stop offset="60%" stopColor="#0d2137" />
        <stop offset="100%" stopColor="#071a10" />
      </linearGradient>
      <radialGradient id="cbGlow1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="cbGlow2" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#4ade80" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="cbAccent" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#4ade80" />
      </linearGradient>
      <filter id="cbBlur" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="14" />
      </filter>
      <filter id="cbBlurSm" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="6" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="640" height="200" fill="url(#cbBg)" rx="12" />

    {/* Ambient glow blobs */}
    <ellipse cx="160" cy="100" rx="110" ry="80" fill="url(#cbGlow1)" filter="url(#cbBlur)" />
    <ellipse cx="480" cy="100" rx="100" ry="70" fill="url(#cbGlow2)" filter="url(#cbBlur)" />

    {/* ── LEFT: Ollama local model node ── */}
    {/* Container box */}
    <rect x="28" y="62" width="148" height="76" rx="10"
      fill="#0f172a" stroke="#1e3a5f" strokeWidth="1.2" />
    {/* Top label strip */}
    <rect x="28" y="62" width="148" height="22" rx="10"
      fill="#0e2a47" />
    <rect x="28" y="72" width="148" height="12"
      fill="#0e2a47" />
    {/* Label text */}
    <text x="102" y="77" textAnchor="middle" fill="#94a3b8"
      fontSize="9" fontFamily="monospace" letterSpacing="0.5">
      LOCAL · OLLAMA
    </text>
    {/* Model chip */}
    <rect x="54" y="90" width="96" height="18" rx="5"
      fill="#1e3a5f" stroke="#22d3ee" strokeWidth="0.8" strokeOpacity="0.6" />
    <text x="102" y="103" textAnchor="middle" fill="#7dd3fc"
      fontSize="9.5" fontFamily="monospace" fontWeight="bold">
      llama3 · mistral
    </text>
    {/* Pulsing dot */}
    <circle cx="46" cy="99" r="3.5" fill="#4ade80">
      <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
    </circle>
    {/* Port label */}
    <text x="102" y="128" textAnchor="middle" fill="#475569"
      fontSize="8" fontFamily="monospace">
      :11434
    </text>

    {/* ── CENTER: Chat bubble cluster ── */}
    {/* Bubble 1 (user) — right-aligned */}
    <rect x="256" y="44" width="130" height="28" rx="9"
      fill="#1e3a5f" stroke="#334155" strokeWidth="0.8" />
    <polygon points="378,54 386,58 378,62" fill="#1e3a5f" />
    <text x="321" y="63" textAnchor="middle" fill="#94a3b8"
      fontSize="8.5" fontFamily="sans-serif">
      درباره مهارت‌هام بگو
    </text>

    {/* Bubble 2 (bot) — left-aligned, larger */}
    <rect x="242" y="86" width="160" height="40" rx="9"
      fill="#0f2937" stroke="#22d3ee" strokeWidth="0.8" strokeOpacity="0.5" />
    <polygon points="242,100 234,104 242,108" fill="#0f2937" />
    {/* Typing lines */}
    <rect x="256" y="98" width="90" height="5" rx="2.5"
      fill="#22d3ee" fillOpacity="0.7" />
    <rect x="256" y="108" width="60" height="5" rx="2.5"
      fill="#22d3ee" fillOpacity="0.4">
      <animate attributeName="width" values="60;100;60" dur="2.4s" repeatCount="indefinite" />
    </rect>
    {/* Cursor blink */}
    <rect x="320" y="108" width="2" height="5" rx="1" fill="#4ade80">
      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
    </rect>

    {/* Bubble 3 (user) */}
    <rect x="258" y="140" width="110" height="22" rx="8"
      fill="#1e3a5f" stroke="#334155" strokeWidth="0.8" />
    <polygon points="360,148 368,152 360,156" fill="#1e3a5f" />
    <text x="313" y="155" textAnchor="middle" fill="#94a3b8"
      fontSize="8" fontFamily="sans-serif">
      پروژه‌هام چیه؟
    </text>

    {/* ── Connection line: Ollama → Chat ── */}
    <line x1="176" y1="100" x2="242" y2="104"
      stroke="url(#cbAccent)" strokeWidth="1.2" strokeOpacity="0.5"
      strokeDasharray="4 3">
      <animate attributeName="strokeDashoffset" values="0;-14" dur="1.2s"
        repeatCount="indefinite" />
    </line>

    {/* ── RIGHT: Docker / self-host badge ── */}
    <rect x="464" y="60" width="148" height="80" rx="10"
      fill="#0f172a" stroke="#1e3a5f" strokeWidth="1.2" />
    {/* Header */}
    <rect x="464" y="60" width="148" height="22" rx="10"
      fill="#0a1f0e" />
    <rect x="464" y="70" width="148" height="12" fill="#0a1f0e" />
    <text x="538" y="75" textAnchor="middle" fill="#86efac"
      fontSize="9" fontFamily="monospace" letterSpacing="0.5">
      SELF-HOSTED
    </text>

    {/* Docker whale simplified — body */}
    <rect x="510" y="88" width="36" height="24" rx="5"
      fill="#1e3a5f" stroke="#38bdf8" strokeWidth="0.9" />
    {/* Container stack lines */}
    <rect x="514" y="93" width="28" height="4" rx="1.5" fill="#38bdf8" fillOpacity="0.7" />
    <rect x="514" y="100" width="28" height="4" rx="1.5" fill="#38bdf8" fillOpacity="0.5" />
    <rect x="514" y="107" width="20" height="4" rx="1.5" fill="#38bdf8" fillOpacity="0.3" />

    {/* Labels */}
    <text x="538" y="126" textAnchor="middle" fill="#475569"
      fontSize="8" fontFamily="monospace">
      docker · k8s ready
    </text>

    {/* ── Connection line: Chat → Docker ── */}
    <line x1="402" y1="104" x2="464" y2="104"
      stroke="url(#cbAccent)" strokeWidth="1.2" strokeOpacity="0.5"
      strokeDasharray="4 3">
      <animate attributeName="strokeDashoffset" values="0;-14" dur="1.2s"
        repeatCount="indefinite" />
    </line>

    {/* ── Accent gradient bottom bar ── */}
    <rect x="28" y="185" width="584" height="2" rx="1"
      fill="url(#cbAccent)" opacity="0.6" />
  </svg>
);



const AIAgentStudyBanner = () => (
  <svg
    viewBox="0 0 700 210"
    className="h-full w-full"
    preserveAspectRatio="xMidYMid slice"
    role="img"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {/* ── Backgrounds ── */}
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#06080f" />
        <stop offset="55%"  stopColor="#0c1220" />
        <stop offset="100%" stopColor="#08100a" />
      </linearGradient>

      {/* ── Terminal card ── */}
      <linearGradient id="cardBg" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%"   stopColor="#0d1a14" />
        <stop offset="100%" stopColor="#071009" />
      </linearGradient>

      {/* ── Pipeline track ── */}
      <linearGradient id="track" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#22c55e" stopOpacity="0" />
        <stop offset="30%"  stopColor="#22c55e" stopOpacity="0.6" />
        <stop offset="70%"  stopColor="#3b82f6" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
      </linearGradient>

      {/* ── Glow orbs ── */}
      <radialGradient id="glowGreen" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stopColor="#22c55e" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="glowBlue" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stopColor="#3b82f6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="glowAmber" cx="50%" cy="50%" r="50%">
        <stop offset="0%"   stopColor="#f59e0b" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
      </radialGradient>

      {/* ── Node fills ── */}
      <radialGradient id="nodeG" cx="50%" cy="30%" r="70%">
        <stop offset="0%"   stopColor="#14532d" />
        <stop offset="100%" stopColor="#052e16" />
      </radialGradient>
      <radialGradient id="nodeB" cx="50%" cy="30%" r="70%">
        <stop offset="0%"   stopColor="#1e3a8a" />
        <stop offset="100%" stopColor="#0f172a" />
      </radialGradient>
      <radialGradient id="nodeA" cx="50%" cy="30%" r="70%">
        <stop offset="0%"   stopColor="#78350f" />
        <stop offset="100%" stopColor="#3b1a04" />
      </radialGradient>

      {/* ── Accent bar ── */}
      <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#22c55e" />
        <stop offset="50%"  stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>

      <filter id="soft">
        <feGaussianBlur stdDeviation="12" />
      </filter>
      <filter id="glow2">
        <feGaussianBlur stdDeviation="2.5" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>

      {/* Dashed-flow clip */}
      <clipPath id="pipeClip">
        <rect x="140" y="0" width="420" height="210" />
      </clipPath>

      <marker id="mGreen" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,1.2 L5,3 L0,4.8Z" fill="#4ade80" />
      </marker>
      <marker id="mBlue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,1.2 L5,3 L0,4.8Z" fill="#60a5fa" />
      </marker>
      <marker id="mAmber" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
        <path d="M0,1.2 L5,3 L0,4.8Z" fill="#fbbf24" />
      </marker>
    </defs>

    {/* ══ Background ══ */}
    <rect width="700" height="210" fill="url(#bg)" rx="14" />

    {/* Subtle dot grid */}
    {Array.from({ length: 18 }, (_, col) =>
      Array.from({ length: 6 }, (_, row) => (
        <circle
          key={`d${col}-${row}`}
          cx={col * 42 + 14}
          cy={row * 42 + 12}
          r="0.9"
          fill="#ffffff"
          fillOpacity="0.04"
        />
      ))
    )}

    {/* Ambient glows */}
    <ellipse cx="130" cy="105" rx="120" ry="85" fill="url(#glowGreen)" filter="url(#soft)" />
    <ellipse cx="350" cy="105" rx="130" ry="80" fill="url(#glowBlue)"  filter="url(#soft)" />
    <ellipse cx="570" cy="105" rx="110" ry="80" fill="url(#glowAmber)" filter="url(#soft)" />

    {/* ══ Pipeline track (horizontal rail) ══ */}
    <line x1="145" y1="105" x2="555" y2="105"
      stroke="url(#track)" strokeWidth="2" strokeOpacity="0.5" />

    {/* ══ DATA SOURCE node (left) ══ */}
    <circle cx="125" cy="105" r="34" fill="url(#nodeG)" stroke="#22c55e" strokeWidth="1.5" />
    {/* Database cylinder icon */}
    <ellipse cx="125" cy="94" rx="10" ry="4" fill="none" stroke="#4ade80" strokeWidth="1.2" />
    <line x1="115" y1="94" x2="115" y2="108" stroke="#4ade80" strokeWidth="1.2" />
    <line x1="135" y1="94" x2="135" y2="108" stroke="#4ade80" strokeWidth="1.2" />
    <ellipse cx="125" cy="108" rx="10" ry="4" fill="#052e16" stroke="#4ade80" strokeWidth="1.2" />
    {/* Pulse ring */}
    <circle cx="125" cy="105" r="34" fill="none" stroke="#22c55e" strokeWidth="1.2">
      <animate attributeName="r"            values="34;50;34"  dur="3s"   repeatCount="indefinite" />
      <animate attributeName="stroke-opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
    </circle>
    <text x="125" y="130" textAnchor="middle" fill="#86efac"
      fontSize="7.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.6">DATA</text>

    {/* DATA → AGENT arrow */}
    <path d="M159 105 L296 105"
      fill="none" stroke="#4ade80" strokeWidth="1.4" strokeOpacity="0.7"
      strokeDasharray="5 3" markerEnd="url(#mGreen)">
      <animate attributeName="strokeDashoffset" values="0;-16" dur="1.2s" repeatCount="indefinite" />
    </path>
    {/* Packet dot */}
    <circle cx="0" cy="105" r="4" fill="#4ade80" fillOpacity="0.9" filter="url(#glow2)">
      <animateMotion dur="1.2s" repeatCount="indefinite" path="M159,105 L296,105" />
    </circle>

    {/* ══ AGENT CORE (center) ══ */}
    {/* Outer hex-ish ring */}
    <circle cx="350" cy="105" r="50" fill="none" stroke="#3b82f6" strokeWidth="0.8" strokeOpacity="0.3"
      strokeDasharray="4 6">
      <animateTransform attributeName="transform" type="rotate"
        values="0 350 105;360 350 105" dur="18s" repeatCount="indefinite" />
    </circle>
    <circle cx="350" cy="105" r="38" fill="url(#nodeB)" stroke="#3b82f6" strokeWidth="1.8" />
    {/* Brain/circuit icon */}
    <rect x="337" y="96" width="26" height="18" rx="4"
      fill="none" stroke="#60a5fa" strokeWidth="1.2" />
    <line x1="344" y1="96"  x2="344" y2="93"  stroke="#60a5fa" strokeWidth="1"  />
    <line x1="350" y1="96"  x2="350" y2="91"  stroke="#93c5fd" strokeWidth="1"  />
    <line x1="356" y1="96"  x2="356" y2="93"  stroke="#60a5fa" strokeWidth="1"  />
    <line x1="344" y1="114" x2="344" y2="117" stroke="#60a5fa" strokeWidth="1"  />
    <line x1="350" y1="114" x2="350" y2="119" stroke="#93c5fd" strokeWidth="1"  />
    <line x1="356" y1="114" x2="356" y2="117" stroke="#60a5fa" strokeWidth="1"  />
    {/* internal LED row */}
    {[342, 350, 358].map((x, i) => (
      <circle key={i} cx={x} cy="105" r="2.5" fill="#93c5fd" fillOpacity="0.85">
        <animate attributeName="fill-opacity"
          values="0.85;0.2;0.85" dur={`${1.1 + i * 0.3}s`} repeatCount="indefinite" />
      </circle>
    ))}
    <text x="350" y="145" textAnchor="middle" fill="#93c5fd"
      fontSize="7.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.6">AGENT</text>

    {/* AGENT → TOOLS arrow */}
    <path d="M388 105 L521 105"
      fill="none" stroke="#60a5fa" strokeWidth="1.4" strokeOpacity="0.7"
      strokeDasharray="5 3" markerEnd="url(#mBlue)">
      <animate attributeName="strokeDashoffset" values="0;-16" dur="1.0s" repeatCount="indefinite" />
    </path>
    <circle cx="0" cy="105" r="4" fill="#60a5fa" fillOpacity="0.9" filter="url(#glow2)">
      <animateMotion dur="1.0s" repeatCount="indefinite" path="M388,105 L521,105" />
    </circle>

    {/* ══ TOOLS node (right) ══ */}
    <circle cx="555" cy="105" r="34" fill="url(#nodeA)" stroke="#f59e0b" strokeWidth="1.5" />
    {/* Wrench icon */}
    <path d="M548 97 Q555 91 562 97 L560 101 L558 99 L550 107 L548 105 L556 97 Z"
      fill="none" stroke="#fbbf24" strokeWidth="1.3" strokeLinejoin="round" />
    <circle cx="554" cy="112" r="3" fill="none" stroke="#fbbf24" strokeWidth="1.2" />
    {/* Pulse ring */}
    <circle cx="555" cy="105" r="34" fill="none" stroke="#f59e0b" strokeWidth="1.2">
      <animate attributeName="r"              values="34;50;34"  dur="2.8s"  repeatCount="indefinite" />
      <animate attributeName="stroke-opacity" values="0.4;0;0.4"  dur="2.8s" repeatCount="indefinite" />
    </circle>
    <text x="555" y="130" textAnchor="middle" fill="#fcd34d"
      fontSize="7.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.6">TOOLS</text>

    {/* TOOLS → AGENT feedback (arc above) */}
    <path d="M545 72 Q450 30 350 68"
      fill="none" stroke="#fbbf24" strokeWidth="1.2" strokeOpacity="0.5"
      strokeDasharray="4 4" markerEnd="url(#mAmber)">
      <animate attributeName="strokeDashoffset" values="0;-16" dur="1.6s" repeatCount="indefinite" />
    </path>

    {/* ══ Terminal card (bottom-left label) ══ */}
    <rect x="14" y="160" width="148" height="36" rx="6"
      fill="url(#cardBg)" stroke="#14532d" strokeWidth="0.9" />
    <rect x="14" y="160" width="148" height="3" rx="1.5" fill="#22c55e" opacity="0.5" />
    <text x="22" y="173" fill="#4ade80" fontSize="6.5" fontFamily="monospace">
      <tspan>$ agent.run(pipeline)</tspan>
    </text>
    <text x="22" y="185" fill="#86efac" fontSize="6" fontFamily="monospace" fillOpacity="0.75">
      <tspan>✓ task completed  [3 steps]</tspan>
    </text>
    {/* Blinking cursor */}
    <rect x="143" y="180" width="5" height="7" fill="#4ade80">
      <animate attributeName="fill-opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
    </rect>

    {/* ══ Step labels below pipeline ══ */}
    {[
      { x: 125, label: "ingest" },
      { x: 350, label: "reason" },
      { x: 555, label: "execute" },
    ].map(({ x, label }) => (
      <g key={label}>
        <rect x={x - 22} y="153" width="44" height="12" rx="3"
          fill="#0a0f1a" stroke="#1e3a5f" strokeWidth="0.7" />
        <text x={x} y="162" textAnchor="middle" fill="#64748b"
          fontSize="6.5" fontFamily="monospace" letterSpacing="0.4">{label}</text>
      </g>
    ))}

    {/* ══ Bottom accent bar ══ */}
    <rect x="16" y="202" width="668" height="2.5" rx="1.25"
      fill="url(#accent)" opacity="0.55" />
  </svg>
);


const inProgressMeta = [
  { Banner: AIAgentStudyBanner },
  { Banner: ChatBotBanner },
];

const InProgress = () => {
  const { t } = useLanguage();

  const items = t.inProgress.items.map((item, index) => ({
    ...item,
    ...inProgressMeta[index],
  }));

return (
  <section id="in-progress" className="bg-gray-50 py-20">
    <div className="container mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-900">{t.inProgress.heading}</h2>
        <div className="mx-auto mb-6 h-1 w-24 bg-blue-600" />
        <p className="mx-auto max-w-3xl text-lg text-gray-600">{t.inProgress.subheading}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {items.map((item, index) => {
          const Banner = item.Banner;
          return (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-32 w-full">
                <Banner />
              </div>

              <div className="p-6">
                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500"></span>
                  </span>
                  {t.inProgress.statusLabel}
                </span>

                <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">{item.description}</p>

                {item.tags && item.tags.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink size={13} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
};
export default InProgress;
