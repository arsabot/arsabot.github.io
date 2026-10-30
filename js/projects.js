/**
 * Projects Data & Showcase Controller - Bilingual ES / EN Support with Real Screenshot Previews
 */
import { getCurrentLang, onLanguageChange } from './i18n.js?v=5.3';

export const projectsData = [
  {
    "id": "transcribely",
    "title": {
      "es": "Transcribely — Accesibilidad & Traducción Simultánea con IA (Nerdearla Vibeathon)",
      "en": "Transcribely — Real-Time Accessibility & AI Translation (Nerdearla Vibeathon)"
    },
    "category": "fullstack",
    "categoryLabel": {
      "es": "AI / Accessibility (Vibeathon 2026)",
      "en": "AI / Accessibility (Vibeathon 2026)"
    },
    "shortDesc": {
      "es": "Plataforma open source desarrollada para el Nerdearla Vibeathon 2026. Transcripción local en el navegador con WebGPU (Whisper & Nemotron), traducción simultánea bidireccional vía Gemini Live API (< 700ms), speech-biasing acústico y distribución multi-sala.",
      "en": "Open-source platform built for Nerdearla Vibeathon 2026. Client-side WebGPU transcription (Whisper & Nemotron), instant Gemini Live API bidi translation (< 700ms), phonetic speech-biasing, and multi-room distribution."
    },
    "tags": [
      "Python 3.12",
      "FastAPI",
      "Gemini Live API",
      "WebGPU",
      "Whisper & Nemotron",
      "WebSockets",
      "Docker",
      "Redis"
    ],
    "githubUrl": "https://github.com/arsabot/nerdearla-live-transcribe",
    "liveUrl": "https://github.com/arsabot/nerdearla-live-transcribe",
    "image": "assets/projects/transcribely.webp",
    "gallery": [
      "assets/projects/transcribely.webp",
      "assets/projects/transcribely-white.webp"
    ],
    "accentColor": "#10b981",
    "icon": "mic",
    "highlights": {
      "es": [
        "Inferencia local en el navegador del orador vía WebGPU (Whisper & Nemotron), eliminando costos de GPU en el servidor y protegiendo la privacidad del audio.",
        "Traducción simultánea en < 700ms mediante conexión bidireccional por WebSocket a Gemini Live API con conmutación por error automática.",
        "Motor fonético y acústico de Speech-Biasing para corregir nombres técnicos y términos complejos de Nerdearla en tiempo real.",
        "Arquitectura de sesiones multi-sala aisladas para distribución en pantallas gigantes, OBS Studio y teléfonos de asistentes."
      ],
      "en": [
        "Local client-side WebGPU inference (Whisper & Nemotron) in the speaker browser, eliminating server GPU costs and safeguarding audio privacy.",
        "Sub-700ms simultaneous translation via full-duplex WebSocket connection to Gemini Live API with automatic fallback.",
        "Phonetic and acoustic Speech-Biasing engine correcting technical jargon and Nerdearla brand terms in real time.",
        "Isolated multi-room session architecture for audience smartphones, stage giant displays, and OBS Studio streaming."
      ]
    },
    "architecture": "Audio Entrada (WebGPU Whisper / Nemotron) ───[Full-Duplex WebSockets]───> Backend FastAPI (Python 3.12) ───[Gemini Live API]───> Subtítulos & Pantallas Multi-Sala"
  },
  {
    "id": "startap",
    "title": {
      "es": "StarTap — Plataforma SaaS de Tarjetas NFC & Reseñas Google",
      "en": "StarTap — NFC Review Cards & Dynamic QR SaaS Platform"
    },
    "category": "fullstack",
    "categoryLabel": {
      "es": "SaaS / NFC Tech",
      "en": "SaaS / NFC Tech"
    },
    "shortDesc": {
      "es": "Plataforma SaaS para gestión y redirección ultrarrápida de tarjetas físicas NFC y códigos QR inteligentes para captación de Google Reviews en locales comerciales, con analítica en tiempo real.",
      "en": "SaaS platform managing physical NFC cards and dynamic QR codes for high-speed Google Review collection with edge routing and real-time business telemetry."
    },
    "tags": [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Supabase",
      "Cloudflare Workers",
      "Tailwind CSS",
      "PostgreSQL"
    ],
    "githubUrl": "https://github.com/arsabot/startap",
    "liveUrl": "https://arsabot.github.io/#projects",
    "image": "assets/projects/startap.webp",
    "gallery": [
      "assets/projects/startap.webp",
      "assets/projects/startap-card.webp",
      "assets/projects/startap-layers.webp"
    ],
    "accentColor": "#eab308",
    "icon": "smartphone",
    "highlights": {
      "es": [
        "Redirección ultrarrápida a perfiles de Google Reviews impulsada por Cloudflare Workers en el borde (< 30ms).",
        "Panel de control en Next.js 15 con métricas de escaneos, conversion rate por sucursal y geolocalización.",
        "Mapeo dinámico de tarjetas NFC y códigos QR físicos con actualización remota instantánea sin reimpresión.",
        "Base de datos relacional en Supabase PostgreSQL con Row Level Security para aislamiento multi-tenant de comercios."
      ],
      "en": [
        "Ultra-low-latency edge redirection to Google Review profiles powered by Cloudflare Workers (< 30ms).",
        "Next.js 15 analytics dashboard tracking scan counts, branch conversion rates, and geolocation metrics.",
        "Dynamic NFC card and QR mapping enabling remote target URL updates without reprinting physical hardware.",
        "Supabase PostgreSQL multi-tenant architecture with Row Level Security isolating merchant data."
      ]
    },
    "architecture": "Tarjeta NFC / QR Físico ───[Cloudflare Worker Edge <30ms]───> Google Maps Review Page ───[Async Telemetry]───> Supabase PostgreSQL ───> Next.js 15 Dashboard"
  },
  {
    "id": "electium",
    "title": {
      "es": "Electium — Sistema Electoral Digital & Auditoría Criptográfica",
      "en": "Electium — Digital Election Platform & Cryptographic Audit"
    },
    "category": "fullstack",
    "categoryLabel": {
      "es": "GovTech / Cryptography",
      "en": "GovTech / Cryptography"
    },
    "shortDesc": {
      "es": "Plataforma multi-inquilino de sufragio digital para universidades, sindicatos y colegios profesionales con padrón depurado, escrutinio en vivo y recibos electorales criptográficos verificables.",
      "en": "Multi-tenant digital voting and election SaaS platform for universities, unions, and organizations with verified voter rolls, real-time tallying, and tamper-proof cryptographic receipts."
    },
    "tags": [
      "Next.js 14",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Docker Compose",
      "Tailwind CSS"
    ],
    "githubUrl": "https://github.com/arsabot/Electium",
    "liveUrl": "https://arsabot.github.io/#projects",
    "image": "assets/projects/electium.webp",
    "gallery": [
      "assets/projects/electium.webp"
    ],
    "accentColor": "#2563eb",
    "icon": "shield-check",
    "highlights": {
      "es": [
        "Emisión de votos anónimos con recibos criptográficos SHA-256 / HMAC para auditoría individual y fiscalización pública.",
        "Gestión de padrones con importación masiva de votantes por CSV y generación de credenciales de un solo uso.",
        "Panel de escrutinio en tiempo real con WebSockets para visualización instantánea del conteo al cierre de comicios.",
        "Arquitectura Dockerizada en microservicios con PostgreSQL, Prisma ORM y middleware de autorización RBAC estricto."
      ],
      "en": [
        "Anonymous balloting with SHA-256 / HMAC cryptographic verification receipts for individual voter auditing.",
        "Voter roll management supporting bulk CSV voter import and single-use cryptographic credentials.",
        "Real-time WebSocket-powered election night tallying dashboard displaying instant live results.",
        "Dockerized microservices architecture with PostgreSQL, Prisma ORM, and strict role-based access control (RBAC)."
      ]
    },
    "architecture": "Frontend Votante / Admin (Next.js 14) ───[REST / WebSockets]───> Node.js Express Backend ───[Prisma ORM]───> PostgreSQL (Tamper-Proof Audit Trail)"
  },
  {
    "id": "job-agent",
    "title": {
      "es": "JobAgent AI — Agente Autónomo de Empleos & CV Studio",
      "en": "JobAgent AI — Autonomous Job Agent & Tailored CV Studio"
    },
    "category": "fullstack",
    "categoryLabel": {
      "es": "Autonomous AI / Recruiter",
      "en": "Autonomous AI / Recruiter"
    },
    "shortDesc": {
      "es": "Agente autónomo de Inteligencia Artificial que raspa ofertas de empleo en LinkedIn, Indeed y Bumeran, evalúa el fit técnico con Google Gemini AI y genera currículums ATS a medida en tiempo real.",
      "en": "Autonomous AI agent that scrapes job boards (LinkedIn, Indeed, Bumeran), computes semantic fit scores via Google Gemini AI, and generates tailored ATS resumes in real time."
    },
    "tags": [
      "TypeScript",
      "Node.js",
      "Google Gemini AI",
      "Playwright",
      "Cheerio",
      "SQLite",
      "Express",
      "Tailwind CSS"
    ],
    "githubUrl": "https://github.com/arsabot/job-agent",
    "liveUrl": "https://arsabot.github.io/#projects",
    "image": "assets/projects/job-agent.webp",
    "gallery": [
      "assets/projects/job-agent.webp"
    ],
    "accentColor": "#f97316",
    "icon": "bot",
    "highlights": {
      "es": [
        "Scraping multi-portal automatizado con rotación de user-agents y extracción estructurada con Cheerio y Playwright.",
        "Evaluación semántica de compatibilidad laboral (0 a 100%) utilizando Google Gemini AI con prompts de reclutador senior.",
        "Generador dinámico de currículums ATS optimizados en HTML/PDF resaltando proyectos y habilidades específicas para la vacante.",
        "Dashboard interactivo en Node.js y SQLite para monitoreo continuo de postulaciones, estados y métricas de conversión."
      ],
      "en": [
        "Automated multi-board scraping pipeline with user-agent rotation and structured parsing via Cheerio and Playwright.",
        "Semantic job fit scoring (0 to 100%) powered by Google Gemini AI with senior recruiter prompting frameworks.",
        "Dynamic ATS-tailored resume generation engine emphasizing relevant experience and target tech keywords.",
        "Interactive Express & SQLite intelligence dashboard tracking application lifecycles and interview conversions."
      ]
    },
    "architecture": "Scrapers (Playwright / Cheerio) ───> Gemini AI Semantic Matcher ───> ATS Resume Generator ───> SQLite / Intelligence Dashboard"
  },
  {
    "id": "lingua",
    "title": {
      "es": "Lingua — Tutora Virtual de Idiomas con AWS Serverless & Bedrock",
      "en": "Lingua — Virtual AI Language Tutor with AWS Serverless & Bedrock"
    },
    "category": "fullstack",
    "categoryLabel": {
      "es": "Cloud AI / EdTech",
      "en": "Cloud AI / EdTech"
    },
    "shortDesc": {
      "es": "Tutor de idiomas conversacional impulsado por Amazon Bedrock (Claude 3.5 Haiku) sobre AWS Serverless. Incluye evaluación diagnóstica de nivel CEFR (A1-C2), respuestas en streaming NDJSON y síntesis de voz en 4 idiomas.",
      "en": "Conversational language tutor powered by Amazon Bedrock (Claude 3.5 Haiku) on AWS Serverless. Features automatic CEFR level diagnostics (A1-C2), real-time NDJSON streaming, and 4-language voice synthesis."
    },
    "tags": [
      "Node.js 22",
      "AWS Lambda",
      "Amazon Bedrock (Claude)",
      "AWS SAM",
      "API Gateway",
      "DynamoDB",
      "Web Speech API"
    ],
    "githubUrl": "https://github.com/arsabot/lingua",
    "liveUrl": "https://github.com/arsabot/lingua",
    "image": "assets/projects/lingua.webp",
    "gallery": [
      "assets/projects/lingua.webp"
    ],
    "accentColor": "#8b5cf6",
    "icon": "headphones",
    "highlights": {
      "es": [
        "Arquitectura 100% Serverless en AWS con Lambda (Node.js 22 arm64) y API Gateway con streaming de respuestas token por token.",
        "Integración con Claude 3.5 Haiku a través de Amazon Bedrock para razonamiento pedagógico y corrección en tiempo real.",
        "Test de nivel automatizado (A1 a C2) con adaptación contextual de preguntas y persistencia de perfil en DynamoDB.",
        "Soporte de audio bidireccional mediante Web Speech API para inglés, español, francés e italiano."
      ],
      "en": [
        "100% AWS Serverless architecture with Lambda (Node.js 22 arm64) and API Gateway with token-by-token response streaming.",
        "Claude 3.5 Haiku integration via Amazon Bedrock for pedagogical feedback and conversational fluency.",
        "Automated diagnostic CEFR testing (A1 to C2) dynamically adapting difficulty with DynamoDB profile storage.",
        "Two-way audio interaction utilizing Web Speech API with 4-language native accent selection."
      ]
    },
    "architecture": "Browser Client (Speech API) ───[NDJSON Streaming]───> API Gateway ───> AWS Lambda (arm64) ───[Bedrock Claude]───> DynamoDB Persistent Profile"
  },
  {
    "id": "vocalizar-ai",
    "title": {
      "es": "VocalizAR AI — Clonación de Voz Neuronal & Teleprompter en Vivo",
      "en": "VocalizAR AI — Neural Voice Cloning & Live Teleprompter"
    },
    "category": "fullstack",
    "categoryLabel": {
      "es": "Audio AI / Desktop App",
      "en": "Audio AI / Desktop App"
    },
    "shortDesc": {
      "es": "Aplicación de escritorio para síntesis de voz neuronal Zero-Shot y teleprompter sincronizado palabra por palabra impulsado por CosyVoice 3 y Faster-Whisper Large-v3, 100% offline y acelerado por GPU.",
      "en": "Desktop application for Zero-Shot neural voice cloning and word-by-word synchronized live teleprompter powered by CosyVoice 3 and Faster-Whisper Large-v3, 100% offline and GPU-accelerated."
    },
    "tags": [
      "Python 3.10+",
      "PyTorch",
      "CosyVoice 3",
      "Faster-Whisper Large-v3",
      "CUDA FP16",
      "FastAPI",
      "Phase Vocoder"
    ],
    "githubUrl": "https://github.com/arsabot/VocalizAR-AI",
    "liveUrl": "https://github.com/arsabot/VocalizAR-AI",
    "image": "assets/projects/vocalizar-ai.webp",
    "gallery": [
      "assets/projects/vocalizar-ai.webp"
    ],
    "accentColor": "#06b6d4",
    "icon": "radio",
    "highlights": {
      "es": [
        "Clonación neuronal instantánea a partir de fragmentos de audio de 3 a 10 segundos sin reentrenamiento mediante CosyVoice 3.",
        "Teleprompter sincronizado palabra por palabra en vivo usando Faster-Whisper Large-v3 para técnica de shadowing y accesibilidad.",
        "Algoritmo Phase Vocoder (TimeStretch) para ralentizar o acelerar el audio sin distorsión de tono (\"efecto ardilla\").",
        "Ejecución 100% offline y privada con aceleración de inferencia local en NVIDIA CUDA FP16."
      ],
      "en": [
        "Instant Zero-Shot voice cloning from 3-10 second audio samples without model retraining using CosyVoice 3.",
        "Real-time word-by-word highlighted teleprompter driven by Faster-Whisper Large-v3 for language shadowing and accessibility.",
        "Phase Vocoder TimeStretch algorithm allowing smooth playback speed adjustments without pitch distortion.",
        "100% offline and private execution leveraging local NVIDIA CUDA FP16 tensor core acceleration."
      ]
    },
    "architecture": "Audio / OCR Ingestion ───> CosyVoice 3 Zero-Shot Model (CUDA FP16) ───> Faster-Whisper Alignment ───> Live Karaoke Teleprompter"
  },
  {
    "id": "invitely",
    "title": {
      "es": "Invitely — Plataforma de Invitaciones Digitales Interactivas",
      "en": "Invitely — Interactive Digital Invitations Platform"
    },
    "category": "fullstack",
    "categoryLabel": {
      "es": "SaaS / EventTech",
      "en": "SaaS / EventTech"
    },
    "shortDesc": {
      "es": "Plataforma integral para crear, personalizar y enviar invitaciones interactivas con RSVP en tiempo real, gestión de listas de invitados y animaciones fluidas.",
      "en": "Comprehensive platform to create, customize, and send interactive invitations with real-time RSVP, guest list management, and fluid animations."
    },
    "tags": [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "PostgreSQL",
      "Realtime RSVP",
      "Framer Motion"
    ],
    "githubUrl": "https://github.com/arsabot/invitely",
    "liveUrl": "https://invitely-delta-dun.vercel.app/login",
    "image": "assets/projects/invitely.webp",
    "gallery": [
      "assets/projects/invitely.webp",
      "assets/projects/invitely-2.webp",
      "assets/projects/invitely-3.webp"
    ],
    "accentColor": "#a855f7",
    "icon": "sparkles",
    "highlights": {
      "es": [
        "Editor visual en tiempo real para personalización de plantillas de eventos, tipografías y paletas.",
        "Sistema de confirmación de asistencia (RSVP) con sincronización en vivo y estadísticas de invitados.",
        "Integración con Supabase para almacenamiento de fotos de eventos y políticas de acceso por evento.",
        "Diseño responsive optimizado para visualización móvil instantánea desde enlaces de WhatsApp e Instagram."
      ],
      "en": [
        "Real-time visual editor for event template customization, typography, and color schemes.",
        "Live RSVP attendance confirmation system with real-time analytics and guest management.",
        "Supabase integration for media asset storage, database RLS policies, and secure auth.",
        "Responsive mobile-first experience optimized for direct access from WhatsApp and social shares."
      ]
    },
    "architecture": "Cliente Next.js 15 (App Router + TypeScript) ───[Server Actions / Realtime]───> Supabase BaaS (PostgreSQL + RLS) ───> CDN Media Storage"
  },
  {
    "id": "merlo-participa",
    "title": {
      "es": "Merlo Participa — Portal Vecinal & Gestión Ciudadana",
      "en": "Merlo Participa — Civic Engagement & Neighborhood Portal"
    },
    "category": "fullstack",
    "categoryLabel": {
      "es": "CivicTech / SaaS",
      "en": "CivicTech / SaaS"
    },
    "shortDesc": {
      "es": "Plataforma cívica para reporte y seguimiento de problemáticas barriales, reclamos urbanos con mapa interactivo, código de tracking y panel administrativo de moderación municipal.",
      "en": "Civic platform for reporting and tracking urban issues, neighborhood proposals with interactive maps, tracking codes, and municipal moderation admin panel."
    },
    "tags": [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "Leaflet",
      "Tailwind CSS v4",
      "Zod",
      "PostgreSQL"
    ],
    "githubUrl": "https://github.com/arsabot/merlo-participa",
    "liveUrl": "https://merlo-participa.vercel.app",
    "image": "assets/projects/merlo-participa.webp",
    "gallery": [
      "assets/projects/merlo-participa.webp"
    ],
    "accentColor": "#0ea5e9",
    "icon": "map-pin",
    "highlights": {
      "es": [
        "Sistema de reclamos ciudadanos con categorización dinámica (bacheo, luminarias, arbolado, residuos, seguridad vial) y subida de evidencias.",
        "Mapeo interactivo con Leaflet & OpenStreetMap para georreferenciación precisa de incidentes en el partido de Merlo.",
        "Generación de código de seguimiento único alfanumérico para consulta de estados en tiempo real sin fricción.",
        "Panel administrativo de moderación con filtros avanzados, auditoría de reclamos, cambio de estado y control de visibilidad pública."
      ],
      "en": [
        "Citizen issue reporting system with dynamic categorization (potholes, lighting, trees, waste, traffic) and evidence uploads.",
        "Interactive Leaflet & OpenStreetMap mapping for precise geolocation of urban incidents across Merlo.",
        "Unique alphanumeric tracking code generation for frictionless real-time status inquiry and monitoring.",
        "Admin moderation dashboard with advanced filtering, claim auditing, state transitions, and public visibility control."
      ]
    },
    "architecture": "Cliente Next.js 16 (App Router + React 19 + Leaflet) ───[REST / Supabase Client]───> Supabase PostgreSQL (RLS) ───> Admin & Citizen Dashboard"
  },
  {
    "id": "worksy",
    "title": {
      "es": "Worksy — Plataforma de Matching Laboral con Swipe",
      "en": "Worksy — Swipe-Based Tech Job Matching Platform"
    },
    "category": "fullstack",
    "categoryLabel": {
      "es": "HRTech / SaaS",
      "en": "HRTech / SaaS"
    },
    "shortDesc": {
      "es": "Plataforma interactiva de reclutamiento tech inspirada en swipe con filtros avanzados, chat en tiempo real, validación con Zod y matching instantáneo de entrevistas.",
      "en": "Interactive tech recruiting platform inspired by swipe mechanics featuring smart filters, real-time chat, Zod validation, and instant interview matching."
    },
    "tags": [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Supabase SSR",
      "Framer Motion",
      "Tailwind CSS",
      "Canvas Confetti"
    ],
    "githubUrl": "https://github.com/arsabot/worksy",
    "liveUrl": "https://arsabot.github.io/#projects",
    "image": "assets/projects/worksy.webp",
    "gallery": [
      "assets/projects/worksy.webp",
      "assets/projects/worksy-2.webp"
    ],
    "accentColor": "#ec4899",
    "icon": "sparkles",
    "highlights": {
      "es": [
        "Física de arrastre y swipe interactivo con rotación proporcional desarrollada en Framer Motion.",
        "Celebración instantánea de match con efectos dinámicos de confeti y animaciones fluidas a 60fps.",
        "Esquema relacional en Supabase PostgreSQL con 17 tablas normalizadas y Row Level Security (RLS).",
        "Panel dual para candidatos y empresas con filtrado por stacks, seniority y modalidades de trabajo."
      ],
      "en": [
        "Interactive card swipe gesture physics with proportional rotation built with Framer Motion.",
        "Instant match celebration with dynamic particle effects and silky smooth 60fps animations.",
        "Normalized Supabase PostgreSQL relational schema with 17 tables and strict RLS policies.",
        "Dual portal experience for candidates and recruiters with stack, seniority, and remote filters."
      ]
    },
    "architecture": "Next.js 15 (Framer Motion + SSR) ───[Supabase SSR Client]───> PostgreSQL (17 Tables + RLS) ───> Instant Match Engine"
  },
  {
    "id": "parkia",
    "title": {
      "es": "PARKIA — Plataforma Inteligente de Reserva de Estacionamiento",
      "en": "PARKIA — Smart Parking Reservation Platform"
    },
    "category": "fullstack",
    "categoryLabel": {
      "es": "Smart Mobility",
      "en": "Smart Mobility"
    },
    "shortDesc": {
      "es": "Solución integral de movilidad urbana para conductores y dueños de estacionamientos con geolocalización, reserva en tiempo real y panel analítico.",
      "en": "Comprehensive urban mobility solution for drivers and parking operators featuring geolocation, real-time reservations, and business analytics."
    },
    "tags": [
      "React 19",
      "TypeScript",
      "Django 5",
      "Django REST",
      "Leaflet",
      "Recharts",
      "Tailwind CSS",
      "JWT"
    ],
    "githubUrl": "https://github.com/arsabot/parkia",
    "liveUrl": "https://arsabot.github.io/#projects",
    "image": "assets/projects/parkia.webp",
    "gallery": [
      "assets/projects/parkia.webp",
      "assets/projects/parkia-2.webp"
    ],
    "accentColor": "#38bdf8",
    "icon": "car",
    "highlights": {
      "es": [
        "Mapa interactivo con Leaflet & CartoDB con renderizado de pines de tarifas en tiempo real.",
        "Motor de reservas con validación de no-superposición de horarios y emisión de ticket único PK-XXXXXX.",
        "Panel administrativo para garajistas con métricas de ocupación, ingresos y gráficos Recharts.",
        "Backend en Django 5 con autenticación JWT, roles diferenciados (conductor / admin) y suite de 13 tests."
      ],
      "en": [
        "Interactive Leaflet & CartoDB maps with dynamic real-time price pin rendering.",
        "Reservation engine with schedule overlap validation and PK-XXXXXX ticket generation.",
        "Admin dashboard for parking owners with occupancy rates, revenue metrics, and Recharts graphs.",
        "Django 5 backend with JWT authentication, role-based access (driver / admin), and 13-test test suite."
      ]
    },
    "architecture": "Cliente SPA (React 19 + Vite + TypeScript) ───[REST API / JWT]───> Backend Django 5 (DRF) ───> PostgreSQL / SQLite Database"
  },
  {
    "id": "vector-ai-studio",
    "title": {
      "es": "VectorAI Studio — Vectorizador de Imágenes con IA & SVG",
      "en": "VectorAI Studio — AI Image to SVG Vectorizer"
    },
    "category": "frontend",
    "categoryLabel": {
      "es": "AI Tools / WebApp",
      "en": "AI Tools / WebApp"
    },
    "shortDesc": {
      "es": "Estudio profesional para convertir mapas de bits a gráficos vectoriales SVG limpios con cuantización K-Means, filtros de contornos y vectorización asistida por IA.",
      "en": "Professional studio to convert raster images into clean, scalable SVG vector graphics with K-Means quantization and AI-assisted vectorization."
    },
    "tags": [
      "React",
      "TypeScript",
      "Vite",
      "Gemini Vision AI",
      "ImageTracerJS",
      "Tailwind CSS",
      "Canvas"
    ],
    "githubUrl": "https://github.com/arsabot/vector-ai-studio",
    "liveUrl": "https://arsabot.github.io/#projects",
    "image": "assets/projects/vector-studio.webp",
    "gallery": [
      "assets/projects/vector-studio.webp"
    ],
    "accentColor": "#f59e0b",
    "icon": "palette",
    "highlights": {
      "es": [
        "Motor de vectorización local con cuantización de color K-Means y curvas Bézier suaves.",
        "Integración con Google Gemini Vision para vectorización semántica asistida por lenguaje natural.",
        "Comparador visual interactivo Split Slider antes/después en tiempo real.",
        "Exportación instantánea a SVG limpio, optimizado y compatible con diseño vectorial profesional."
      ],
      "en": [
        "Local vectorization engine with K-Means color quantization and smooth Bézier curves.",
        "Google Gemini Vision integration for prompt-driven semantic vectorization.",
        "Real-time interactive before/after split slider visual comparator.",
        "Production-ready clean SVG export optimized for vector workflows."
      ]
    },
    "architecture": "Raster Image Ingestion ───[K-Means / Gemini Vision]───> Bézier Curve Tracer ───> Clean SVG DOM Output"
  },
  {
    "id": "forge-champions",
    "title": {
      "es": "Forge Champions — Portal & Mentorship Landing",
      "en": "Forge Champions — Portal & Mentorship Landing"
    },
    "category": "fullstack",
    "categoryLabel": {
      "es": "Enterprise EdTech",
      "en": "Enterprise EdTech"
    },
    "shortDesc": {
      "es": "Plataforma para la Fundación Forge que conecta a ejecutivos de alto nivel con talento joven mediante masterclasses en vivo, mentorías y registro automatizado.",
      "en": "Educational platform for the Forge Foundation connecting corporate leaders with youth talent via live masterclasses, mentorships, and automated registration."
    },
    "tags": [
      "Next.js 15",
      "React 19",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "AWS EC2",
      "PM2"
    ],
    "githubUrl": "https://github.com/arsabot/forge-champions",
    "liveUrl": "https://arsabot.github.io/#projects",
    "image": "assets/projects/forge.webp",
    "gallery": [
      "assets/projects/forge.webp"
    ],
    "accentColor": "#6366f1",
    "icon": "graduation-cap",
    "highlights": {
      "es": [
        "Desarrollado con Next.js 15 App Router y Server Actions para rendimiento y SEO de alta fidelidad.",
        "Capa de datos con Supabase y PostgreSQL configurando Row Level Security (RLS) y esquemas relacionales.",
        "Diseño responsivo optimizado para retención de usuarios y conversión en masterclasses corporativas.",
        "Despliegue y administración continua en AWS EC2 con PM2 para alta disponibilidad."
      ],
      "en": [
        "Developed with Next.js 15 App Router and Server Actions for lightning-fast performance and SEO.",
        "Data layer powered by Supabase PostgreSQL with strict Row Level Security (RLS) policies.",
        "Responsive UI optimized for user engagement and corporate masterclass sign-up conversions.",
        "Continuous production deployment on AWS EC2 instances managed via PM2."
      ]
    },
    "architecture": "Next.js 15 (SSR + App Router) ───[Server Actions & REST]───> Supabase BaaS (PostgreSQL + RLS) ───> AWS EC2 Production Node"
  },
  {
    "id": "informar-app",
    "title": {
      "es": "Informar App — Real-Time Ingestion & Analytics",
      "en": "Informar App — Real-Time Ingestion & Analytics"
    },
    "category": "frontend",
    "categoryLabel": {
      "es": "Data & Analytics",
      "en": "Data & Analytics"
    },
    "shortDesc": {
      "es": "Dashboard de analítica e ingesta continua de datos con renderizado reactivo de alta velocidad, linting estricto y componentes modulares.",
      "en": "Real-time analytics and data ingestion dashboard featuring high-speed reactive UI, strict Oxlint auditing, and modular architecture."
    },
    "tags": [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Oxlint",
      "Real-time Streams"
    ],
    "githubUrl": "https://github.com/arsabot/informar-app",
    "liveUrl": "https://arsabot.github.io/#projects",
    "image": "assets/projects/informar.webp",
    "gallery": [
      "assets/projects/informar.webp"
    ],
    "accentColor": "#10b981",
    "icon": "bar-chart-2",
    "highlights": {
      "es": [
        "Arquitectura de ingesta de datos con procesamiento en tiempo real.",
        "Configuración avanzada de Oxlint para auditoría estricta de código y Type-Aware linting.",
        "Interfaz modular de visualización de métricas con micro-interacciones de alta fluidez.",
        "Optimización de bundle con Vite para carga ultra rápida (< 0.5s)."
      ],
      "en": [
        "Data ingestion pipeline architecture with real-time stream processing.",
        "Advanced Oxlint configuration for strict type-aware linting and code auditing.",
        "Modular metrics dashboard with smooth micro-interactions and high framerates.",
        "Vite bundle optimization achieving ultra-fast initial page loads (< 0.5s)."
      ]
    },
    "architecture": "Pipeline de Ingesta (Streams) ───> State Management ───> Dashboard React UI (Vite + Oxlint)"
  },
  {
    "id": "mac-duo",
    "title": {
      "es": "Mac-Duo — Dynamic Island Fluido para macOS",
      "en": "Mac-Duo — Fluid Dynamic Island for macOS"
    },
    "category": "frontend",
    "categoryLabel": {
      "es": "macOS Utility / UI",
      "en": "macOS Utility / UI"
    },
    "shortDesc": {
      "es": "Utilidad nativa para macOS desarrollada en Swift que traslada la interacción flotante del Dynamic Island de iPhone a pantallas de MacBook con notch, animaciones fluidas y controles de menú.",
      "en": "Native macOS utility written in Swift bringing the iPhone Dynamic Island concept to MacBook notch displays with silky-smooth animations and menu bar controls."
    },
    "tags": [
      "Swift",
      "SwiftUI",
      "AppKit",
      "macOS Sequoia",
      "Core Animation",
      "Native Menu Bar"
    ],
    "githubUrl": "https://github.com/arsabot/Mac-Duo",
    "liveUrl": "https://github.com/arsabot/Mac-Duo",
    "image": "assets/projects/mac-duo.webp",
    "gallery": [
      "assets/projects/mac-duo.webp"
    ],
    "accentColor": "#a855f7",
    "icon": "laptop",
    "highlights": {
      "es": [
        "Integración nativa con macOS AppKit y SwiftUI para renderizado de alta performance a 120Hz ProMotion.",
        "Efecto de muesca dinámica flotante con animaciones elásticas inspiradas en iOS Dynamic Island.",
        "Control de estados en segundo plano mediante icono interactivo en la barra de menú del sistema.",
        "Consumo mínimo de recursos (< 0.5% CPU) sin interferir con ventanas ni aplicaciones en pantalla completa."
      ],
      "en": [
        "Native AppKit and SwiftUI integration engineered for buttery smooth 120Hz ProMotion performance.",
        "Floating notch HUD expanding with spring physics inspired by the iOS Dynamic Island experience.",
        "Menu bar background daemon status controls with quick settings toggles.",
        "Ultra-lightweight footprint (< 0.5% CPU usage) respecting full-screen app spaces and notch boundaries."
      ]
    },
    "architecture": "macOS StatusItem Daemon ───[AppKit / Core Animation]───> Floating Notch Overlay Window ───> 120Hz ProMotion Display"
  }
];

export function initProjects() {
  const container = document.getElementById('projects-grid');
  const filterTabs = document.querySelectorAll('.project-tab');
  const modalOverlay = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-dynamic-content');
  const closeModalBtn = document.getElementById('modal-close-btn');

  if (!container) return;

  let activeFilter = 'all';

  function getLocalized(obj) {
    const lang = getCurrentLang();
    if (typeof obj === 'string') return obj;
    if (!obj) return '';
    return obj[lang] || obj['es'] || '';
  }

  function getLocalizedList(obj) {
    const lang = getCurrentLang();
    if (Array.isArray(obj)) return obj;
    if (!obj) return [];
    return obj[lang] || obj['es'] || [];
  }

  function renderProjects(filter = activeFilter) {
    activeFilter = filter;
    const filtered = filter === 'all' 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    const lang = getCurrentLang();
    const detailsBtnText = lang === 'en' ? 'Architecture Details' : 'Detalles de Arquitectura';
    const viewCodeText = lang === 'en' ? 'View code on GitHub' : 'Ver código en GitHub';
    const viewLiveText = lang === 'en' ? 'View live demo' : 'Ver demo en vivo';

    container.innerHTML = filtered.map(p => {
      const title = getLocalized(p.title);
      const catLabel = getLocalized(p.categoryLabel);
      const shortDesc = getLocalized(p.shortDesc);

      return `
        <article class="project-card fade-in" data-category="${p.category}">
          <div class="project-thumb">
            ${p.image ? `
              <img src="${p.image}" alt="${title}" class="project-thumb-img" width="1600" height="900" loading="lazy" decoding="async" />
              <div class="project-thumb-overlay"></div>
            ` : `
              <div style="position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, ${p.accentColor}28 0%, var(--bg-secondary) 80%); display: flex; align-items: center; justify-content: center;">
                <i data-lucide="${p.icon}" style="width: 56px; height: 56px; color: ${p.accentColor}; opacity: 0.95;"></i>
              </div>
            `}
            <span class="project-category-badge">${catLabel}</span>
          </div>

          <div class="project-body">
            <h3 class="project-title">${title}</h3>
            <p class="project-description">${shortDesc}</p>

            <div class="project-tags">
              ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
            </div>

            <div class="project-footer">
              <button class="btn btn-secondary btn-sm open-details-btn" data-id="${p.id}">
                <i data-lucide="layers" style="width: 16px; height: 16px;"></i>
                ${detailsBtnText}
              </button>
              <div class="project-links">
                <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="${viewCodeText}">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                </a>
                <a href="${p.liveUrl}" class="icon-btn" title="${viewLiveText}">
                  <i data-lucide="external-link" style="width: 18px; height: 18px;"></i>
                </a>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Re-initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Attach click listeners to details buttons
    container.querySelectorAll('.open-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openModal(id);
      });
    });

    // Update Mobile Carousel Dots
    updateCarouselDots(filtered.length);
  }

  function updateCarouselDots(total) {
    const dotsContainer = document.getElementById('proj-carousel-dots');
    if (!dotsContainer) return;
    
    dotsContainer.innerHTML = Array.from({ length: total }, (_, i) => `
      <span class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
    `).join('');

    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.getAttribute('data-index'), 10);
        const cards = container.querySelectorAll('.project-card');
        if (cards[idx]) {
          cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      });
    });
  }

  // Mobile Carousel Horizontal Scroll & Buttons
  const prevBtn = document.getElementById('proj-prev-btn');
  const nextBtn = document.getElementById('proj-next-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const card = container.querySelector('.project-card');
      const scrollAmount = card ? card.offsetWidth + 16 : 300;
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const card = container.querySelector('.project-card');
      const scrollAmount = card ? card.offsetWidth + 16 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  }

  function openModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !modalContent || !modalOverlay) return;

    const lang = getCurrentLang();
    const title = getLocalized(project.title);
    const catLabel = getLocalized(project.categoryLabel);
    const shortDesc = getLocalized(project.shortDesc);
    const highlights = getLocalizedList(project.highlights);

    const stackTitle = lang === 'en' ? 'Tech Stack' : 'Stack Tecnológico';
    const highTitle = lang === 'en' ? 'Key Technical Highlights' : 'Aspectos Técnicos Destacados';
    const diagTitle = lang === 'en' ? 'Architecture Diagram' : 'Diagrama de Arquitectura';
    const repoBtnText = lang === 'en' ? 'View Repository on GitHub' : 'Ver Repositorio en GitHub';
    const consultBtnText = lang === 'en' ? 'Consult via WhatsApp' : 'Consultar por WhatsApp';
    const waText = lang === 'en' 
      ? `Hi Rodrigo, I saw your project ${title} and would like to talk`
      : `Hola Rodrigo, vi tu proyecto ${title} y me gustaría conversar`;

    modalContent.innerHTML = `
      ${project.image ? `
        <div class="modal-project-cover">
          <img id="modal-main-img" src="${project.image}" alt="${title}" width="1600" height="900" decoding="async" />
        </div>
      ` : ''}

      ${project.gallery && project.gallery.length > 1 ? `
        <div class="modal-gallery-row">
          ${project.gallery.map((img, idx) => `
            <div class="modal-gallery-thumb" onclick="document.getElementById('modal-main-img').src='${img}'" title="Ver captura ${idx + 1}">
              <img src="${img}" alt="${title} view ${idx+1}" width="120" height="75" loading="lazy" decoding="async" />
            </div>
          `).join('')}
        </div>
      ` : ''}

      <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
        <span class="section-tag" style="margin-bottom: 0;">${catLabel}</span>
      </div>
      <h2 style="font-size: 1.85rem; margin-bottom: 1rem; color: var(--text-primary);">${title}</h2>
      <p style="font-size: 1.05rem; margin-bottom: 1.5rem; color: var(--text-secondary);">${shortDesc}</p>

      <h4 class="modal-section-title">
        <i data-lucide="cpu" style="width: 20px; height: 20px;"></i>
        ${stackTitle}
      </h4>
      <div class="project-tags" style="margin-bottom: 1.5rem;">
        ${project.tags.map(t => `<span class="project-tag" style="background: rgba(139, 92, 246, 0.15); border-color: rgba(139, 92, 246, 0.4); color: var(--text-primary);">${t}</span>`).join('')}
      </div>

      <h4 class="modal-section-title">
        <i data-lucide="check-circle-2" style="width: 20px; height: 20px;"></i>
        ${highTitle}
      </h4>
      <ul style="list-style: none; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.6rem;">
        ${highlights.map(h => `
          <li style="display: flex; align-items: flex-start; gap: 0.75rem; color: var(--text-secondary); font-size: 0.95rem;">
            <i data-lucide="chevron-right" style="width: 18px; height: 18px; color: var(--accent-primary); flex-shrink: 0; margin-top: 2px;"></i>
            <span>${h}</span>
          </li>
        `).join('')}
      </ul>

      <h4 class="modal-section-title">
        <i data-lucide="git-branch" style="width: 20px; height: 20px;"></i>
        ${diagTitle}
      </h4>
      <div style="background: rgba(0, 0, 0, 0.35); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-primary-light); overflow-x: auto; margin-bottom: 2rem;">
        ${project.architecture}
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 2px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          ${repoBtnText}
        </a>
        <a href="https://wa.me/5491135094661?text=${encodeURIComponent(waText)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#25d366" style="margin-right: 2px;"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.587 1.761.882 2.796.883h.005c3.179 0 5.767-2.587 5.768-5.766.001-3.18-2.585-5.77-5.773-5.77zm3.393 8.163c-.144.405-.837.774-1.17.823-.312.045-.698.077-2.176-.534-1.89-.781-3.099-2.712-3.193-2.838-.095-.126-.763-.984-.763-1.876 0-.891.468-1.328.634-1.508.167-.18.365-.225.487-.225.122 0 .243.002.348.007.112.006.262-.042.41.312.152.365.518 1.264.563 1.355.045.091.076.198.016.32-.061.121-.091.198-.182.304-.091.106-.192.237-.274.318-.091.09-.187.189-.081.371.106.182.473.78 1.012 1.26.694.617 1.279.808 1.461.899.182.091.289.076.395-.046.107-.121.456-.532.578-.715.121-.182.243-.152.409-.091.167.061 1.059.499 1.241.59.182.091.304.137.349.213.045.076.045.441-.099.846zm-3.424-10.335c-4.409 0-7.994 3.585-7.994 7.994 0 1.411.368 2.784 1.066 3.993l-1.134 4.141 4.237-1.111c1.167.636 2.485.971 3.825.971h.005c4.408 0 7.994-3.586 7.994-7.995 0-4.409-3.586-7.993-7.999-7.993zm0 17.5c-1.332 0-2.637-.354-3.777-.999l-.271-.153-2.505.657.669-2.443-.167-.266c-.71-1.129-1.085-2.437-1.085-3.79 0-3.957 3.22-7.176 7.179-7.176 3.957 0 7.176 3.22 7.176 7.177 0 3.957-3.22 7.177-7.176 7.177z"/></svg>
          ${consultBtnText}
        </a>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Filter tabs click
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });

  // Listen for language changes to dynamically update project cards & details
  onLanguageChange(() => {
    renderProjects(activeFilter);
  });

  // Initial render
  renderProjects('all');
}
