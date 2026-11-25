export type MobileAppCategoryIconKey =
  | "smartphone"
  | "cpu"
  | "layers"
  | "pen-tool"
  | "sparkles"
  | "shopping-bag"
  | "briefcase"
  | "server"
  | "rocket"
  | "shield-check";

export interface MobileAppService {
  slug: string;
  title: string;
  shortSummary: string;
  heroSubtitle: string;
  techTerms: string[];
  deliverables: string[];
  turnaround: string;
  stackSpec: string;
  slaOrOutputSpec: string;
}

export interface MobileAppCategory {
  number: string;
  slug: string;
  menuTitle: string;
  fullTitle: string;
  menuDesc: string;
  iconKey: MobileAppCategoryIconKey;
  heroHeadline: string;
  heroAccent: string;
  heroSummary: string;
  techTerms: string[];
  relatedCaseSlugs: string[];
  services: MobileAppService[];
}

export const MOBILE_APP_CATEGORIES: MobileAppCategory[] = [
  {
    number: "01",
    slug: "ios-app-development",
    menuTitle: "iOS App Development",
    fullTitle: "iOS App Development",
    menuDesc: "Native iPhone and iPad apps",
    iconKey: "smartphone",
    heroHeadline: "Native Swift & SwiftUI Apps",
    heroAccent: "Built for Apple Excellence.",
    heroSummary:
      "Bespoke native iPhone and iPad software engineered for US, UK, Canada, Europe, and Australian founders—combining fluid 120Hz ProMotion interaction, strict Apple Human Interface Guidelines, and 100% Git IP transfer.",
    techTerms: [
      "Swift 6 & SwiftUI",
      "120Hz ProMotion Fluid",
      "Face ID & Apple Pay",
      "App Store Guideline Ready",
    ],
    relatedCaseSlugs: [
      "edunuts-academy-mobile-app",
      "alabak-courier-mobile-app",
    ],
    services: [
      {
        slug: "custom-ios-app-development",
        title: "Custom iOS App Development",
        shortSummary:
          "Bespoke native iOS applications architected from zero with clean MVVM/TCA state management and offline resilience.",
        heroSubtitle:
          "Turn product vision into fast, reliable native iOS software with encrypted storage, push workflows, and effortless TestFlight milestones.",
        techTerms: ["Swift 6 Native", "Clean MVVM", "CoreData / SwiftData", "TestFlight CI/CD"],
        deliverables: [
          "End-to-end native Xcode workspace & modular Swift package architecture",
          "Secure Keychain auth, Face ID biometrics & offline sync queue",
          "Automated XCTest coverage & weekly TestFlight internal builds",
          "App Store Connect metadata readiness & 100% Git repository transfer",
        ],
        turnaround: "4–8 Weeks",
        stackSpec: "Swift · SwiftUI · Combine",
        slaOrOutputSpec: "99.9% Crash-Free Rate",
      },
      {
        slug: "iphone-app-development",
        title: "iPhone App Development",
        shortSummary:
          "Thumb-first consumer, SaaS companion, and fintech iPhone experiences engineered with haptic precision.",
        heroSubtitle:
          "Craft daily-habit iPhone apps optimized for Dynamic Island, Lock Screen widgets, Live Activities, and instant cold-start speed.",
        techTerms: ["Dynamic Island Ready", "Thumb-Zone UX", "Haptic Feedback", "Apple Pay Kit"],
        deliverables: [
          "Responsive iPhone layouts across all iOS screen sizes & Dynamic Type",
          "Live Activities, Home Screen WidgetKit & push notification triggers",
          "In-App Purchase / StoreKit 2 & Apple Pay checkout orchestration",
          "App Store screenshots & production IPA submission pipeline",
        ],
        turnaround: "3–6 Weeks",
        stackSpec: "SwiftUI · WidgetKit · StoreKit 2",
        slaOrOutputSpec: "< 400ms Cold Launch",
      },
      {
        slug: "ipad-app-development",
        title: "iPad App Development",
        shortSummary:
          "Multi-column clinical, creative, and executive iPadOS applications with Apple Pencil and split-view mastery.",
        heroSubtitle:
          "Maximize large-canvas productivity with adaptive sidebar navigation, keyboard shortcuts, PencilKit annotation, and multi-window workflows.",
        techTerms: ["Split-View Multitask", "PencilKit Ready", "Stage Manager", "Keyboard Shortcuts"],
        deliverables: [
          "Adaptive iPadOS NavigationSplitView architecture for portrait & landscape",
          "PencilKit markup, PDF annotation, or high-density table views",
          "External keyboard shortcut mapping & drag-and-drop workflows",
          "Enterprise MDM deployment or public App Store release package",
        ],
        turnaround: "4–7 Weeks",
        stackSpec: "SwiftUI · UIKit · PencilKit",
        slaOrOutputSpec: "120Hz ProMotion Fluid",
      },
      {
        slug: "swift-swiftui-development",
        title: "Swift & SwiftUI Development",
        shortSummary:
          "Modern declarative SwiftUI engineering with strict Swift concurrency and seamless UIKit interoperability.",
        heroSubtitle:
          "Ship maintainable Apple apps faster using composable SwiftUI view hierarchies, Async/Await actors, and zero-flicker state binding.",
        techTerms: ["Declarative SwiftUI", "Swift Async/Await", "Observable Macros", "Dark Mode Parity"],
        deliverables: [
          "Composable SwiftUI design system matching Figma tokens 1:1",
          "Thread-safe networking layer using structured Swift concurrency",
          "Accessible VoiceOver labels, Dynamic Type & WCAG contrast audits",
          "Modular Swift Package Manager (SPM) dependency isolation",
        ],
        turnaround: "2–5 Weeks",
        stackSpec: "Swift 6 · SwiftUI · SPM",
        slaOrOutputSpec: "Zero Memory Leaks",
      },
      {
        slug: "ios-app-modernization",
        title: "iOS App Modernization",
        shortSummary:
          "Transform aging Objective-C or legacy storyboard apps into fast, crisp SwiftUI experiences without breaking users.",
        heroSubtitle:
          "Incremental codebase refactoring, UI refresh, crash elimination, and modern iOS API adoption keeping your live App Store rating protected.",
        techTerms: ["UIKit to SwiftUI", "Crash Reduction", "Apple HIG Refresh", "Zero Downtime"],
        deliverables: [
          "Full codebase telemetry, retain-cycle & Instruments profiling audit",
          "Phased extraction of heavy UIViewControllers into clean SwiftUI",
          "Dark Mode, Dynamic Type & modern privacy manifest compliance",
          "Automated regression suite covering critical user journeys",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Swift · Instruments · Xcode",
        slaOrOutputSpec: "-70% Legacy Crash Rate",
      },
      {
        slug: "ios-app-migration",
        title: "iOS App Migration & Upgrades",
        shortSummary:
          "Seamless migrations across iOS SDK versions, Swift 6 concurrency, StoreKit 2 billing, and cloud backends.",
        heroSubtitle:
          "Upgrade deprecated APIs, migrate user credentials cleanly without forced logouts, and stay ahead of Apple SDK submission deadlines.",
        techTerms: ["Xcode 16+ Ready", "StoreKit 2 Migration", "Seamless Token Sync", "Zero Data Loss"],
        deliverables: [
          "Compatibility sweep against latest iOS SDK & Apple Privacy Manifests",
          "Database schema migration (CoreData / Realm -> SwiftData)",
          "Silent keychain & subscription receipt migration verification",
          "Staged Phased Release monitoring in App Store Connect",
        ],
        turnaround: "1–3 Weeks",
        stackSpec: "Swift 6 · StoreKit 2 · Fastlane",
        slaOrOutputSpec: "100% Receipt Continuity",
      },
    ],
  },
  {
    number: "02",
    slug: "android-app-development",
    menuTitle: "Android App Development",
    fullTitle: "Android App Development",
    menuDesc: "Custom Android applications",
    iconKey: "cpu",
    heroHeadline: "High-Performance Kotlin Apps",
    heroAccent: "Across Every Android Device.",
    heroSummary:
      "Production Android applications engineered in strict Kotlin and Jetpack Compose—verified on Pixel, Samsung Galaxy, and enterprise tablets for crisp 60fps performance and smooth Google Play rollouts.",
    techTerms: [
      "Kotlin & Coroutines",
      "Jetpack Compose UI",
      "Material 3 System",
      "Google Play AAB Ready",
    ],
    relatedCaseSlugs: [
      "edunuts-academy-mobile-app",
      "raj-personal-expenses-tracking-app-v2",
    ],
    services: [
      {
        slug: "custom-android-development",
        title: "Custom Android App Development",
        shortSummary:
          "End-to-end native Android software built with clean architecture, offline persistence, and multi-OEM stability.",
        heroSubtitle:
          "Engineer rock-solid Android applications using Hilt dependency injection, Room local caching, and Material 3 visual precision.",
        techTerms: ["Clean Architecture", "Hilt + Room DB", "Background WorkManager", "60fps Scrolling"],
        deliverables: [
          "Modular multi-module Gradle & Kotlin repository setup",
          "BiometricPrompt authentication, Google Pay & encrypted preferences",
          "Offline-first Room database caching & conflict sync handlers",
          "Signed App Bundle (AAB) pipeline with Play Console internal track",
        ],
        turnaround: "4–8 Weeks",
        stackSpec: "Kotlin · Jetpack · Hilt",
        slaOrOutputSpec: "99.9% ANR-Free Score",
      },
      {
        slug: "kotlin-development",
        title: "Kotlin Android Development",
        shortSummary:
          "Type-safe Kotlin engineering leveraging Coroutines, Flow reactive streams, and Ktor/Retrofit networking.",
        heroSubtitle:
          "Eliminate null-pointer crashes and callback hell with idiomatic Kotlin codebases designed for long-term team velocity.",
        techTerms: ["Kotlin Coroutines", "StateFlow Reactive", "Strict Null Safety", "Unit + UI Tests"],
        deliverables: [
          "Strict Kotlin linting (ktlint / detekt) & clean domain layer models",
          "Reactive UDF state pipelines using Kotlin Flow & Coroutines",
          "Automated MockK unit tests + Espresso/Compose UI verification",
          "CI/CD GitHub Actions builds publishing straight to Firebase App Tester",
        ],
        turnaround: "2–5 Weeks",
        stackSpec: "Kotlin · Flow · Retrofit",
        slaOrOutputSpec: "Zero Null Crashes",
      },
      {
        slug: "jetpack-compose-development",
        title: "Jetpack Compose App Development",
        shortSummary:
          "Modern declarative Android UI built in Material 3 with smooth shared-element motion and adaptive theming.",
        heroSubtitle:
          "Build dynamic, silky Material You interfaces in half the UI code—complete with responsive window-size classes and dark mode.",
        techTerms: ["Jetpack Compose", "Material Design 3", "Baseline Profiles", "Adaptive Layouts"],
        deliverables: [
          "Tokenized Material 3 theme (typography, color schemes, elevation)",
          "Custom animated Compose canvas components & micro-interactions",
          "Baseline Profile compilation for lightning-fast startup frames",
          "Interactive Compose Preview suite & TalkBack accessibility audit",
        ],
        turnaround: "2–5 Weeks",
        stackSpec: "Compose · Material 3 · Baseline",
        slaOrOutputSpec: "< 8ms Frame Render",
      },
      {
        slug: "android-tablet-development",
        title: "Android Tablet App Development",
        shortSummary:
          "Large-screen Android tablet & foldable experiences built for hospitality POS, logistics, and clinical teams.",
        heroSubtitle:
          "Tailored WindowSizeClass layouts supporting Samsung DeX, rugged warehouse hardware, barcode peripherals, and stylus input.",
        techTerms: ["Foldable & Tablet UI", "POS / Kiosk Ready", "Offline Queue Sync", "Multi-Pane View"],
        deliverables: [
          "Expanded & Medium WindowSizeClass two-pane master-detail layouts",
          "Hardware scanner, Bluetooth printer, or kiosk lock-task integration",
          "Orientation resilience & resilient multi-window state restoration",
          "Managed Google Play private APK / Enterprise distribution package",
        ],
        turnaround: "4–7 Weeks",
        stackSpec: "Kotlin · Compose · WindowSizeClass",
        slaOrOutputSpec: "Rugged Hardware Ready",
      },
      {
        slug: "android-app-modernization",
        title: "Android App Modernization",
        shortSummary:
          "Modernize legacy Java XML apps into fast Kotlin + Jetpack Compose codebases with improved Android Vitals.",
        heroSubtitle:
          "Boost Google Play store ranking by squashing ANRs, reducing APK size via R8 shrinking, and refreshing dated XML screens.",
        techTerms: ["Java to Kotlin", "XML to Compose", "Play Vitals Boost", "APK Size Shrink"],
        deliverables: [
          "Android Profiler memory/battery audit & ANR root-cause resolution",
          "Incremental XML Fragment-by-Fragment migration into Jetpack Compose",
          "Dependency cleanup, Gradle version catalog & R8/ProGuard tuning",
          "Scoped Storage & modern Android 15 permission compliance fixes",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Kotlin · R8 · Compose Interop",
        slaOrOutputSpec: "-35% Binary Footprint",
      },
      {
        slug: "android-app-migration",
        title: "Android App Migration & Upgrades",
        shortSummary:
          "Safe targetSdk level upgrades, Google Play Billing v7+ migrations, and Play Console policy compliance updates.",
        heroSubtitle:
          "Keep apps compliant and live on Google Play—handling target API 35+, foreground service rules, and Firebase FCM v1 updates cleanly.",
        techTerms: ["Target API 35+ Ready", "Play Billing v7", "FCM HTTP v1", "Zero User Logout"],
        deliverables: [
          "Full targetSdk / compileSdk bump resolving breaking Android 14–15 changes",
          "Play Billing Library v7+ & predictive back gesture implementation",
          "Room DB auto-migration scripts preserving existing local user data",
          "Google Play Data Safety & policy declaration compliance audit",
        ],
        turnaround: "1–3 Weeks",
        stackSpec: "Android SDK 35 · Play Billing · FCM",
        slaOrOutputSpec: "100% Play Compliance",
      },
    ],
  },
  {
    number: "03",
    slug: "cross-platform-development",
    menuTitle: "Cross-Platform Apps",
    fullTitle: "Cross-Platform App Development",
    menuDesc: "Flutter and React Native development",
    iconKey: "layers",
    heroHeadline: "One Unified Codebase Across",
    heroAccent: "iOS & Android.",
    heroSummary:
      "Ship both App Store and Google Play releases simultaneously with native-grade animations, shared TypeScript or Dart business logic, and up to 40% faster product iteration for scaling teams.",
    techTerms: [
      "Flutter & Impeller 60fps",
      "React Native + Expo",
      "Single Repo · 2 Stores",
      "Shared Business Logic",
    ],
    relatedCaseSlugs: [
      "edunuts-academy-mobile-app",
      "alabak-courier-mobile-app",
    ],
    services: [
      {
        slug: "flutter-development",
        title: "Flutter App Development",
        shortSummary:
          "Pixel-consistent Flutter apps using Dart, Riverpod state architecture, and crisp Impeller GPU rendering.",
        heroSubtitle:
          "Deliver custom branded interfaces identically across iOS, Android, and desktop from a single tested Dart codebase.",
        techTerms: ["Flutter 3 + Impeller", "Riverpod State", "Native Platform Channels", "120fps Skia/Metal"],
        deliverables: [
          "Production Flutter mono-architecture with Riverpod / Bloc state management",
          "Platform-adaptive Cupertino & Material navigation patterns",
          "Native Swift/Kotlin method channels for biometrics, cameras & BLE",
          "Dual CI/CD pipelines outputting signed IPA & AAB store artifacts",
        ],
        turnaround: "4–8 Weeks",
        stackSpec: "Flutter · Dart · Riverpod",
        slaOrOutputSpec: "60/120fps Consistent",
      },
      {
        slug: "react-native-development",
        title: "React Native App Development",
        shortSummary:
          "Enterprise React Native & Expo TypeScript apps integrated tightly with your existing React web stack.",
        heroSubtitle:
          "Built with New Architecture (Fabric & TurboModules), Expo EAS cloud builds, Reanimated gestures, and shared monorepo types.",
        techTerms: ["Expo EAS + New Arch", "TypeScript Strict", "Reanimated 3", "OTA Updates Ready"],
        deliverables: [
          "Type-safe React Native / Expo Router codebase sharing validation & DTOs",
          "Native haptic gestures, Reanimated transitions & Stripe Mobile SDK",
          "EAS Submit & EAS Update zero-wait over-the-air JS patch setup",
          "Detox / Maestro automated end-to-end device test flows",
        ],
        turnaround: "4–7 Weeks",
        stackSpec: "React Native · Expo · TypeScript",
        slaOrOutputSpec: "Shared Web+App Types",
      },
      {
        slug: "hybrid-app-development",
        title: "Hybrid Mobile App Development",
        shortSummary:
          "Wrap and extend high-performing Next.js / React web products into mobile apps using Capacitor and native bridges.",
        heroSubtitle:
          "Ideal when speed to market demands reusing rich web workflows while adding camera, push notifications, and biometric vault access.",
        techTerms: ["Capacitor Bridges", "Next.js Web Parity", "Offline Shell Cache", "Push & Biometrics"],
        deliverables: [
          "iOS & Android Capacitor shell around your optimized responsive web app",
          "Native plugins for Face ID, local push alerts, deep links & share sheets",
          "Safe-area viewport & keyboard-avoidance polishing for store quality",
          "App Store & Play Store wrapper review readiness optimization",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Capacitor · Next.js · TypeScript",
        slaOrOutputSpec: "2× Faster Launch",
      },
      {
        slug: "cross-platform-mvp",
        title: "Cross-Platform MVP Development",
        shortSummary:
          "Investor-ready v1 iOS & Android MVPs built at startup velocity in 4–6 weeks without technical debt.",
        heroSubtitle:
          "Validate user retention and close seed or Series A rounds with a clean, scalable cross-platform MVP your future engineers will love.",
        techTerms: ["4–6 Week Launch", "Seed Round Ready", "Analytics Built-In", "Modular Scale"],
        deliverables: [
          "Core value-loop UX flows, auth, onboarding & monetization setup",
          "TestFlight (iOS) + Play Internal Track beta builds for real user cohorts",
          "PostHog / Mixpanel funnel instrumentation from Day 1",
          "Clean technical handover docs & 100% Git repository ownership",
        ],
        turnaround: "4–6 Weeks",
        stackSpec: "Expo / Flutter · Supabase / Stripe",
        slaOrOutputSpec: "Dual-Store Beta Ready",
      },
      {
        slug: "cross-platform-migration",
        title: "Cross-Platform App Migration",
        shortSummary:
          "Unify fragmented iOS + Android silos or sunset Ionic/Cordova apps onto modern Flutter or React Native.",
        heroSubtitle:
          "Cut duplicate engineering costs in half by migrating legacy hybrid or dual-native codebases onto one maintainable TypeScript or Dart stack.",
        techTerms: ["Cordova/Ionic Exit", "2 Teams -> 1 Repo", "Deep-Link Parity", "Zero SEO/Rank Drop"],
        deliverables: [
          "Feature parity inventory across existing iOS & Android production apps",
          "Phased cross-platform rebuild matching existing Bundle IDs & keystores",
          "Seamless auth session preservation for upgrading existing users",
          "App Store & Play Console seamless update rollout (no new app listing)",
        ],
        turnaround: "4–8 Weeks",
        stackSpec: "React Native / Flutter · Fastlane",
        slaOrOutputSpec: "-45% Maintenance Cost",
      },
      {
        slug: "multi-device-development",
        title: "Multi-Device App Development",
        shortSummary:
          "Connected experiences spanning phones, tablets, companion web portals, and wearables with real-time state sync.",
        heroSubtitle:
          "Synchronize live user state effortlessly between iPhone, Android, iPad dashboards, and desktop command consoles.",
        techTerms: ["Phone + Tablet + Web", "Real-Time Cloud Sync", "Adaptive Breakpoints", "Unified Design Kit"],
        deliverables: [
          "Adaptive cross-device layout engine spanning phone to desktop web",
          "WebSocket / Supabase Realtime cross-device session synchronization",
          "Consistent tokenized UI system across native mobile & Next.js web",
          "Cross-platform QA matrix across phones, tablets & browsers",
        ],
        turnaround: "5–9 Weeks",
        stackSpec: "Flutter / RN + Next.js · WebSockets",
        slaOrOutputSpec: "Realtime Device Sync",
      },
    ],
  },
  {
    number: "04",
    slug: "mobile-app-design",
    menuTitle: "Mobile App UI/UX",
    fullTitle: "Mobile App UI/UX Design",
    menuDesc: "Product design, prototypes and user flows",
    iconKey: "pen-tool",
    heroHeadline: "Thumb-First Product Design",
    heroAccent: "That Users Open Daily.",
    heroSummary:
      "Senior mobile interface systems, interactive Figma prototypes, and Apple/Material UX architecture shaped around human ergonomics, clarity under one-handed motion, and measurable activation.",
    techTerms: [
      "Thumb-Zone Ergonomics",
      "Figma Variable Tokens",
      "Apple HIG + Material 3",
      "WCAG AA Legibility",
    ],
    relatedCaseSlugs: [
      "edunuts-academy-mobile-app",
      "alabak-courier-mobile-app",
    ],
    services: [
      {
        slug: "mobile-app-ui-design",
        title: "Mobile App UI Design",
        shortSummary:
          "Tactile, investor-caliber visual interfaces across light & dark modes crafted specifically for OLED screens.",
        heroSubtitle:
          "Stand out on crowded home screens with disciplined typography, crystal-clear visual hierarchy, and signature micro-interactions.",
        techTerms: ["Light & Dark Themes", "OLED Contrast Tune", "8pt Mobile Grid", "Custom Iconography"],
        deliverables: [
          "High-fidelity Figma UI screens across all primary & edge-case flows",
          "Dual Light & Dark theme color variable sets verified for WCAG contrast",
          "Custom vector icons, empty states & onboarding illustrations",
          "Developer handoff specs with Safe Area & Dynamic Type annotations",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Figma · Variables · Dev Mode",
        slaOrOutputSpec: "1:1 Dev Token Parity",
      },
      {
        slug: "mobile-app-ux-design",
        title: "Mobile App UX Design",
        shortSummary:
          "Frictionless onboarding, information architecture, and gesture-driven flows engineered to boost retention.",
        heroSubtitle:
          "Remove user confusion before a single line of code is written—mapping every happy path, error recovery, and permission prompt.",
        techTerms: ["Information Architecture", "Permission UX Flows", "Onboarding Funnels", "Zero Dead-Ends"],
        deliverables: [
          "End-to-end user journey maps, IA trees & screen state matrices",
          "Contextual permission priming sequences (Camera, Push, Location, ATT)",
          "Edge-case designs: offline banners, skeleton loaders, empty/error states",
          "Annotated UX rationale deck for product & engineering teams",
        ],
        turnaround: "1–3 Weeks",
        stackSpec: "Figma · FigJam · UX Matrix",
        slaOrOutputSpec: "+35% Onboarding Finish",
      },
      {
        slug: "app-wireframing-prototyping",
        title: "App Wireframing & Prototyping",
        shortSummary:
          "Interactive clickable Figma prototypes you can test on real phones with users and investors within days.",
        heroSubtitle:
          "De-risk product bets fast—tap through realistic native transitions, sheets, and tab flows on an iPhone before locking build budget.",
        techTerms: ["Clickable Phone Build", "Smart Animate Motion", "Investor Demo Ready", "Rapid Validation"],
        deliverables: [
          "Low-fidelity architectural wireframes validating core screen flow",
          "Interactive Figma mirror prototype testable directly on iOS/Android",
          "Screen-by-screen functional spec & copy placeholders",
          "Fast stakeholder feedback iteration cycles before UI visual lock",
        ],
        turnaround: "5–10 Days",
        stackSpec: "Figma · Smart Animate · FigJam",
        slaOrOutputSpec: "Device-Testable MVP",
      },
      {
        slug: "mobile-design-systems",
        title: "Mobile Design Systems",
        shortSummary:
          "Multi-brand component libraries & token kits scaling cleanly across iOS, Android, Flutter, and React Native.",
        heroSubtitle:
          "Eliminate inconsistent buttons, spacing drift, and slow sprint reviews with an organized Figma component & token foundation.",
        techTerms: ["Atomic Components", "Platform Variants", "JSON Token Export", "Figma Auto-Layout"],
        deliverables: [
          "Modular Auto-Layout component kit (buttons, inputs, sheets, nav bars)",
          "Multi-mode Figma Variables (light/dark, compact/regular, iOS/Android)",
          "Token export JSON aligned with Tailwind / SwiftUI / Compose theme files",
          "Component usage documentation with do/don't rules for internal teams",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Figma · Design Tokens · Storybook",
        slaOrOutputSpec: "2× Faster UI Sprints",
      },
      {
        slug: "mobile-app-redesign",
        title: "Mobile App Redesign",
        shortSummary:
          "Elevate dated apps with modern navigation, calmer density, higher App Store conversion, and modernized patterns.",
        heroSubtitle:
          "Turn low-rated or bloated mobile interfaces into crisp, intuitive modern apps—without alienating power users.",
        techTerms: ["UX Friction Removal", "Modern Navigation", "Visual Elevation", "App Rating Uplift"],
        deliverables: [
          "Heuristic teardown of existing screens, tap depth & drop-off pain points",
          "Redesigned UI library preserving familiar mental models cleanly",
          "Interactive before/after prototype ready for existing user beta testing",
          "Updated App Store promotional screenshot templates matching new UI",
        ],
        turnaround: "2–5 Weeks",
        stackSpec: "Figma · UX Teardown · Dev Mode",
        slaOrOutputSpec: "Clutter Cut by 50%",
      },
      {
        slug: "mobile-usability-testing",
        title: "Usability Testing & UX Audit",
        shortSummary:
          "Actionable heuristic, accessibility, and task-completion audit pinpointing exactly why mobile users drop off.",
        heroSubtitle:
          "Get a senior UX principal review across every tap target, contrast ratio, loading gap, and checkout leak—with concrete Figma fixes.",
        techTerms: ["WCAG Mobile Audit", "Tap Target Check", "Task Completion", "Prioritized Fixes"],
        deliverables: [
          "Screen-by-screen heuristic & WCAG 2.1 AA / AODA compliance report",
          "Tap-target sizing (44pt/48dp), thumb-reach & readability teardown",
          "Annotated quick-win UI fix mockups directly inside Figma",
          "Prioritized Impact vs. Effort engineering roadmap",
        ],
        turnaround: "5–7 Business Days",
        stackSpec: "Figma · Accessibility Kit · Audit",
        slaOrOutputSpec: "Actionable 40-Pt Check",
      },
    ],
  },
  {
    number: "05",
    slug: "ai-mobile-app-development",
    menuTitle: "AI-Powered Mobile Apps",
    fullTitle: "AI-Powered Mobile Apps",
    menuDesc: "AI features and smart automation",
    iconKey: "sparkles",
    heroHeadline: "Intelligent Mobile Products",
    heroAccent: "Powered by Safe AI.",
    heroSummary:
      "Embed streaming LLM assistants, real-time voice workflows, OCR document scanning, and personalized recommendations directly into mobile UX—backed by strict token cost guards and privacy controls.",
    techTerms: [
      "Streaming LLM UX",
      "Real-Time Voice AI",
      "Vision & OCR Scan",
      "Latency & Cost Guarded",
    ],
    relatedCaseSlugs: [
      "boston-lounge-decor-wordpress-website",
      "alabak-courier-mobile-app",
    ],
    services: [
      {
        slug: "ai-chatbot-apps",
        title: "AI Chatbot Mobile Apps",
        shortSummary:
          "Streaming, citation-backed in-app AI chat interfaces with structured UI cards and conversation memory.",
        heroSubtitle:
          "Move beyond plain text bubbles—build responsive streaming chat experiences that trigger real native bookings, filters, and deep links.",
        techTerms: ["SSE Token Streaming", "Structured UI Cards", "RAG Citations", "Offline History"],
        deliverables: [
          "Mobile-native streaming markdown chat UI with optimistic scroll locking",
          "Vector RAG knowledge integration with verifiable source citations",
          "Rich interactive reply widgets (product cards, date pickers, actions)",
          "Rate limiting, prompt guardrails & token usage telemetry backend",
        ],
        turnaround: "3–5 Weeks",
        stackSpec: "OpenAI / Gemini · Next API · RN/Flutter",
        slaOrOutputSpec: "< 600ms First Token",
      },
      {
        slug: "ai-assistant-apps",
        title: "AI Assistant App Development",
        shortSummary:
          "Agentic mobile copilots capable of multi-step task automation, summaries, scheduling, and workflow execution.",
        heroSubtitle:
          "Give customers or field workers a context-aware mobile copilot connected safely via function-calling tools to your backend.",
        techTerms: ["Tool / Function Calls", "Human Approval UI", "Context Memory", "Multi-Step Agents"],
        deliverables: [
          "Tool-calling backend orchestration with deterministic JSON schema outputs",
          "Confirmation & undo UI patterns before executing sensitive user actions",
          "Contextual user profile & preference memory architecture",
          "Observability logging & fallback routing across LLM providers",
        ],
        turnaround: "4–7 Weeks",
        stackSpec: "Gemini / Claude · TypeScript · Zod",
        slaOrOutputSpec: "Safe Tool Execution",
      },
      {
        slug: "ai-voice-apps",
        title: "AI Voice & Speech Apps",
        shortSummary:
          "Hands-free voice command, live transcription, and conversational audio apps using WebRTC and Whisper pipelines.",
        heroSubtitle:
          "Purpose-built for healthcare dictation, field technicians, language tutors, and driving-safe audio assistants with low-latency clarity.",
        techTerms: ["Realtime Audio Stream", "Whisper / STT", "Waveform UI Motion", "Noise Handling"],
        deliverables: [
          "Native microphone capture, audio session routing & crisp live waveform UI",
          "Low-latency speech-to-text transcription + structured summary extraction",
          "Natural text-to-speech playback supporting Bluetooth & background modes",
          "Multilingual language detection & privacy-aware audio storage policy",
        ],
        turnaround: "4–6 Weeks",
        stackSpec: "WebRTC · Whisper · Swift / Kotlin",
        slaOrOutputSpec: "Realtime Audio UX",
      },
      {
        slug: "ai-image-document-apps",
        title: "AI Image & Document Apps",
        shortSummary:
          "Smart camera document capture, receipt OCR parsing, badge scanning, and multimodal vision analysis on-the-go.",
        heroSubtitle:
          "Replace manual phone form typing—snap invoices, IDs, lab reports, or retail products and extract clean structured JSON automatically.",
        techTerms: ["Vision & Multimodal", "Auto Edge Crop", "Structured JSON Parse", "On-Device Pre-Check"],
        deliverables: [
          "Guided camera viewfinder with blur check, glare hint & perspective crop",
          "Multimodal AI extraction pipeline outputting validated database records",
          "Human-review split UI letting users verify & edit scanned fields smoothly",
          "Encrypted temporary image upload lifecycle with GDPR deletion hooks",
        ],
        turnaround: "3–5 Weeks",
        stackSpec: "Vision Kit · Gemini Vision · Zod",
        slaOrOutputSpec: "98%+ Extraction Ease",
      },
      {
        slug: "ai-personalization",
        title: "AI Personalization & Recommendations",
        shortSummary:
          "Smart content ranking, adaptive feed discovery, and predictive basket upsells driven by embeddings & behavior.",
        heroSubtitle:
          "Lift retention and average order value by surfacing the exact right items, lessons, or alerts per mobile user in milliseconds.",
        techTerms: ["Vector Embeddings", "Hybrid Ranking", "Cold-Start Logic", "A/B Attribution"],
        deliverables: [
          "User interaction event collector & pgvector / Pinecone similarity index",
          "Real-time hybrid scoring API (semantic match + recency + margin rules)",
          "Fast mobile carousel & feed UI with smooth shimmer placeholders",
          "A/B holdout metrics dashboard tracking CTR & revenue lift",
        ],
        turnaround: "3–6 Weeks",
        stackSpec: "pgvector · Embeddings · Node/Python",
        slaOrOutputSpec: "+22% Session Engagement",
      },
      {
        slug: "ai-llm-integration",
        title: "AI API & LLM Integration",
        shortSummary:
          "Secure production integration of Gemini, OpenAI, or Claude into your existing iOS, Android, or React Native app.",
        heroSubtitle:
          "Never ship raw API keys inside mobile binaries—we architect secure proxy gateways, prompt versioning, caching, and cost controls.",
        techTerms: ["Zero Exposed Keys", "Response Caching", "Eval Harness Tests", "Cost Caps & Quotas"],
        deliverables: [
          "Edge proxy API holding provider keys securely behind user JWT auth",
          "Prompt template versioning, semantic caching & per-user token budgets",
          "Golden-set evaluation test suite verifying accuracy across updates",
          "Mobile UI integration across your existing iOS/Android/RN screens",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "Vercel Edge / Node · Gemini · OpenAI",
        slaOrOutputSpec: "Zero Client Key Risk",
      },
    ],
  },
  {
    number: "06",
    slug: "ecommerce-on-demand-apps",
    menuTitle: "E-commerce & On-Demand",
    fullTitle: "E-commerce & On-Demand Apps",
    menuDesc: "Shopping, booking and delivery apps",
    iconKey: "shopping-bag",
    heroHeadline: "High-Converting Commerce &",
    heroAccent: "On-Demand Experiences.",
    heroSummary:
      "Fast mobile storefronts, two-sided booking marketplaces, and live dispatch apps featuring 1-tap Apple Pay / Google Pay checkout, real-time map tracking, and tight Shopify or Stripe Connect sync.",
    techTerms: [
      "1-Tap Apple & Google Pay",
      "Live Map Dispatch",
      "Shopify / Stripe Sync",
      "Push Cart Recovery",
    ],
    relatedCaseSlugs: [
      "edunuts-academy-mobile-app",
      "puro-organic-ecommerce-uiux",
    ],
    services: [
      {
        slug: "shopping-app-development",
        title: "Mobile Shopping Apps",
        shortSummary:
          "Bespoke DTC retail apps synced live with Shopify, WooCommerce, or headless commerce backends.",
        heroSubtitle:
          "Capture repeat mobile buyers with lightning-fast lookbooks, instant variant swatches, wishlist persistence, and Apple Pay checkout.",
        techTerms: ["Shopify Storefront API", "Apple / Google Pay", "Instant Search", "Loyalty Drops Push"],
        deliverables: [
          "Editorial PDP, swipeable media gallery, size/color picker & slide cart",
          "Real-time inventory, pricing & customer account sync with your store",
          "Express Apple Pay / Google Pay & saved-card checkout optimization",
          "Automated back-in-stock, order shipped & VIP drop push workflows",
        ],
        turnaround: "4–7 Weeks",
        stackSpec: "RN / Flutter · Shopify API · Stripe",
        slaOrOutputSpec: "2× Repeat Buyer LTV",
      },
      {
        slug: "marketplace-app-development",
        title: "Marketplace App Development",
        shortSummary:
          "Two-sided buyer & vendor mobile marketplaces with escrow payouts, instant search, messaging, and reviews.",
        heroSubtitle:
          "Build trustworthy peer-to-peer or curated vendor marketplaces powered by Stripe Connect onboarding and verified chat.",
        techTerms: ["Buyer + Seller Modes", "Stripe Connect Split", "In-App Chat & Offers", "Trust & Reviews"],
        deliverables: [
          "Dual buyer discovery & vendor listing/order management mobile flows",
          "Stripe Connect Express onboarding, split payouts & multi-currency taxes",
          "Real-time buyer-seller messaging with photo attachments & dispute flags",
          "Admin moderation console to manage listings, commissions & disputes",
        ],
        turnaround: "6–10 Weeks",
        stackSpec: "React Native · Stripe Connect · Next API",
        slaOrOutputSpec: "Automated Split Payouts",
      },
      {
        slug: "food-delivery-apps",
        title: "Food & Delivery Apps",
        shortSummary:
          "Ordering, kitchen ticket dispatch, driver courier tracking, and live ETA map apps built for local scale.",
        heroSubtitle:
          "Coordinate customers, merchants, and couriers reliably with real-time GPS websockets, menu modifiers, and proof-of-delivery capture.",
        techTerms: ["Live Courier Map", "Modifier Cart Rules", "Driver Companion UI", "Proof of Delivery"],
        deliverables: [
          "Customer ordering app with complex addons, scheduling & promo codes",
          "Live courier GPS route updates & automated ETA push milestones",
          "Driver app view: accept/reject offers, turn-by-turn trigger & photo POD",
          "Merchant tablet dashboard syncing menus & live prep status",
        ],
        turnaround: "6–10 Weeks",
        stackSpec: "Flutter / RN · Mapbox · WebSockets",
        slaOrOutputSpec: "Realtime GPS Dispatch",
      },
      {
        slug: "booking-app-development",
        title: "Booking & Appointment Apps",
        shortSummary:
          "Frictionless slot selection, timezone-aware calendars, deposits, and rescheduling apps for services & wellness.",
        heroSubtitle:
          "Cut no-shows dramatically with 3-tap service booking, Apple/Google Calendar sync, upfront Stripe deposits, and automated SMS/push nudges.",
        techTerms: ["Timezone-Safe Slots", "Calendar Two-Way Sync", "No-Show Deposits", "Recurring Rebook"],
        deliverables: [
          "Provider availability explorer, instant slot locking & add-to-calendar",
          "Stripe deposit capture, cancellation windows & automated refunds",
          "Provider companion schedule view with push notifications & notes",
          "SMS + push reminders at 24h / 2h intervals to curb missed slots",
        ],
        turnaround: "4–7 Weeks",
        stackSpec: "RN / Flutter · Stripe · Cal APIs",
        slaOrOutputSpec: "-40% Client No-Shows",
      },
      {
        slug: "subscription-app-development",
        title: "Subscription & Membership Apps",
        shortSummary:
          "Recurring digital memberships, paywalls, StoreKit / Play Billing & RevenueCat subscription infrastructure.",
        heroSubtitle:
          "Maximize MRR with compliant multi-tier paywalls, free-trial winbacks, family sharing, and unified web-to-mobile entitlements.",
        techTerms: ["RevenueCat Unified", "StoreKit 2 + Billing 7", "A/B Paywall UI", "Cross-Platform Sync"],
        deliverables: [
          "High-clarity membership tier comparison & dynamic paywall screens",
          "Cross-platform subscription entitlement engine (iOS + Android + Web)",
          "Grace-period recovery UI, promo codes & subscription management flow",
          "Cohort MRR, trial conversion & churn analytics webhooks",
        ],
        turnaround: "3–5 Weeks",
        stackSpec: "RevenueCat · StoreKit 2 · Stripe",
        slaOrOutputSpec: "Unified Receipt Sync",
      },
      {
        slug: "on-demand-service-apps",
        title: "On-Demand Service Apps",
        shortSummary:
          "Instant matching, dynamic quoting, live job status, and digital wallet apps for home, repair & concierge services.",
        heroSubtitle:
          "Connect verified local specialists with customers on demand—handling smart radius matching, job chat, checklists, and instant tips.",
        techTerms: ["Geofence Matching", "Dynamic Quoting", "Job State Machine", "Verified Specialists"],
        deliverables: [
          "Customer request wizard (photos, address pin, urgency window, quote)",
          "Geo-radius job broadcasting, accept/claim lock & live status stepper",
          "In-app pre/post work photo verification & instant rating/tip flow",
          "Operations dispatcher web console with SLA alert triggers",
        ],
        turnaround: "6–9 Weeks",
        stackSpec: "React Native · PostGIS · Stripe",
        slaOrOutputSpec: "< 60s Job Dispatch",
      },
    ],
  },
  {
    number: "07",
    slug: "enterprise-app-development",
    menuTitle: "Business & Enterprise Apps",
    fullTitle: "Business & Enterprise Apps",
    menuDesc: "CRM, internal tools and workforce apps",
    iconKey: "briefcase",
    heroHeadline: "Resilient Enterprise Mobile",
    heroAccent: "Tools for Modern Teams.",
    heroSummary:
      "Secure internal CRM, field inspection, warehouse barcode, and VIP client portal apps engineered with enterprise SSO (Okta / Entra ID), role permissions, and bulletproof offline-first sync.",
    techTerms: [
      "SSO · Okta / Entra ID",
      "Offline-First Sync",
      "RBAC Data Scoping",
      "MDM / Private Store",
    ],
    relatedCaseSlugs: [
      "raj-personal-expenses-tracking-app-v2",
      "alabak-courier-mobile-app",
    ],
    services: [
      {
        slug: "enterprise-mobile-apps",
        title: "Enterprise Mobile App Development",
        shortSummary:
          "SOC2-conscious custom mobile software integrating corporate identity providers, ERPs, and strict audit logging.",
        heroSubtitle:
          "Empower distributed global organizations with fast native mobile apps aligned to security governance, compliance, and MDM distribution.",
        techTerms: ["OIDC / SAML SSO", "Encrypted Local DB", "Audit Trail Logging", "ABM / Managed Play"],
        deliverables: [
          "SAML/OIDC enterprise SSO (Azure Entra, Okta, Auth0) & session locking",
          "SQLCipher encrypted on-device storage & role-scoped API tokens",
          "Automated security SAST checks & immutable action audit trail",
          "Apple Business Manager / Private Play Store enterprise deployment",
        ],
        turnaround: "6–12 Weeks",
        stackSpec: "Swift / Kotlin / RN · OIDC · Postgres",
        slaOrOutputSpec: "Enterprise SSO Ready",
      },
      {
        slug: "mobile-crm-apps",
        title: "Mobile CRM Applications",
        shortSummary:
          "Field-ready mobile CRM interfaces syncing leads, call notes, pipeline stages, and quotes with HubSpot/Salesforce.",
        heroSubtitle:
          "Stop sales reps from losing deals waiting to get back to a laptop—capture voice notes, scan badges, and advance deals cleanly on mobile.",
        techTerms: ["Bidirectional Sync", "Quick Call Logging", "Offline Account View", "Pipeline Kanban UI"],
        deliverables: [
          "Pocket-friendly deal pipeline, account cards & activity timeline UI",
          "One-tap call/visit logging, voice-to-note summary & business card scan",
          "Bidirectional HubSpot / Salesforce / custom CRM API conflict resolution",
          "Instant follow-up task reminders synced to corporate calendars",
        ],
        turnaround: "4–8 Weeks",
        stackSpec: "RN / Flutter · HubSpot / Salesforce",
        slaOrOutputSpec: "2× Field Rep Adoption",
      },
      {
        slug: "employee-workforce-apps",
        title: "Employee & Workforce Apps",
        shortSummary:
          "Shift scheduling, timecards, leave approvals, internal announcements, and safety checklists in one staff app.",
        heroSubtitle:
          "Replace fragmented WhatsApp threads and spreadsheets with one private company hub for frontline, retail, and hybrid staff.",
        techTerms: ["Shift Swap & Clock-In", "Manager Approvals", "Document Ack Read", "Directory Lookup"],
        deliverables: [
          "Personal shift calendar, geofenced clock-in/out & shift-swap requests",
          "One-tap manager PTO/overtime approvals & team coverage view",
          "Important SOP / compliance bulletin feed with tracked read receipts",
          "HRIS / Payroll webhook integration (BambooHR, Workday, Xero, Gusto)",
        ],
        turnaround: "4–7 Weeks",
        stackSpec: "Flutter / RN · OIDC · REST API",
        slaOrOutputSpec: "Zero Shadow Spreadsheets",
      },
      {
        slug: "inventory-field-service-apps",
        title: "Inventory & Field Service Apps",
        shortSummary:
          "High-speed barcode/QR scanning, offline site inspections, digital signatures, and stock counts in dead zones.",
        heroSubtitle:
          "Built specifically for basements, warehouses, and remote job sites where Wi-Fi drops—queues every scan locally and syncs automatically.",
        techTerms: ["Hardware/Cam Scan", "Zero-Wifi Offline", "Customer E-Signature", "PDF Work Orders"],
        deliverables: [
          "Ultra-fast continuous camera + Zebra/Honeywell hardware barcode scan",
          "Offline work-order packets with timestamped photo & defect checklists",
          "On-glass customer signature capture generating instant PDF work orders",
          "Background exponential retry queue synchronizing to central ERP",
        ],
        turnaround: "5–8 Weeks",
        stackSpec: "Kotlin / RN · SQLite Sync · MLKit",
        slaOrOutputSpec: "100% Offline Capable",
      },
      {
        slug: "client-portal-apps",
        title: "Customer & Client Portal Apps",
        shortSummary:
          "White-labeled VIP client companion apps for viewing project milestones, invoices, tickets, and deliverables.",
        heroSubtitle:
          "Elevate client retention with a dedicated branded app housing live statuses, encrypted document rooms, and 1-tap billing.",
        techTerms: ["White-Label Brand", "Encrypted Vault", "Ticket & Chat Sync", "Invoice One-Tap Pay"],
        deliverables: [
          "Interactive milestone tracker, real-time notifications & status cards",
          "Secure document/contract preview with e-sign approval triggers",
          "Integrated support ticketing, invoice history & Stripe payment flow",
          "Synced companion Next.js admin portal for internal account managers",
        ],
        turnaround: "4–7 Weeks",
        stackSpec: "React Native + Next.js · Stripe",
        slaOrOutputSpec: "+30% Client NPS",
      },
      {
        slug: "business-workflow-apps",
        title: "Internal Business Workflow Apps",
        shortSummary:
          "Custom mobile tools digitizing purchase approvals, fleet inspections, quality assurance, and expense claims.",
        heroSubtitle:
          "Automate slow paper checklists and email bottlenecks with purpose-built mobile workflows connected straight to your database.",
        techTerms: ["Custom Rule Engine", "Receipt / Photo Flow", "Multi-Step Approvals", "Webhook Automations"],
        deliverables: [
          "Dynamic form builder supporting conditionals, photos & GPS stamps",
          "Multi-tier manager sign-off routing with Slack/email escalations",
          "Clean analytics export (CSV/PDF/ERP API) removing manual re-entry",
          "100% source code ownership with clean internal team documentation",
        ],
        turnaround: "3–6 Weeks",
        stackSpec: "Flutter / RN · Node / Postgres",
        slaOrOutputSpec: "-60% Admin Paperwork",
      },
    ],
  },
  {
    number: "08",
    slug: "app-backend-integrations",
    menuTitle: "App Backend & Integrations",
    fullTitle: "App Backend & Integrations",
    menuDesc: "APIs, cloud services and databases",
    iconKey: "server",
    heroHeadline: "Scalable Mobile APIs, Auth",
    heroAccent: "& Real-Time Cloud Sync.",
    heroSummary:
      "Rock-solid REST and GraphQL backends, multi-tenant Postgres databases, passkey & biometric auth, Stripe subscriptions, and high-throughput push notifications built specifically for mobile reliability.",
    techTerms: [
      "REST & GraphQL APIs",
      "Postgres + Firebase",
      "JWT / Passkey Auth",
      "FCM + APNs Push",
    ],
    relatedCaseSlugs: [
      "edunuts-academy-mobile-app",
      "raj-personal-expenses-tracking-app-v2",
    ],
    services: [
      {
        slug: "mobile-app-backend",
        title: "Mobile App Backend Development",
        shortSummary:
          "Production Node.js, TypeScript, or Python mobile backends engineered for low payload sizes and high uptime.",
        heroSubtitle:
          "Architect versioned backends capable of sustaining thousands of concurrent mobile devices cleanly without N+1 database spikes.",
        techTerms: ["Versioned Endpoints", "Rate Limiting + WAF", "PostgreSQL / Prisma", "Automated Tests"],
        deliverables: [
          "Multi-region cloud backend (AWS, GCP, Vercel, or Railway) via IaC",
          "PostgreSQL schema design, connection pooling & automated backups",
          "Versioned mobile API contracts protecting older app builds safely",
          "Structured OpenTelemetry logs, health probes & uptime alerting",
        ],
        turnaround: "3–6 Weeks",
        stackSpec: "Node/TS · PostgreSQL · Prisma/Drizzle",
        slaOrOutputSpec: "99.95% API Uptime",
      },
      {
        slug: "mobile-api-development",
        title: "REST & GraphQL API Development",
        shortSummary:
          "Lean OpenAPI REST and typed GraphQL layers designed to cut mobile battery drain and cellular data bloat.",
        heroSubtitle:
          "Cursor-based pagination, delta synchronization, and strict Zod/GraphQL codegen keeping frontend & backend types locked.",
        techTerms: ["OpenAPI / Swagger", "Typed GraphQL / tRPC", "Delta Sync Cursors", "ETag Caching"],
        deliverables: [
          "Typed API contract generation directly consumed by Swift/Kotlin/TS",
          "Mobile-optimized cursor pagination, response compression & ETags",
          "Idempotent write keys preventing duplicate orders on spotty 4G",
          "Automated Vitest/Supertest API integration coverage suite",
        ],
        turnaround: "2–4 Weeks",
        stackSpec: "TypeScript · OpenAPI / GraphQL · Redis",
        slaOrOutputSpec: "< 80ms P95 Latency",
      },
      {
        slug: "firebase-cloud-integration",
        title: "Firebase & Cloud Integration",
        shortSummary:
          "Clean Firebase, Supabase, or AWS Amplify implementations with ironclad security rules and cloud triggers.",
        heroSubtitle:
          "Move quickly using managed BaaS infrastructure without falling into open Firestore rule leaks or runaway read/write bills.",
        techTerms: ["Firestore / Supabase", "Strict RLS Rules", "Cloud Functions", "S3 / GCS Media CDN"],
        deliverables: [
          "Locked-down Firestore Security Rules or Postgres RLS policy tests",
          "Event-driven Cloud Functions for emails, thumbnails & webhooks",
          "Signed direct-to-bucket S3/GCS media uploads avoiding API bottlenecks",
          "Cost-alert guardrails preventing viral read/egress billing shocks",
        ],
        turnaround: "1–3 Weeks",
        stackSpec: "Firebase / Supabase · AWS S3 · Cloud Run",
        slaOrOutputSpec: "Verified RLS Security",
      },
      {
        slug: "mobile-authentication",
        title: "Authentication & User Management",
        shortSummary:
          "Passkeys, Sign in with Apple/Google, OTP SMS, OAuth refresh rotation, and role-based session security.",
        heroSubtitle:
          "Seamless user login built cleanly for Apple Review compliance (Sign in with Apple mandatory check + in-app account deletion).",
        techTerms: ["Sign in with Apple", "Passkeys + Biometrics", "OTP / Magic Link", "In-App Delete Flow"],
        deliverables: [
          "Sign in with Apple, Google OAuth, phone OTP & email passkey flows",
          "Secure refresh token rotation in hardware Keychain / Keystore",
          "Multi-device session revocation & Apple-compliant account deletion",
          "Workspace / team invites with granular RBAC claims",
        ],
        turnaround: "1–2 Weeks",
        stackSpec: "Auth0 / Clerk / Supabase · JWT",
        slaOrOutputSpec: "Apple Compliance 100%",
      },
      {
        slug: "mobile-payment-integration",
        title: "Payment & Subscription Integration",
        shortSummary:
          "Stripe PaymentSheet, Apple Pay, Google Pay, RevenueCat IAP, and multi-currency tax/webhook resilience.",
        heroSubtitle:
          "Collect payments reliably across USD, GBP, EUR, CAD, and AUD with webhook deduplication, 3DS2 compliance, and instant receipts.",
        techTerms: ["Stripe + Apple/GPay", "SCA / 3DS2 Ready", "Idempotent Webhooks", "Multi-Currency FX"],
        deliverables: [
          "Native Stripe PaymentSheet (cards, Apple Pay, Google Pay, SEPA/ACH)",
          "StoreKit 2 / Play Billing + RevenueCat integration for digital goods",
          "Verified webhook processor syncing invoices, refunds & disputes cleanly",
          "PCI-friendly zero card storage architecture & receipt notifications",
        ],
        turnaround: "1–3 Weeks",
        stackSpec: "Stripe SDK · RevenueCat · Apple Pay",
        slaOrOutputSpec: "Zero Missed Webhooks",
      },
      {
        slug: "push-realtime-integration",
        title: "Push Notifications & Real-Time Features",
        shortSummary:
          "Rich APNs + FCM notifications, live WebSocket chats, presence indicators, and deep-link alert routing.",
        heroSubtitle:
          "Re-engage users accurately without spamming—orchestrate targeted push channels, quiet hours, badge counts, and live chat sockets.",
        techTerms: ["APNs + FCM v1", "Deep-Link Routing", "WebSocket Presence", "Delivery Analytics"],
        deliverables: [
          "Device token lifecycle management handling multi-device & logout cleanly",
          "Rich push notifications with images, action buttons & screen deep links",
          "Real-time WebSocket chat, typing indicators & unread sync badges",
          "User notification preference matrix (transactional vs. marketing)",
        ],
        turnaround: "1–2 Weeks",
        stackSpec: "FCM v1 · APNs · Socket.io / Ably",
        slaOrOutputSpec: "99%+ Push Delivery",
      },
    ],
  },
  {
    number: "09",
    slug: "app-launch-optimization",
    menuTitle: "App Launch & Optimization",
    fullTitle: "App Testing, Launch & Optimization",
    menuDesc: "Testing, deployment and ASO",
    iconKey: "rocket",
    heroHeadline: "Stress-Tested Releases &",
    heroAccent: "First-Pass Store Approvals.",
    heroSummary:
      "End-to-end automated QA, App Store & Google Play compliance packaging, organic App Store Optimization (ASO), frame-rate profiling, and clean Crashlytics/PostHog telemetry before and after launch.",
    techTerms: [
      "E2E Device Matrix QA",
      "App Store Submission",
      "Play Store Release",
      "ASO & Crash Telemetry",
    ],
    relatedCaseSlugs: [
      "edunuts-academy-mobile-app",
      "boston-lounge-decor-wordpress-website",
    ],
    services: [
      {
        slug: "mobile-app-testing",
        title: "Mobile App QA & Testing",
        shortSummary:
          "Comprehensive real-device regression testing, network throttling QA, and automated Maestro/Detox pipelines.",
        heroSubtitle:
          "Catch edge-case crashes across notch sizes, low memory, weak 3G connections, and OS dark-mode toggles before real users do.",
        techTerms: ["Real Device Matrix", "E2E Maestro / Detox", "Network & Low Memory", "Security Checklist"],
        deliverables: [
          "Executed QA test plan across target iPhone, iPad, Pixel & Samsung models",
          "Automated E2E UI smoke suite covering signup, checkout & core paths",
          "Offline transition, rotated screen & deep-link regression sweep",
          "Prioritized Jira/Linear bug triage & verification re-testing",
        ],
        turnaround: "1–2 Weeks",
        stackSpec: "Maestro · Detox · XCTest · BrowserStack",
        slaOrOutputSpec: "Zero Blocker Defects",
      },
      {
        slug: "app-store-submission",
        title: "App Store Submission Support",
        shortSummary:
          "End-to-end Apple App Store Connect setup, privacy labels, guideline rejection resolution, and Fastlane automation.",
        heroSubtitle:
          "Avoid painful 4.2, 2.1, or payment-rule Apple rejections—we prepare reviewer demo accounts, videos, manifests, and responses cleanly.",
        techTerms: ["Apple Guideline 2–5", "Privacy Nutrition Tags", "Reviewer Demo Kit", "Fastlane Upload"],
        deliverables: [
          "App Store Connect provisioning, certificates, capabilities & Privacy Labels",
          "Apple App Tracking Transparency (ATT) & in-app delete compliance check",
          "Reviewer test credentials, screencast demo & guideline appeal responses",
          "7-day Phased Release rollout strategy with instant pause/expedite plan",
        ],
        turnaround: "3–5 Business Days",
        stackSpec: "App Store Connect · Fastlane · TestFlight",
        slaOrOutputSpec: "First-Pass Store Focus",
      },
      {
        slug: "google-play-publishing",
        title: "Google Play Publishing Support",
        shortSummary:
          "Complete Google Play Console setup, 20-tester closed track verification, Data Safety forms, and staged rollouts.",
        heroSubtitle:
          "Navigate Play Console policy declarations, Play App Signing keys, financial/health declarations, and staged 5%–100% rollouts cleanly.",
        techTerms: ["Play Signing Keys", "Data Safety Form", "Closed Testing Track", "Android Vitals Watch"],
        deliverables: [
          "Google Play Console app setup, keystore backup & Play App Signing",
          "Accurate Data Safety, Advertising ID, and sensitive permission forms",
          "Closed testing track coordination, store graphics & Pre-launch report fix",
          "Controlled staged production rollout (10% -> 50% -> 100%) monitoring",
        ],
        turnaround: "3–5 Business Days",
        stackSpec: "Play Console · AAB · Fastlane Supply",
        slaOrOutputSpec: "Zero Policy Suspensions",
      },
      {
        slug: "app-store-optimization",
        title: "App Store Optimization (ASO)",
        shortSummary:
          "Keyword-indexed titles, high-converting store screenshot suites, promo banners, and rating prompt funnels.",
        heroSubtitle:
          "Turn organic App Store & Play Store impressions into installs with conversion-tested visual storytelling and clean keyword targeting.",
        techTerms: ["Keyword Rank Audit", "Custom Store Visuals", "A/B Icon & Screens", "Prompt Timing UX"],
        deliverables: [
          "US/UK/CA/AU/EU keyword research mapping Title, Subtitle & Keyword field",
          "Custom studio-designed iPhone/iPad/Android Store screenshot sequences",
          "In-app SKStoreReviewController trigger logic after positive user wins",
          "Store listing localization structure & conversion-rate benchmarks",
        ],
        turnaround: "1–2 Weeks",
        stackSpec: "Figma Store Kit · AppTweak / Store Connect",
        slaOrOutputSpec: "+30% Store Page CVR",
      },
      {
        slug: "app-performance-optimization",
        title: "App Performance Optimization",
        shortSummary:
          "Eliminate jank, slash cold startup times, fix memory bloat, and tune battery efficiency across devices.",
        heroSubtitle:
          "Deep flamegraph profiling across Xcode Instruments, Android Studio Profiler, and React Native DevTools for effortless 60fps smoothness.",
        techTerms: ["Cold Start < 1s", "60/120fps List Scroll", "Memory Leak Hunt", "Bundle Shrink"],
        deliverables: [
          "Full frame-drop, main-thread blocking & cold-start trace audit",
          "Image decoding, list virtualization (FlashList / LazyColumn) & cache tuning",
          "JS/native bridge reduction & binary / asset compression optimization",
          "Before-and-after benchmark report verifying measurable FPS & startup gain",
        ],
        turnaround: "1–2 Weeks",
        stackSpec: "Instruments · Android Profiler · Flashlight",
        slaOrOutputSpec: "40% Faster App Launch",
      },
      {
        slug: "app-analytics-monitoring",
        title: "Mobile App Analytics & Crash Monitoring",
        shortSummary:
          "Privacy-respecting funnel telemetry, symbolicated crash reporting, and real-time alert pipelines post-launch.",
        heroSubtitle:
          "Know immediately when a checkout drops or an iOS update spikes a crash—without violating GDPR/ATT or slowing down launch frames.",
        techTerms: ["Sentry / Crashlytics", "PostHog / Mixpanel", "Source Maps & dSYM", "Slack Crash Alerts"],
        deliverables: [
          "Automated dSYM & ProGuard/source-map upload in CI for crisp stack traces",
          "Typed analytics event schema tracking activation, retention & revenue",
          "Consent-gated GDPR/CCPA telemetry wiring & PII scrubbing filters",
          "Real-time Slack/email alerting on crash-free session threshold dips",
        ],
        turnaround: "4–7 Days",
        stackSpec: "Sentry · Crashlytics · PostHog",
        slaOrOutputSpec: "100% Symbolicated Logs",
      },
    ],
  },
  {
    number: "10",
    slug: "app-maintenance",
    menuTitle: "App Maintenance & Support",
    fullTitle: "App Maintenance & Support",
    menuDesc: "Updates, security and ongoing care",
    iconKey: "shield-check",
    heroHeadline: "Always-On App Reliability,",
    heroAccent: "Updates & Senior Support.",
    heroSummary:
      "Protect live revenue and App Store ratings year-round with proactive OS version compatibility, rapid hotfixes, dependency security patching, and dedicated ongoing feature iteration.",
    techTerms: [
      "99.9%+ Crash-Free SLA",
      "iOS & Android OS Ready",
      "Zero-Surprise Patching",
      "Direct Senior Unit",
    ],
    relatedCaseSlugs: [
      "edunuts-academy-mobile-app",
      "alabak-courier-mobile-app",
    ],
    services: [
      {
        slug: "monthly-app-maintenance",
        title: "Monthly App Maintenance",
        shortSummary:
          "Predictable monthly care covering crash triage, SDK updates, backend monitoring, and minor UI refinements.",
        heroSubtitle:
          "Keep both your iOS and Android production apps healthy every month without paying full-time salaried headcount overhead.",
        techTerms: ["Monthly Care SLA", "Crash & ANR Triage", "Store Health Checks", "Minor Feature Hours"],
        deliverables: [
          "Weekly Sentry / Crashlytics / Play Vitals inspection & hotfix patching",
          "Dependency, SSL certificate & webhook health verification",
          "Reserved flexible engineering hours for minor copy & UI updates",
          "Monthly plain-English stability & performance report",
        ],
        turnaround: "Ongoing Retainer",
        stackSpec: "iOS · Android · RN / Flutter · CI",
        slaOrOutputSpec: "99.9%+ Uptime Target",
      },
      {
        slug: "os-compatibility-updates",
        title: "iOS & Android Version Updates",
        shortSummary:
          "Annual iOS and Android flagship OS upgrades tested in beta so new hardware & OS launches never break users.",
        heroSubtitle:
          "Stay compliant well ahead of Apple & Google annual SDK deadlines—fixing dark mode, permission, and layout shifts proactively.",
        techTerms: ["Annual iOS/Android", "Target SDK Compliance", "Beta Hardware QA", "Edge-to-Edge UI"],
        deliverables: [
          "Beta OS testing ahead of public September/October iOS & Android waves",
          "Xcode & Android Gradle/AGP SDK bumps resolving deprecated APIs",
          "Safe-area, notification channel & edge-to-edge layout adjustments",
          "Pre-deadline store release updates protecting discoverability",
        ],
        turnaround: "1–2 Weeks",
        stackSpec: "Xcode · Android Studio · Fastlane",
        slaOrOutputSpec: "Zero OS Breakage",
      },
      {
        slug: "app-bug-fixes",
        title: "App Bug Fixes & Troubleshooting",
        shortSummary:
          "Rapid root-cause investigation and permanent fixes for tough race conditions, UI glitches, or payment errors.",
        heroSubtitle:
          "Jump straight to senior problem-solving when critical bugs stall your release or hurt App Store ratings—with regression tests added.",
        techTerms: ["48h Triage Sprint", "Root-Cause Patch", "Regression Guard", "Live Release Verification"],
        deliverables: [
          "Reproducible bug isolation across devices, OS builds & network states",
          "Clean permanent fix (not fragile workarounds) reviewed against side effects",
          "Automated unit/UI regression test verifying bug cannot reappear",
          "Expedited App Store & Play Store hotfix build release",
        ],
        turnaround: "2–5 Business Days",
        stackSpec: "Swift · Kotlin · RN · Flutter",
        slaOrOutputSpec: "Verified Permanent Fix",
      },
      {
        slug: "app-security-updates",
        title: "App Security & Dependency Updates",
        shortSummary:
          "Proactive CVE patching, SDK vulnerability cleanups, certificate pinning, and OWASP MASVS hardening.",
        heroSubtitle:
          "Pass enterprise procurement questionnaires and protect sensitive fintech/healthcare user tokens against mobile attack vectors.",
        techTerms: ["OWASP MASVS L1/L2", "CVE Dependency Sweep", "SSL / Secret Audit", "Encrypted Storage"],
        deliverables: [
          "Audit for hardcoded secrets, insecure storage & exposed debug endpoints",
          "Clean npm / CocoaPods / Gradle / pub.dev security dependency upgrades",
          "SSL certificate pinning, jailbreak/root hints & obfuscation hardening",
          "Security posture summary sheet ready for enterprise compliance reviews",
        ],
        turnaround: "1–2 Weeks",
        stackSpec: "OWASP MASVS · SAST · ProGuard/R8",
        slaOrOutputSpec: "Zero Critical CVEs",
      },
      {
        slug: "app-feature-enhancements",
        title: "App Feature Enhancements",
        shortSummary:
          "Add new product modules, redesigned onboarding, widgets, AI tools, or payment tiers cleanly to live apps.",
        heroSubtitle:
          "Ship ambitious roadmap features smoothly on top of your existing mobile codebase without slowing down or rewriting from scratch.",
        techTerms: ["Roadmap Sprints", "Feature Flag Rollout", "UI + API End-to-End", "Zero Regressions"],
        deliverables: [
          "Scoped UX design + clean native/cross-platform module implementation",
          "Backend API & database schema extensions with backward compatibility",
          "Feature-flagged gradual rollout ready for A/B validation",
          "Updated automated test suite & staged store release",
        ],
        turnaround: "1–3 Weeks / Module",
        stackSpec: "Full-Stack Mobile · Feature Flags",
        slaOrOutputSpec: "Ship Weekly Milestones",
      },
      {
        slug: "dedicated-app-support",
        title: "Dedicated Mobile Development Support",
        shortSummary:
          "Direct Slack/Linear access to our 3 senior principals acting as your on-call mobile engineering & UX unit.",
        heroSubtitle:
          "Replace fragmented freelancer coordination with Asif, Talib, and Azma handling design, code, backend, and releases together.",
        techTerms: ["Principal-Only Team", "12h SLA Overlap", "Design + Code Unified", "100% Client IP"],
        deliverables: [
          "Dedicated Slack channel + Linear sprint board with same-day response",
          "Unified UX design, iOS/Android/RN code & backend API execution",
          "Automated TestFlight / Play Internal weekly sprint releases",
          "Full source code control inside your GitHub/GitLab organization",
        ],
        turnaround: "Weekly / Monthly / Yearly",
        stackSpec: "iOS · Android · RN · Flutter · Node",
        slaOrOutputSpec: "100% Direct Principals",
      },
    ],
  },
];

export const TOTAL_MOBILE_APP_CATEGORIES = MOBILE_APP_CATEGORIES.length;
export const TOTAL_MOBILE_APP_SERVICES = MOBILE_APP_CATEGORIES.reduce(
  (sum, c) => sum + c.services.length,
  0
);

export function getMobileAppCategoryBySlug(
  slug: string
): MobileAppCategory | undefined {
  return MOBILE_APP_CATEGORIES.find((c) => c.slug === slug);
}

export function getMobileAppServiceBySlugs(
  categorySlug: string,
  serviceSlug: string
): { category: MobileAppCategory; service: MobileAppService } | undefined {
  const category = getMobileAppCategoryBySlug(categorySlug);
  if (!category) return undefined;
  const service = category.services.find((s) => s.slug === serviceSlug);
  if (!service) return undefined;
  return { category, service };
}

export function getAllMobileAppServiceParams(): {
  category: string;
  service: string;
}[] {
  return MOBILE_APP_CATEGORIES.flatMap((cat) =>
    cat.services.map((srv) => ({
      category: cat.slug,
      service: srv.slug,
    }))
  );
}
